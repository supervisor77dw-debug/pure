import { NextResponse } from 'next/server';
import { isProjectRequestPayload, validateProjectRequest } from '@/lib/project-request';
import { getProjectRequestDeliveryProvider } from '@/lib/project-request-delivery';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!isProjectRequestPayload(body)) return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  if (body.website?.trim()) return NextResponse.json({ ok: true });
  const errors = validateProjectRequest(body);
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });
  const provider = getProjectRequestDeliveryProvider();
  if (!provider) {
    return NextResponse.json({ error: 'No project request delivery endpoint is configured.' }, { status: 503 });
  }
  try {
    await provider.send(body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Project request delivery failed.' }, { status: 502 });
  }
}

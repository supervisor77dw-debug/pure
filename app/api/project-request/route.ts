import { NextResponse } from 'next/server';
import { validateProjectRequest } from '@/lib/project-request';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== 'object') return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  if (typeof body.website === 'string' && body.website.trim()) return NextResponse.json({ ok: true });
  const errors = validateProjectRequest(body);
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });
  if (!process.env.PROJECT_REQUEST_ENDPOINT) {
    return NextResponse.json({ error: 'No project request delivery endpoint is configured.' }, { status: 503 });
  }
  return NextResponse.json({ error: 'Project request delivery is not implemented for the configured endpoint.' }, { status: 501 });
}

import { NextRequest, NextResponse } from 'next/server';
import { isLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const segment = pathname.split('/')[1];
  const locale = isLocale(segment) ? segment : pathname === '/pure-liquid-heat' ? 'en' : 'de';
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pure-locale', locale);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};

'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { isLocale, ui } from '@/lib/i18n';

export function LocaleShell() {
  const pathname = usePathname() || '/';
  const segment = pathname.split('/')[1];
  const locale = isLocale(segment) ? segment : 'de';

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <a className="skip-link" href="#main-content">{ui[locale].skip}</a>;
}

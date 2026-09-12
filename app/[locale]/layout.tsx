import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { isLocale, localizedCounterpart, type Locale } from '@/lib/i18n';
import { assetSrc } from '@/lib/assets';
import { getRouteSeo } from '@/lib/seo';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'de';
  const pathname = headers().get('x-pure-pathname') || `/${locale}`;
  const counterpart = localizedCounterpart(locale, pathname);
  const germanPath = locale === 'de' ? pathname : counterpart;
  const englishPath = locale === 'en' ? pathname : counterpart;
  const seo = getRouteSeo(pathname, locale);
  const image = seo.image ? assetSrc(seo.image) : undefined;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: pathname,
      languages: { de: germanPath, en: englishPath, 'x-default': germanPath }
    },
    openGraph: { title: seo.title, description: seo.description, locale: locale === 'de' ? 'de_DE' : 'en_GB', type: 'website', images: image ? [{ url: image }] : undefined },
    twitter: { card: 'summary_large_image', title: seo.title, description: seo.description, images: image ? [image] : undefined }
  };
}

export function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'en' }];
}

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}

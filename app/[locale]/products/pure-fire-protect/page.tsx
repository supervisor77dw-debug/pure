import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PureFireProtectPage from '@/app/pure-fire-protect/page';
export const metadata: Metadata = { title: 'PURE Fire Protect | Functional Fire Protection | PURE' };
export default function EnglishFireProtectPage({ params }: { params: { locale: string } }) { if (params.locale !== 'en') notFound(); return <PureFireProtectPage />; }

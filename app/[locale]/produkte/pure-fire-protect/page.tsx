import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PureFireProtectPage from '@/app/pure-fire-protect/page';
export const metadata: Metadata = { title: 'PURE Fire Protect | Funktionaler Brandschutz | PURE' };
export default function GermanFireProtectPage({ params }: { params: { locale: string } }) { if (params.locale !== 'de') notFound(); return <PureFireProtectPage />; }

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PureFloorProtectPage from '@/app/pure-floor-protect/page';
export const metadata: Metadata = { title: 'PURE Floor Protect | Floor Protection & Abrasion Resistance | PURE' };
export default function EnglishFloorProtectPage({ params }: { params: { locale: string } }) { if (params.locale !== 'en') notFound(); return <PureFloorProtectPage />; }

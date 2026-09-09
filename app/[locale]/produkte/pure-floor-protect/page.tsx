import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PureFloorProtectPage from '@/app/pure-floor-protect/page';
export const metadata: Metadata = { title: 'PURE Floor Protect | Bodenschutz & Abriebfestigkeit | PURE' };
export default function GermanFloorProtectPage({ params }: { params: { locale: string } }) { if (params.locale !== 'de') notFound(); return <PureFloorProtectPage />; }

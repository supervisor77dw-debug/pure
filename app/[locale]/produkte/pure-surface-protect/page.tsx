import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PureSurfaceProtectPage from '@/app/pure-surface-protect/page';

export const metadata: Metadata = { title: 'PURE Surface Protect | Transparenter Oberflächenschutz | PURE' };

export default function GermanSurfaceProtectPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de') notFound();
  return <PureSurfaceProtectPage />;
}

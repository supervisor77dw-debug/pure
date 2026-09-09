import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PureSurfaceProtectPage from '@/app/pure-surface-protect/page';

export const metadata: Metadata = { title: 'PURE Surface Protect | Transparent Surface Protection | PURE' };

export default function EnglishSurfaceProtectPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'en') notFound();
  return <PureSurfaceProtectPage />;
}

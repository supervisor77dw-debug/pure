import { notFound } from 'next/navigation';
import { ProjectRequestPage } from '@/components/ProjectRequestPage';

export default function EnglishProjectRequestPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'en') notFound();
  return <ProjectRequestPage locale="en" />;
}

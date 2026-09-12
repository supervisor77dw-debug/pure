import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

export function LocalePending({ title = 'PURE Technology Platform', locale = 'en' }: { title?: string; locale?: Locale }) {
  const english = locale === 'en';
  return (
    <section className="section">
      <div className="container">
        <div className="final-cta">
          <span className="section-heading__eyebrow">{english ? 'TRANSLATION IN REVIEW' : 'INHALT IN PRÜFUNG'}</span>
          <h1>{title}</h1>
          <p>{english ? 'The English version of this page is under technical review and is not published yet.' : 'Die deutsche Fassung dieser Seite wird fachlich geprüft und ist noch nicht veröffentlicht.'}</p>
          <Link className="btn btn--primary" href={english ? '/en' : '/de'}>{english ? 'Back to the English platform' : 'Zur deutschen Plattform'}</Link>
        </div>
      </div>
    </section>
  );
}

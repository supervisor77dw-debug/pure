import type { DocumentRecord, OrganizationRecord } from '@/lib/data';
import type { Locale } from '@/lib/i18n';

export interface DocumentCardProps {
  document: DocumentRecord;
  organization?: OrganizationRecord;
  locale?: Locale;
}

// Public and protected documents are kept technically separate: without a public_path
// this card never renders a download link, only a locked status note.
export function DocumentCard({ document, organization, locale = 'de' }: DocumentCardProps) {
  const hasPublicFile = Boolean(document.file?.public_path);
  const english = locale === 'en';
  return (
    <div className="document-card">
      <span className="document-card__title">{document.title[locale]}</span>
      <span className="document-card__meta">
        {organization ? `${organization.name}${organization.unit ? ` · ${organization.unit}` : ''} · ` : ''}
        {document.report_number ? `${english ? 'Report' : 'Bericht'} ${document.report_number} · ` : ''}
        {document.date}
      </span>
      {hasPublicFile ? (
        <a href={document.file!.public_path as string}>{english ? 'Open document' : 'Dokument öffnen'}</a>
      ) : (
        <span className="document-card__lock">
          🔒 {english ? 'Not publicly available' : 'Nicht öffentlich verfügbar'}{document.file?.note_de ? ` — ${document.file.note_de}` : ''}
        </span>
      )}
    </div>
  );
}

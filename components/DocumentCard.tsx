import type { DocumentRecord, OrganizationRecord } from '@/lib/data';

export interface DocumentCardProps {
  document: DocumentRecord;
  organization?: OrganizationRecord;
}

// Public and protected documents are kept technically separate: without a public_path
// this card never renders a download link, only a locked status note.
export function DocumentCard({ document, organization }: DocumentCardProps) {
  const hasPublicFile = Boolean(document.file?.public_path);
  return (
    <div className="document-card">
      <span className="document-card__title">{document.title.de}</span>
      <span className="document-card__meta">
        {organization ? `${organization.name}${organization.unit ? ` · ${organization.unit}` : ''} · ` : ''}
        {document.report_number ? `Bericht ${document.report_number} · ` : ''}
        {document.date}
      </span>
      {hasPublicFile ? (
        <a href={document.file!.public_path as string}>Dokument öffnen</a>
      ) : (
        <span className="document-card__lock">
          🔒 Nicht öffentlich verfügbar{document.file?.note_de ? ` — ${document.file.note_de}` : ''}
        </span>
      )}
    </div>
  );
}

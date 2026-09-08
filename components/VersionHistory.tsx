export interface VersionHistoryEntry {
  date: string;
  text: string;
}

export function VersionHistory({ entries }: { entries: VersionHistoryEntry[] }) {
  if (entries.length === 0) return null;
  return (
    <ul className="version-history">
      {entries.map((entry) => (
        <li key={entry.date + entry.text}>
          <strong>{entry.date}</strong> — {entry.text}
        </li>
      ))}
    </ul>
  );
}

// Extracts "**date** – text" bullet items produced by the markdown changelog section.
export function parseChangelogHtml(html: string): VersionHistoryEntry[] {
  const items = [...html.matchAll(/<li>(.*?)<\/li>/gs)].map((m) => m[1]);
  return items.map((raw) => {
    const match = /<strong>([^<]+)<\/strong>\s*[–-]\s*(.*)/s.exec(raw);
    if (match) {
      return { date: match[1].trim(), text: match[2].replace(/<[^>]+>/g, '').trim() };
    }
    return { date: '', text: raw.replace(/<[^>]+>/g, '').trim() };
  });
}

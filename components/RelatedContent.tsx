import Link from 'next/link';

export interface RelatedContentItem {
  title: string;
  description?: string;
  href: string;
}

export function RelatedContent({ items, heading = 'Weiterführend' }: { items: RelatedContentItem[]; heading?: string }) {
  if (items.length === 0) return null;
  return (
    <div className="related-content">
      <h2>{heading}</h2>
      <div className="related-content__grid">
        {items.map((item) => (
          <div className="related-content__item" key={item.href}>
            <Link href={item.href}>{item.title}</Link>
            {item.description ? <p>{item.description}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

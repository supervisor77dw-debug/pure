import { assetSrc } from '@/lib/assets';

export interface AssetFigureProps {
  file: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  variant?: 'default' | 'plain';
  status?: 'INTERNAL PROTOTYPE' | 'DEVELOPMENT CONCEPT' | 'BRANDING CONCEPT';
}

// Consistent frame (radius/shadow/background) for all presentation-deck graphics reused on the site.
// Aspect ratio is never forced — width:100%/height:auto keeps the original proportions intact.
export function AssetFigure({ file, alt, caption, priority = false, variant = 'default', status }: AssetFigureProps) {
  return (
    <figure className={`asset-figure${variant === 'plain' ? ' asset-figure--plain' : ''}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetSrc(file)}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className="asset-figure__img"
      />
      {status ? <span className="asset-figure__status">{status}</span> : null}
      {caption ? <figcaption className="asset-figure__caption">{caption}</figcaption> : null}
    </figure>
  );
}

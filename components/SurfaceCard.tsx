import type { CSSProperties, ReactNode } from 'react';
import { assetSrc } from '@/lib/assets';

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
  surface: string;
  backgroundAsset?: string;
  backgroundPosition?: string;
};

type SurfaceCardStyle = CSSProperties & {
  '--surface-asset'?: string;
  '--surface-position'?: string;
};

export function SurfaceCard({ children, className = '', surface, backgroundAsset, backgroundPosition }: SurfaceCardProps) {
  const style: SurfaceCardStyle | undefined = backgroundAsset
    ? { '--surface-asset': `url("${assetSrc(backgroundAsset)}")`, '--surface-position': backgroundPosition }
    : undefined;

  return (
    <article className={`material-surface-card ${className}`.trim()} data-surface={surface} data-has-surface-asset={backgroundAsset ? 'true' : undefined} style={style}>
      <div className="material-surface-card__content">{children}</div>
    </article>
  );
}
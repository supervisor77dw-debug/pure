import type { CSSProperties, ReactNode } from 'react';
import { assetSrc } from '@/lib/assets';

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
  surface: string;
  backgroundAsset?: string;
};

type SurfaceCardStyle = CSSProperties & {
  '--surface-asset'?: string;
};

export function SurfaceCard({ children, className = '', surface, backgroundAsset }: SurfaceCardProps) {
  const style: SurfaceCardStyle | undefined = backgroundAsset
    ? { '--surface-asset': `url("${assetSrc(backgroundAsset)}")` }
    : undefined;

  return (
    <article className={`material-surface-card ${className}`.trim()} data-surface={surface} style={style}>
      <div className="material-surface-card__content">{children}</div>
    </article>
  );
}
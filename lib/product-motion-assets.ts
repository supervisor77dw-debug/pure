export type ProductMotionVariant = 'thermo' | 'liquidHeat' | 'fire' | 'surface' | 'water' | 'floor' | 'wood' | 'boat';

export interface ProductMotionAssetSet {
  variant: ProductMotionVariant;
  desktopWebm?: string;
  desktopMp4?: string;
  poster?: string;
  mobilePoster?: string;
  svgLayer?: string;
}

// Asset paths stay empty until approved Sprint 2 motion assets are supplied.
export const productMotionAssets: Partial<Record<ProductMotionVariant, ProductMotionAssetSet>> = {
  liquidHeat: {
    variant: 'liquidHeat',
    desktopWebm: '/assets/pure-liquid-heat-ambient-v1.webm',
    desktopMp4: '/assets/pure-liquid-heat-ambient-v1.mp4',
    poster: '/assets/pure-liquid-heat-ambient-v1-poster.webp',
    mobilePoster: '/assets/pure-liquid-heat-ambient-v1-mobile.webp'
  },
  water: {
    variant: 'water',
    desktopWebm: '/assets/pure-water-ambient-v1.webm',
    desktopMp4: '/assets/pure-water-ambient-v1.mp4',
    poster: '/assets/pure-water-ambient-v1-poster.webp',
    mobilePoster: '/assets/pure-water-ambient-v1-mobile.webp'
  }
};

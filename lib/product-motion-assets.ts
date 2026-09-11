export type ProductMotionVariant = 'thermo' | 'liquidHeat' | 'fire' | 'surface' | 'water' | 'floor' | 'wood' | 'boat';

export interface ProductMotionAssetSet {
  variant: ProductMotionVariant;
  desktopWebm?: string;
  desktopMp4?: string;
  mobilePoster?: string;
  svgLayer?: string;
}

// Asset paths stay empty until approved Sprint 2 motion assets are supplied.
export const productMotionAssets: Partial<Record<ProductMotionVariant, ProductMotionAssetSet>> = {
  liquidHeat: { variant: 'liquidHeat' },
  water: { variant: 'water' }
};

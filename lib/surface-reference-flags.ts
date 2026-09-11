export const surfaceReferenceFlags = {
  showLanuvReference: process.env.NEXT_PUBLIC_SHOW_LANUV_REFERENCE === 'true',
  showUaeReference: process.env.NEXT_PUBLIC_SHOW_UAE_REFERENCE === 'true'
} as const;

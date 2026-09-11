// Encodes a /public asset path that may contain spaces/umlauts (original filenames are preserved as-is).
export function assetSrc(filename: string): string {
  return `/assets/${encodeURIComponent(filename).replace(/%2C/gi, ',')}`;
}

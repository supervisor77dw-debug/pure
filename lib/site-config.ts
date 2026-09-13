const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pure-virid.vercel.app';

export const siteConfig = {
  name: 'PURE Technology Platform',
  url: configuredSiteUrl.replace(/\/$/, '')
} as const;
import type { MetadataRoute } from 'next';

const baseUrl = 'https://pure-virid.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { de: '/de', en: '/en' },
    { de: '/de/produkte/pure-thermo', en: '/en/products/pure-thermo' },
    { de: '/de/pure-liquid-heat', en: '/en/products/pure-liquid-heat' },
    { de: '/de/systeme/pure-thermo-interior', en: '/en/systems/pure-thermo-interior' },
    { de: '/de/nachweise/EVD-PT-THERM-001', en: '/en/evidence/EVD-PT-THERM-001' }
  ];
  return routes.flatMap((route) => [
    { url: `${baseUrl}${route.de}`, alternates: { languages: { de: `${baseUrl}${route.de}`, en: `${baseUrl}${route.en}` } } },
    { url: `${baseUrl}${route.en}`, alternates: { languages: { de: `${baseUrl}${route.de}`, en: `${baseUrl}${route.en}` } } }
  ]);
}

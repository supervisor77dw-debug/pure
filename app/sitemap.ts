import type { MetadataRoute } from 'next';

const baseUrl = 'https://pure-virid.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { de: '/de', en: '/en' },
    { de: '/de/produkte', en: '/en/products' },
    { de: '/de/produkte/pure-thermo', en: '/en/products/pure-thermo' },
    { de: '/de/pure-liquid-heat', en: '/en/products/pure-liquid-heat' },
    { de: '/de/produkte/pure-surface-protect', en: '/en/products/pure-surface-protect' },
    { de: '/de/produkte/pure-floor-protect', en: '/en/products/pure-floor-protect' },
    { de: '/de/systeme', en: '/en/systems' },
    { de: '/de/systeme/pure-thermo-exterior', en: '/en/systems/pure-thermo-exterior' },
    { de: '/de/systeme/pure-thermo-detail', en: '/en/systems/pure-thermo-detail' },
    { de: '/de/systeme/pure-thermo-fire', en: '/en/systems/pure-thermo-fire' },
    { de: '/de/systeme/pure-thermo-interior', en: '/en/systems/pure-thermo-interior' },
    { de: '/de/nachweise/EVD-PT-THERM-001', en: '/en/evidence/EVD-PT-THERM-001' },
    { de: '/de/projekt-anfrage', en: '/en/project-request' },
    { de: '/de/impressum', en: '/en/imprint' },
    { de: '/de/datenschutz', en: '/en/privacy' }
  ];
  return routes.flatMap((route) => [
    { url: `${baseUrl}${route.de}`, alternates: { languages: { de: `${baseUrl}${route.de}`, en: `${baseUrl}${route.en}` } } },
    { url: `${baseUrl}${route.en}`, alternates: { languages: { de: `${baseUrl}${route.de}`, en: `${baseUrl}${route.en}` } } }
  ]);
}

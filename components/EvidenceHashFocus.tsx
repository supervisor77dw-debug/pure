'use client';

import { useEffect } from 'react';

export function EvidenceHashFocus() {
  useEffect(() => {
    const focusHashTarget = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            block: 'start'
          });
        });
      });
    };

    focusHashTarget();
    window.addEventListener('hashchange', focusHashTarget);
    return () => window.removeEventListener('hashchange', focusHashTarget);
  }, []);

  return null;
}
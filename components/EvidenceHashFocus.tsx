'use client';

import { useEffect } from 'react';

export function EvidenceHashFocus() {
  useEffect(() => {
    let highlightTimer: number | undefined;

    const focusHashTarget = (targetId?: string) => {
      const id = targetId ?? decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          const target = document.getElementById(id);
          if (!target) return;

          target.classList.remove('is-hash-highlighted');
          void target.offsetWidth;
          target.classList.add('is-hash-highlighted');
          window.clearTimeout(highlightTimer);
          highlightTimer = window.setTimeout(() => target.classList.remove('is-hash-highlighted'), 2800);
          target.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            block: 'start'
          });
        });
      });
    };

    const handleHashLinkClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="#"]');
      if (!link) return;
      const url = new URL(link.href);
      if (url.pathname !== window.location.pathname) return;
      window.setTimeout(() => focusHashTarget(decodeURIComponent(url.hash.slice(1))), 0);
    };
    const handleHashChange = () => focusHashTarget();

    focusHashTarget();
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleHashLinkClick);
    return () => {
      window.clearTimeout(highlightTimer);
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  return null;
}
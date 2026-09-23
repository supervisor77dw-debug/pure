import Image from 'next/image';
import { assetSrc } from '@/lib/assets';
import type { Locale } from '@/lib/i18n';

export type PureElementsWorld = 'pure' | 'heat' | 'thermo' | 'fire' | 'protect';

const assets: Record<PureElementsWorld, string> = {
  pure: 'pure-parts-logo.png',
  heat: 'Logo_Heat.png',
  thermo: 'Logo_Therm.png',
  fire: 'Logo_Fire.png',
  protect: 'Logo_Protect.png'
};

const labels: Record<Locale, Record<PureElementsWorld, string>> = {
  de: {
    pure: 'PURE PARTS Technology Platform – Leuchtturm mit vier Funktionswelten Heat, Thermo, Fire und Protect',
    heat: 'PURE PARTS – Heat als aktive Funktionswelt',
    thermo: 'PURE PARTS – Thermo als aktive Funktionswelt',
    fire: 'PURE PARTS – Fire als aktive Funktionswelt',
    protect: 'PURE PARTS – Protect als aktive Funktionswelt'
  },
  en: {
    pure: 'PURE PARTS Technology Platform – lighthouse with four functional worlds: Heat, Thermo, Fire and Protect',
    heat: 'PURE PARTS – Heat as the active functional world',
    thermo: 'PURE PARTS – Thermo as the active functional world',
    fire: 'PURE PARTS – Fire as the active functional world',
    protect: 'PURE PARTS – Protect as the active functional world'
  }
};

export function PureElementsMark({ world = 'pure', locale, className = '', priority = false, decorative = false }: {
  world?: PureElementsWorld;
  locale: Locale;
  className?: string;
  priority?: boolean;
  decorative?: boolean;
}) {
  return (
    <Image
      src={assetSrc(assets[world])}
      alt={decorative ? '' : labels[locale][world]}
      width={1254}
      height={1254}
      className={className}
      priority={priority}
      unoptimized
    />
  );
}
import Image from 'next/image';
import { assetSrc } from '@/lib/assets';
import type { Locale } from '@/lib/i18n';

export type PureElementsWorld = 'pure' | 'heat' | 'thermo' | 'fire' | 'protect';

const assets: Record<PureElementsWorld, string> = {
  pure: 'Logo_Pure.png',
  heat: 'Logo_Heat.png',
  thermo: 'Logo_Therm.png',
  fire: 'Logo_Fire.png',
  protect: 'Logo_Protect.png'
};

const labels: Record<Locale, Record<PureElementsWorld, string>> = {
  de: {
    pure: 'PURE ELEMENTS Technologieplattform – Leuchtturm mit vier Funktionswelten Heat, Thermo, Fire und Protect',
    heat: 'PURE ELEMENTS – Heat als aktive Funktionswelt',
    thermo: 'PURE ELEMENTS – Thermo als aktive Funktionswelt',
    fire: 'PURE ELEMENTS – Fire als aktive Funktionswelt',
    protect: 'PURE ELEMENTS – Protect als aktive Funktionswelt'
  },
  en: {
    pure: 'PURE ELEMENTS Technology Platform – lighthouse with four functional worlds: Heat, Thermo, Fire and Protect',
    heat: 'PURE ELEMENTS – Heat as the active functional world',
    thermo: 'PURE ELEMENTS – Thermo as the active functional world',
    fire: 'PURE ELEMENTS – Fire as the active functional world',
    protect: 'PURE ELEMENTS – Protect as the active functional world'
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
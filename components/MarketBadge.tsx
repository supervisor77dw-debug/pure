import type { MarketRecord } from '@/lib/data';

export interface MarketBadgeProps {
  market: MarketRecord;
}

export function MarketBadge({ market }: MarketBadgeProps) {
  return (
    <span className="pill market-badge">
      Priorität {market.priority} · {market.label_de}
    </span>
  );
}

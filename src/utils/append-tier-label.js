import {getTierLabel} from './get-tier-label.js';

export const appendTierLabel = (tier) => (x) => {
  const tierLabel = getTierLabel(tier);
  return tierLabel ? `${x} ${tierLabel}` : x;
};

import {resolveMagicProperties} from './resolve-magic-properties.js';

export const resolveItemStats = (stats, delimiter = '\n') => {
  if (Array.isArray(stats)) {
    return stats.map((s) => resolveItemStats(s)).join(delimiter);
  }

  return resolveMagicProperties(stats);
};

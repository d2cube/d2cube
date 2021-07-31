import {resolveStats} from './resolve-stats.js';

export const resolveItemStats = (stats, delimiter = '\n') => {
  if (Array.isArray(stats)) {
    return stats.map((s) => resolveItemStats(s)).join(delimiter);
  }

  return resolveStats(stats);
};

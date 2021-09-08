import {getSet} from '../../api/index.js';

import {resolveSetBonuses} from './resolve-set-bonuses.js';
import {resolveSetProperties} from './resolve-set-properties.js';

export const resolveItemSetBonuses = (item) => {
  if (!item.set) {
    return [];
  }

  const set = getSet(item.set);

  return [null, ...resolveSetProperties(set), ...resolveSetBonuses(set)];
};

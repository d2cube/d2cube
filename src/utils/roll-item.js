import {merge} from 'uinix-fp';
import {v4 as uuid} from 'uuid';

import {getItem} from '../api/index.js';
import {calcItemStats} from './calc-item-stats.js';

export const rollItem = (data) => {
  const item = getItem(data.id);

  if (!item) {
    return item;
  }

  const rolledItem = merge(item)(data);
  return {
    ...rolledItem,
    stats: calcItemStats(rolledItem),
    uuid: uuid(),
  };
};

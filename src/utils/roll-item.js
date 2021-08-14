import {merge} from 'uinix-fp';
import {v4 as uuid} from 'uuid';

import {getItemById} from '../api/index.js';
import {calcItemStats} from './calc-item-stats.js';

export const rollItem = (data) => {
  const item = merge(getItemById(data.id))(data);
  return {
    ...item,
    stats: calcItemStats(item),
    uuid: uuid(),
  };
};

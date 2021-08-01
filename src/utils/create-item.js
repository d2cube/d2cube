import {merge} from 'uinix-fp';

import {getItemById} from '../queries/index.js';
import {rollItem} from './roll-item.js';

export const createItem = (data) => {
  const {baseId, id} = data;

  const item = getItemById(id);
  const baseItem = getBaseItemById(baseId);
  const resolvedItem = merge(data)(merge(baseItem)(item));

  return rollItem(resolvedItem);
};

const getBaseItemById = (id) => {
  const baseItem = getItemById(id);
  return {
    ...baseItem,
    variants: undefined,
  };
};

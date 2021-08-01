import {merge} from 'uinix-fp';

import {getItemById} from '../queries/index.js';
import {rollItem} from './roll-item.js';

export const createItem = (data) => {
  const {baseId, id, position, sockets} = data;

  const item = getItemById(id);
  const baseItem = getItemById(baseId);
  const resolvedItem = merge(baseItem)(item);

  return rollItem({
    ...resolvedItem,
    position,
    sockets
  });
};

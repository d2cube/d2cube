import {getItemById} from '../queries/index.js';

export const createItem = (initialItem) => ({
  ...getItemById(initialItem.id),
  ...initialItem,
});

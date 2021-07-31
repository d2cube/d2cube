import {getItemById} from '../queries/index.js';

export const DEPRECATED_createItem = (initialItem) => ({
  ...getItemById(initialItem.id),
  ...initialItem,
});

export const createItem = (data) => {
  const {id, position} = data;

  const item = getItemById(id);

  return {
    ...item,
    position,
  };
};

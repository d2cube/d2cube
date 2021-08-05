import {merge} from 'uinix-fp';

export const createItems = (items) =>
  Object.entries(items).reduce((acc, [id, item]) => {
    acc[id] = createItem(items)(item);
    return acc;
  }, {});

const createItem = (items) => (initialItem) => {
  // Create baseItem and unset blacklisted properties
  const baseItem = items[initialItem.baseId] || {};
  baseItem.variants = undefined;

  const item = merge(baseItem)(initialItem);

  return {
    properties: {},
    ...item,
    data: {},
  };
};

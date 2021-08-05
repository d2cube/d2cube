import {merge} from 'uinix-fp';

export const normalizeItems = (data) => (items) =>
  items.reduce((acc, item) => {
    acc[item.id] = merge(item)(data);
    return acc;
  }, {});

import {merge} from 'uinix-fp';

export const createBaseItems = (data) => (items) =>
  items.reduce((acc, item) => merge(acc)({[item.id]: merge(data)(item)}), {});

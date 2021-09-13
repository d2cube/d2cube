import {merge} from 'uinix-fp';

export const normalizeItems = (data) => (items) =>
  Object.fromEntries(items.map((item) => [item.id, merge(data)(item)]));

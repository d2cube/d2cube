import {merge} from 'uinix-fp';

const defaultItem = {
  size: [1, 1],
  properties: {
    base: {},
    magic: {},
    set: {},
  },
};

export const createBaseItems = (data) => (items) =>
  items.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: merge(defaultItem)({
        ...data,
        ...item,
      }),
    }),
    {},
  );

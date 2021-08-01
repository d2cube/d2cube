export const createBaseItems = (data) => (items) =>
  items.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: {
        ...data,
        ...item,
      },
    }),
    {},
  );

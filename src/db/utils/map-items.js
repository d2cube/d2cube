export const mapItems = (props) => (items) =>
  Object.entries(items).reduce(
    (acc, [id, item]) => ({
      ...acc,
      [id]: {
        ...props,
        ...item,
      },
    }),
    {},
  );

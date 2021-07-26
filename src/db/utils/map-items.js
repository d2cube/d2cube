export const mapItems = (props) => (items) => {
  const {size, type, mapDescription} = props;

  return Object.entries(items).reduce(
    (acc, [id, item]) => ({
      ...acc,
      [id]: {
        size,
        type,
        mapDescription,
        ...item,
      },
    }),
    {},
  );
};

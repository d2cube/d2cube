export const mapItemProps = (props) => (items) => {
  const {size, type, mapDescription} = props;

  return Object.entries(items).reduce(
    (acc, [id, item]) => ({
      ...acc,
      [id]: {
        ...item,
        description: item.description || mapDescription(item),
        size,
        type,
      },
    }),
    {},
  );
};

import {Layout} from 'uinix-ui';

import ItemSocket from './item-socket.js';

const ItemSockets = ({sockets, size}) => {
  if (!sockets) {
    return null;
  }

  const gridColumnStarts = getGridColumnStarts({sockets, size});

  return (
    <Layout align="center" justify="center" ml="xxs" variant="absolute">
      <Layout styles={styles.grid}>
        {gridColumnStarts.map((gridColumnStart, i) => (
          <Layout
            key={i}
            align="center"
            h="slot"
            justify="center"
            w="slot"
            styleProps={{gridColumnStart}}
            styles={styles.gridItem}
          >
            <ItemSocket id={sockets[i]} />
          </Layout>
        ))}
      </Layout>
    </Layout>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, auto))',
  },
  gridItem: ({gridColumnStart}) => ({
    gridColumnStart,
  }),
};

const getGridColumnStarts = ({sockets, size}) => {
  const [row] = size;
  switch (sockets.length) {
    case 1:
      return [1];
    case 2:
      return [1, 1];
    case 3:
      return row < 3 ? [1, 3, 2] : [1, 1, 1];
    case 4:
      return row < 4 ? [1, 2, 1, 2] : [1, 1, 1, 1];
    case 5:
      return [1, 3, 2, 1, 3];
    case 6:
      return [1, 2, 1, 2, 1, 2];
    default:
      return [];
  }
};

export default ItemSockets;

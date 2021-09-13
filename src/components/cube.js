import {Layout} from 'uinix-ui';

import ItemGrid from './item-grid.js';
import BrandIcon from './ui/brand-icon.js';

const Cube = ({items, onTransmute}) => (
  <Layout align="center" direction="column" my="auto" px="xl" spacing="m">
    <ItemGrid items={items} size={[4, 3]} />
    <BrandIcon
      icon="interface.transmute"
      size="icon.l"
      tooltip="Transmute"
      onClick={onTransmute}
    />
  </Layout>
);

export default Cube;

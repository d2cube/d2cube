import {prop} from 'uinix-fp';
import {Layout} from 'uinix-ui';

import {normalize, not} from '../utils/fp.js';
import InventoryPaperdoll from './inventory-paperdoll.js';
import ItemGrid from './item-grid.js';
import Frame from './ui/frame.js';

const Inventory = ({help = defaultHelp, items}) => (
  <Frame isFixedHeight alignTitle="center" title="Inventory" help={help}>
    <Layout align="center" direction="column" spacing="m">
      <InventoryPaperdoll
        items={normalize('equipSlot')(items.filter(testIsEquipped))}
      />
      <Layout align="center" direction="column" spacing="s">
        <ItemGrid items={items.filter(not(testIsEquipped))} size={[4, 10]} />
      </Layout>
    </Layout>
  </Frame>
);

const testIsEquipped = prop('equipSlot');

const defaultHelp = (
  <Layout direction="column" spacing="m">
    <div>To be updated</div>
  </Layout>
);

export default Inventory;

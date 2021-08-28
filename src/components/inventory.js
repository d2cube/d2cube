import {prop} from 'uinix-fp';
import {Layout} from 'uinix-ui';

import {normalize, not} from '../utils/fp.js';
import InventoryPaperdoll from './inventory-paperdoll.js';
import ItemGrid from './item-grid.js';
import Frame from './ui/frame.js';

const Inventory = ({items}) => (
  <Frame title="Inventory" help={help}>
    <InventoryPaperdoll
      items={normalize('equipped')(items.filter(testIsEquipped))}
    />
    <Layout align="center" direction="column" spacing="s">
      <ItemGrid items={items.filter(not(testIsEquipped))} size={[4, 10]} />
    </Layout>
  </Frame>
);

const testIsEquipped = prop('equipped');

const help = (
  <Layout direction="column" spacing="m">
    <div>
      Equip/unequip, and transfer items between your Inventory and Cube as you
      would in the game.
    </div>
    <div>Right click on an item to destroy it.</div>
  </Layout>
);

export default Inventory;

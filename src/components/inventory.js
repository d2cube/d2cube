import React from 'react';
import {Icon, Layout} from 'uinix-ui';

import ItemGrid from './item-grid.js';
import BrandIcon from './ui/brand-icon.js';
import Frame from './ui/frame.js';

const Inventory = ({items}) => (
  <Frame title="Inventory" help={help}>
    <Layout align="center" direction="column" spacing="s">
      <ItemGrid items={items} size={[4, 10]} />
      <BrandIcon icon="interface.add" size="icon.l" tooltip="Add item" />
    </Layout>
  </Frame>
);

const help = (
  <>
    <p>
      Equip/unequip, and transfer items between your Inventory and Cube as you
      would in the game.
    </p>
    <p>Right click on an item to destroy it.</p>
    <p>
      Search and add new items to your inventory by clicking on the &ldquo;Add
      Item&rdquo; <Icon display="inline" icon="interface.add" size="icon.s" />{' '}
      button.
    </p>
  </>
);

export default Inventory;

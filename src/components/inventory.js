import React from 'react';

import ItemGrid from './item-grid.js';
import Frame from './ui/frame.js';

const Inventory = ({items}) => (
  <Frame title="Inventory" help={help}>
    <ItemGrid items={items} size={[4, 10]} />
  </Frame>
);

const help = `Equip/unequip, and transfer items between your Inventory and Cube as you would in the game.

Right click on an item to destroy it.

Search and add new items to your inventory by clicking on the "Add" button.
`

export default Inventory;

import React from 'react';

import ItemGrid from './item-grid.js';
import Frame from './ui/frame.js';

const Inventory = ({items}) => (
  <Frame title="Inventory">
    <ItemGrid items={items} size={[4, 10]} />
  </Frame>
);

export default Inventory;

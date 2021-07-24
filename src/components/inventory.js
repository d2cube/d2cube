import React from 'react';

import ItemGrid from './item-grid.js';

const Inventory = ({items}) => (
  <div>
    <ItemGrid items={items} size={[4, 10]} />
  </div>
);

export default Inventory;

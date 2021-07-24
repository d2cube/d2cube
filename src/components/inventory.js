import React from 'react';

import Item from './item.js';
import Grid from './ui/grid.js';

const Inventory = ({items}) => (
  <div>
    <Grid items={items} itemComponent={Item} size={[4, 10]} />
  </div>
);

export default Inventory;

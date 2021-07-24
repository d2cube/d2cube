import React from 'react';

import Item from './item.js';
import Grid from './ui/grid.js';

const Cube = ({items}) => (
  <div>
    <Grid items={items} itemComponent={Item} size={[4, 3]} />
  </div>
);

export default Cube;

import React from 'react';

import Item from './item.js';
import Grid from './ui/grid.js';

const ItemGrid = ({items = [], size}) => (
  <Grid size={size}>
    {items.map((item) => (
      <Item key={item.id} item={item} />
    ))}
  </Grid>
);

export default ItemGrid;

import React from 'react';

import ItemGrid from './item-grid.js';

const Cube = ({items}) => (
  <div>
    <ItemGrid items={items} size={[4, 3]} />
  </div>
);

export default Cube;

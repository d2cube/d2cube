import React from 'react';

import ItemGrid from './item-grid.js';
import Frame from './ui/frame.js';

const Cube = ({items}) => (
  <Frame title="Horadric Cube">
    <ItemGrid items={items} size={[4, 3]} />
  </Frame>
);

export default Cube;

import React from 'react';
import {Layout} from 'uinix-ui';

import {cubeItems, inventoryItems} from '../mocks/index.js';
import Cube from './cube.js';
import Inventory from './inventory.js';

const Interface = () => (
  <Layout spacing="l">
    <Cube items={cubeItems} />
    <Inventory items={inventoryItems} />
  </Layout>
);

export default Interface;

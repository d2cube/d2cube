import React from 'react';
import {Layout} from 'uinix-ui';

import {cubeItems, inventoryItems} from '../mocks/index.js';
import Cube from './cube.js';
import Hud from './hud.js';
import Inventory from './inventory.js';

const Interface = () => (
  <Layout direction="column" flex="auto" justify="flex-end" spacing="l">
    <Layout justify="space-between" spacing="l">
      <Cube items={cubeItems} />
      <Inventory items={inventoryItems} />
    </Layout>
    <Hud />
  </Layout>
);

export default Interface;

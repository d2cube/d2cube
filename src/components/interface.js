import React from 'react';
import {Layout} from 'uinix-ui';

import {items} from '../mocks/index.js';
import Cube from './cube.js';
import Inventory from './inventory.js';

const Interface = () => (
  <Layout spacing="l">
    <Cube items={items} />
    <Inventory items={items} />
  </Layout>
);

export default Interface;

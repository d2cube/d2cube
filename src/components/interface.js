import {Layout} from 'uinix-ui';

import {cubeItems, inventoryItems} from '../mocks/index.js';
import Cube from './cube.js';
import Inventory from './inventory.js';

const Interface = () => (
  <Layout direction="column" flex="auto" justify="center" spacing="l">
    <Layout justify="space-between" spacing="l">
      <Cube items={cubeItems} />
      <Inventory items={inventoryItems} />
    </Layout>
  </Layout>
);

export default Interface;

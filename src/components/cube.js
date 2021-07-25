import React from 'react';
import {Layout} from 'uinix-ui';

import ItemGrid from './item-grid.js';
import BrandIcon from './ui/brand-icon.js';
import Frame from './ui/frame.js';

const Cube = ({items}) => (
  <Frame title="Horadric Cube" help={help}>
    <Layout align="center" direction="column" spacing="s">
      <ItemGrid items={items} size={[4, 3]} />
      <BrandIcon icon="interface.transmute" size="icon.l" tooltip="Transmute" />
    </Layout>
  </Frame>
);

const help = `Use the Horadric Cube to transmute items into new items by clicking on the "Transmute" button.

View or filter for available recipes by clicking on the "Recipes" button.

Transfer items between the Cube and your Inventory as you would in the game.
`;

export default Cube;

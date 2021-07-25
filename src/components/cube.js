import React from 'react';
import {Layout} from 'uinix-ui';

import ItemGrid from './item-grid.js';
import ButtonIcon from './ui/button-icon.js';
import Frame from './ui/frame.js';

const Cube = ({items}) => (
  <Frame title="Horadric Cube">
    <Layout align="center" direction="column" spacing="s">
      <ItemGrid items={items} size={[4, 3]} />
      <ButtonIcon
        alt="Transmute"
        src="ui/transmute.png"
        onClick={() => console.log('to be implemented')}
      />
    </Layout>
  </Frame>
);

export default Cube;

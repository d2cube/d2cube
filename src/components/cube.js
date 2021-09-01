import {Icon, Layout} from 'uinix-ui';

import ItemGrid from './item-grid.js';
import BrandIcon from './ui/brand-icon.js';
import Frame from './ui/frame.js';

const Cube = ({items}) => (
  <Frame title="Cube" help={help} size="s">
    <Layout align="center" direction="column" spacing="s">
      <ItemGrid items={items} size={[4, 3]} />
      <BrandIcon icon="interface.transmute" size="icon.l" tooltip="Transmute" />
    </Layout>
  </Frame>
);

const help = (
  <Layout direction="column" spacing="m">
    <div>
      Use the Horadric Cube to transmute items into new items by clicking on the
      &ldquo;Transmute&rdquo;{' '}
      <Icon display="inline" icon="interface.transmute" size="icon.s" /> button.
    </div>
    <div>
      View or filter for available recipes by clicking on the
      &ldquo;Recipes&rdquo;{' '}
      <Icon display="inline" icon="interface.transmute" size="icon.s" /> button.
    </div>
    <div>
      Transfer items between the Cube and your Inventory as you would in the
      game.
    </div>
  </Layout>
);

export default Cube;

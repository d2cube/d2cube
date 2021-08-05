import React from 'react';
import {Layout} from 'uinix-ui';

import {beltItems} from '../mocks/index.js';
import Experience from './experience.js';
import ItemGrid from './item-grid.js';
import BrandIcon from './ui/brand-icon.js';
import Grid from './ui/grid.js';

const HudPanel = ({player}) => (
  <Layout align="stretch" direction="column" spacing="xs" variant="hud.panel">
    <Experience experience={player.experience} />
    <Layout align="center" spacing="xs">
      <Grid size={[1, 4]}>
        <BrandIcon icon="nav.home" href="/" tooltip="Home" />
        <BrandIcon icon="nav.items" href="/items" tooltip="Items" />
        <BrandIcon icon="nav.about" href="/about" tooltip="About" />
        <BrandIcon
          icon="nav.github"
          href="https://github.com/chrisrzhou/d2cube"
          tooltip="Github"
        />
      </Grid>
      <BrandIcon icon="interface.skill" size="icon.l" tooltip="Coming soon!" />
      <BrandIcon icon="interface.add" size="icon.l" tooltip="Coming soon!" />
      <BrandIcon icon="interface.skill" size="icon.l" tooltip="Coming soon!" />
      <ItemGrid items={beltItems} size={[1, 4]} />
    </Layout>
  </Layout>
);

export default HudPanel;

import React from 'react';
import {Layout} from 'uinix-ui';

import {player} from '../mocks/index.js';
import Globe from './globe.js';
import HudPanel from './hud-panel.js';

const Hud = () => {
  const {life, mana} = player;

  return (
    <Layout
      as="footer"
      align="center"
      mx="auto"
      spacing="m"
      variant="sticky.bottom"
    >
      <Globe type="life" max={life.max} value={life.value} />
      <HudPanel player={player} />
      <Globe type="mana" max={mana.max} value={mana.value} />
    </Layout>
  );
};

export default Hud;

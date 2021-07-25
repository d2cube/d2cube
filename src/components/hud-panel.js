import React from 'react';
import {Layout} from 'uinix-ui';

import {beltItems} from '../mocks/index.js';
import Experience from './experience.js';
import ItemGrid from './item-grid.js';
import ButtonIcon from './ui/button-icon.js';

const HudPanel = ({player}) => (
  <Layout align="stretch" direction="column" spacing="xs" variant="hud.panel">
    <Experience experience={player.experience} />
    <Layout align="center" spacing="xs">
      <ItemGrid size={[1, 4]} />
      <ButtonIcon alt="Skill" src="skill.png" />
      <ButtonIcon alt="Game" src="game.png" />
      <ButtonIcon alt="Skill" src="skill.png" />
      <ItemGrid items={beltItems} size={[1, 4]} />
    </Layout>
  </Layout>
);

export default HudPanel;

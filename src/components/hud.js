import {Element, Layout} from 'uinix-ui';

import Globe from './globe.js';
import HudPanel from './hud-panel.js';

const Hud = ({title}) => {
  const {life, mana} = player;

  return (
    <Element as="footer" variant="footer">
      <Layout align="center" mx="auto" w="min-content">
        <Globe type="life" max={life.max} value={life.value} />
        <HudPanel player={player} title={title} />
        <Globe type="mana" max={mana.max} value={mana.value} />
      </Layout>
    </Element>
  );
};

// TODO: implement player stats in the future
const player = {
  life: {
    max: 1000,
    value: 1000,
  },
  experience: {
    max: 1000,
    value: 642,
  },
  mana: {
    max: 1000,
    value: 1000,
  },
};

export default Hud;

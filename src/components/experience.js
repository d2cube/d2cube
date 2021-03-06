import {Element, Layout, useStyles} from 'uinix-ui';

import {fill} from '../utils/fp.js';
import Tooltip from './ui/tooltip.js';

const Experience = ({experience}) => {
  const styles = useStyles();

  const {max, value} = experience;
  const percent = `${((value / max) * 100).toFixed(1)}%`;
  const tooltip = `Experience: ${value} / ${max} (${percent})`;

  return (
    <Tooltip placement="top" tooltip={tooltip}>
      <Layout alignSelf="stretch" position="relative">
        <Element
          styleProps={{
            color: 'player.xp',
            percent,
          }}
          styles={styles.progress}
          variant="absolute.stretch"
        />
        {fill(10)((i) => (
          <Layout key={i} b="bordered" flex="auto" h="bar.height" z="forward" />
        ))}
      </Layout>
    </Tooltip>
  );
};

export default Experience;

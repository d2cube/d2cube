import React from 'react';
import {Element, Layout, useStyles} from 'uinix-ui';

import Tooltip from './ui/tooltip.js';

const Experience = ({experience}) => {
  const styles = useStyles();

  const {max, value} = experience;
  const percent = `${((value / max) * 100).toFixed(1)}%`;
  const tooltip = `Experience: ${value} / ${max} (${percent})`;

  return (
    <Tooltip tooltip={tooltip}>
      <Layout position="relative">
        <Element
          styleProps={{
            color: 'player.xp',
            percent,
          }}
          styles={styles.progress}
          variant="absolute"
        />
        {Array.from({length: 10}).map((_, i) => (
          <Layout key={i} b="bordered" flex="auto" h="bar" z="forward" />
        ))}
      </Layout>
    </Tooltip>
  );
};

export default Experience;

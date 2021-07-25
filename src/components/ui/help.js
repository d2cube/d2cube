import React from 'react';
import {Icon} from 'uinix-ui';

import Tooltip from './tooltip.js';

const Help = ({text}) => (
  <Tooltip isReadable tooltip={text}>
    <Icon color="brand.primary" icon="help" size="icon.s" />
  </Tooltip>
);

export default Help;

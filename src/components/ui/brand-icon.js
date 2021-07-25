import React from 'react';
import {Icon} from 'uinix-ui';

import Tooltip from './tooltip.js';

const BrandIcon = ({icon, size = 'icon.m', tooltip, ...rest}) => (
  <Tooltip isReadable tooltip={tooltip}>
    <Icon {...rest} color="brand.primary" icon={icon} size={size} />
  </Tooltip>
);

export default BrandIcon;

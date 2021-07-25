import React from 'react';
import {Element} from 'uinix-ui';

import Image from './image.js';
import Tooltip from './tooltip.js';

/** Creates a button icon sourcing icos from static/assets/images/ui/icons */
const ButtonIcon = ({alt, src, onClick}) => (
  <Tooltip tooltip={alt}>
    <Element as="button" type="button" variant="button.icon" onClick={onClick}>
      <Image alt={alt} src={`ui/icons/${src}`} />
    </Element>
  </Tooltip>
);

export default ButtonIcon;

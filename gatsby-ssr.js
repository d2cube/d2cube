import {createElement as h} from 'react';
import {load} from 'uinix-ui';

import config from './src/system/config.js';
import system from './src/system/index.js';

export const wrapRootElement = ({element}) => {
  // @ts-ignore faux-esm false positive
  load({h, config, system});
  return element;
};

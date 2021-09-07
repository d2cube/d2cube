import {k} from 'uinix-fp';

import {fill} from './fp.js';

export const getSocketedLabel = (sockets) => fill(sockets)(k('○')).join('');

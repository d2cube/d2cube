import {fill} from './fp.js';

export const getSocketedLabel = ({max, sockets = max}) =>
  fill(max)((i) => (sockets >= i ? '●' : '○'))
    .reverse()
    .join('');

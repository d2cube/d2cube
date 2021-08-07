import {pipe} from 'uinix-fp';

import {concat} from '../fp.js';
import {resolveItemClvl} from './resolve-item-clvl.js';
import {resolveItemName} from './resolve-item-name.js';
import {resolveItemQlvl} from './resolve-item-qlvl.js';
import {resolveItemQuantity} from './resolve-item-quantity.js';
import {resolveItemSocketProperties} from './resolve-item-socket-properties.js';
import {resolveItemStats} from './resolve-item-stats.js';

export const resolveItemDescription = (item) =>
  pipe([
    concat(resolveItemName(item)),
    concat(resolveItemQuantity(item)),
    concat(resolveItemSocketProperties(item)),
    concat(resolveItemStats(item)),
    concat(item.description),
    concat(resolveItemClvl(item)),
    concat(resolveItemQlvl(item)),
  ])([]);

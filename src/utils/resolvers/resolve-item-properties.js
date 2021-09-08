import {pipe} from 'uinix-fp';

import {concat} from '../fp.js';
import {resolveItemBaseProperties} from './resolve-item-base-properties.js';
import {resolveItemSetProperties} from './resolve-item-set-properties.js';
import {resolveItemSocketProperties} from './resolve-item-socket-properties.js';
import {resolveItemStats} from './resolve-item-stats.js';

export const resolveItemProperties = (item) =>
  pipe([
    concat(resolveItemSocketProperties(item)),
    concat(resolveItemBaseProperties(item)),
    concat(resolveItemStats(item)),
    concat(resolveItemSetProperties(item)),
  ])([]);

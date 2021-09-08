import {pipe} from 'uinix-fp';

import {concat} from '../fp.js';
import {resolveItemName} from './resolve-item-name.js';
import {resolveItemProperties} from './resolve-item-properties.js';
import {resolveItemSetBonuses} from './resolve-item-set-bonuses.js';

export const resolveItemDescription = (item) =>
  pipe([
    concat(resolveItemName(item)),
    concat(resolveItemProperties(item)),
    concat(resolveItemSetBonuses(item)),
    concat(item.description),
  ])([]);

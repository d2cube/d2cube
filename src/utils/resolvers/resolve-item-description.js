import {pipe} from 'uinix-fp';

import {concat} from '../fp.js';
import {resolveItemBaseProperties} from './resolve-item-base-properties.js';
import {resolveItemClvl} from './resolve-item-clvl.js';
import {resolveItemName} from './resolve-item-name.js';
import {resolveItemQuantity} from './resolve-item-quantity.js';
import {resolveItemSocketProperties} from './resolve-item-socket-properties.js';

export const resolveItemDescription = (item) =>
  pipe([
    concat(resolveItemName(item)),
    concat(resolveItemQuantity(item)),
    concat(resolveItemBaseProperties(item)),
    concat(resolveItemSocketProperties(item)),
    concat(resolveItemClvl(item)),
    concat(item.description || []),
  ])([]);

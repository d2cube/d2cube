import {pipe} from 'uinix-fp';

import {concat} from '../fp.js';
import {resolveItemBaseProperties} from './resolve-item-base-properties.js';
import {resolveItemMagicProperties} from './resolve-item-magic-properties.js';
import {resolveItemName} from './resolve-item-name.js';
import {resolveItemQuantity} from './resolve-item-quantity.js';
import {resolveItemSetProperties} from './resolve-item-set-properties.js';
import {resolveItemSocketProperties} from './resolve-item-socket-properties.js';

export const resolveItemDescription = (item) =>
  pipe([
    concat(resolveItemName(item)),
    concat(resolveItemQuantity(item)),
    concat(resolveItemSocketProperties(item)),
    concat(resolveItemBaseProperties(item)),
    concat(resolveItemMagicProperties(item)),
    concat(resolveItemSetProperties(item)),
    concat(item.description),
  ])([]);

import {ItemSetType} from '../../enums/item-set-type.js';

import aldursWatchtower from './aldurs-watchtower.js';
import bulKathosChildren from './bul-kathos-children.js';
import grisworldsLegacy from './grisworlds-legacy.js';
import immortalKing from './immortal-king.js';

export default {
  [ItemSetType.AldursWatchtower]: aldursWatchtower,
  [ItemSetType.BulKathosChildren]: bulKathosChildren,
  [ItemSetType.GrisworldsLegacy]: grisworldsLegacy,
  [ItemSetType.ImmortalKing]: immortalKing,
};

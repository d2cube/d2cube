/**
 * Database of normalized items.
 */

import {mapAddType} from '../../utils/map-add-type.js';
import {ItemType} from '../enums/index.js';

import ammunitions from './ammunitions.js';
import gems from './gems.js';
import potions from './potions.js';
import runes from './runes.js';
import scrolls from './scrolls.js';
import tomes from './tomes.js';

export default {
  ...mapAddType(ItemType.Ammunition)(ammunitions),
  ...mapAddType(ItemType.Gem)(gems),
  ...mapAddType(ItemType.Potion)(potions),
  ...mapAddType(ItemType.Rune)(runes),
  ...mapAddType(ItemType.Scroll)(scrolls),
  ...mapAddType(ItemType.Tome)(tomes),
};

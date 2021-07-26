/**
 * Database of normalized items.
 */

import ammunitions from './ammunitions.js';
import amulets from './amulets.js';
import gems from './gems.js';
import potions from './potions.js';
import quests from './quests.js';
import rings from './rings.js';
import runes from './runes.js';
import scrolls from './scrolls.js';
import spears from './spears.js';
import tomes from './tomes.js';

export default {
  ...ammunitions,
  ...amulets,
  ...gems,
  ...potions,
  ...quests,
  ...rings,
  ...runes,
  ...scrolls,
  ...spears,
  ...tomes,
};

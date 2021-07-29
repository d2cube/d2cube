/**
 * All items have human-readable ID values expressed in PascalCase.
 *
 * Note: Item images are named after their IDs.
 */

import ammunitions from './ammunitions.js';
import amulets from './amulets.js';
import gems from './gems.js';
import javelins from './javelins.js';
import potions from './potions.js';
import quests from './quests.js';
import runes from './runes.js';
import rings from './rings.js';
import scrolls from './scrolls.js';
import spears from './spears.js';
import swords from './swords.js';
import tomes from './tomes.js';

export default {
  ...amulets,
  ...ammunitions,
  ...gems,
  ...javelins,
  ...potions,
  ...quests,
  ...rings,
  ...runes,
  ...scrolls,
  ...spears,
  ...swords,
  ...tomes,
};

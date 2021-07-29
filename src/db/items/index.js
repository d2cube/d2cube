/**
 * Database of normalized items.
 */

import ammunitions from './ammunitions.js';
import amulets from './amulets.js';
import bodyArmors from './body-armors.js';
import gems from './gems.js';
import javelins from './javelins.js';
import potions from './potions.js';
import quests from './quests.js';
import rings from './rings.js';
import runes from './runes.js';
import scrolls from './scrolls.js';
import shields from './shields.js';
import spears from './spears.js';
import swords from './swords.js';
import tomes from './tomes.js';
import uniques from './uniques.js';

export default {
  ...ammunitions,
  ...amulets,
  ...bodyArmors,
  ...gems,
  ...javelins,
  ...potions,
  ...quests,
  ...rings,
  ...runes,
  ...scrolls,
  ...shields,
  ...spears,
  ...swords,
  ...tomes,
  ...uniques,
};

/**
 * All items have human-readable ID values expressed in PascalCase.
 *
 * Note: Item images are named after their IDs.
 */

import ammunitions from './ammunitions.js';
import amulets from './amulets.js';
import axes from './axes.js';
import bodyArmors from './body-armors.js';
import daggers from './daggers.js';
import gems from './gems.js';
import helms from './helms.js';
import javelins from './javelins.js';
import potions from './potions.js';
import quests from './quests.js';
import runes from './runes.js';
import rings from './rings.js';
import scrolls from './scrolls.js';
import shields from './shields.js';
import spears from './spears.js';
import swords from './swords.js';
import tomes from './tomes.js';
import uniques from './uniques.js';

export default {
  ...amulets,
  ...ammunitions,
  ...axes,
  ...bodyArmors,
  ...daggers,
  ...gems,
  ...helms,
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

import {createItems} from '../utils/create-items.js';

/**
 * Database of normalized items.
 */

import amazonWeapons from './amazon-weapons.js';
import ammunitions from './ammunitions.js';
import amulets from './amulets.js';
import assasinKatars from './assassin-katars.js';
import axes from './axes.js';
import barbarianHelms from './barbarian-helms.js';
import belts from './belts.js';
import bodyArmors from './body-armors.js';
import boots from './boots.js';
import bows from './bows.js';
import charms from './charms.js';
import circlets from './circlets.js';
import crossbows from './crossbows.js';
import daggers from './daggers.js';
import druidPelts from './druid-pelts.js';
import essences from './essences.js';
import gems from './gems.js';
import gloves from './gloves.js';
import helms from './helms.js';
import javelins from './javelins.js';
import jewels from './jewels.js';
import keys from './keys.js';
import maces from './maces.js';
import necromancerHeads from './necromancer-heads.js';
import organs from './organs.js';
import paladinShields from './paladin-shields.js';
import polearms from './polearms.js';
import potions from './potions.js';
import quests from './quests.js';
import rings from './rings.js';
import runes from './runes.js';
import scepters from './scepters.js';
import scrolls from './scrolls.js';
import shields from './shields.js';
import sorceressOrbs from './sorceress-orbs.js';
import spears from './spears.js';
import staves from './staves.js';
import swords from './swords.js';
import tokens from './tokens.js';
import tomes from './tomes.js';
import uniques from './uniques.js';
import wands from './wands.js';

export default createItems({
  ...amazonWeapons,
  ...ammunitions,
  ...amulets,
  ...assasinKatars,
  ...axes,
  ...barbarianHelms,
  ...belts,
  ...bodyArmors,
  ...boots,
  ...bows,
  ...charms,
  ...circlets,
  ...crossbows,
  ...daggers,
  ...druidPelts,
  ...essences,
  ...gems,
  ...gloves,
  ...helms,
  ...javelins,
  ...jewels,
  ...keys,
  ...maces,
  ...necromancerHeads,
  ...organs,
  ...paladinShields,
  ...polearms,
  ...potions,
  ...quests,
  ...rings,
  ...runes,
  ...scepters,
  ...scrolls,
  ...shields,
  ...sorceressOrbs,
  ...spears,
  ...staves,
  ...swords,
  ...tokens,
  ...tomes,
  ...uniques,
  ...wands,
});

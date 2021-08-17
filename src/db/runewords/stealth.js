import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.TalEth,
  name: 'Stealth',
  runes: [ids.Tal, ids.Eth],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 17,
    },
    magic: {
      [MagicPropertyType.MagicDamageReduced]: 3,
      [MagicPropertyType.Dexterity]: 6,
      [MagicPropertyType.MaximumStamina]: 15,
      [MagicPropertyType.FasterRunWalk]: 25,
      [MagicPropertyType.FasterCastRate]: 25,
      [MagicPropertyType.FasterHitRecovery]: 25,
    },
  },
};

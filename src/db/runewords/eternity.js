import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.AmnBerIstSolSur,
  name: 'Eternity',
  runes: [ids.Amn, ids.Ber, ids.Ist, ids.Sol, ids.Sur],
  types: resolveRunewordItemTypes('melee'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 63,
    },
    magic: {
      [MagicPropertyType.Indestructible]: true,
      [MagicPropertyType.EnhancedDamage]: [260, 310],
      [MagicPropertyType.SlowsTarget]: 33,
      [MagicPropertyType.ReplenishLife]: 16,
      [MagicPropertyType.RegenerateMana]: 16,
      [MagicPropertyType.CannotBeFrozen]: true,
      [MagicPropertyType.SpellCharges]: {
        [SkillType.Revive]: {x: 8, y: 88},
      },
    },
  },
};

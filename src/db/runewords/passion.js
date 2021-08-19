import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.DolOrtEldLem,
  name: 'Passion',
  runes: [ids.Dol, ids.Ort, ids.Eld, ids.Lem],
  types: resolveRunewordItemTypes('weapon'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 43,
    },
    magic: {
      [MagicPropertyType.IncreasedAttackSpeed]: 25,
      [MagicPropertyType.EnhancedDamage]: [160, 210],
      [MagicPropertyType.BonusToAttackRating]: [50, 80],
      [MagicPropertyType.HitBlindsTarget]: 10,
      [MagicPropertyType.Spell]: {
        [SkillType.Berserk]: {x: 1},
        [SkillType.Zeal]: {x: 1},
      },
      [MagicPropertyType.SpellCharges]: {
        [SkillType.HeartOfWolverine]: {x: 3, y: 12},
      },
    },
  },
};

import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.SurEl,
  name: 'Wind',
  runes: [ids.Sur, ids.El],
  types: resolveRunewordItemTypes('melee'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 61,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.Tornado]: {x: 9, y: 10},
      },
      [MagicPropertyType.FasterRunWalk]: 20,
      [MagicPropertyType.FasterHitRecovery]: 15,
      [MagicPropertyType.EnhancedDamage]: [120, 160],
      [MagicPropertyType.TargetDefense]: -50,
      [MagicPropertyType.IncreasedAttackSpeed]: 40,
      [MagicPropertyType.SpellCharges]: {
        [SkillType.Twister]: {x: 13, y: 127},
      },
    },
  },
};

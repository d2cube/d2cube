import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.OrtEth,
  name: 'Zephyr',
  runes: [ids.Ort, ids.Eth],
  types: resolveRunewordItemTypes('missle'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 21,
    },
    magic: {
      [MagicPropertyType.EnhancedDamage]: 33,
      [MagicPropertyType.AttackRating]: 66,
      [MagicPropertyType.Defense]: 25,
      [MagicPropertyType.FasterRunWalk]: 25,
      [MagicPropertyType.IncreasedAttackSpeed]: 25,
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.Twister]: {x: 1, y: 7},
      },
    },
  },
};

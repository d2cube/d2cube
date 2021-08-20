import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.VexVexLoJah,
  name: 'Phoenix',
  runes: [ids.Vex, ids.Vex, ids.Lo, ids.Jah],
  types: [
    ...resolveRunewordItemTypes('shield'),
    ...resolveRunewordItemTypes('weapon'),
  ],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 65,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnLevel]: {
        [SkillType.Blaze]: {x: 40},
      },
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.Firestorm]: {x: 22, y: 40},
      },
      [MagicPropertyType.Aura]: {
        [SkillType.Redemption]: {x: [10, 15]},
      },
      [MagicPropertyType.DefenseVsMissle]: [350, 400],
      [MagicPropertyType.EnhancedDamage]: [350, 400],
      [MagicPropertyType.LowerFireResist]: -28,
      [MagicPropertyType.FireAbsorb]: [15, 21],
    },
  },
};

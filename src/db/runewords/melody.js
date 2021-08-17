import {
  BasePropertyType,
  MagicPropertyType,
  PlayerClassType,
  RunewordType,
  SkillSetType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.ShaelKoNef,
  name: 'Melody',
  runes: [ids.Shael, ids.Ko, ids.Nef],
  types: resolveRunewordItemTypes('missle'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 39,
    },
    magic: {
      [MagicPropertyType.EnhancedDamage]: 50,
      [MagicPropertyType.DamageToUndead]: 300,
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.AmazonBowAndCrossbowSkills]: 3,
      },
      [MagicPropertyType.Skill]: {
        [SkillType.SlowMissles]: {x: 3, y: PlayerClassType.Amazon},
        [SkillType.Dodge]: {x: 3, y: PlayerClassType.Amazon},
        [SkillType.CriticalStrike]: {x: 3, y: PlayerClassType.Amazon},
      },
    },
  },
};

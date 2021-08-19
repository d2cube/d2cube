import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillSetType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.ShaelThulAmn,
  name: 'Peace',
  runes: [ids.Shael, ids.Thul, ids.Amn],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 29,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.SlowMissles]: {x: 5, y: 4},
      },
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.Valkyrie]: {x: 15, y: 2},
      },
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.AmazonSkills]: 2,
      },
      [MagicPropertyType.Spell]: {
        [SkillType.CriticalStrike]: {x: 2},
      },
    },
  },
};

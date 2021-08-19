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
  id: RunewordType.OrtMalIth,
  name: 'Rain',
  runes: [ids.Ort, ids.Mal, ids.Ith],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 49,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.CycloneArmor]: {x: 15, y: 5},
      },
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.Twister]: {x: 15, y: 5},
      },
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.DruidSkills]: 2,
      },
      [MagicPropertyType.Mana]: [100, 150],
    },
  },
};

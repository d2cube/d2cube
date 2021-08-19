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
  id: RunewordType.RalGulEld,
  name: 'Principle',
  runes: [ids.Ral, ids.Gul, ids.Eld],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 53,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.HolyBolt]: {x: 5, y: 100},
      },
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.PaladinSkills]: 2,
      },
      [MagicPropertyType.Life]: [120, 147],
      [MagicPropertyType.DamageToUndead]: 50,
    },
  },
};

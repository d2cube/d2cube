import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.SurLoSol,
  name: 'Dragon',
  runes: [ids.Sur, ids.Lo, ids.Sol],
  types: [
    ...resolveRunewordItemTypes('shield'),
    ...resolveRunewordItemTypes('armor'),
  ],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 61,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.Venom]: {x: 18, y: 20},
      },
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.Hydra]: {x: 15, y: 12},
      },
      [MagicPropertyType.Aura]: {
        [SkillType.HolyFire]: {x: 14},
      },
      [MagicPropertyType.Defense]: 360,
      [MagicPropertyType.DefenseVsMissle]: 230,
      [MagicPropertyType.AllAttributes]: [3, 5],
      [MagicPropertyType.StrengthByLevel]: 0.375,
    },
  },
};

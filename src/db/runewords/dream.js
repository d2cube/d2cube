import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.IoJahPul,
  name: 'Dream',
  runes: [ids.Io, ids.Jah, ids.Pul],
  types: [
    ...resolveRunewordItemTypes('shield'),
    ...resolveRunewordItemTypes('helm'),
  ],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 65,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.Confuse]: {x: 15, y: 10},
      },
      [MagicPropertyType.Aura]: {
        [SkillType.HolyShock]: {x: 15},
      },
      [MagicPropertyType.FasterHitRecovery]: [20, 30],
      [MagicPropertyType.Defense]: [150, 220],
      [MagicPropertyType.ManaByLevel]: 0.625,
      [MagicPropertyType.AllResistances]: [5, 20],
      [MagicPropertyType.MagicFind]: [12, 25],
    },
  },
};

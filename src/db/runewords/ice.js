import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.AmnShaelJahLo,
  name: 'Ice',
  runes: [ids.Amn, ids.Shael, ids.Jah, ids.Lo],
  types: resolveRunewordItemTypes('missle'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 65,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnLevel]: {
        [SkillType.Blizzard]: {x: 40},
      },
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.FrostNova]: {x: 22, y: 25},
      },
      [MagicPropertyType.Aura]: {
        [SkillType.HolyFreeze]: {x: 18},
      },
      [MagicPropertyType.EnhancedDamage]: [140, 210],
      [MagicPropertyType.ColdSkillDamage]: [25, 30],
      [MagicPropertyType.LowerColdResist]: -20,
      [MagicPropertyType.ExtraGoldByLevel]: 3.125,
    },
  },
};

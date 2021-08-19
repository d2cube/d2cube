import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.JahLoMalGul,
  name: 'Brand',
  runes: [ids.Jah, ids.Lo, ids.Mal, ids.Gul],
  types: resolveRunewordItemTypes('missle'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 65,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.AmplifyDamage]: {x: 14, y: 35},
      },
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.BoneSpear]: {x: 18, y: 100},
      },
      [MagicPropertyType.EnhancedDamage]: [260, 340],
      [MagicPropertyType.DamageToDemons]: [280, 330],
      [MagicPropertyType.Knockback]: true,
      [MagicPropertyType.FiresExplosiveArrowsOrBolts]: 15,
    },
  },
};

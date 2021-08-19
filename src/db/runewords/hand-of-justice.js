import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.SurChamAmnLo,
  name: 'Hand of Justice',
  runes: [ids.Sur, ids.Cham, ids.Amn, ids.Lo],
  types: resolveRunewordItemTypes('weapon'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 67,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnLevel]: {
        [SkillType.Blaze]: {x: 36},
      },
      [MagicPropertyType.ChanceToCastSpellOnDeath]: {
        [SkillType.Meteor]: {x: 48},
      },
      [MagicPropertyType.Aura]: {
        [SkillType.HolyFire]: {x: 16},
      },
      [MagicPropertyType.EnhancedDamage]: [280, 330],
      [MagicPropertyType.IncreasedAttackSpeed]: 33,
      [MagicPropertyType.LowerFireResist]: -20,
      [MagicPropertyType.IgnoreTargetDefense]: true,
    },
  },
};

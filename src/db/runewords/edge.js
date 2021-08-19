import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.TirTalAmn,
  name: 'Edge',
  runes: [ids.Tir, ids.Tal, ids.Amn],
  types: resolveRunewordItemTypes('missle'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 25,
    },
    magic: {
      [MagicPropertyType.Aura]: {
        [SkillType.Thorns]: {x: 15},
      },
      [MagicPropertyType.IncreasedAttackSpeed]: 35,
      [MagicPropertyType.DamageToDemons]: [320, 380],
      [MagicPropertyType.DamageToUndead]: 280,
      [MagicPropertyType.PreventMonsterHeal]: true,
      [MagicPropertyType.AllAttributes]: [5, 10],
      [MagicPropertyType.ReduceVendorPrices]: 15,
    },
  },
};

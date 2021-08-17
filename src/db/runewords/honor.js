import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.AmnElIthTirSol,
  name: 'Honor',
  runes: [ids.Amn, ids.El, ids.Ith, ids.Tir, ids.Sol],
  types: resolveRunewordItemTypes('melee'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 27,
    },
    magic: {
      [MagicPropertyType.EnhancedDamage]: 160,
      [MagicPropertyType.DeadlyStrike]: 25,
      [MagicPropertyType.AttackRating]: 200,
      [MagicPropertyType.AllSkillLevels]: 1,
      [MagicPropertyType.ReplenishLife]: 10,
      [MagicPropertyType.Strength]: 10,
    },
  },
};

import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.IthElEth,
  name: 'Malice',
  runes: [ids.Ith, ids.El, ids.Eth],
  types: resolveRunewordItemTypes('melee'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 15,
    },
    magic: {
      [MagicPropertyType.EnhancedDamage]: 33,
      [MagicPropertyType.OpenWounds]: 100,
      [MagicPropertyType.MonsterDefensePerHit]: -100,
      [MagicPropertyType.PreventMonsterHeal]: true,
      [MagicPropertyType.DrainLife]: -5,
    },
  },
};

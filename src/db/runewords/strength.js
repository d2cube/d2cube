import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.AmnTir,
  name: 'Strength',
  runes: [ids.Amn, ids.Tir],
  types: resolveRunewordItemTypes('melee'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 25,
    },
    magic: {
      [MagicPropertyType.EnhancedDamage]: 35,
      [MagicPropertyType.CrushingBlow]: 25,
      [MagicPropertyType.Strength]: 20,
      [MagicPropertyType.Vitality]: 10,
    },
  },
};

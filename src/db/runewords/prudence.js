import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.MalTir,
  name: 'Prudence',
  runes: [ids.Mal, ids.Tir],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 49,
    },
    magic: {
      [MagicPropertyType.FasterHitRecovery]: 25,
      [MagicPropertyType.EnhancedDefense]: [140, 170],
      [MagicPropertyType.AllResistances]: [25, 35],
      [MagicPropertyType.DamageReduced]: 3,
      [MagicPropertyType.MagicDamageReduced]: 10,
      [MagicPropertyType.LightRadius]: 1,
      [MagicPropertyType.RepairsDurability]: 4,
    },
  },
};

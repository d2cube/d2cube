import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.ShaelUmThul,
  name: 'Duress',
  runes: [ids.Shael, ids.Um, ids.Thul],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 47,
    },
    magic: {
      [MagicPropertyType.FasterHitRecovery]: 20,
      [MagicPropertyType.EnhancedDamage]: [10, 20],
      [MagicPropertyType.ColdDamage]: {x: 37, y: 133, z: 2},
      [MagicPropertyType.CrushingBlow]: 15,
      [MagicPropertyType.OpenWounds]: 33,
      [MagicPropertyType.EnhancedDefense]: [150, 200],
      [MagicPropertyType.SlowerStaminaDrain]: -20,
    },
  },
};

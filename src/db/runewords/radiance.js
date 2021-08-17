import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.NefSolIth,
  name: 'Radiance',
  runes: [ids.Nef, ids.Sol, ids.Ith],
  types: resolveRunewordItemTypes('helm'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 27,
    },
    magic: {
      [MagicPropertyType.EnhancedDefense]: 75,
      [MagicPropertyType.Energy]: 10,
      [MagicPropertyType.Vitality]: 10,
      [MagicPropertyType.MagicDamageReduced]: 3,
      [MagicPropertyType.Mana]: 33,
      [MagicPropertyType.LightRadius]: 5,
    },
  },
};

import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.HelLumFal,
  name: 'Lionheart',
  runes: [ids.Hel, ids.Lum, ids.Fal],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 41,
    },
    magic: {
      [MagicPropertyType.EnhancedDamage]: 20,
      [MagicPropertyType.Dexterity]: 15,
      [MagicPropertyType.Strength]: 15,
      [MagicPropertyType.Vitality]: 20,
      [MagicPropertyType.Life]: 50,
      [MagicPropertyType.AllResistances]: 30,
    },
  },
};

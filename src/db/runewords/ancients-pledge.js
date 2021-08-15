import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.RalOrtTal,
  name: "Ancient's Pledge",
  runes: [ids.Ral, ids.Ort, ids.Tal],
  types: [ItemType.NecromancerHead, ItemType.PaladinShield, ItemType.Shield],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 21,
    },
    magic: {
      [MagicPropertyType.EnhancedDefense]: 50,
      [MagicPropertyType.ColdResist]: 43,
      [MagicPropertyType.DamageTakenGoesToMana]: 10,
    },
  },
};

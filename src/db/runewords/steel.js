import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.TirEl,
  name: 'Steel',
  runes: [ids.Tir, ids.El],
  types: [ItemType.Axe, ItemType.Mace, ItemType.Sword],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 13,
    },
    magic: {
      [MagicPropertyType.EnhancedDamage]: 20,
      [MagicPropertyType.MinimumDamage]: 3,
      [MagicPropertyType.MaximumDamage]: 3,
      [MagicPropertyType.OpenWounds]: 50,
      [MagicPropertyType.IncreasedAttackSpeed]: 25,
    },
  },
};

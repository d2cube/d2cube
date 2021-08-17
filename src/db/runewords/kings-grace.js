import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.AmnRalThul,
  name: "King's Grace",
  runes: [ids.Amn, ids.Ral, ids.Thul],
  types: [ItemType.Scepter, ItemType.Sword],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 25,
    },
    magic: {
      [MagicPropertyType.EnhancedDamage]: 100,
      [MagicPropertyType.DamageToDemons]: 100,
      [MagicPropertyType.DamageToUndead]: 50,
      [MagicPropertyType.AttackRating]: 150,
      [MagicPropertyType.AttackRatingAgainstDemons]: 100,
      [MagicPropertyType.AttackRatingAgainstUndead]: 100,
    },
  },
};

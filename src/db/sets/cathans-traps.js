import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.CathansTraps,
  name: "Cathan's Traps",
  bonus: [
    null,
    {
      [MagicPropertyType.FireDamage]: {x: 15, y: 20},
    },
    {
      [MagicPropertyType.LightningResist]: 25,
    },
    null,
    {
      [MagicPropertyType.FireDamage]: {x: 15, y: 20},
      [MagicPropertyType.LightningResist]: 25,
      [MagicPropertyType.FasterCastRate]: 10,
      [MagicPropertyType.MagicDamageReduced]: 3,
      [MagicPropertyType.AllResistances]: 25,
      [MagicPropertyType.AttackRating]: 60,
      [MagicPropertyType.Mana]: 20,
    },
  ],
  items: [
    ids.CathansSeal,
    ids.CathansSigil,
    ids.CathansVisage,
    ids.CathansMesh,
    ids.CathansRule,
  ],
};

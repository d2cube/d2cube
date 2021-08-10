import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.CleglawsBrace,
  name: "Clegaw's Brace",
  bonus: [
    null,
    {
      [MagicPropertyType.Defense]: 50,
    },
    {
      [MagicPropertyType.IncreasedAttackSpeed]: 20,
      [MagicPropertyType.ManaStolenPerHit]: 6,
      [MagicPropertyType.CrushingBlow]: 35,
      [MagicPropertyType.Defense]: 100,
    },
  ],
  items: [ids.CleglawsPincers, ids.CleglawsClaw, ids.CleglawsTooth],
};

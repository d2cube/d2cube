import {
  ItemSetType,
  ItemTierType,
  MagicPropertyType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.CiverbsVestments,
  name: "Civerb's Vestaments",
  tier: ItemTierType.Normal,
  bonus: [
    null,
    {
      [MagicPropertyType.FireResist]: 15,
    },
    {
      [MagicPropertyType.DamageToUndead]: 200,
      [MagicPropertyType.Strength]: 15,
      [MagicPropertyType.LightningResist]: 15,
      [MagicPropertyType.FireResist]: 15,
    },
  ],
  items: [ids.CiverbsCudgel, ids.CiverbsIcon, ids.CiverbsWard],
};

import {
  ItemSetType,
  ItemTierType,
  MagicPropertyType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.TancredsBattlegear,
  name: "Tancred's Battlegear",
  tier: ItemTierType.Normal,
  bonus: [
    null,
    {
      [MagicPropertyType.LightningDamage]: {x: 15, y: 15},
    },
    {
      [MagicPropertyType.LifeStolenPerHit]: 5,
    },
    null,
    {
      [MagicPropertyType.LightningDamage]: {x: 15, y: 15},
      [MagicPropertyType.ManaStolenPerHit]: 5,
      [MagicPropertyType.LifeStolenPerHit]: 5,
      [MagicPropertyType.SlowsTarget]: 35,
      [MagicPropertyType.AllResistances]: 10,
      [MagicPropertyType.ExtraGold]: 75,
    },
  ],
  items: [
    ids.TancredsSkull,
    ids.TancredsWeird,
    ids.TancredsHobnails,
    ids.TancredsSpine,
    ids.TancredsCrowbill,
  ],
};

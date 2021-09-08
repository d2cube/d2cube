import {
  BasePropertyType,
  ItemQualityType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
  type: ItemType.Quest,
})([
  {
    id: ids.WirtsLeg,
    name: "Wirt's Leg",
    class: WeaponClassType.Mace,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 1, y: 8},
        [BasePropertyType.Durability]: 66,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
]);

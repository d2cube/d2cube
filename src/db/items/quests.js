import {
  BasePropertyType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  type: ItemType.Quest,
})([
  {
    id: ids.WirtsLeg,
    name: "Wirt's Leg",
    class: WeaponClassType.Mace,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [1, 8],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-10],
        [BasePropertyType.Durability]: [66],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
]);

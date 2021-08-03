import {
  BasePropertyType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  type: ItemType.Quest,
})([
  {
    id: ids.WirtsLeg,
    title: "Wirt's Leg",
    class: WeaponClassType.Mace,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [1, 8],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.Durability]: {
          values: [66],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
]);

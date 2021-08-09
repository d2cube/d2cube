import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  size: [2, 2],
  type: ItemType.Circlet,
})([
  {
    id: ids.Circlet,
    name: 'Circlet',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [20, 30],
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.RequiredLevel]: 16,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Coronet,
    name: 'Coronet',
    tier: ItemTierType.Exceptional,
    baseId: ids.Circlet,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [30, 40],
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.RequiredLevel]: 39,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Tiara,
    name: 'Tiara',
    tier: ItemTierType.Elite,
    baseId: ids.Circlet,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [40, 50],
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.RequiredLevel]: 52,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.Diadem,
    name: 'Diadem',
    tier: ItemTierType.ElitePlus,
    baseId: ids.Circlet,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [50, 60],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredLevel]: 64,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
]);

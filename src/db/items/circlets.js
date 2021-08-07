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
        [BasePropertyType.Defense]: [20, 30],
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 16,
        [BasePropertyType.QualityLevel]: 24,
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
        [BasePropertyType.Defense]: [30, 40],
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 39,
        [BasePropertyType.QualityLevel]: 50,
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
        [BasePropertyType.Defense]: [40, 50],
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 52,
        [BasePropertyType.QualityLevel]: 70,
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
        [BasePropertyType.Defense]: [50, 60],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 64,
        [BasePropertyType.QualityLevel]: 85,
      },
    },
  },
]);

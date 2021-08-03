import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  size: [2, 2],
  type: ItemType.Circlet,
})([
  {
    id: ids.Circlet,
    name: 'Circlet',
    tier: ItemTierType.Normal,
    clvl: 16,
    qlvl: 24,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [20, 30],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Coronet,
    name: 'Coronet',
    tier: ItemTierType.Exceptional,
    clvl: 39,
    qlvl: 50,
    baseId: ids.Circlet,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [30, 40],
        },
        [BasePropertyType.Durability]: {
          values: [30],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Tiara,
    name: 'Tiara',
    tier: ItemTierType.Elite,
    clvl: 52,
    qlvl: 70,
    baseId: ids.Circlet,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [40, 50],
        },
        [BasePropertyType.Durability]: {
          values: [25],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.Diadem,
    name: 'Diadem',
    tier: ItemTierType.ElitePlus,
    clvl: 64,
    qlvl: 85,
    baseId: ids.Circlet,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [50, 60],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
]);

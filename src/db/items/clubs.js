import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  SocketCategoryType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Mace,
  socketCategory: SocketCategoryType.Weapon,
  type: ItemType.Club,
})([
  {
    id: ids.Club,
    name: 'Club',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 1, y: 6},
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.SpikedClub,
    name: 'Spiked Club',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 5, y: 8},
        [BasePropertyType.Durability]: 36,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Cudgel,
    name: 'Cudgel',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.Club,
    imageId: ids.Club,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 6, y: 21},
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 18,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.BarbedClub,
    name: 'Barbed Club',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.SpikedClub,
    imageId: ids.SpikedClub,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 13, y: 25},
        [BasePropertyType.Durability]: 36,
        [BasePropertyType.RequiredStrength]: 30,
        [BasePropertyType.RequiredLevel]: 20,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Truncheon,
    name: 'Truncheon',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.Club,
    imageId: ids.Club,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 35, y: 43},
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.RequiredDexterity]: 43,
        [BasePropertyType.RequiredStrength]: 88,
        [BasePropertyType.RequiredLevel]: 39,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.TyrantClub,
    name: 'Tyrant Club',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.SpikedClub,
    imageId: ids.SpikedClub,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 32, y: 58},
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.RequiredStrength]: 133,
        [BasePropertyType.RequiredLevel]: 42,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
]);

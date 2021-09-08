import {
  BasePropertyType,
  ItemQualityType,
  ItemTierType,
  ItemType,
  PlayerClassType,
  SocketCategoryType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Spear,
  playerClass: PlayerClassType.Amazon,
  quality: ItemQualityType.Normal,
  size: [4, 2],
  socketCategory: SocketCategoryType.Weapon,
  type: ItemType.AmazonSpear,
})([
  {
    id: ids.MaidenSpear,
    name: 'Maiden Spear',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 18, y: 24},
        [BasePropertyType.Durability]: 28,
        [BasePropertyType.RequiredDexterity]: 40,
        [BasePropertyType.RequiredStrength]: 54,
        [BasePropertyType.RequiredLevel]: 14,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.MaidenPike,
    name: 'Maiden Pike',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 23, y: 55},
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.RequiredDexterity]: 52,
        [BasePropertyType.RequiredStrength]: 63,
        [BasePropertyType.RequiredLevel]: 20,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.CeremonialSpear,
    name: 'Ceremonial Spear',
    tier: ItemTierType.Exceptional,
    baseId: ids.MaidenSpear,
    imageId: ids.MaidenSpear,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 34, y: 51},
        [BasePropertyType.Durability]: 28,
        [BasePropertyType.RequiredDexterity]: 80,
        [BasePropertyType.RequiredStrength]: 101,
        [BasePropertyType.RequiredLevel]: 14,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.CeremonialPike,
    name: 'Ceremonial Pike',
    tier: ItemTierType.Exceptional,
    baseId: ids.MaidenPike,
    imageId: ids.MaidenPike,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 42, y: 101},
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.RequiredDexterity]: 98,
        [BasePropertyType.RequiredStrength]: 115,
        [BasePropertyType.RequiredLevel]: 38,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.MatriarchalSpear,
    name: 'Matriarchal Spear',
    tier: ItemTierType.Elite,
    baseId: ids.MaidenSpear,
    imageId: ids.MaidenSpear,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 65, y: 95},
        [BasePropertyType.Durability]: 28,
        [BasePropertyType.RequiredDexterity]: 142,
        [BasePropertyType.RequiredStrength]: 114,
        [BasePropertyType.RequiredLevel]: 45,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.MatriarchalPike,
    name: 'Matriarchal Pike',
    tier: ItemTierType.Elite,
    baseId: ids.MaidenPike,
    imageId: ids.MaidenPike,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 37, y: 153},
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.RequiredDexterity]: 149,
        [BasePropertyType.RequiredStrength]: 132,
        [BasePropertyType.RequiredLevel]: 60,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
]);

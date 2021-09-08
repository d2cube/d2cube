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
  class: WeaponClassType.Bow,
  playerClass: PlayerClassType.Amazon,
  quality: ItemQualityType.Normal,
  size: [4, 2],
  socketCategory: SocketCategoryType.Weapon,
  type: ItemType.AmazonBow,
})([
  {
    id: ids.StagBow,
    name: 'Stag Bow',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 7, y: 12},
        [BasePropertyType.RequiredDexterity]: 45,
        [BasePropertyType.RequiredStrength]: 30,
        [BasePropertyType.RequiredLevel]: 14,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.ReflexBow,
    name: 'Reflex Bow',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 9, y: 19},
        [BasePropertyType.RequiredDexterity]: 60,
        [BasePropertyType.RequiredStrength]: 35,
        [BasePropertyType.RequiredLevel]: 20,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.AshwoodBow,
    name: 'Ashwood Bow',
    tier: ItemTierType.Exceptional,
    baseId: ids.StagBow,
    imageId: ids.StagBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 16, y: 29},
        [BasePropertyType.RequiredDexterity]: 77,
        [BasePropertyType.RequiredStrength]: 56,
        [BasePropertyType.RequiredLevel]: 29,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.CeremonialBow,
    name: 'Ceremonial Bow',
    tier: ItemTierType.Exceptional,
    baseId: ids.ReflexBow,
    imageId: ids.ReflexBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 19, y: 41},
        [BasePropertyType.RequiredDexterity]: 110,
        [BasePropertyType.RequiredStrength]: 73,
        [BasePropertyType.RequiredLevel]: 35,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.MatriarchalBow,
    name: 'Matriarchal Bow',
    tier: ItemTierType.Elite,
    baseId: ids.StagBow,
    imageId: ids.StagBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 20, y: 47},
        [BasePropertyType.RequiredDexterity]: 187,
        [BasePropertyType.RequiredStrength]: 87,
        [BasePropertyType.RequiredLevel]: 39,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.GrandMatronBow,
    name: 'Grand Matron Bow',
    tier: ItemTierType.Elite,
    baseId: ids.ReflexBow,
    imageId: ids.ReflexBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 14, y: 72},
        [BasePropertyType.RequiredDexterity]: 152,
        [BasePropertyType.RequiredStrength]: 108,
        [BasePropertyType.RequiredLevel]: 58,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
]);

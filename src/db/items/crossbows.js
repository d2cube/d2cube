import {
  BasePropertyType,
  ItemQualityType,
  ItemTierType,
  ItemType,
  SocketCategoryType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Crossbow,
  quality: ItemQualityType.Normal,
  socketCategory: SocketCategoryType.Weapon,
  type: ItemType.Crossbow,
})([
  {
    id: ids.LightCrossbow,
    name: 'Light Crossbow',
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 6, y: 9},
        [BasePropertyType.RequiredDexterity]: 27,
        [BasePropertyType.RequiredStrength]: 21,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.Crossbow,
    name: 'Crossbow',
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 9, y: 16},
        [BasePropertyType.RequiredDexterity]: 33,
        [BasePropertyType.RequiredStrength]: 40,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.HeavyCrossbow,
    name: 'Heavy Crossbow',
    tier: ItemTierType.Normal,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 14, y: 26},
        [BasePropertyType.RequiredDexterity]: 40,
        [BasePropertyType.RequiredStrength]: 60,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.RepeatingCrossbow,
    name: 'Repeating Crossbow',
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 6, y: 12},
        [BasePropertyType.RequiredDexterity]: 50,
        [BasePropertyType.RequiredStrength]: 40,
        [BasePropertyType.AttackSpeed]: -40,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.Arbalest,
    name: 'Arbalest',
    tier: ItemTierType.Exceptional,
    size: [3, 2],
    baseId: ids.LightCrossbow,
    imageId: ids.LightCrossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 14, y: 27},
        [BasePropertyType.RequiredDexterity]: 61,
        [BasePropertyType.RequiredStrength]: 52,
        [BasePropertyType.RequiredLevel]: 22,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.SiegeCrossbow,
    name: 'Siege Crossbow',
    tier: ItemTierType.Exceptional,
    size: [3, 2],
    baseId: ids.Crossbow,
    imageId: ids.Crossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 20, y: 42},
        [BasePropertyType.RequiredDexterity]: 70,
        [BasePropertyType.RequiredStrength]: 80,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.Ballista,
    name: 'Ballista',
    tier: ItemTierType.Exceptional,
    size: [4, 2],
    baseId: ids.HeavyCrossbow,
    imageId: ids.HeavyCrossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 33, y: 55},
        [BasePropertyType.RequiredDexterity]: 80,
        [BasePropertyType.RequiredStrength]: 110,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.ChuKoNu,
    name: 'Chu-Ko-Nu',
    tier: ItemTierType.Exceptional,
    size: [3, 2],
    baseId: ids.RepeatingCrossbow,
    imageId: ids.RepeatingCrossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 14, y: 32},
        [BasePropertyType.RequiredDexterity]: 95,
        [BasePropertyType.RequiredStrength]: 80,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: -60,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.PelletBow,
    name: 'Pellet Bow',
    tier: ItemTierType.Elite,
    size: [3, 2],
    baseId: ids.LightCrossbow,
    imageId: ids.LightCrossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 28, y: 73},
        [BasePropertyType.RequiredDexterity]: 155,
        [BasePropertyType.RequiredStrength]: 83,
        [BasePropertyType.RequiredLevel]: 42,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.GorgonCrossbow,
    name: 'Gorgon Crossbow',
    tier: ItemTierType.Elite,
    size: [3, 2],
    baseId: ids.Crossbow,
    imageId: ids.Crossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 25, y: 87},
        [BasePropertyType.RequiredDexterity]: 105,
        [BasePropertyType.RequiredStrength]: 117,
        [BasePropertyType.RequiredLevel]: 50,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.ColossusCrossbow,
    name: 'Colossus Crossbow',
    tier: ItemTierType.Elite,
    size: [4, 2],
    baseId: ids.HeavyCrossbow,
    imageId: ids.HeavyCrossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 32, y: 91},
        [BasePropertyType.RequiredDexterity]: 77,
        [BasePropertyType.RequiredStrength]: 163,
        [BasePropertyType.RequiredLevel]: 56,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.DemonCrossbow,
    name: 'Demon Crossbow',
    tier: ItemTierType.Elite,
    size: [3, 2],
    baseId: ids.RepeatingCrossbow,
    imageId: ids.RepeatingCrossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 26, y: 40},
        [BasePropertyType.RequiredDexterity]: 98,
        [BasePropertyType.RequiredStrength]: 141,
        [BasePropertyType.RequiredLevel]: 63,
        [BasePropertyType.AttackSpeed]: -60,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
]);

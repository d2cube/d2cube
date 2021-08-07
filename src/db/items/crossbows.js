import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Crossbow,
  type: ItemType.Crossbow,
})([
  {
    id: ids.LightCrossbow,
    name: 'Light Crossbow',
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 6, max: 9},
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 21,
        [BasePropertyType.RequiredDexterity]: 27,
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
        [BasePropertyType.Damage2H]: {min: 9, max: 16},
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 40,
        [BasePropertyType.RequiredDexterity]: 33,
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
        [BasePropertyType.Damage2H]: {min: 14, max: 26},
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 60,
        [BasePropertyType.RequiredDexterity]: 40,
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
        [BasePropertyType.Damage2H]: {min: 6, max: 12},
        [BasePropertyType.AttackSpeed]: -40,
        [BasePropertyType.RequiredStrength]: 40,
        [BasePropertyType.RequiredDexterity]: 50,
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
        [BasePropertyType.Damage2H]: {min: 14, max: 27},
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 52,
        [BasePropertyType.RequiredDexterity]: 61,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 22,
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
        [BasePropertyType.Damage2H]: {min: 20, max: 42},
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 80,
        [BasePropertyType.RequiredDexterity]: 70,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.RequiredLevel]: 25,
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
        [BasePropertyType.Damage2H]: {min: 35, max: 55},
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 110,
        [BasePropertyType.RequiredDexterity]: 80,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.RequiredLevel]: 25,
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
        [BasePropertyType.Damage2H]: {min: 14, max: 32},
        [BasePropertyType.AttackSpeed]: -60,
        [BasePropertyType.RequiredStrength]: 80,
        [BasePropertyType.RequiredDexterity]: 95,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.RequiredLevel]: 25,
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
        [BasePropertyType.Damage2H]: {min: 28, max: 73},
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 83,
        [BasePropertyType.RequiredDexterity]: 155,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 42,
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
        [BasePropertyType.Damage2H]: {min: 25, max: 87},
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 117,
        [BasePropertyType.RequiredDexterity]: 105,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.RequiredLevel]: 50,
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
        [BasePropertyType.Damage2H]: {min: 32, max: 91},
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 163,
        [BasePropertyType.RequiredDexterity]: 77,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.RequiredLevel]: 56,
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
        [BasePropertyType.Damage2H]: {min: 26, max: 40},
        [BasePropertyType.AttackSpeed]: -60,
        [BasePropertyType.RequiredStrength]: 141,
        [BasePropertyType.RequiredDexterity]: 98,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.RequiredLevel]: 63,
      },
    },
  },
]);

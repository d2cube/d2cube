import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  type: ItemType.Crossbow,
})([
  {
    id: ids.LightCrossbow,
    name: 'Light Crossbow',
    tier: ItemTierType.Normal,
    qlvl: 6,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [6, 9],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [21],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [27],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.Crossbow,
    name: 'Crossbow',
    tier: ItemTierType.Normal,
    qlvl: 15,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [9, 16],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [40],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [33],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.HeavyCrossbow,
    name: 'Heavy Crossbow',
    tier: ItemTierType.Normal,
    qlvl: 24,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [14, 26],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [60],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [40],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.RepeatingCrossbow,
    name: 'Repeating Crossbow',
    tier: ItemTierType.Normal,
    qlvl: 33,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [6, 12],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-40],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [40],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.Arbalest,
    name: 'Arbalest',
    tier: ItemTierType.Exceptional,
    clvl: 22,
    qlvl: 34,
    size: [3, 2],
    baseId: ids.LightCrossbow,
    imageId: ids.LightCrossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [14, 27],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [52],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [61],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.SiegeCrossbow,
    name: 'Siege Crossbow',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 40,
    size: [3, 2],
    baseId: ids.Crossbow,
    imageId: ids.Crossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [20, 42],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [80],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [70],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.Ballista,
    name: 'Ballista',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 47,
    size: [4, 2],
    baseId: ids.HeavyCrossbow,
    imageId: ids.HeavyCrossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [35, 55],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [110],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [80],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.ChuKoNu,
    name: 'Chu-Ko-Nu',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 54,
    size: [3, 2],
    baseId: ids.RepeatingCrossbow,
    imageId: ids.RepeatingCrossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [14, 32],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-60],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [80],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [95],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.PelletBow,
    name: 'Pellet Bow',
    tier: ItemTierType.Elite,
    clvl: 42,
    qlvl: 57,
    size: [3, 2],
    baseId: ids.LightCrossbow,
    imageId: ids.LightCrossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [28, 73],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [83],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [155],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.GorgonCrossbow,
    name: 'Gorgon Crossbow',
    tier: ItemTierType.Elite,
    clvl: 50,
    qlvl: 67,
    size: [3, 2],
    baseId: ids.Crossbow,
    imageId: ids.Crossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [25, 87],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [117],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [105],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.ColossusCrossbow,
    name: 'Colossus Crossbow',
    tier: ItemTierType.Elite,
    clvl: 56,
    qlvl: 75,
    size: [4, 2],
    baseId: ids.HeavyCrossbow,
    imageId: ids.HeavyCrossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [32, 91],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [163],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [77],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.DemonCrossbow,
    name: 'Demon Crossbow',
    tier: ItemTierType.Elite,
    clvl: 63,
    qlvl: 84,
    size: [3, 2],
    baseId: ids.RepeatingCrossbow,
    imageId: ids.RepeatingCrossbow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [26, 40],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-60],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [141],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [98],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
]);

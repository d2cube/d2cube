import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  PlayerClassType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  playerClass: PlayerClassType.Barbarian,
  size: [2, 2],
  type: ItemType.BarbarianHelm,
})([
  {
    id: ids.JawboneCap,
    name: 'Jawbone Cap',
    tier: ItemTierType.Normal,
    clvl: 3,
    qlvl: 4,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [10, 15],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.Durability]: {
          values: [25],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.FangedHelm,
    name: 'Fanged Helm',
    tier: ItemTierType.Normal,
    clvl: 6,
    qlvl: 8,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [15, 20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [35],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.HornedHelm,
    name: 'Horned Helm',
    tier: ItemTierType.Normal,
    clvl: 12,
    qlvl: 16,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [25, 30],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [45],
        },
        [BasePropertyType.Durability]: {
          values: [45],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.AssaultHelmet,
    name: 'Assault Helmet',
    tier: ItemTierType.Normal,
    clvl: 15,
    qlvl: 20,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [30, 35],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [55],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.AvengerGuard,
    name: 'Avenger Guard',
    tier: ItemTierType.Normal,
    clvl: 18,
    qlvl: 24,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [35, 50],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [65],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.JawboneVisor,
    name: 'Jawbone Visor',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 33,
    baseId: ids.JawboneCap,
    imageId: ids.JawboneCap,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [55, 68],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [58],
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
    id: ids.LionHelm,
    name: 'Lion Helm',
    tier: ItemTierType.Exceptional,
    clvl: 29,
    qlvl: 38,
    baseId: ids.FangedHelm,
    imageId: ids.FangedHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [63, 75],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [73],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.RageMask,
    name: 'Rage Mask',
    tier: ItemTierType.Exceptional,
    clvl: 29,
    qlvl: 44,
    baseId: ids.HornedHelm,
    imageId: ids.HornedHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [78, 90],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [88],
        },
        [BasePropertyType.Durability]: {
          values: [45],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.SavageHelmet,
    name: 'Savage Helmet',
    tier: ItemTierType.Exceptional,
    clvl: 32,
    qlvl: 49,
    baseId: ids.AssaultHelmet,
    imageId: ids.AssaultHelmet,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [85, 98],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [103],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.SlayerGuard,
    name: 'Slayer Guard',
    tier: ItemTierType.Exceptional,
    clvl: 40,
    qlvl: 54,
    baseId: ids.AvengerGuard,
    imageId: ids.AvengerGuard,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [93, 120],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [118],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.CarnageHelm,
    name: 'Carnage Helm',
    tier: ItemTierType.Elite,
    clvl: 45,
    qlvl: 60,
    baseId: ids.JawboneCap,
    imageId: ids.JawboneCap,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [102, 147],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [106],
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
    id: ids.FuryVisor,
    name: 'Fury Visor',
    tier: ItemTierType.Elite,
    clvl: 49,
    qlvl: 66,
    baseId: ids.FangedHelm,
    imageId: ids.FangedHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [105, 150],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [129],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.DestroyerHelm,
    name: 'Destroyer Helm',
    tier: ItemTierType.Elite,
    clvl: 54,
    qlvl: 73,
    baseId: ids.HornedHelm,
    imageId: ids.HornedHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [111, 156],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [151],
        },
        [BasePropertyType.Durability]: {
          values: [45],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.ConquerorCrown,
    name: 'Conqueror Crown',
    tier: ItemTierType.Elite,
    clvl: 60,
    qlvl: 80,
    baseId: ids.AssaultHelmet,
    imageId: ids.AssaultHelmet,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [114, 159],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [174],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.GuardianCrown,
    name: 'Guardian Crown',
    tier: ItemTierType.Elite,
    clvl: 65,
    qlvl: 85,
    baseId: ids.AvengerGuard,
    imageId: ids.AvengerGuard,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [117, 168],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [196],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
]);

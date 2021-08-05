import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  PlayerClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
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
        [BasePropertyType.Defense]: [10, 15],
        [BasePropertyType.MinimumStrength]: [25],
        [BasePropertyType.Durability]: [25],
        [BasePropertyType.MaxSockets]: [2],
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
        [BasePropertyType.Defense]: [15, 20],
        [BasePropertyType.MinimumStrength]: [35],
        [BasePropertyType.Durability]: [35],
        [BasePropertyType.MaxSockets]: [3],
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
        [BasePropertyType.Defense]: [25, 30],
        [BasePropertyType.MinimumStrength]: [45],
        [BasePropertyType.Durability]: [45],
        [BasePropertyType.MaxSockets]: [3],
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
        [BasePropertyType.Defense]: [30, 35],
        [BasePropertyType.MinimumStrength]: [55],
        [BasePropertyType.Durability]: [50],
        [BasePropertyType.MaxSockets]: [3],
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
        [BasePropertyType.Defense]: [35, 50],
        [BasePropertyType.MinimumStrength]: [65],
        [BasePropertyType.Durability]: [55],
        [BasePropertyType.MaxSockets]: [3],
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
        [BasePropertyType.Defense]: [55, 68],
        [BasePropertyType.MinimumStrength]: [58],
        [BasePropertyType.Durability]: [25],
        [BasePropertyType.MaxSockets]: [3],
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
        [BasePropertyType.Defense]: [63, 75],
        [BasePropertyType.MinimumStrength]: [73],
        [BasePropertyType.Durability]: [35],
        [BasePropertyType.MaxSockets]: [3],
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
        [BasePropertyType.Defense]: [78, 90],
        [BasePropertyType.MinimumStrength]: [88],
        [BasePropertyType.Durability]: [45],
        [BasePropertyType.MaxSockets]: [3],
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
        [BasePropertyType.Defense]: [85, 98],
        [BasePropertyType.MinimumStrength]: [103],
        [BasePropertyType.Durability]: [50],
        [BasePropertyType.MaxSockets]: [3],
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
        [BasePropertyType.Defense]: [93, 120],
        [BasePropertyType.MinimumStrength]: [118],
        [BasePropertyType.Durability]: [55],
        [BasePropertyType.MaxSockets]: [3],
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
        [BasePropertyType.Defense]: [102, 147],
        [BasePropertyType.MinimumStrength]: [106],
        [BasePropertyType.Durability]: [25],
        [BasePropertyType.MaxSockets]: [3],
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
        [BasePropertyType.Defense]: [105, 150],
        [BasePropertyType.MinimumStrength]: [129],
        [BasePropertyType.Durability]: [35],
        [BasePropertyType.MaxSockets]: [3],
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
        [BasePropertyType.Defense]: [111, 156],
        [BasePropertyType.MinimumStrength]: [151],
        [BasePropertyType.Durability]: [45],
        [BasePropertyType.MaxSockets]: [3],
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
        [BasePropertyType.Defense]: [114, 159],
        [BasePropertyType.MinimumStrength]: [174],
        [BasePropertyType.Durability]: [50],
        [BasePropertyType.MaxSockets]: [3],
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
        [BasePropertyType.Defense]: [117, 168],
        [BasePropertyType.MinimumStrength]: [196],
        [BasePropertyType.Durability]: [55],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
]);

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
        [BasePropertyType.ArmorDefense]: [10, 15],
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.MaxSockets]: 2,
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
        [BasePropertyType.ArmorDefense]: [15, 20],
        [BasePropertyType.RequiredStrength]: 35,
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.ArmorDefense]: [25, 30],
        [BasePropertyType.RequiredStrength]: 45,
        [BasePropertyType.Durability]: 45,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.ArmorDefense]: [30, 35],
        [BasePropertyType.RequiredStrength]: 55,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.ArmorDefense]: [35, 50],
        [BasePropertyType.RequiredStrength]: 65,
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.ArmorDefense]: [55, 68],
        [BasePropertyType.RequiredStrength]: 58,
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.ArmorDefense]: [63, 75],
        [BasePropertyType.RequiredStrength]: 73,
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.ArmorDefense]: [78, 90],
        [BasePropertyType.RequiredStrength]: 88,
        [BasePropertyType.Durability]: 45,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.ArmorDefense]: [85, 98],
        [BasePropertyType.RequiredStrength]: 103,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.ArmorDefense]: [93, 120],
        [BasePropertyType.RequiredStrength]: 118,
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.ArmorDefense]: [102, 147],
        [BasePropertyType.RequiredStrength]: 106,
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.ArmorDefense]: [105, 150],
        [BasePropertyType.RequiredStrength]: 129,
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.ArmorDefense]: [111, 156],
        [BasePropertyType.RequiredStrength]: 151,
        [BasePropertyType.Durability]: 45,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.ArmorDefense]: [114, 159],
        [BasePropertyType.RequiredStrength]: 174,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.ArmorDefense]: [117, 168],
        [BasePropertyType.RequiredStrength]: 196,
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
]);

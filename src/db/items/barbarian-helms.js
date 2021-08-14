import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  PlayerClassType,
  SocketCategoryType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  playerClass: PlayerClassType.Barbarian,
  size: [2, 2],
  socketCategory: SocketCategoryType.Helm,
  type: ItemType.BarbarianHelm,
})([
  {
    id: ids.JawboneCap,
    name: 'Jawbone Cap',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [10, 15],
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 3,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.FangedHelm,
    name: 'Fanged Helm',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [15, 20],
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.RequiredStrength]: 35,
        [BasePropertyType.RequiredLevel]: 6,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.HornedHelm,
    name: 'Horned Helm',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [25, 30],
        [BasePropertyType.Durability]: 45,
        [BasePropertyType.RequiredStrength]: 45,
        [BasePropertyType.RequiredLevel]: 12,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.AssaultHelmet,
    name: 'Assault Helmet',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [30, 35],
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredStrength]: 55,
        [BasePropertyType.RequiredLevel]: 15,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.AvengerGuard,
    name: 'Avenger Guard',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [35, 50],
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.RequiredStrength]: 65,
        [BasePropertyType.RequiredLevel]: 18,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.JawboneVisor,
    name: 'Jawbone Visor',
    tier: ItemTierType.Exceptional,
    baseId: ids.JawboneCap,
    imageId: ids.JawboneCap,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [55, 68],
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.RequiredStrength]: 58,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.LionHelm,
    name: 'Lion Helm',
    tier: ItemTierType.Exceptional,
    baseId: ids.FangedHelm,
    imageId: ids.FangedHelm,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [63, 75],
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.RequiredStrength]: 73,
        [BasePropertyType.RequiredLevel]: 29,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.RageMask,
    name: 'Rage Mask',
    tier: ItemTierType.Exceptional,
    baseId: ids.HornedHelm,
    imageId: ids.HornedHelm,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [78, 90],
        [BasePropertyType.Durability]: 45,
        [BasePropertyType.RequiredStrength]: 88,
        [BasePropertyType.RequiredLevel]: 29,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.SavageHelmet,
    name: 'Savage Helmet',
    tier: ItemTierType.Exceptional,
    baseId: ids.AssaultHelmet,
    imageId: ids.AssaultHelmet,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [85, 98],
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredStrength]: 103,
        [BasePropertyType.RequiredLevel]: 32,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.SlayerGuard,
    name: 'Slayer Guard',
    tier: ItemTierType.Exceptional,
    baseId: ids.AvengerGuard,
    imageId: ids.AvengerGuard,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [93, 120],
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.RequiredStrength]: 118,
        [BasePropertyType.RequiredLevel]: 40,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.CarnageHelm,
    name: 'Carnage Helm',
    tier: ItemTierType.Elite,
    baseId: ids.JawboneCap,
    imageId: ids.JawboneCap,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [102, 147],
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.RequiredStrength]: 106,
        [BasePropertyType.RequiredLevel]: 45,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.FuryVisor,
    name: 'Fury Visor',
    tier: ItemTierType.Elite,
    baseId: ids.FangedHelm,
    imageId: ids.FangedHelm,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [105, 150],
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.RequiredStrength]: 129,
        [BasePropertyType.RequiredLevel]: 49,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.DestroyerHelm,
    name: 'Destroyer Helm',
    tier: ItemTierType.Elite,
    baseId: ids.HornedHelm,
    imageId: ids.HornedHelm,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [111, 156],
        [BasePropertyType.Durability]: 45,
        [BasePropertyType.RequiredStrength]: 151,
        [BasePropertyType.RequiredLevel]: 54,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.ConquerorCrown,
    name: 'Conqueror Crown',
    tier: ItemTierType.Elite,
    baseId: ids.AssaultHelmet,
    imageId: ids.AssaultHelmet,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [114, 159],
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredStrength]: 174,
        [BasePropertyType.RequiredLevel]: 60,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.GuardianCrown,
    name: 'Guardian Crown',
    tier: ItemTierType.Elite,
    baseId: ids.AvengerGuard,
    imageId: ids.AvengerGuard,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [117, 168],
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.RequiredStrength]: 196,
        [BasePropertyType.RequiredLevel]: 65,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
]);

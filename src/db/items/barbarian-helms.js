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
    properties: {
      base: {
        [BasePropertyType.Defense]: [10, 15],
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 3,
      },
    },
  },
  {
    id: ids.FangedHelm,
    name: 'Fanged Helm',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [15, 20],
        [BasePropertyType.RequiredStrength]: 35,
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 6,
      },
    },
  },
  {
    id: ids.HornedHelm,
    name: 'Horned Helm',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [25, 30],
        [BasePropertyType.RequiredStrength]: 45,
        [BasePropertyType.Durability]: 45,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 12,
      },
    },
  },
  {
    id: ids.AssaultHelmet,
    name: 'Assault Helmet',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [30, 35],
        [BasePropertyType.RequiredStrength]: 55,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 15,
      },
    },
  },
  {
    id: ids.AvengerGuard,
    name: 'Avenger Guard',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [35, 50],
        [BasePropertyType.RequiredStrength]: 65,
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 18,
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
        [BasePropertyType.Defense]: [55, 68],
        [BasePropertyType.RequiredStrength]: 58,
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 25,
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
        [BasePropertyType.Defense]: [63, 75],
        [BasePropertyType.RequiredStrength]: 73,
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 29,
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
        [BasePropertyType.Defense]: [78, 90],
        [BasePropertyType.RequiredStrength]: 88,
        [BasePropertyType.Durability]: 45,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 29,
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
        [BasePropertyType.Defense]: [85, 98],
        [BasePropertyType.RequiredStrength]: 103,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 32,
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
        [BasePropertyType.Defense]: [93, 120],
        [BasePropertyType.RequiredStrength]: 118,
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 40,
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
        [BasePropertyType.Defense]: [102, 147],
        [BasePropertyType.RequiredStrength]: 106,
        [BasePropertyType.Durability]: 25,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 45,
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
        [BasePropertyType.Defense]: [105, 150],
        [BasePropertyType.RequiredStrength]: 129,
        [BasePropertyType.Durability]: 35,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 49,
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
        [BasePropertyType.Defense]: [111, 156],
        [BasePropertyType.RequiredStrength]: 151,
        [BasePropertyType.Durability]: 45,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 54,
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
        [BasePropertyType.Defense]: [114, 159],
        [BasePropertyType.RequiredStrength]: 174,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 60,
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
        [BasePropertyType.Defense]: [117, 168],
        [BasePropertyType.RequiredStrength]: 196,
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 65,
      },
    },
  },
]);

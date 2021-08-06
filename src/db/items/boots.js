import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  size: [2, 2],
  type: ItemType.Boot,
})([
  {
    id: ids.Boots,
    name: 'Boots',
    tier: ItemTierType.Normal,
    qlvl: 3,
    properties: {
      base: {
        [BasePropertyType.Defense]: [2, 3],
        [BasePropertyType.Durability]: [12],
      },
    },
  },
  {
    id: ids.HeavyBoots,
    name: 'Heavy Boots',
    tier: ItemTierType.Normal,
    qlvl: 7,
    properties: {
      base: {
        [BasePropertyType.Defense]: [5, 6],
        [BasePropertyType.RequiredStrength]: [18],
        [BasePropertyType.Durability]: [14],
      },
    },
  },
  {
    id: ids.ChainBoots,
    name: 'Chain Boots',
    tier: ItemTierType.Normal,
    qlvl: 12,
    properties: {
      base: {
        [BasePropertyType.Defense]: [8, 9],
        [BasePropertyType.RequiredStrength]: [30],
        [BasePropertyType.Durability]: [16],
      },
    },
  },
  {
    id: ids.LightPlatedBoots,
    name: 'Light Plated Boots',
    tier: ItemTierType.Normal,
    qlvl: 20,
    properties: {
      base: {
        [BasePropertyType.Defense]: [9, 11],
        [BasePropertyType.RequiredStrength]: [50],
        [BasePropertyType.Durability]: [18],
      },
    },
  },
  {
    id: ids.Greaves,
    name: 'Greaves',
    tier: ItemTierType.Normal,
    qlvl: 27,
    properties: {
      base: {
        [BasePropertyType.Defense]: [12, 15],
        [BasePropertyType.RequiredStrength]: [70],
        [BasePropertyType.Durability]: [24],
      },
    },
  },
  {
    id: ids.DemonhideBoots,
    name: 'Demonhide Boots',
    tier: ItemTierType.Exceptional,
    clvl: 24,
    qlvl: 36,
    baseId: ids.Boots,
    imageId: ids.Boots,
    properties: {
      base: {
        [BasePropertyType.Defense]: [28, 35],
        [BasePropertyType.RequiredStrength]: [20],
        [BasePropertyType.Durability]: [12],
      },
    },
  },
  {
    id: ids.SharksinBoots,
    name: 'Sharksin Boots',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 39,
    baseId: ids.HeavyBoots,
    imageId: ids.HeavyBoots,
    properties: {
      base: {
        [BasePropertyType.Defense]: [33, 39],
        [BasePropertyType.RequiredStrength]: [47],
        [BasePropertyType.Durability]: [14],
      },
    },
  },
  {
    id: ids.MeshBoots,
    name: 'Mesh Boots',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 43,
    baseId: ids.ChainBoots,
    imageId: ids.ChainBoots,
    properties: {
      base: {
        [BasePropertyType.Defense]: [37, 44],
        [BasePropertyType.RequiredStrength]: [65],
        [BasePropertyType.Durability]: [16],
      },
    },
  },
  {
    id: ids.BattleBoots,
    name: 'Battle Boots',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 49,
    baseId: ids.LightPlatedBoots,
    imageId: ids.LightPlatedBoots,
    properties: {
      base: {
        [BasePropertyType.Defense]: [39, 47],
        [BasePropertyType.RequiredStrength]: [95],
        [BasePropertyType.Durability]: [18],
      },
    },
  },
  {
    id: ids.WarBoots,
    name: 'War Boots',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 54,
    baseId: ids.Greaves,
    imageId: ids.Greaves,
    properties: {
      base: {
        [BasePropertyType.Defense]: [43, 53],
        [BasePropertyType.RequiredStrength]: [125],
        [BasePropertyType.Durability]: [24],
      },
    },
  },
  {
    id: ids.WyrmhideBoots,
    name: 'Wyrmhide Boots',
    tier: ItemTierType.Elite,
    clvl: 45,
    qlvl: 60,
    baseId: ids.Boots,
    imageId: ids.Boots,
    properties: {
      base: {
        [BasePropertyType.Defense]: [54, 62],
        [BasePropertyType.RequiredStrength]: [50],
        [BasePropertyType.Durability]: [12],
      },
    },
  },
  {
    id: ids.ScarabshellBoots,
    name: 'Scarabshell Boots',
    tier: ItemTierType.Elite,
    baseId: ids.HeavyBoots,
    imageId: ids.HeavyBoots,
    clvl: 49,
    qlvl: 66,
    properties: {
      base: {
        [BasePropertyType.Defense]: [56, 65],
        [BasePropertyType.RequiredStrength]: [91],
        [BasePropertyType.Durability]: [14],
      },
    },
  },
  {
    id: ids.BoneweaveBoots,
    name: 'Boneweave Boots',
    tier: ItemTierType.Elite,
    clvl: 54,
    qlvl: 72,
    baseId: ids.ChainBoots,
    imageId: ids.ChainBoots,
    properties: {
      base: {
        [BasePropertyType.Defense]: [59, 67],
        [BasePropertyType.RequiredStrength]: [118],
        [BasePropertyType.Durability]: [16],
      },
    },
  },
  {
    id: ids.MirroredBoots,
    name: 'Mirrored Boots',
    tier: ItemTierType.Elite,
    clvl: 60,
    qlvl: 81,
    baseId: ids.LightPlatedBoots,
    imageId: ids.LightPlatedBoots,
    properties: {
      base: {
        [BasePropertyType.Defense]: [59, 68],
        [BasePropertyType.RequiredStrength]: [163],
        [BasePropertyType.Durability]: [18],
      },
    },
  },
  {
    id: ids.MyrmidonGreaves,
    name: 'Myrmidon Greaves',
    tier: ItemTierType.Elite,
    clvl: 65,
    qlvl: 85,
    baseId: ids.Greaves,
    imageId: ids.Greaves,
    properties: {
      base: {
        [BasePropertyType.Defense]: [62, 71],
        [BasePropertyType.RequiredStrength]: [208],
        [BasePropertyType.Durability]: [24],
      },
    },
  },
]);

import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
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
        [BasePropertyType.Defense]: {
          values: [2, 3],
        },
        [BasePropertyType.Durability]: {
          values: [12],
        },
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
        [BasePropertyType.Defense]: {
          values: [5, 6],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [18],
        },
        [BasePropertyType.Durability]: {
          values: [14],
        },
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
        [BasePropertyType.Defense]: {
          values: [8, 9],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [30],
        },
        [BasePropertyType.Durability]: {
          values: [16],
        },
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
        [BasePropertyType.Defense]: {
          values: [9, 11],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [50],
        },
        [BasePropertyType.Durability]: {
          values: [18],
        },
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
        [BasePropertyType.Defense]: {
          values: [12, 15],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [70],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
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
        [BasePropertyType.Defense]: {
          values: [28, 35],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [20],
        },
        [BasePropertyType.Durability]: {
          values: [12],
        },
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
        [BasePropertyType.Defense]: {
          values: [33, 39],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [47],
        },
        [BasePropertyType.Durability]: {
          values: [14],
        },
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
        [BasePropertyType.Defense]: {
          values: [37, 44],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [65],
        },
        [BasePropertyType.Durability]: {
          values: [16],
        },
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
        [BasePropertyType.Defense]: {
          values: [39, 47],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [95],
        },
        [BasePropertyType.Durability]: {
          values: [18],
        },
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
        [BasePropertyType.Defense]: {
          values: [43, 53],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [125],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
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
        [BasePropertyType.Defense]: {
          values: [54, 62],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [50],
        },
        [BasePropertyType.Durability]: {
          values: [12],
        },
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
        [BasePropertyType.Defense]: {
          values: [56, 65],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [91],
        },
        [BasePropertyType.Durability]: {
          values: [14],
        },
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
        [BasePropertyType.Defense]: {
          values: [59, 67],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [118],
        },
        [BasePropertyType.Durability]: {
          values: [16],
        },
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
        [BasePropertyType.Defense]: {
          values: [59, 68],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [163],
        },
        [BasePropertyType.Durability]: {
          values: [18],
        },
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
        [BasePropertyType.Defense]: {
          values: [62, 71],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [208],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
      },
    },
  },
]);

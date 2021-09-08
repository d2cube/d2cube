import {
  BasePropertyType,
  ItemQualityType,
  ItemTierType,
  ItemType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Normal,
  size: [2, 2],
  type: ItemType.Boot,
})([
  {
    id: ids.Boots,
    name: 'Boots',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [2, 3],
        [BasePropertyType.Durability]: 12,
      },
    },
  },
  {
    id: ids.HeavyBoots,
    name: 'Heavy Boots',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [5, 6],
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.RequiredStrength]: 18,
      },
    },
  },
  {
    id: ids.ChainBoots,
    name: 'Chain Boots',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [8, 9],
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.RequiredStrength]: 30,
      },
    },
  },
  {
    id: ids.LightPlatedBoots,
    name: 'Light Plated Boots',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [9, 11],
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredStrength]: 50,
      },
    },
  },
  {
    id: ids.Greaves,
    name: 'Greaves',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [12, 15],
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredStrength]: 70,
      },
    },
  },
  {
    id: ids.DemonhideBoots,
    name: 'Demonhide Boots',
    tier: ItemTierType.Exceptional,
    baseId: ids.Boots,
    imageId: ids.Boots,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [28, 35],
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.RequiredLevel]: 24,
      },
    },
  },
  {
    id: ids.SharkskinBoots,
    name: 'Sharkskin Boots',
    tier: ItemTierType.Exceptional,
    baseId: ids.HeavyBoots,
    imageId: ids.HeavyBoots,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [33, 39],
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.RequiredStrength]: 47,
        [BasePropertyType.RequiredLevel]: 25,
      },
    },
  },
  {
    id: ids.MeshBoots,
    name: 'Mesh Boots',
    tier: ItemTierType.Exceptional,
    baseId: ids.ChainBoots,
    imageId: ids.ChainBoots,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [37, 44],
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.RequiredStrength]: 65,
        [BasePropertyType.RequiredLevel]: 25,
      },
    },
  },
  {
    id: ids.BattleBoots,
    name: 'Battle Boots',
    tier: ItemTierType.Exceptional,
    baseId: ids.LightPlatedBoots,
    imageId: ids.LightPlatedBoots,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [39, 47],
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredStrength]: 95,
        [BasePropertyType.RequiredLevel]: 25,
      },
    },
  },
  {
    id: ids.WarBoots,
    name: 'War Boots',
    tier: ItemTierType.Exceptional,
    baseId: ids.Greaves,
    imageId: ids.Greaves,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [43, 53],
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredStrength]: 125,
        [BasePropertyType.RequiredLevel]: 25,
      },
    },
  },
  {
    id: ids.WyrmhideBoots,
    name: 'Wyrmhide Boots',
    tier: ItemTierType.Elite,
    baseId: ids.Boots,
    imageId: ids.Boots,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [54, 62],
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.RequiredLevel]: 45,
      },
    },
  },
  {
    id: ids.ScarabshellBoots,
    name: 'Scarabshell Boots',
    tier: ItemTierType.Elite,
    baseId: ids.HeavyBoots,
    imageId: ids.HeavyBoots,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [56, 65],
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.RequiredStrength]: 91,
        [BasePropertyType.RequiredLevel]: 49,
      },
    },
  },
  {
    id: ids.BoneweaveBoots,
    name: 'Boneweave Boots',
    tier: ItemTierType.Elite,
    baseId: ids.ChainBoots,
    imageId: ids.ChainBoots,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [59, 67],
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.RequiredStrength]: 118,
        [BasePropertyType.RequiredLevel]: 54,
      },
    },
  },
  {
    id: ids.MirroredBoots,
    name: 'Mirrored Boots',
    tier: ItemTierType.Elite,
    baseId: ids.LightPlatedBoots,
    imageId: ids.LightPlatedBoots,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [59, 68],
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredStrength]: 163,
        [BasePropertyType.RequiredLevel]: 60,
      },
    },
  },
  {
    id: ids.MyrmidonGreaves,
    name: 'Myrmidon Greaves',
    tier: ItemTierType.Elite,
    baseId: ids.Greaves,
    imageId: ids.Greaves,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [62, 71],
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredStrength]: 208,
        [BasePropertyType.RequiredLevel]: 65,
      },
    },
  },
]);

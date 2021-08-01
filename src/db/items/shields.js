import {
  ArmorType,
  BasePropertyType,
  ItemTierType,
  ItemType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  type: ItemType.Shield,
})([
  {
    id: ids.Buckler,
    name: 'Buckler',
    size: [2, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Normal,
    qlvl: 1,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [4, 6],
        },
        [BasePropertyType.BlockChance]: {
          values: [30],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [12],
        },
        [BasePropertyType.Durability]: {
          values: [12],
        },
        [BasePropertyType.MaxSockets]: {
          values: [1],
        },
      },
    },
  },
  {
    id: ids.SmallShield,
    name: 'Small Shield',
    size: [2, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Normal,
    qlvl: 5,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [8, 10],
        },
        [BasePropertyType.BlockChance]: {
          values: [35],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [22],
        },
        [BasePropertyType.Durability]: {
          values: [16],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.LargeShield,
    name: 'Large Shield',
    size: [3, 2],
    armorType: ArmorType.Medium,
    tier: ItemTierType.Normal,
    qlvl: 11,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [12, 14],
        },
        [BasePropertyType.BlockChance]: {
          values: [35],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [34],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.KiteShield,
    name: 'Kite Shield',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Normal,
    qlvl: 15,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [16, 18],
        },
        [BasePropertyType.BlockChance]: {
          values: [38],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [47],
        },
        [BasePropertyType.Durability]: {
          values: [30],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.SpikedShield,
    name: 'Spiked Shield',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Normal,
    qlvl: 11,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [15, 25],
        },
        [BasePropertyType.BlockChance]: {
          values: [40],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [30],
        },
        [BasePropertyType.Durability]: {
          values: [40],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.BoneShield,
    name: 'Bone Shield',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Normal,
    qlvl: 19,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [10, 30],
        },
        [BasePropertyType.BlockChance]: {
          values: [50],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.Durability]: {
          values: [40],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.TowerShield,
    name: 'Tower Shield',
    size: [4, 2],
    armorType: ArmorType.Heavy,
    tier: ItemTierType.Normal,
    qlvl: 22,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [22, 25],
        },
        [BasePropertyType.BlockChance]: {
          values: [54],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [75],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.GothicShield,
    name: 'Gothic Shield',
    size: [4, 2],
    armorType: ArmorType.Medium,
    tier: ItemTierType.Normal,
    qlvl: 30,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [30, 35],
        },
        [BasePropertyType.BlockChance]: {
          values: [46],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [60],
        },
        [BasePropertyType.Durability]: {
          values: [40],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.Defender,
    name: 'Defender',
    size: [2, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 22,
    qlvl: 34,
    baseId: ids.Buckler,
    imageId: ids.Buckler,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [41, 49],
        },
        [BasePropertyType.BlockChance]: {
          values: [40],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [38],
        },
        [BasePropertyType.Durability]: {
          values: [68],
        },
        [BasePropertyType.MaxSockets]: {
          values: [1],
        },
      },
    },
  },
  {
    id: ids.RoundShield,
    name: 'Round Shield',
    size: [2, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 37,
    baseId: ids.SmallShield,
    imageId: ids.SmallShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [47, 55],
        },
        [BasePropertyType.BlockChance]: {
          values: [42],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [53],
        },
        [BasePropertyType.Durability]: {
          values: [64],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Scutum,
    name: 'Scutum',
    size: [3, 2],
    armorType: ArmorType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 42,
    baseId: ids.LargeShield,
    imageId: ids.LargeShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [53, 61],
        },
        [BasePropertyType.BlockChance]: {
          values: [44],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [71],
        },
        [BasePropertyType.Durability]: {
          values: [64],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.DragonShield,
    name: 'Dragon Shield',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 45,
    baseId: ids.KiteShield,
    imageId: ids.KiteShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [59, 67],
        },
        [BasePropertyType.BlockChance]: {
          values: [48],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [91],
        },
        [BasePropertyType.Durability]: {
          values: [76],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.BarbedShield,
    name: 'Barbed Shield',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 42,
    baseId: ids.SpikedShield,
    imageId: ids.SpikedShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [68, 78],
        },
        [BasePropertyType.BlockChance]: {
          values: [47],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [65],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.GrimShield,
    name: 'Grim Shield',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 48,
    baseId: ids.BoneShield,
    imageId: ids.BoneShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [50, 151],
        },
        [BasePropertyType.BlockChance]: {
          values: [54],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [58],
        },
        [BasePropertyType.Durability]: {
          values: [70],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Pavise,
    name: 'Pavise',
    size: [4, 2],
    armorType: ArmorType.Heavy,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 22,
    baseId: ids.TowerShield,
    imageId: ids.TowerShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [68, 78],
        },
        [BasePropertyType.BlockChance]: {
          values: [50],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [133],
        },
        [BasePropertyType.Durability]: {
          values: [72],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.AncientShield,
    name: 'Ancient Shield',
    size: [4, 2],
    armorType: ArmorType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 56,
    baseId: ids.GothicShield,
    imageId: ids.GothicShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [80, 93],
        },
        [BasePropertyType.BlockChance]: {
          values: [46],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [110],
        },
        [BasePropertyType.Durability]: {
          values: [80],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.Heater,
    name: 'Heater',
    size: [2, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 43,
    qlvl: 58,
    baseId: ids.Buckler,
    imageId: ids.Buckler,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [95, 110],
        },
        [BasePropertyType.BlockChance]: {
          values: [52],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [77],
        },
        [BasePropertyType.Durability]: {
          values: [88],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Luna,
    name: 'Luna',
    size: [2, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 45,
    qlvl: 61,
    baseId: ids.SmallShield,
    imageId: ids.SmallShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [108, 123],
        },
        [BasePropertyType.BlockChance]: {
          values: [50],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [100],
        },
        [BasePropertyType.Durability]: {
          values: [84],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Hyperion,
    name: 'Hyperion',
    size: [3, 2],
    armorType: ArmorType.Medium,
    tier: ItemTierType.Elite,
    clvl: 48,
    qlvl: 64,
    baseId: ids.LargeShield,
    imageId: ids.LargeShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [119, 135],
        },
        [BasePropertyType.BlockChance]: {
          values: [54],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [127],
        },
        [BasePropertyType.Durability]: {
          values: [82],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.Monarch,
    name: 'Monarch',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 54,
    qlvl: 72,
    baseId: ids.KiteShield,
    imageId: ids.KiteShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [133, 148],
        },
        [BasePropertyType.BlockChance]: {
          values: [52],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [156],
        },
        [BasePropertyType.Durability]: {
          values: [86],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.BladeBarrier,
    name: 'Blade Barrier',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 51,
    qlvl: 68,
    baseId: ids.SpikedShield,
    imageId: ids.SpikedShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [147, 163],
        },
        [BasePropertyType.BlockChance]: {
          values: [50],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [118],
        },
        [BasePropertyType.Durability]: {
          values: [83],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.TrollNest,
    name: 'Troll Nest',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 57,
    qlvl: 76,
    baseId: ids.BoneShield,
    imageId: ids.BoneShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [158, 173],
        },
        [BasePropertyType.BlockChance]: {
          values: [50],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [106],
        },
        [BasePropertyType.Durability]: {
          values: [74],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.Aegis,
    name: 'Aegis',
    size: [4, 2],
    armorType: ArmorType.Heavy,
    tier: ItemTierType.Elite,
    clvl: 59,
    qlvl: 79,
    baseId: ids.TowerShield,
    imageId: ids.TowerShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [145, 161],
        },
        [BasePropertyType.BlockChance]: {
          values: [54],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [219],
        },
        [BasePropertyType.Durability]: {
          values: [92],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.Ward,
    name: 'Ward',
    size: [4, 2],
    armorType: ArmorType.Medium,
    tier: ItemTierType.Elite,
    clvl: 63,
    qlvl: 84,
    baseId: ids.GothicShield,
    imageId: ids.GothicShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [153, 170],
        },
        [BasePropertyType.BlockChance]: {
          values: [54],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [185],
        },
        [BasePropertyType.Durability]: {
          values: [100],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
]);

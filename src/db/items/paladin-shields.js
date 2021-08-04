import {
  ArmorClassType,
  BasePropertyType,
  ItemTierType,
  ItemType,
  PlayerClassType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  class: ArmorClassType.Light,
  playerClass: PlayerClassType.Paladin,
  type: ItemType.PaladinShield,
})([
  {
    id: ids.Targe,
    name: 'Targe',
    tier: ItemTierType.Normal,
    clvl: 3,
    qlvl: 4,
    size: [2, 2],
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [8, 12],
        },
        [BasePropertyType.BlockChance]: {
          values: [40],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [16],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.Rondache,
    name: 'Rondache',
    tier: ItemTierType.Normal,
    clvl: 6,
    qlvl: 8,
    size: [2, 2],
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [10, 18],
        },
        [BasePropertyType.BlockChance]: {
          values: [45],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [26],
        },
        [BasePropertyType.Durability]: {
          values: [30],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.HeraldicShield,
    name: 'Heraldic Shield',
    tier: ItemTierType.Normal,
    clvl: 12,
    qlvl: 16,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [16, 26],
        },
        [BasePropertyType.BlockChance]: {
          values: [50],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [30],
        },
        [BasePropertyType.Durability]: {
          values: [40],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.AerinShield,
    name: 'Aerin Shield',
    tier: ItemTierType.Normal,
    clvl: 15,
    qlvl: 20,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [26, 36],
        },
        [BasePropertyType.BlockChance]: {
          values: [52],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [50],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.CrownShield,
    name: 'Crown Shield',
    tier: ItemTierType.Normal,
    clvl: 18,
    qlvl: 24,
    size: [2, 2],
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [30, 40],
        },
        [BasePropertyType.BlockChance]: {
          values: [55],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [65],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.AkaranTarge,
    name: 'Akaran Targe',
    tier: ItemTierType.Exceptional,
    clvl: 26,
    qlvl: 35,
    size: [2, 2],
    baseId: ids.Targe,
    imageId: ids.Targe,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [101, 125],
        },
        [BasePropertyType.BlockChance]: {
          values: [40],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [44],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.AkaranRondache,
    name: 'Akaran Rondache',
    tier: ItemTierType.Exceptional,
    clvl: 30,
    qlvl: 40,
    size: [2, 2],
    baseId: ids.Rondache,
    imageId: ids.Rondache,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [113, 137],
        },
        [BasePropertyType.BlockChance]: {
          values: [45],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [59],
        },
        [BasePropertyType.Durability]: {
          values: [30],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.ProtectorShield,
    name: 'Protector Shield',
    tier: ItemTierType.Exceptional,
    clvl: 34,
    qlvl: 46,
    size: [4, 2],
    baseId: ids.HeraldicShield,
    imageId: ids.HeraldicShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [129, 153],
        },
        [BasePropertyType.BlockChance]: {
          values: [50],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [69],
        },
        [BasePropertyType.Durability]: {
          values: [40],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.GildedShield,
    name: 'Gilded Shield',
    tier: ItemTierType.Exceptional,
    clvl: 38,
    qlvl: 51,
    size: [4, 2],
    baseId: ids.AerinShield,
    imageId: ids.AerinShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [144, 168],
        },
        [BasePropertyType.BlockChance]: {
          values: [52],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [89],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.RoyalShield,
    name: 'Royal Shield',
    tier: ItemTierType.Exceptional,
    clvl: 41,
    qlvl: 55,
    size: [2, 2],
    baseId: ids.CrownShield,
    imageId: ids.CrownShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [156, 181],
        },
        [BasePropertyType.BlockChance]: {
          values: [55],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [114],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.SacredTarge,
    name: 'Sacred Targe',
    tier: ItemTierType.Elite,
    clvl: 47,
    qlvl: 63,
    size: [2, 2],
    baseId: ids.Targe,
    imageId: ids.Targe,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [126, 158],
        },
        [BasePropertyType.BlockChance]: {
          values: [60],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [86],
        },
        [BasePropertyType.Durability]: {
          values: [45],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.SacredRondache,
    name: 'Sacred Rondache',
    tier: ItemTierType.Elite,
    clvl: 52,
    qlvl: 70,
    size: [2, 2],
    baseId: ids.Rondache,
    imageId: ids.Rondache,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [138, 164],
        },
        [BasePropertyType.BlockChance]: {
          values: [58],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [109],
        },
        [BasePropertyType.Durability]: {
          values: [68],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.KurastShield,
    name: 'Kurast Shield',
    tier: ItemTierType.Elite,
    clvl: 55,
    qlvl: 74,
    size: [4, 2],
    baseId: ids.HeraldicShield,
    imageId: ids.HeraldicShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [154, 172],
        },
        [BasePropertyType.BlockChance]: {
          values: [55],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [124],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.ZakarumShield,
    name: 'Zakarum Shield',
    tier: ItemTierType.Elite,
    clvl: 61,
    qlvl: 82,
    size: [4, 2],
    baseId: ids.AerinShield,
    imageId: ids.AerinShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [169, 193],
        },
        [BasePropertyType.BlockChance]: {
          values: [52],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [142],
        },
        [BasePropertyType.Durability]: {
          values: [65],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.VortexShield,
    name: 'Vortex Shield',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    size: [2, 2],
    baseId: ids.CrownShield,
    imageId: ids.CrownShield,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [182, 225],
        },
        [BasePropertyType.BlockChance]: {
          values: [49],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [148],
        },
        [BasePropertyType.Durability]: {
          values: [90],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
]);

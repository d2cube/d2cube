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
  playerClass: PlayerClassType.Necromancer,
  size: [2, 2],
  type: ItemType.NecromancerHead,
})([
  {
    id: ids.PreservedHead,
    name: 'Preserved Head',
    tier: ItemTierType.Normal,
    clvl: 3,
    qlvl: 4,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [2, 5],
        },
        [BasePropertyType.BlockChance]: {
          values: [23],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [12],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.ZombieHead,
    name: 'Zombie Head',
    tier: ItemTierType.Normal,
    clvl: 6,
    qlvl: 8,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [4, 8],
        },
        [BasePropertyType.BlockChance]: {
          values: [25],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [14],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.UnravellerHead,
    name: 'Unraveller Head',
    tier: ItemTierType.Normal,
    clvl: 12,
    qlvl: 16,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [6, 10],
        },
        [BasePropertyType.BlockChance]: {
          values: [28],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [18],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.GargoyleHead,
    name: 'Gargoyle Head',
    tier: ItemTierType.Normal,
    clvl: 15,
    qlvl: 20,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [10, 16],
        },
        [BasePropertyType.BlockChance]: {
          values: [30],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [20],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.DemonHead,
    name: 'Demon Head',
    tier: ItemTierType.Normal,
    clvl: 18,
    qlvl: 24,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [15, 20],
        },
        [BasePropertyType.BlockChance]: {
          values: [32],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.MummifiedTrophy,
    name: 'Mummified Trophy',
    tier: ItemTierType.Exceptional,
    clvl: 24,
    qlvl: 33,
    baseId: ids.PreservedHead,
    imageId: ids.PreservedHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [38, 48],
        },
        [BasePropertyType.BlockChance]: {
          values: [23],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [38],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.FetishTrophy,
    name: 'Fetish Trophy',
    tier: ItemTierType.Exceptional,
    clvl: 29,
    qlvl: 39,
    baseId: ids.ZombieHead,
    imageId: ids.ZombieHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [41, 52],
        },
        [BasePropertyType.BlockChance]: {
          values: [25],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [41],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.SextonTrophy,
    name: 'Sexton Trophy',
    tier: ItemTierType.Exceptional,
    clvl: 33,
    qlvl: 45,
    baseId: ids.UnravellerHead,
    imageId: ids.UnravellerHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [44, 55],
        },
        [BasePropertyType.BlockChance]: {
          values: [28],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [47],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.CantorTrophy,
    name: 'Cantor Trophy',
    tier: ItemTierType.Exceptional,
    clvl: 36,
    qlvl: 49,
    baseId: ids.GargoyleHead,
    imageId: ids.GargoyleHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [50, 64],
        },
        [BasePropertyType.BlockChance]: {
          values: [30],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [50],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.HierophantTrophy,
    name: 'Hierophant Trophy',
    tier: ItemTierType.Exceptional,
    clvl: 40,
    qlvl: 54,
    baseId: ids.DemonHead,
    imageId: ids.DemonHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [58, 70],
        },
        [BasePropertyType.BlockChance]: {
          values: [32],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [58],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.MinionSkull,
    name: 'Minion Skull',
    tier: ItemTierType.Elite,
    clvl: 44,
    qlvl: 59,
    baseId: ids.PreservedHead,
    imageId: ids.PreservedHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [95, 139],
        },
        [BasePropertyType.BlockChance]: {
          values: [23],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [77],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.HellspawnSkull,
    name: 'Hellspawn Skull',
    tier: ItemTierType.Elite,
    clvl: 50,
    qlvl: 67,
    baseId: ids.ZombieHead,
    imageId: ids.ZombieHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [96, 141],
        },
        [BasePropertyType.BlockChance]: {
          values: [25],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [82],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.OverseerSkull,
    name: 'Overseer Skull',
    tier: ItemTierType.Elite,
    clvl: 49,
    qlvl: 66,
    baseId: ids.UnravellerHead,
    imageId: ids.UnravellerHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [98, 142],
        },
        [BasePropertyType.BlockChance]: {
          values: [28],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [91],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.SuccubusSkull,
    name: 'Succubus Skull',
    tier: ItemTierType.Elite,
    clvl: 60,
    qlvl: 81,
    baseId: ids.GargoyleHead,
    imageId: ids.GargoyleHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [100, 146],
        },
        [BasePropertyType.BlockChance]: {
          values: [30],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [95],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.BloodlordSkull,
    name: 'Bloodlord Skull',
    tier: ItemTierType.Elite,
    clvl: 65,
    qlvl: 85,
    baseId: ids.DemonHead,
    imageId: ids.DemonHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [103, 148],
        },
        [BasePropertyType.BlockChance]: {
          values: [32],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [106],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
]);

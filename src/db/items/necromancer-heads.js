import {
  ArmorClassType,
  BasePropertyType,
  ItemTierType,
  ItemType,
  PlayerClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: ArmorClassType.Light,
  playerClass: PlayerClassType.Necromancer,
  size: [2, 2],
  type: ItemType.NecromancerHead,
})([
  {
    id: ids.PreservedHead,
    name: 'Preserved Head',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [2, 5],
        [BasePropertyType.BlockChance]: 23,
        [BasePropertyType.RequiredStrength]: 12,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 3,
      },
    },
  },
  {
    id: ids.ZombieHead,
    name: 'Zombie Head',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [4, 8],
        [BasePropertyType.BlockChance]: 25,
        [BasePropertyType.RequiredStrength]: 14,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 6,
      },
    },
  },
  {
    id: ids.UnravellerHead,
    name: 'Unraveller Head',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [6, 10],
        [BasePropertyType.BlockChance]: 28,
        [BasePropertyType.RequiredStrength]: 18,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 12,
      },
    },
  },
  {
    id: ids.GargoyleHead,
    name: 'Gargoyle Head',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [10, 16],
        [BasePropertyType.BlockChance]: 30,
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 15,
      },
    },
  },
  {
    id: ids.DemonHead,
    name: 'Demon Head',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [15, 20],
        [BasePropertyType.BlockChance]: 32,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 18,
      },
    },
  },
  {
    id: ids.MummifiedTrophy,
    name: 'Mummified Trophy',
    tier: ItemTierType.Exceptional,
    baseId: ids.PreservedHead,
    imageId: ids.PreservedHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: [38, 48],
        [BasePropertyType.BlockChance]: 23,
        [BasePropertyType.RequiredStrength]: 38,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 24,
      },
    },
  },
  {
    id: ids.FetishTrophy,
    name: 'Fetish Trophy',
    tier: ItemTierType.Exceptional,
    baseId: ids.ZombieHead,
    imageId: ids.ZombieHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: [41, 52],
        [BasePropertyType.BlockChance]: 25,
        [BasePropertyType.RequiredStrength]: 41,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 29,
      },
    },
  },
  {
    id: ids.SextonTrophy,
    name: 'Sexton Trophy',
    tier: ItemTierType.Exceptional,
    baseId: ids.UnravellerHead,
    imageId: ids.UnravellerHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: [44, 55],
        [BasePropertyType.BlockChance]: 28,
        [BasePropertyType.RequiredStrength]: 47,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 33,
      },
    },
  },
  {
    id: ids.CantorTrophy,
    name: 'Cantor Trophy',
    tier: ItemTierType.Exceptional,
    baseId: ids.GargoyleHead,
    imageId: ids.GargoyleHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: [50, 64],
        [BasePropertyType.BlockChance]: 30,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 36,
      },
    },
  },
  {
    id: ids.HierophantTrophy,
    name: 'Hierophant Trophy',
    tier: ItemTierType.Exceptional,
    baseId: ids.DemonHead,
    imageId: ids.DemonHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: [58, 70],
        [BasePropertyType.BlockChance]: 32,
        [BasePropertyType.RequiredStrength]: 58,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 40,
      },
    },
  },
  {
    id: ids.MinionSkull,
    name: 'Minion Skull',
    tier: ItemTierType.Elite,
    baseId: ids.PreservedHead,
    imageId: ids.PreservedHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: [95, 139],
        [BasePropertyType.BlockChance]: 23,
        [BasePropertyType.RequiredStrength]: 77,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 44,
      },
    },
  },
  {
    id: ids.HellspawnSkull,
    name: 'Hellspawn Skull',
    tier: ItemTierType.Elite,
    baseId: ids.ZombieHead,
    imageId: ids.ZombieHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: [96, 141],
        [BasePropertyType.BlockChance]: 25,
        [BasePropertyType.RequiredStrength]: 82,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 50,
      },
    },
  },
  {
    id: ids.OverseerSkull,
    name: 'Overseer Skull',
    tier: ItemTierType.Elite,
    baseId: ids.UnravellerHead,
    imageId: ids.UnravellerHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: [98, 142],
        [BasePropertyType.BlockChance]: 28,
        [BasePropertyType.RequiredStrength]: 91,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 49,
      },
    },
  },
  {
    id: ids.SuccubusSkull,
    name: 'Succubus Skull',
    tier: ItemTierType.Elite,
    baseId: ids.GargoyleHead,
    imageId: ids.GargoyleHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: [100, 146],
        [BasePropertyType.BlockChance]: 30,
        [BasePropertyType.RequiredStrength]: 95,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 60,
      },
    },
  },
  {
    id: ids.BloodlordSkull,
    name: 'Bloodlord Skull',
    tier: ItemTierType.Elite,
    baseId: ids.DemonHead,
    imageId: ids.DemonHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: [103, 148],
        [BasePropertyType.BlockChance]: 32,
        [BasePropertyType.RequiredStrength]: 106,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 65,
      },
    },
  },
]);

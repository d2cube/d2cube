import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Mace,
  type: ItemType.Mace,
})([
  {
    id: ids.Club,
    name: 'Club',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 1, max: 6},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.QualityLevel]: 1,
      },
    },
  },
  {
    id: ids.SpikedClub,
    name: 'Spiked Club',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 5, max: 8},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.Durability]: 36,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.QualityLevel]: 4,
      },
    },
  },
  {
    id: ids.Mace,
    name: 'Mace',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 3, max: 10},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 27,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.QualityLevel]: 8,
      },
    },
  },
  {
    id: ids.MorningStar,
    name: 'Morning Star',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 7, max: 16},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 36,
        [BasePropertyType.Durability]: 72,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.QualityLevel]: 13,
      },
    },
  },
  {
    id: ids.Flail,
    name: 'Flail',
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 1, max: 24},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 41,
        [BasePropertyType.RequiredDexterity]: 35,
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.QualityLevel]: 19,
      },
    },
  },
  {
    id: ids.WarHammer,
    name: 'War Hammer',
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 19, max: 29},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.RequiredStrength]: 53,
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.QualityLevel]: 25,
      },
    },
  },
  {
    id: ids.Maul,
    name: 'Maul',
    tier: ItemTierType.Normal,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 30, max: 43},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 69,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.QualityLevel]: 21,
      },
    },
  },
  {
    id: ids.GreatMaul,
    name: 'Great Maul',
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 38, max: 58},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: 12,
        [BasePropertyType.RequiredStrength]: 99,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.QualityLevel]: 32,
      },
    },
  },
  {
    id: ids.Cudgel,
    name: 'Cudgel',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.Club,
    imageId: ids.Club,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 6, max: 21},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 18,
        [BasePropertyType.QualityLevel]: 30,
      },
    },
  },
  {
    id: ids.BarbedClub,
    name: 'Barbed Club',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.SpikedClub,
    imageId: ids.SpikedClub,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 13, max: 25},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 30,
        [BasePropertyType.Durability]: 36,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 20,
        [BasePropertyType.QualityLevel]: 32,
      },
    },
  },
  {
    id: ids.FlangedMace,
    name: 'Flanged Mace',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.Mace,
    imageId: ids.Mace,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 15, max: 23},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 61,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 23,
        [BasePropertyType.QualityLevel]: 35,
      },
    },
  },
  {
    id: ids.JaggedStar,
    name: 'Jagged Star',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.MorningStar,
    imageId: ids.MorningStar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 20, max: 31},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 74,
        [BasePropertyType.Durability]: 72,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 39,
      },
    },
  },
  {
    id: ids.Knout,
    name: 'Knout',
    tier: ItemTierType.Exceptional,
    size: [3, 2],
    baseId: ids.Flail,
    imageId: ids.Flail,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 13, max: 35},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 82,
        [BasePropertyType.RequiredDexterity]: 73,
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 43,
      },
    },
  },
  {
    id: ids.BattleHammer,
    name: 'Battle Hammer',
    tier: ItemTierType.Exceptional,
    size: [3, 2],
    baseId: ids.WarHammer,
    imageId: ids.WarHammer,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 35, max: 58},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.RequiredStrength]: 100,
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 48,
      },
    },
  },
  {
    id: ids.WarClub,
    name: 'War Club',
    tier: ItemTierType.Exceptional,
    size: [4, 2],
    baseId: ids.Maul,
    imageId: ids.Maul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 53, max: 78},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 124,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 45,
      },
    },
  },
  {
    id: ids.MartelDeFer,
    name: 'Martel de Fer',
    tier: ItemTierType.Exceptional,
    size: [3, 2],
    baseId: ids.GreatMaul,
    imageId: ids.GreatMaul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 61, max: 99},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.RequiredStrength]: 169,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 53,
      },
    },
  },
  {
    id: ids.Truncheon,
    name: 'Truncheon',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.Club,
    imageId: ids.Club,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 35, max: 43},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 88,
        [BasePropertyType.RequiredDexterity]: 43,
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 39,
        [BasePropertyType.QualityLevel]: 52,
      },
    },
  },
  {
    id: ids.TyrantClub,
    name: 'Tyrant Club',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.SpikedClub,
    imageId: ids.SpikedClub,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 32, max: 58},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 133,
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 42,
        [BasePropertyType.QualityLevel]: 57,
      },
    },
  },
  {
    id: ids.ReinforcedMace,
    name: 'Reinforced Mace',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.Mace,
    imageId: ids.Mace,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 41, max: 49},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 145,
        [BasePropertyType.RequiredDexterity]: 46,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 47,
        [BasePropertyType.QualityLevel]: 63,
      },
    },
  },
  {
    id: ids.DevilStar,
    name: 'Devil Star',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.MorningStar,
    imageId: ids.MorningStar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 43, max: 53},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 153,
        [BasePropertyType.RequiredDexterity]: 44,
        [BasePropertyType.Durability]: 72,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 52,
        [BasePropertyType.QualityLevel]: 70,
      },
    },
  },
  {
    id: ids.Scourge,
    name: 'Scourge',
    tier: ItemTierType.Elite,
    size: [3, 2],
    baseId: ids.Flail,
    imageId: ids.Flail,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 3, max: 80},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 125,
        [BasePropertyType.RequiredDexterity]: 77,
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.RequiredLevel]: 57,
        [BasePropertyType.QualityLevel]: 76,
      },
    },
  },
  {
    id: ids.LegendaryMallet,
    name: 'Legendary Mallet',
    tier: ItemTierType.Elite,
    size: [3, 2],
    baseId: ids.WarHammer,
    imageId: ids.WarHammer,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 50, max: 61},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.RequiredStrength]: 189,
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.RequiredLevel]: 61,
        [BasePropertyType.QualityLevel]: 82,
      },
    },
  },
  {
    id: ids.OgreMaul,
    name: 'Ogre Maul',
    tier: ItemTierType.Elite,
    size: [4, 2],
    baseId: ids.Maul,
    imageId: ids.Maul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 77, max: 106},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 225,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.RequiredLevel]: 51,
        [BasePropertyType.QualityLevel]: 69,
      },
    },
  },
  {
    id: ids.ThunderMaul,
    name: 'Thunder Maul',
    tier: ItemTierType.Elite,
    size: [3, 2],
    baseId: ids.GreatMaul,
    imageId: ids.GreatMaul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {min: 33, max: 180},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.RequiredStrength]: 253,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.RequiredLevel]: 65,
        [BasePropertyType.QualityLevel]: 85,
      },
    },
  },
]);

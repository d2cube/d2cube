import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  type: ItemType.Mace,
})([
  {
    id: ids.Club,
    name: 'Club',
    tier: ItemTierType.Normal,
    qlvl: 1,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [1, 6],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.SpikedClub,
    name: 'Spiked Club',
    tier: ItemTierType.Normal,
    qlvl: 4,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [5, 8],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.Durability]: {
          values: [36],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Mace,
    name: 'Mace',
    tier: ItemTierType.Normal,
    qlvl: 8,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [3, 10],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [27],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.MorningStar,
    name: 'Morning Star',
    tier: ItemTierType.Normal,
    qlvl: 13,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [7, 16],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [36],
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
    id: ids.Flail,
    name: 'Flail',
    tier: ItemTierType.Normal,
    qlvl: 19,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [1, 24],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [41],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [35],
        },
        [BasePropertyType.Durability]: {
          values: [30],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.WarHammer,
    name: 'War Hammer',
    tier: ItemTierType.Normal,
    qlvl: 25,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [19, 29],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [53],
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
    id: ids.Maul,
    name: 'Maul',
    tier: ItemTierType.Normal,
    qlvl: 21,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [30, 43],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [69],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.GreatMaul,
    name: 'Great Maul',
    tier: ItemTierType.Normal,
    qlvl: 32,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [38, 58],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [12],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [99],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.Cudgel,
    name: 'Cudgel',
    tier: ItemTierType.Exceptional,
    clvl: 18,
    qlvl: 30,
    size: [3, 1],
    baseId: ids.Club,
    imageId: ids.Club,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [6, 21],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.BarbedClub,
    name: 'Barbed Club',
    tier: ItemTierType.Exceptional,
    clvl: 20,
    qlvl: 32,
    size: [3, 1],
    baseId: ids.SpikedClub,
    imageId: ids.SpikedClub,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [13, 25],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [30],
        },
        [BasePropertyType.Durability]: {
          values: [36],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.FlangedMace,
    name: 'Flanged Mace',
    tier: ItemTierType.Exceptional,
    clvl: 23,
    qlvl: 35,
    size: [3, 1],
    baseId: ids.Mace,
    imageId: ids.Mace,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [15, 23],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [61],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.JaggedStar,
    name: 'Jagged Star',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 39,
    size: [3, 1],
    baseId: ids.MorningStar,
    imageId: ids.MorningStar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [20, 31],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [74],
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
    id: ids.Knout,
    name: 'Knout',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 43,
    size: [3, 2],
    baseId: ids.Flail,
    imageId: ids.Flail,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [13, 35],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [82],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [73],
        },
        [BasePropertyType.Durability]: {
          values: [30],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.BattleHammer,
    name: 'Battle Hammer',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 48,
    size: [3, 2],
    baseId: ids.WarHammer,
    imageId: ids.WarHammer,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [35, 58],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [100],
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
    id: ids.WarClub,
    name: 'War Club',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 45,
    size: [4, 2],
    baseId: ids.Maul,
    imageId: ids.Maul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [53, 78],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [124],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.MartelDeFer,
    name: 'Martel de Fer',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 53,
    size: [3, 2],
    baseId: ids.GreatMaul,
    imageId: ids.GreatMaul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [61, 99],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [169],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.Truncheon,
    name: 'Truncheon',
    tier: ItemTierType.Elite,
    clvl: 39,
    qlvl: 52,
    size: [3, 1],
    baseId: ids.Club,
    imageId: ids.Club,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [35, 43],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [88],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [43],
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
    id: ids.TyrantClub,
    name: 'Tyrant Club',
    tier: ItemTierType.Elite,
    clvl: 42,
    qlvl: 57,
    size: [3, 1],
    baseId: ids.SpikedClub,
    imageId: ids.SpikedClub,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [32, 58],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [133],
        },
        [BasePropertyType.Durability]: {
          values: [65],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.ReinforcedMace,
    name: 'Reinforced Mace',
    tier: ItemTierType.Elite,
    clvl: 47,
    qlvl: 63,
    size: [3, 1],
    baseId: ids.Mace,
    imageId: ids.Mace,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [41, 49],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [145],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [46],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.DevilStar,
    name: 'Devil Star',
    tier: ItemTierType.Elite,
    clvl: 52,
    qlvl: 70,
    size: [3, 1],
    baseId: ids.MorningStar,
    imageId: ids.MorningStar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [43, 53],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [153],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [44],
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
    id: ids.Scourge,
    name: 'Scourge',
    tier: ItemTierType.Elite,
    clvl: 57,
    qlvl: 76,
    size: [3, 2],
    baseId: ids.Flail,
    imageId: ids.Flail,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [3, 80],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [125],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [77],
        },
        [BasePropertyType.Durability]: {
          values: [65],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.LegendaryMallet,
    name: 'Legendary Mallet',
    tier: ItemTierType.Elite,
    clvl: 61,
    qlvl: 82,
    size: [3, 2],
    baseId: ids.WarHammer,
    imageId: ids.WarHammer,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [50, 61],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [189],
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
    id: ids.OgreMaul,
    name: 'Ogre Maul',
    tier: ItemTierType.Elite,
    clvl: 51,
    qlvl: 69,
    size: [4, 2],
    baseId: ids.Maul,
    imageId: ids.Maul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [77, 106],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [225],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.ThunderMaul,
    name: 'Thunder Maul',
    tier: ItemTierType.Elite,
    clvl: 65,
    qlvl: 85,
    size: [3, 2],
    baseId: ids.GreatMaul,
    imageId: ids.GreatMaul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [33, 180],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [253],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
]);

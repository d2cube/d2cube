import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  type: ItemType.Axe,
})([
  {
    id: ids.HandAxe,
    name: 'Hand Axe',
    tier: ItemTierType.Normal,
    qlvl: 3,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [3, 6],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.Durability]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Axe,
    name: 'Axe',
    tier: ItemTierType.Normal,
    qlvl: 7,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [4, 11],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [32],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.DoubleAxe,
    name: 'Double Axe',
    tier: ItemTierType.Normal,
    qlvl: 13,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [5, 13],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [43],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.MilitaryPick,
    name: 'Military Pick',
    tier: ItemTierType.Normal,
    qlvl: 19,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [7, 11],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [49],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [33],
        },
        [BasePropertyType.Durability]: {
          values: [26],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.WarAxe,
    name: 'War Axe',
    tier: ItemTierType.Normal,
    qlvl: 25,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [10, 18],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [67],
        },
        [BasePropertyType.Durability]: {
          values: [26],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.LargeAxe,
    name: 'Large Axe',
    tier: ItemTierType.Normal,
    qlvl: 6,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [6, 13],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [35],
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
    id: ids.BroadAxe,
    name: 'Broad Axe',
    tier: ItemTierType.Normal,
    qlvl: 12,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [10, 18],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [48],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.BattleAxe,
    name: 'Battle Axe',
    tier: ItemTierType.Normal,
    qlvl: 17,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [12, 32],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [54],
        },
        [BasePropertyType.Durability]: {
          values: [40],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.GreatAxe,
    name: 'Great Axe',
    tier: ItemTierType.Normal,
    qlvl: 23,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [9, 30],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [63],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [39],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.GiantAxe,
    name: 'Giant Axe',
    tier: ItemTierType.Normal,
    qlvl: 27,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [22, 45],
        },
        [BasePropertyType.MeleeRange]: {
          values: [4],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [70],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.ThrowingAxe,
    name: 'Throwing Axe',
    tier: ItemTierType.Normal,
    qlvl: 7,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {
          values: [8, 12],
        },
        [BasePropertyType.Damage1H]: {
          values: [4, 7],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [40],
        },
      },
    },
  },
  {
    id: ids.BalancedAxe,
    name: 'Balanced Axe',
    tier: ItemTierType.Normal,
    qlvl: 16,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {
          values: [12, 15],
        },
        [BasePropertyType.Damage1H]: {
          values: [5, 10],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [57],
        },
      },
    },
  },
  {
    id: ids.Hatchet,
    name: 'Hatchet',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 31,
    size: [2, 1],
    baseId: ids.HandAxe,
    imageId: ids.HandAxe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [10, 21],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [25],
        },
        [BasePropertyType.Durability]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Cleaver,
    name: 'Cleaver',
    tier: ItemTierType.Exceptional,
    clvl: 22,
    qlvl: 34,
    size: [3, 2],
    baseId: ids.Axe,
    imageId: ids.Axe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [10, 33],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [68],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.TwinAxe,
    name: 'Twin Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 39,
    size: [3, 2],
    baseId: ids.DoubleAxe,
    imageId: ids.DoubleAxe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [13, 38],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [85],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.Crowbill,
    name: 'Crowbill',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 43,
    size: [3, 2],
    baseId: ids.MilitaryPick,
    imageId: ids.MilitaryPick,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [14, 34],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [94],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [70],
        },
        [BasePropertyType.Durability]: {
          values: [26],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.Naga,
    name: 'Naga',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 48,
    size: [3, 2],
    baseId: ids.WarAxe,
    imageId: ids.WarAxe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [16, 45],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [121],
        },
        [BasePropertyType.Durability]: {
          values: [26],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.MilitaryAxe,
    name: 'Military Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 34,
    size: [3, 2],
    baseId: ids.LargeAxe,
    imageId: ids.LargeAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [14, 34],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [73],
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
    id: ids.BeardedAxe,
    name: 'Bearded Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 38,
    size: [3, 2],
    baseId: ids.BroadAxe,
    imageId: ids.BroadAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [21, 49],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [92],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.Tabar,
    name: 'Tabar',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 42,
    size: [3, 2],
    baseId: ids.BattleAxe,
    imageId: ids.BattleAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [24, 77],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [101],
        },
        [BasePropertyType.Durability]: {
          values: [40],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.GothicAxe,
    name: 'Gothic Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 46,
    size: [4, 2],
    baseId: ids.GreatAxe,
    imageId: ids.GreatAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [18, 70],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [115],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [79],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.AncientAxe,
    name: 'Ancient Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 51,
    size: [3, 2],
    baseId: ids.GiantAxe,
    imageId: ids.GiantAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [43, 85],
        },
        [BasePropertyType.MeleeRange]: {
          values: [4],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [125],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.Francisca,
    name: 'Francisca',
    tier: ItemTierType.Exceptional,
    clvl: 22,
    qlvl: 34,
    size: [2, 1],
    baseId: ids.ThrowingAxe,
    imageId: ids.ThrowingAxe,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {
          values: [18, 33],
        },
        [BasePropertyType.Damage1H]: {
          values: [11, 22],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [80],
        },
      },
    },
  },
  {
    id: ids.Hurlbat,
    name: 'Balanced Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 41,
    size: [3, 2],
    baseId: ids.BalancedAxe,
    imageId: ids.BalancedAxe,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {
          values: [24, 34],
        },
        [BasePropertyType.Damage1H]: {
          values: [13, 27],
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
        [BasePropertyType.MinimumDexterity]: {
          values: [106],
        },
      },
    },
  },
  {
    id: ids.Tomahawk,
    name: 'Tomahawk',
    tier: ItemTierType.Elite,
    clvl: 40,
    qlvl: 54,
    size: [2, 1],
    baseId: ids.HandAxe,
    imageId: ids.HandAxe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [33, 58],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [125],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [67],
        },
        [BasePropertyType.Durability]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.SmallCrescent,
    name: 'Small Crescent',
    tier: ItemTierType.Elite,
    clvl: 45,
    qlvl: 61,
    size: [3, 2],
    baseId: ids.Axe,
    imageId: ids.Axe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [38, 60],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [115],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [83],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.EttinAxe,
    name: 'Ettin Axe',
    tier: ItemTierType.Elite,
    clvl: 52,
    qlvl: 70,
    size: [3, 2],
    baseId: ids.DoubleAxe,
    imageId: ids.DoubleAxe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [33, 66],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [145],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [45],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.WarSpike,
    name: 'War Spike',
    tier: ItemTierType.Elite,
    clvl: 59,
    qlvl: 79,
    size: [3, 2],
    baseId: ids.MilitaryPick,
    imageId: ids.MilitaryPick,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [30, 48],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [133],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [54],
        },
        [BasePropertyType.Durability]: {
          values: [26],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.BerserkerAxe,
    name: 'Berserker Axe',
    tier: ItemTierType.Elite,
    clvl: 64,
    qlvl: 85,
    size: [3, 2],
    baseId: ids.WarAxe,
    imageId: ids.WarAxe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [24, 71],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [138],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [59],
        },
        [BasePropertyType.Durability]: {
          values: [26],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.FeralAxe,
    name: 'Feral Axe',
    tier: ItemTierType.Elite,
    clvl: 42,
    qlvl: 57,
    size: [3, 2],
    baseId: ids.LargeAxe,
    imageId: ids.LargeAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [25, 123],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-15],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [196],
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
    id: ids.SilverEdgedAxe,
    name: 'Silver-Edged Axe',
    tier: ItemTierType.Elite,
    clvl: 48,
    qlvl: 65,
    size: [3, 2],
    baseId: ids.BroadAxe,
    imageId: ids.BroadAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [62, 110],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [166],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [65],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.Decapitator,
    name: 'Decapitator',
    tier: ItemTierType.Elite,
    clvl: 54,
    qlvl: 73,
    size: [3, 2],
    baseId: ids.BattleAxe,
    imageId: ids.BattleAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [49, 137],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [189],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [33],
        },
        [BasePropertyType.Durability]: {
          values: [40],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.ChampionAxe,
    name: 'Champion Axe',
    tier: ItemTierType.Elite,
    clvl: 61,
    qlvl: 82,
    size: [4, 2],
    baseId: ids.GreatAxe,
    imageId: ids.GreatAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [59, 94],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [167],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [59],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.GloriusAxe,
    name: 'Glorius Axe',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    size: [3, 2],
    baseId: ids.GiantAxe,
    imageId: ids.GiantAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [60, 124],
        },
        [BasePropertyType.MeleeRange]: {
          values: [4],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [164],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [55],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.FlyingAxe,
    name: 'FlyingAxe',
    tier: ItemTierType.Elite,
    clvl: 42,
    qlvl: 56,
    size: [2, 1],
    baseId: ids.ThrowingAxe,
    imageId: ids.ThrowingAxe,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {
          values: [15, 66],
        },
        [BasePropertyType.Damage1H]: {
          values: [17, 65],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [88],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [108],
        },
      },
    },
  },
  {
    id: ids.WingedAxe,
    name: 'Winged Axe',
    tier: ItemTierType.Elite,
    clvl: 60,
    qlvl: 80,
    size: [3, 2],
    baseId: ids.BalancedAxe,
    imageId: ids.BalancedAxe,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {
          values: [7, 60],
        },
        [BasePropertyType.Damage1H]: {
          values: [11, 56],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [96],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [122],
        },
      },
    },
  },
]);

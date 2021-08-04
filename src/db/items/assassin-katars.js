import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  PlayerClassType,
  WeaponClassType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  playerClass: PlayerClassType.Assassin,
  class: WeaponClassType.Claw,
  size: [3, 1],
  type: ItemType.AssassinKatar,
})([
  {
    id: ids.Katar,
    name: 'Katar',
    tier: ItemTierType.Normal,
    qlvl: 1,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [4, 7],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [20],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [20],
        },
        [BasePropertyType.Durability]: {
          values: [48],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.WristBlade,
    name: 'Wrist Blade',
    tier: ItemTierType.Normal,
    qlvl: 9,
    imageId: ids.Katar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [5, 9],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [33],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [33],
        },
        [BasePropertyType.Durability]: {
          values: [52],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.HatchetHands,
    name: 'Hatchet Hands',
    tier: ItemTierType.Normal,
    qlvl: 12,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [2, 15],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [37],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [37],
        },
        [BasePropertyType.Durability]: {
          values: [56],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Cestus,
    name: 'Cestus',
    tier: ItemTierType.Normal,
    qlvl: 15,
    imageId: ids.HatchetHands,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [7, 15],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [42],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [42],
        },
        [BasePropertyType.Durability]: {
          values: [72],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Claws,
    name: 'Claws',
    tier: ItemTierType.Normal,
    qlvl: 18,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [8, 15],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [46],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [46],
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
    id: ids.BladeTalons,
    name: 'Blade Talons',
    tier: ItemTierType.Normal,
    qlvl: 21,
    imageId: ids.Claws,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [10, 14],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [50],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [50],
        },
        [BasePropertyType.Durability]: {
          values: [69],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.ScissorsKatar,
    name: 'Scissors Katar',
    tier: ItemTierType.Normal,
    qlvl: 24,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [9, 17],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [55],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [55],
        },
        [BasePropertyType.Durability]: {
          values: [68],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.Quhab,
    name: 'Quhab',
    tier: ItemTierType.Exceptional,
    clvl: 21,
    qlvl: 28,
    baseId: ids.Katar,
    imageId: ids.Katar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [11, 24],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [57],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [57],
        },
        [BasePropertyType.Durability]: {
          values: [48],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.WristSpike,
    name: 'Wrist Spike',
    tier: ItemTierType.Exceptional,
    clvl: 24,
    qlvl: 32,
    baseId: ids.WristBlade,
    imageId: ids.Katar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [13, 27],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [66],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [66],
        },
        [BasePropertyType.Durability]: {
          values: [56],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Fascia,
    name: 'Fascia',
    tier: ItemTierType.Exceptional,
    clvl: 27,
    qlvl: 36,
    baseId: ids.HatchetHands,
    imageId: ids.HatchetHands,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [8, 37],
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
        [BasePropertyType.MinimumDexterity]: {
          values: [69],
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
    id: ids.HandScythe,
    name: 'Hand Scythe',
    tier: ItemTierType.Exceptional,
    clvl: 30,
    qlvl: 41,
    baseId: ids.Cestus,
    imageId: ids.HatchetHands,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [16, 37],
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
        [BasePropertyType.MinimumDexterity]: {
          values: [73],
        },
        [BasePropertyType.Durability]: {
          values: [72],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.GreaterClaws,
    name: 'Greater Claws',
    tier: ItemTierType.Exceptional,
    clvl: 33,
    qlvl: 45,
    baseId: ids.Claws,
    imageId: ids.Claws,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [18, 37],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [76],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [76],
        },
        [BasePropertyType.Durability]: {
          values: [52],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.GreaterTalons,
    name: 'Greater Talons',
    tier: ItemTierType.Exceptional,
    clvl: 37,
    qlvl: 50,
    baseId: ids.BladeTalons,
    imageId: ids.Claws,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [21, 35],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-30],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [79],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [79],
        },
        [BasePropertyType.Durability]: {
          values: [69],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.ScissorsQuhab,
    name: 'Scissors Quhab',
    tier: ItemTierType.Exceptional,
    clvl: 40,
    qlvl: 54,
    baseId: ids.ScissorsKatar,
    imageId: ids.ScissorsKatar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [19, 40],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [82],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [82],
        },
        [BasePropertyType.Durability]: {
          values: [68],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.Suwayyah,
    name: 'Suwayyah',
    tier: ItemTierType.Elite,
    clvl: 44,
    qlvl: 59,
    baseId: ids.Katar,
    imageId: ids.Katar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [39, 52],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [99],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [99],
        },
        [BasePropertyType.Durability]: {
          values: [48],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.WristSword,
    name: 'Wrist Sword',
    tier: ItemTierType.Elite,
    clvl: 46,
    qlvl: 62,
    baseId: ids.WristBlade,
    imageId: ids.Katar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [34, 45],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [105],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [105],
        },
        [BasePropertyType.Durability]: {
          values: [56],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.WarFist,
    name: 'War Fist',
    tier: ItemTierType.Elite,
    clvl: 51,
    qlvl: 68,
    baseId: ids.HatchetHands,
    imageId: ids.HatchetHands,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [44, 53],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [108],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [108],
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
    id: ids.BattleCestus,
    name: 'Battle Cestus',
    tier: ItemTierType.Elite,
    clvl: 54,
    qlvl: 73,
    baseId: ids.Cestus,
    imageId: ids.HatchetHands,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [36, 42],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [110],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [110],
        },
        [BasePropertyType.Durability]: {
          values: [72],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.FeralClaws,
    name: 'Feral Claws',
    tier: ItemTierType.Elite,
    clvl: 58,
    qlvl: 78,
    baseId: ids.Claws,
    imageId: ids.Claws,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [22, 53],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [113],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [113],
        },
        [BasePropertyType.Durability]: {
          values: [52],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.RunicTalons,
    name: 'Runic Talons',
    tier: ItemTierType.Elite,
    clvl: 60,
    qlvl: 81,
    baseId: ids.BladeTalons,
    imageId: ids.Claws,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [24, 44],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-30],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [115],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [115],
        },
        [BasePropertyType.Durability]: {
          values: [69],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.ScissorsSuwayyah,
    name: 'Scissors Suwayyah',
    tier: ItemTierType.Elite,
    clvl: 64,
    qlvl: 85,
    baseId: ids.ScissorsKatar,
    imageId: ids.ScissorsKatar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [40, 51],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [118],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [118],
        },
        [BasePropertyType.Durability]: {
          values: [68],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
]);

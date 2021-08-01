import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  type: ItemType.Dagger,
})([
  {
    id: ids.Dagger,
    name: 'Dagger',
    tier: ItemTierType.Normal,
    qlvl: 3,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [1, 4],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.Durability]: {
          values: [16],
        },
        [BasePropertyType.MaxSockets]: {
          values: [1],
        },
      },
    },
  },
  {
    id: ids.Dirk,
    name: 'Dirk',
    tier: ItemTierType.Normal,
    qlvl: 9,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [3, 9],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [25],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [1],
        },
      },
    },
  },
  {
    id: ids.Kris,
    name: 'Kris',
    tier: ItemTierType.Normal,
    qlvl: 17,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [2, 11],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [45],
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
    id: ids.Blade,
    name: 'Blade',
    tier: ItemTierType.Normal,
    qlvl: 23,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [4, 15],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [35],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [51],
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
    id: ids.ThrowingKnife,
    name: 'Throwing Knife',
    tier: ItemTierType.Normal,
    qlvl: 2,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {
          values: [4, 9],
        },
        [BasePropertyType.Damage1H]: {
          values: [2, 3],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [21],
        },
      },
    },
  },
  {
    id: ids.BalancedKnife,
    name: 'Balanced Knife',
    tier: ItemTierType.Normal,
    qlvl: 13,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {
          values: [6, 11],
        },
        [BasePropertyType.Damage1H]: {
          values: [1, 8],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [51],
        },
      },
    },
  },
  {
    id: ids.Poignard,
    name: 'Poignard',
    tier: ItemTierType.Exceptional,
    clvl: 19,
    qlvl: 31,
    size: [2, 1],
    baseId: ids.Dagger,
    imageId: ids.Dagger,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [6, 18],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.Durability]: {
          values: [16],
        },
        [BasePropertyType.MaxSockets]: {
          values: [1],
        },
      },
    },
  },
  {
    id: ids.Rondel,
    name: 'Rondel',
    tier: ItemTierType.Exceptional,
    clvl: 24,
    qlvl: 36,
    size: [2, 1],
    baseId: ids.Dirk,
    imageId: ids.Dirk,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [10, 26],
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
          values: [58],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [1],
        },
      },
    },
  },
  {
    id: ids.Cinquedeas,
    name: 'Cinquedeas',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 42,
    size: [3, 1],
    baseId: ids.Kris,
    imageId: ids.Kris,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [15, 31],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [88],
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
    id: ids.Stiletto,
    name: 'Stiletto',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 46,
    size: [3, 1],
    baseId: ids.Blade,
    imageId: ids.Blade,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [19, 36],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [73],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [97],
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
    id: ids.BattleDart,
    name: 'Battle Dart',
    tier: ItemTierType.Exceptional,
    clvl: 19,
    qlvl: 31,
    size: [2, 1],
    baseId: ids.ThrowingKnife,
    imageId: ids.ThrowingKnife,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {
          values: [11, 24],
        },
        [BasePropertyType.Damage1H]: {
          values: [8, 16],
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
          values: [52],
        },
      },
    },
  },
  {
    id: ids.WarDart,
    name: 'War Dart',
    tier: ItemTierType.Exceptional,
    clvl: 22,
    qlvl: 39,
    size: [2, 1],
    baseId: ids.BalancedKnife,
    imageId: ids.BalancedKnife,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {
          values: [14, 27],
        },
        [BasePropertyType.Damage1H]: {
          values: [6, 24],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [97],
        },
      },
    },
  },
  {
    id: ids.BoneKnife,
    name: 'Bone Knife',
    tier: ItemTierType.Elite,
    clvl: 43,
    qlvl: 58,
    size: [2, 1],
    baseId: ids.Dagger,
    imageId: ids.Dagger,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [23, 49],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [38],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [75],
        },
        [BasePropertyType.Durability]: {
          values: [26],
        },
        [BasePropertyType.MaxSockets]: {
          values: [1],
        },
      },
    },
  },
  {
    id: ids.MithrilPoint,
    name: 'Mithril Point',
    tier: ItemTierType.Elite,
    clvl: 52,
    qlvl: 70,
    size: [2, 1],
    baseId: ids.Dirk,
    imageId: ids.Dirk,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [37, 53],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [55],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [98],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [1],
        },
      },
    },
  },
  {
    id: ids.FangedKnife,
    name: 'Fanged Knife',
    tier: ItemTierType.Elite,
    clvl: 62,
    qlvl: 83,
    size: [3, 1],
    baseId: ids.Kris,
    imageId: ids.Kris,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [15, 57],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [42],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [86],
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
    id: ids.LegendSpike,
    name: 'Legend Spike',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    size: [3, 1],
    baseId: ids.Blade,
    imageId: ids.Blade,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [31, 47],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [65],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [67],
        },
        [BasePropertyType.Durability]: {
          values: [47],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.FlyingKnife,
    name: 'Flying Knife',
    tier: ItemTierType.Elite,
    clvl: 48,
    qlvl: 64,
    size: [2, 1],
    baseId: ids.ThrowingKnife,
    imageId: ids.ThrowingKnife,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {
          values: [23, 54],
        },
        [BasePropertyType.Damage1H]: {
          values: [23, 54],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [48],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [141],
        },
      },
    },
  },
  {
    id: ids.WingedKnife,
    name: 'Winged Knife',
    tier: ItemTierType.Elite,
    clvl: 57,
    qlvl: 77,
    size: [2, 1],
    baseId: ids.BalancedKnife,
    imageId: ids.BalancedKnife,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {
          values: [23, 39],
        },
        [BasePropertyType.Damage1H]: {
          values: [27, 35],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [45],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [142],
        },
      },
    },
  },
]);

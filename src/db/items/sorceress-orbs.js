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
  playerClass: PlayerClassType.Sorceress,
  class: WeaponClassType.Staff,
  type: ItemType.SorceressOrb,
})([
  {
    id: ids.EagleOrb,
    name: 'Eagle Orb',
    tier: ItemTierType.Normal,
    qlvl: 1,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [2, 5],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
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
    id: ids.SacredGlobe,
    name: 'Sacred Orb',
    tier: ItemTierType.Normal,
    qlvl: 8,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [3, 8],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.Durability]: {
          values: [30],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.SmokedSphere,
    name: 'Smoked Sphere',
    tier: ItemTierType.Normal,
    qlvl: 12,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [4, 10],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.ClaspedOrb,
    name: 'Clapsed Orb',
    tier: ItemTierType.Normal,
    qlvl: 17,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [5, 12],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
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
    id: ids.JaredsStone,
    name: "Jared's Stone",
    tier: ItemTierType.Normal,
    qlvl: 24,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [8, 18],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.GlowingOrb,
    name: 'Glowing Orb',
    tier: ItemTierType.Exceptional,
    clvl: 24,
    qlvl: 32,
    size: [2, 1],
    baseId: ids.EagleOrb,
    imageId: ids.EagleOrb,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [8, 21],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
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
    id: ids.CrystallineGlobe,
    name: 'Crystalline Globe',
    tier: ItemTierType.Exceptional,
    clvl: 27,
    qlvl: 37,
    size: [2, 1],
    baseId: ids.SacredGlobe,
    imageId: ids.SacredGlobe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [10, 26],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.Durability]: {
          values: [30],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.CloudySphere,
    name: 'Cloudy Sphere',
    tier: ItemTierType.Exceptional,
    clvl: 30,
    qlvl: 41,
    size: [2, 1],
    baseId: ids.SmokedSphere,
    imageId: ids.SmokedSphere,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [11, 29],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.SparklingBall,
    name: 'Sparkling Ball',
    tier: ItemTierType.Exceptional,
    clvl: 34,
    qlvl: 46,
    size: [2, 1],
    baseId: ids.ClaspedOrb,
    imageId: ids.ClaspedOrb,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [13, 32],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
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
    id: ids.SwirlingCrystal,
    name: 'Swirling Crystal',
    tier: ItemTierType.Exceptional,
    clvl: 37,
    qlvl: 50,
    size: [3, 1],
    baseId: ids.JaredsStone,
    imageId: ids.JaredsStone,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [18, 42],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.HeavenlyStone,
    name: 'Heavenly Stone',
    tier: ItemTierType.Elite,
    clvl: 44,
    qlvl: 59,
    size: [2, 1],
    baseId: ids.EagleOrb,
    imageId: ids.EagleOrb,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [21, 46],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
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
    id: ids.EldritchOrb,
    name: 'Eldritch Orb',
    tier: ItemTierType.Elite,
    clvl: 50,
    qlvl: 67,
    size: [2, 1],
    baseId: ids.SacredGlobe,
    imageId: ids.SacredGlobe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [18, 50],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.Durability]: {
          values: [30],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.DemonHeart,
    name: 'Demon Heart',
    tier: ItemTierType.Elite,
    clvl: 56,
    qlvl: 75,
    size: [2, 1],
    baseId: ids.SmokedSphere,
    imageId: ids.SmokedSphere,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [23, 55],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.VortexOrb,
    name: 'Vortex Orb',
    tier: ItemTierType.Elite,
    clvl: 63,
    qlvl: 84,
    size: [2, 1],
    baseId: ids.ClaspedOrb,
    imageId: ids.ClaspedOrb,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [12, 66],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
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
    id: ids.DimensionalShard,
    name: 'Dimensional Shard',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    size: [3, 1],
    baseId: ids.JaredsStone,
    imageId: ids.JaredsStone,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [30, 53],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
]);

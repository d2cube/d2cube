import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  class: WeaponClassType.Spear,
  size: [4, 2],
  type: ItemType.Spear,
})([
  {
    id: ids.Spear,
    name: 'Spear',
    tier: ItemTierType.Normal,
    qlvl: 5,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [3, 15],
        },
        [BasePropertyType.MeleeRange]: {
          values: [4],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
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
    id: ids.Trident,
    name: 'Trident',
    tier: ItemTierType.Normal,
    qlvl: 9,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [9, 15],
        },
        [BasePropertyType.MeleeRange]: {
          values: [4],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [38],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [24],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.Brandistock,
    name: 'Brandistock',
    tier: ItemTierType.Normal,
    qlvl: 16,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [7, 17],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [40],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [50],
        },
        [BasePropertyType.Durability]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.Spetum,
    name: 'Spetum',
    tier: ItemTierType.Normal,
    qlvl: 20,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [15, 23],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [54],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [35],
        },
        [BasePropertyType.Durability]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.Pike,
    name: 'Pike',
    tier: ItemTierType.Normal,
    qlvl: 24,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [14, 63],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [60],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [45],
        },
        [BasePropertyType.Durability]: {
          values: [25],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.WarSpear,
    name: 'War Spear',
    tier: ItemTierType.Exceptional,
    clvl: 21,
    qlvl: 33,
    baseId: ids.Spear,
    imageId: ids.Spear,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [10, 37],
        },
        [BasePropertyType.MeleeRange]: {
          values: [4],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [25],
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
    id: ids.Fuscina,
    name: 'Fuscina',
    tier: ItemTierType.Exceptional,
    clvl: 24,
    qlvl: 36,
    baseId: ids.Trident,
    imageId: ids.Trident,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [19, 37],
        },
        [BasePropertyType.MeleeRange]: {
          values: [4],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [77],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [25],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.WarFork,
    name: 'War Fork',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 41,
    baseId: ids.Brandistock,
    imageId: ids.Brandistock,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [16, 40],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [80],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [95],
        },
        [BasePropertyType.Durability]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.Yari,
    name: 'Yari',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 44,
    baseId: ids.Spetum,
    imageId: ids.Spetum,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [29, 50],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [101],
        },
        [BasePropertyType.Durability]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.Lance,
    name: 'Lance',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 47,
    baseId: ids.Pike,
    imageId: ids.Pike,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [27, 114],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [110],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [88],
        },
        [BasePropertyType.Durability]: {
          values: [25],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.HyperionSpear,
    name: 'Hyperion Spear',
    tier: ItemTierType.Elite,
    clvl: 43,
    qlvl: 58,
    baseId: ids.Spear,
    imageId: ids.Spear,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [35, 119],
        },
        [BasePropertyType.MeleeRange]: {
          values: [4],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [155],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [120],
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
    id: ids.StygianPike,
    name: 'Stygian Pike',
    tier: ItemTierType.Elite,
    clvl: 49,
    qlvl: 66,
    baseId: ids.Trident,
    imageId: ids.Trident,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [29, 114],
        },
        [BasePropertyType.MeleeRange]: {
          values: [4],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [168],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [97],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.Mancatcher,
    name: 'Mancatcher',
    tier: ItemTierType.Elite,
    clvl: 55,
    qlvl: 74,
    baseId: ids.Brandistock,
    imageId: ids.Brandistock,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [42, 92],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [132],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [134],
        },
        [BasePropertyType.Durability]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.GhostSpear,
    name: 'Ghost Spear',
    tier: ItemTierType.Elite,
    clvl: 62,
    qlvl: 83,
    baseId: ids.Spetum,
    imageId: ids.Spetum,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [18, 155],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [122],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [163],
        },
        [BasePropertyType.Durability]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.WarPike,
    name: 'War Pike',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    baseId: ids.Pike,
    imageId: ids.Pike,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [33, 1778],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [165],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [106],
        },
        [BasePropertyType.Durability]: {
          values: [25],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
]);

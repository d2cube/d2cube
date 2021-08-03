import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  type: ItemType.Wand,
  size: [2, 1],
})([
  {
    id: ids.Wand,
    name: 'Wand',
    tier: ItemTierType.Normal,
    qlvl: 2,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [2, 4],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.Durability]: {
          values: [15],
        },
        [BasePropertyType.MaxSockets]: {
          values: [1],
        },
      },
    },
  },
  {
    id: ids.YewWand,
    name: 'Yew Wand',
    tier: ItemTierType.Normal,
    qlvl: 12,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [2, 8],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.Durability]: {
          values: [15],
        },
        [BasePropertyType.MaxSockets]: {
          values: [1],
        },
      },
    },
  },
  {
    id: ids.BoneWand,
    name: 'Bone Wand',
    tier: ItemTierType.Normal,
    qlvl: 18,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [3, 7],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.Durability]: {
          values: [15],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.GrimWand,
    name: 'Grim Wand',
    tier: ItemTierType.Normal,
    qlvl: 26,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [5, 11],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.Durability]: {
          values: [15],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.BurntWand,
    name: 'Burnt Wand',
    tier: ItemTierType.Exceptional,
    clvl: 19,
    qlvl: 31,
    baseId: ids.Wand,
    imageId: ids.Wand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [8, 18],
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
        [BasePropertyType.Durability]: {
          values: [15],
        },
        [BasePropertyType.MaxSockets]: {
          values: [1],
        },
      },
    },
  },
  {
    id: ids.PetrifiedWand,
    name: 'Petrified Wand',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 38,
    baseId: ids.YewWand,
    imageId: ids.YewWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [8, 24],
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
        [BasePropertyType.Durability]: {
          values: [15],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.TombWand,
    name: 'Tomb Wand',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 43,
    baseId: ids.BoneWand,
    imageId: ids.BoneWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [10, 22],
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
          values: [15],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.GraveWand,
    name: 'Grave Wand',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 49,
    baseId: ids.GrimWand,
    imageId: ids.GrimWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [13, 29],
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
        [BasePropertyType.Durability]: {
          values: [15],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.PolishedWand,
    name: 'Polished Wand',
    tier: ItemTierType.Elite,
    clvl: 41,
    qlvl: 55,
    baseId: ids.Wand,
    imageId: ids.Wand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [18, 33],
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
        [BasePropertyType.Durability]: {
          values: [22],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.GhostWand,
    name: 'Ghost Wand',
    tier: ItemTierType.Elite,
    clvl: 48,
    qlvl: 65,
    baseId: ids.YewWand,
    imageId: ids.YewWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [20, 42],
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
        [BasePropertyType.Durability]: {
          values: [14],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.LichWand,
    name: 'Lich Wand',
    tier: ItemTierType.Elite,
    clvl: 56,
    qlvl: 75,
    baseId: ids.BoneWand,
    imageId: ids.BoneWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [10, 31],
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
          values: [17],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.UnearthedWand,
    name: 'Unearthed Wand',
    tier: ItemTierType.Elite,
    clvl: 64,
    qlvl: 86,
    baseId: ids.GrimWand,
    imageId: ids.GrimWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [22, 28],
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
        [BasePropertyType.Durability]: {
          values: [18],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
]);

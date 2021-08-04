import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  size: [2, 2],
  type: ItemType.Helm,
})([
  {
    id: ids.Cap,
    name: 'Cap',
    tier: ItemTierType.Normal,
    qlvl: 1,
    properties: {
      base: {
        [BasePropertyType.Defense]: [3, 5],
        [BasePropertyType.Durability]: [12],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.SkullCap,
    name: 'Skull Cap',
    tier: ItemTierType.Normal,
    qlvl: 5,
    properties: {
      base: {
        [BasePropertyType.Defense]: [8, 11],
        [BasePropertyType.MinimumStrength]: [15],
        [BasePropertyType.Durability]: [18],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.Helm,
    name: 'Helm',
    tier: ItemTierType.Normal,
    qlvl: 11,
    properties: {
      base: {
        [BasePropertyType.Defense]: [15, 18],
        [BasePropertyType.MinimumStrength]: [26],
        [BasePropertyType.Durability]: [24],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.FullHelm,
    name: 'Full Helm',
    tier: ItemTierType.Normal,
    qlvl: 15,
    properties: {
      base: {
        [BasePropertyType.Defense]: [23, 26],
        [BasePropertyType.MinimumStrength]: [41],
        [BasePropertyType.Durability]: [30],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.Mask,
    name: 'Mask',
    tier: ItemTierType.Normal,
    qlvl: 19,
    properties: {
      base: {
        [BasePropertyType.Defense]: [9, 27],
        [BasePropertyType.MinimumStrength]: [23],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.BoneHelm,
    name: 'Bone Helm',
    tier: ItemTierType.Normal,
    qlvl: 22,
    properties: {
      base: {
        [BasePropertyType.Defense]: [33, 36],
        [BasePropertyType.MinimumStrength]: [25],
        [BasePropertyType.Durability]: [40],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.GreatHelm,
    name: 'Great Helm',
    tier: ItemTierType.Normal,
    qlvl: 23,
    properties: {
      base: {
        [BasePropertyType.Defense]: [30, 35],
        [BasePropertyType.MinimumStrength]: [63],
        [BasePropertyType.Durability]: [40],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.Crown,
    name: 'Crown',
    tier: ItemTierType.Normal,
    qlvl: 29,
    properties: {
      base: {
        [BasePropertyType.Defense]: [25, 45],
        [BasePropertyType.MinimumStrength]: [55],
        [BasePropertyType.Durability]: [50],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.WarHat,
    name: 'War Hat',
    tier: ItemTierType.Exceptional,
    clvl: 22,
    qlvl: 34,
    baseId: ids.Cap,
    imageId: ids.Cap,
    properties: {
      base: {
        [BasePropertyType.Defense]: [45, 54],
        [BasePropertyType.MinimumStrength]: [20],
        [BasePropertyType.Durability]: [12],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.Sallet,
    name: 'Sallet',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 37,
    baseId: ids.SkullCap,
    imageId: ids.SkullCap,
    properties: {
      base: {
        [BasePropertyType.Defense]: [52, 62],
        [BasePropertyType.MinimumStrength]: [43],
        [BasePropertyType.Durability]: [18],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.Casque,
    name: 'Casque',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 42,
    baseId: ids.Helm,
    imageId: ids.Helm,
    properties: {
      base: {
        [BasePropertyType.Defense]: [63, 72],
        [BasePropertyType.MinimumStrength]: [59],
        [BasePropertyType.Durability]: [24],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.Basinet,
    name: 'Basinet',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 45,
    baseId: ids.FullHelm,
    imageId: ids.FullHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: [75, 84],
        [BasePropertyType.MinimumStrength]: [82],
        [BasePropertyType.Durability]: [30],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.DeathMask,
    name: 'Death Mask',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 48,
    baseId: ids.Mask,
    imageId: ids.Mask,
    properties: {
      base: {
        [BasePropertyType.Defense]: [54, 86],
        [BasePropertyType.MinimumStrength]: [55],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.GrimHelm,
    name: 'Grim Helm',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 50,
    baseId: ids.BoneHelm,
    imageId: ids.BoneHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: [60, 125],
        [BasePropertyType.MinimumStrength]: [58],
        [BasePropertyType.Durability]: [40],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.WingedHelm,
    name: 'Winged Helm',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 51,
    baseId: ids.GreatHelm,
    imageId: ids.GreatHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: [85, 98],
        [BasePropertyType.MinimumStrength]: [115],
        [BasePropertyType.Durability]: [40],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.GrandCrown,
    name: 'Grand Crown',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 55,
    baseId: ids.Crown,
    imageId: ids.Crown,
    properties: {
      base: {
        [BasePropertyType.Defense]: [78, 113],
        [BasePropertyType.MinimumStrength]: [103],
        [BasePropertyType.Durability]: [50],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.Shako,
    name: 'Shako',
    tier: ItemTierType.Elite,
    clvl: 43,
    qlvl: 58,
    baseId: ids.Cap,
    imageId: ids.Cap,
    properties: {
      base: {
        [BasePropertyType.Defense]: [98, 141],
        [BasePropertyType.MinimumStrength]: [50],
        [BasePropertyType.Durability]: [12],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.Hydraskull,
    name: 'Hydraskull',
    tier: ItemTierType.Elite,
    clvl: 47,
    qlvl: 63,
    baseId: ids.SkullCap,
    imageId: ids.SkullCap,
    properties: {
      base: {
        [BasePropertyType.Defense]: [101, 145],
        [BasePropertyType.MinimumStrength]: [84],
        [BasePropertyType.Durability]: [18],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.Armet,
    name: 'Armet',
    tier: ItemTierType.Elite,
    clvl: 51,
    qlvl: 68,
    baseId: ids.Helm,
    imageId: ids.Helm,
    properties: {
      base: {
        [BasePropertyType.Defense]: [105, 149],
        [BasePropertyType.MinimumStrength]: [109],
        [BasePropertyType.Durability]: [24],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.GiantConch,
    name: 'Giant Conch',
    tier: ItemTierType.Elite,
    clvl: 40,
    qlvl: 54,
    baseId: ids.FullHelm,
    imageId: ids.FullHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: [110, 154],
        [BasePropertyType.MinimumStrength]: [142],
        [BasePropertyType.Durability]: [30],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.Demonhead,
    name: 'Demonhead',
    tier: ItemTierType.Elite,
    clvl: 55,
    qlvl: 74,
    baseId: ids.Mask,
    imageId: ids.Mask,
    properties: {
      base: {
        [BasePropertyType.Defense]: [101, 154],
        [BasePropertyType.MinimumStrength]: [102],
        [BasePropertyType.Durability]: [20],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.BoneVisage,
    name: 'Bone Visage',
    tier: ItemTierType.Elite,
    clvl: 63,
    qlvl: 84,
    baseId: ids.BoneHelm,
    imageId: ids.BoneHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: [100, 157],
        [BasePropertyType.MinimumStrength]: [106],
        [BasePropertyType.Durability]: [40],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.SpiredHelm,
    name: 'Spired Helm',
    tier: ItemTierType.Elite,
    clvl: 59,
    qlvl: 79,
    baseId: ids.GreatHelm,
    imageId: ids.GreatHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: [114, 159],
        [BasePropertyType.MinimumStrength]: [192],
        [BasePropertyType.Durability]: [40],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
  {
    id: ids.Corona,
    name: 'Corona',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    baseId: ids.Crown,
    imageId: ids.Crown,
    properties: {
      base: {
        [BasePropertyType.Defense]: [111, 165],
        [BasePropertyType.MinimumStrength]: [174],
        [BasePropertyType.Durability]: [50],
        [BasePropertyType.MaxSockets]: [3],
      },
    },
  },
]);

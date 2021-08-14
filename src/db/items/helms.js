import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  SocketCategoryType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  size: [2, 2],
  socketCategory: SocketCategoryType.Helm,
  type: ItemType.Helm,
})([
  {
    id: ids.Cap,
    name: 'Cap',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [3, 5],
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.SkullCap,
    name: 'Skull Cap',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [8, 11],
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredStrength]: 15,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Helm,
    name: 'Helm',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [15, 18],
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredStrength]: 26,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.FullHelm,
    name: 'Full Helm',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [23, 26],
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.RequiredStrength]: 41,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Mask,
    name: 'Mask',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [9, 27],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 23,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.BoneHelm,
    name: 'Bone Helm',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [33, 36],
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.GreatHelm,
    name: 'Great Helm',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [30, 35],
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.RequiredStrength]: 63,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.Crown,
    name: 'Crown',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [25, 45],
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredStrength]: 55,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.WarHat,
    name: 'War Hat',
    tier: ItemTierType.Exceptional,
    baseId: ids.Cap,
    imageId: ids.Cap,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [45, 54],
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.RequiredLevel]: 22,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Sallet,
    name: 'Sallet',
    tier: ItemTierType.Exceptional,
    baseId: ids.SkullCap,
    imageId: ids.SkullCap,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [52, 62],
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredStrength]: 43,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Casque,
    name: 'Casque',
    tier: ItemTierType.Exceptional,
    baseId: ids.Helm,
    imageId: ids.Helm,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [63, 72],
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredStrength]: 59,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Basinet,
    name: 'Basinet',
    tier: ItemTierType.Exceptional,
    baseId: ids.FullHelm,
    imageId: ids.FullHelm,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [75, 84],
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.RequiredStrength]: 82,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.DeathMask,
    name: 'Death Mask',
    tier: ItemTierType.Exceptional,
    baseId: ids.Mask,
    imageId: ids.Mask,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [54, 86],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 55,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.GrimHelm,
    name: 'Grim Helm',
    tier: ItemTierType.Exceptional,
    baseId: ids.BoneHelm,
    imageId: ids.BoneHelm,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [60, 125],
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.RequiredStrength]: 58,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.WingedHelm,
    name: 'Winged Helm',
    tier: ItemTierType.Exceptional,
    baseId: ids.GreatHelm,
    imageId: ids.GreatHelm,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [85, 98],
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.RequiredStrength]: 115,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.GrandCrown,
    name: 'Grand Crown',
    tier: ItemTierType.Exceptional,
    baseId: ids.Crown,
    imageId: ids.Crown,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [78, 113],
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredStrength]: 103,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.Shako,
    name: 'Shako',
    tier: ItemTierType.Elite,
    baseId: ids.Cap,
    imageId: ids.Cap,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [98, 141],
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.RequiredLevel]: 43,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Hydraskull,
    name: 'Hydraskull',
    tier: ItemTierType.Elite,
    baseId: ids.SkullCap,
    imageId: ids.SkullCap,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [101, 145],
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredStrength]: 84,
        [BasePropertyType.RequiredLevel]: 47,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Armet,
    name: 'Armet',
    tier: ItemTierType.Elite,
    baseId: ids.Helm,
    imageId: ids.Helm,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [105, 149],
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredStrength]: 109,
        [BasePropertyType.RequiredLevel]: 51,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.GiantConch,
    name: 'Giant Conch',
    tier: ItemTierType.Elite,
    baseId: ids.FullHelm,
    imageId: ids.FullHelm,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [110, 154],
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.RequiredStrength]: 142,
        [BasePropertyType.RequiredLevel]: 40,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Demonhead,
    name: 'Demonhead',
    tier: ItemTierType.Elite,
    baseId: ids.Mask,
    imageId: ids.Mask,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [101, 154],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 102,
        [BasePropertyType.RequiredLevel]: 55,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.BoneVisage,
    name: 'Bone Visage',
    tier: ItemTierType.Elite,
    baseId: ids.BoneHelm,
    imageId: ids.BoneHelm,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [100, 157],
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.RequiredStrength]: 106,
        [BasePropertyType.RequiredLevel]: 63,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.SpiredHelm,
    name: 'Spired Helm',
    tier: ItemTierType.Elite,
    baseId: ids.GreatHelm,
    imageId: ids.GreatHelm,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [114, 159],
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.RequiredStrength]: 192,
        [BasePropertyType.RequiredLevel]: 59,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.Corona,
    name: 'Corona',
    tier: ItemTierType.Elite,
    baseId: ids.Crown,
    imageId: ids.Crown,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [111, 165],
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredStrength]: 174,
        [BasePropertyType.RequiredLevel]: 66,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
]);

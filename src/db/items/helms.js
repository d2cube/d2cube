import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  size: [2, 2],
  type: ItemType.Helm,
})([
  {
    id: ids.Cap,
    name: 'Cap',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [3, 5],
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.QualityLevel]: 1,
      },
    },
  },
  {
    id: ids.SkullCap,
    name: 'Skull Cap',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [8, 11],
        [BasePropertyType.RequiredStrength]: 15,
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.QualityLevel]: 5,
      },
    },
  },
  {
    id: ids.Helm,
    name: 'Helm',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [15, 18],
        [BasePropertyType.RequiredStrength]: 26,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.QualityLevel]: 11,
      },
    },
  },
  {
    id: ids.FullHelm,
    name: 'Full Helm',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [23, 26],
        [BasePropertyType.RequiredStrength]: 41,
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.QualityLevel]: 15,
      },
    },
  },
  {
    id: ids.Mask,
    name: 'Mask',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [9, 27],
        [BasePropertyType.RequiredStrength]: 23,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.QualityLevel]: 19,
      },
    },
  },
  {
    id: ids.BoneHelm,
    name: 'Bone Helm',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [33, 36],
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.QualityLevel]: 22,
      },
    },
  },
  {
    id: ids.GreatHelm,
    name: 'Great Helm',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [30, 35],
        [BasePropertyType.RequiredStrength]: 63,
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.QualityLevel]: 23,
      },
    },
  },
  {
    id: ids.Crown,
    name: 'Crown',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [25, 45],
        [BasePropertyType.RequiredStrength]: 55,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.QualityLevel]: 29,
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
        [BasePropertyType.Defense]: [45, 54],
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 22,
        [BasePropertyType.QualityLevel]: 34,
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
        [BasePropertyType.Defense]: [52, 62],
        [BasePropertyType.RequiredStrength]: 43,
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 37,
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
        [BasePropertyType.Defense]: [63, 72],
        [BasePropertyType.RequiredStrength]: 59,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 42,
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
        [BasePropertyType.Defense]: [75, 84],
        [BasePropertyType.RequiredStrength]: 82,
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 45,
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
        [BasePropertyType.Defense]: [54, 86],
        [BasePropertyType.RequiredStrength]: 55,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 48,
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
        [BasePropertyType.Defense]: [60, 125],
        [BasePropertyType.RequiredStrength]: 58,
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 50,
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
        [BasePropertyType.Defense]: [85, 98],
        [BasePropertyType.RequiredStrength]: 115,
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 51,
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
        [BasePropertyType.Defense]: [78, 113],
        [BasePropertyType.RequiredStrength]: 103,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 55,
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
        [BasePropertyType.Defense]: [98, 141],
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 43,
        [BasePropertyType.QualityLevel]: 58,
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
        [BasePropertyType.Defense]: [101, 145],
        [BasePropertyType.RequiredStrength]: 84,
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 47,
        [BasePropertyType.QualityLevel]: 63,
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
        [BasePropertyType.Defense]: [105, 149],
        [BasePropertyType.RequiredStrength]: 109,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 51,
        [BasePropertyType.QualityLevel]: 68,
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
        [BasePropertyType.Defense]: [110, 154],
        [BasePropertyType.RequiredStrength]: 142,
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 40,
        [BasePropertyType.QualityLevel]: 54,
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
        [BasePropertyType.Defense]: [101, 154],
        [BasePropertyType.RequiredStrength]: 102,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 55,
        [BasePropertyType.QualityLevel]: 74,
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
        [BasePropertyType.Defense]: [100, 157],
        [BasePropertyType.RequiredStrength]: 106,
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 63,
        [BasePropertyType.QualityLevel]: 84,
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
        [BasePropertyType.Defense]: [114, 159],
        [BasePropertyType.RequiredStrength]: 192,
        [BasePropertyType.Durability]: 40,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 59,
        [BasePropertyType.QualityLevel]: 79,
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
        [BasePropertyType.Defense]: [111, 165],
        [BasePropertyType.RequiredStrength]: 174,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 66,
        [BasePropertyType.QualityLevel]: 85,
      },
    },
  },
]);

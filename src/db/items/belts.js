import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  size: [1, 2],
  type: ItemType.Belt,
})([
  {
    id: ids.Sash,
    name: 'Sash',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: 2,
        [BasePropertyType.PotionSlots]: 8,
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.QualityLevel]: 3,
      },
    },
  },
  {
    id: ids.LightBelt,
    name: 'Light Belt',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: 3,
        [BasePropertyType.PotionSlots]: 8,
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.QualityLevel]: 7,
      },
    },
  },
  {
    id: ids.Belt,
    name: 'Belt',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: 5,
        [BasePropertyType.PotionSlots]: 12,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.QualityLevel]: 12,
      },
    },
  },
  {
    id: ids.HeavyBelt,
    name: 'Heavy Belt',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: 6,
        [BasePropertyType.PotionSlots]: 12,
        [BasePropertyType.RequiredStrength]: 45,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.QualityLevel]: 18,
      },
    },
  },
  {
    id: ids.PlatedBelt,
    name: 'Plated Belt',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [8, 11],
        [BasePropertyType.PotionSlots]: 16,
        [BasePropertyType.RequiredStrength]: 60,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.QualityLevel]: 27,
      },
    },
  },
  {
    id: ids.DemonhideSash,
    name: 'Demonhide Sash',
    tier: ItemTierType.Exceptional,
    baseId: ids.Sash,
    imageId: ids.Sash,
    properties: {
      base: {
        [BasePropertyType.Defense]: [29, 34],
        [BasePropertyType.PotionSlots]: 16,
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.RequiredLevel]: 24,
        [BasePropertyType.QualityLevel]: 36,
      },
    },
  },
  {
    id: ids.SharksinBelt,
    name: 'Sharkskin Belt',
    tier: ItemTierType.Exceptional,
    baseId: ids.LightBelt,
    imageId: ids.LightBelt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [31, 36],
        [BasePropertyType.PotionSlots]: 16,
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 39,
      },
    },
  },
  {
    id: ids.MeshBelt,
    name: 'Mesh Belt',
    tier: ItemTierType.Exceptional,
    baseId: ids.Belt,
    imageId: ids.Belt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [35, 40],
        [BasePropertyType.PotionSlots]: 16,
        [BasePropertyType.RequiredStrength]: 58,
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 43,
      },
    },
  },
  {
    id: ids.BattleBelt,
    name: 'Battle Belt',
    tier: ItemTierType.Exceptional,
    baseId: ids.HeavyBelt,
    imageId: ids.HeavyBelt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [37, 42],
        [BasePropertyType.PotionSlots]: 16,
        [BasePropertyType.RequiredStrength]: 88,
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 49,
      },
    },
  },
  {
    id: ids.WarBelt,
    name: 'War Belt',
    tier: ItemTierType.Exceptional,
    baseId: ids.PlatedBelt,
    imageId: ids.PlatedBelt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [41, 52],
        [BasePropertyType.PotionSlots]: 16,
        [BasePropertyType.RequiredStrength]: 110,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 54,
      },
    },
  },
  {
    id: ids.SpiderwebSash,
    name: 'Spiderweb Sash',
    tier: ItemTierType.Elite,
    baseId: ids.Sash,
    imageId: ids.Sash,
    properties: {
      base: {
        [BasePropertyType.Defense]: [55, 62],
        [BasePropertyType.PotionSlots]: 16,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.RequiredLevel]: 46,
        [BasePropertyType.QualityLevel]: 61,
      },
    },
  },
  {
    id: ids.VampirefangBelt,
    name: 'Vampirefang Belt',
    tier: ItemTierType.Elite,
    baseId: ids.LightBelt,
    imageId: ids.LightBelt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [56, 63],
        [BasePropertyType.PotionSlots]: 16,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.RequiredLevel]: 51,
        [BasePropertyType.QualityLevel]: 68,
      },
    },
  },
  {
    id: ids.MithrilCoil,
    name: 'Mithril Coil',
    tier: ItemTierType.Elite,
    baseId: ids.Belt,
    imageId: ids.Belt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [58, 65],
        [BasePropertyType.PotionSlots]: 16,
        [BasePropertyType.RequiredStrength]: 106,
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.RequiredLevel]: 56,
        [BasePropertyType.QualityLevel]: 75,
      },
    },
  },
  {
    id: ids.TrollBelt,
    name: 'Troll Belt',
    tier: ItemTierType.Elite,
    baseId: ids.HeavyBelt,
    imageId: ids.HeavyBelt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [59, 66],
        [BasePropertyType.PotionSlots]: 16,
        [BasePropertyType.RequiredStrength]: 151,
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredLevel]: 62,
        [BasePropertyType.QualityLevel]: 82,
      },
    },
  },
  {
    id: ids.ColossusGirdle,
    name: 'Colossus Girdle',
    tier: ItemTierType.Elite,
    baseId: ids.PlatedBelt,
    imageId: ids.PlatedBelt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [61, 71],
        [BasePropertyType.PotionSlots]: 16,
        [BasePropertyType.RequiredStrength]: 185,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredLevel]: 67,
        [BasePropertyType.QualityLevel]: 85,
      },
    },
  },
]);

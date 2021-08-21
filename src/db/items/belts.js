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
        [BasePropertyType.BaseDefense]: [2, 2],
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.PotionSlots]: 8,
      },
    },
  },
  {
    id: ids.LightBelt,
    name: 'Light Belt',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [3, 3],
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.PotionSlots]: 8,
      },
    },
  },
  {
    id: ids.Belt,
    name: 'Belt',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [5, 5],
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.PotionSlots]: 12,
      },
    },
  },
  {
    id: ids.HeavyBelt,
    name: 'Heavy Belt',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [6, 6],
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredStrength]: 45,
        [BasePropertyType.PotionSlots]: 12,
      },
    },
  },
  {
    id: ids.PlatedBelt,
    name: 'Plated Belt',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [8, 11],
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredStrength]: 60,
        [BasePropertyType.PotionSlots]: 16,
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
        [BasePropertyType.BaseDefense]: [29, 34],
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.RequiredLevel]: 24,
        [BasePropertyType.PotionSlots]: 16,
      },
    },
  },
  {
    id: ids.SharkskinBelt,
    name: 'Sharkskin Belt',
    tier: ItemTierType.Exceptional,
    baseId: ids.LightBelt,
    imageId: ids.LightBelt,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [31, 36],
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.PotionSlots]: 16,
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
        [BasePropertyType.BaseDefense]: [35, 40],
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.RequiredStrength]: 58,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.PotionSlots]: 16,
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
        [BasePropertyType.BaseDefense]: [37, 42],
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredStrength]: 88,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.PotionSlots]: 16,
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
        [BasePropertyType.BaseDefense]: [41, 52],
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredStrength]: 110,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.PotionSlots]: 16,
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
        [BasePropertyType.BaseDefense]: [55, 62],
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.RequiredLevel]: 46,
        [BasePropertyType.PotionSlots]: 16,
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
        [BasePropertyType.BaseDefense]: [56, 63],
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.RequiredLevel]: 51,
        [BasePropertyType.PotionSlots]: 16,
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
        [BasePropertyType.BaseDefense]: [58, 65],
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.RequiredStrength]: 106,
        [BasePropertyType.RequiredLevel]: 56,
        [BasePropertyType.PotionSlots]: 16,
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
        [BasePropertyType.BaseDefense]: [59, 66],
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredStrength]: 151,
        [BasePropertyType.RequiredLevel]: 62,
        [BasePropertyType.PotionSlots]: 16,
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
        [BasePropertyType.BaseDefense]: [61, 71],
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredStrength]: 185,
        [BasePropertyType.RequiredLevel]: 67,
        [BasePropertyType.PotionSlots]: 16,
      },
    },
  },
]);

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
    qlvl: 3,
    properties: {
      base: {
        [BasePropertyType.Defense]: [2],
        [BasePropertyType.PotionSlots]: [8],
        [BasePropertyType.Durability]: [12],
      },
    },
  },
  {
    id: ids.LightBelt,
    name: 'Light Belt',
    tier: ItemTierType.Normal,
    qlvl: 7,
    properties: {
      base: {
        [BasePropertyType.Defense]: [3],
        [BasePropertyType.PotionSlots]: [8],
        [BasePropertyType.Durability]: [14],
      },
    },
  },
  {
    id: ids.Belt,
    name: 'Belt',
    tier: ItemTierType.Normal,
    qlvl: 12,
    properties: {
      base: {
        [BasePropertyType.Defense]: [5],
        [BasePropertyType.PotionSlots]: [12],
        [BasePropertyType.MinimumStrength]: [25],
        [BasePropertyType.Durability]: [16],
      },
    },
  },
  {
    id: ids.HeavyBelt,
    name: 'Heavy Belt',
    tier: ItemTierType.Normal,
    qlvl: 18,
    properties: {
      base: {
        [BasePropertyType.Defense]: [6],
        [BasePropertyType.PotionSlots]: [12],
        [BasePropertyType.MinimumStrength]: [45],
        [BasePropertyType.Durability]: [20],
      },
    },
  },
  {
    id: ids.PlatedBelt,
    name: 'Plated Belt',
    tier: ItemTierType.Normal,
    qlvl: 27,
    properties: {
      base: {
        [BasePropertyType.Defense]: [8, 11],
        [BasePropertyType.PotionSlots]: [16],
        [BasePropertyType.MinimumStrength]: [60],
        [BasePropertyType.Durability]: [24],
      },
    },
  },
  {
    id: ids.DemonhideSash,
    name: 'Demonhide Sash',
    tier: ItemTierType.Exceptional,
    clvl: 24,
    qlvl: 36,
    baseId: ids.Sash,
    imageId: ids.Sash,
    properties: {
      base: {
        [BasePropertyType.Defense]: [29, 34],
        [BasePropertyType.PotionSlots]: [16],
        [BasePropertyType.MinimumStrength]: [20],
        [BasePropertyType.Durability]: [12],
      },
    },
  },
  {
    id: ids.SharksinBelt,
    name: 'Sharkskin Belt',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 39,
    baseId: ids.LightBelt,
    imageId: ids.LightBelt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [31, 36],
        [BasePropertyType.PotionSlots]: [16],
        [BasePropertyType.MinimumStrength]: [20],
        [BasePropertyType.Durability]: [14],
      },
    },
  },
  {
    id: ids.MeshBelt,
    name: 'Mesh Belt',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 43,
    baseId: ids.Belt,
    imageId: ids.Belt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [35, 40],
        [BasePropertyType.PotionSlots]: [16],
        [BasePropertyType.MinimumStrength]: [58],
        [BasePropertyType.Durability]: [16],
      },
    },
  },
  {
    id: ids.BattleBelt,
    name: 'Battle Belt',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 49,
    baseId: ids.HeavyBelt,
    imageId: ids.HeavyBelt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [37, 42],
        [BasePropertyType.PotionSlots]: [16],
        [BasePropertyType.MinimumStrength]: [88],
        [BasePropertyType.Durability]: [18],
      },
    },
  },
  {
    id: ids.WarBelt,
    name: 'War Belt',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 54,
    baseId: ids.PlatedBelt,
    imageId: ids.PlatedBelt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [41, 52],
        [BasePropertyType.PotionSlots]: [16],
        [BasePropertyType.MinimumStrength]: [110],
        [BasePropertyType.Durability]: [24],
      },
    },
  },
  {
    id: ids.SpiderwebSash,
    name: 'Spiderweb Sash',
    tier: ItemTierType.Elite,
    clvl: 46,
    qlvl: 61,
    baseId: ids.Sash,
    imageId: ids.Sash,
    properties: {
      base: {
        [BasePropertyType.Defense]: [55, 62],
        [BasePropertyType.PotionSlots]: [16],
        [BasePropertyType.MinimumStrength]: [50],
        [BasePropertyType.Durability]: [12],
      },
    },
  },
  {
    id: ids.VampirefangBelt,
    name: 'Vampirefang Belt',
    tier: ItemTierType.Elite,
    clvl: 51,
    qlvl: 68,
    baseId: ids.LightBelt,
    imageId: ids.LightBelt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [56, 63],
        [BasePropertyType.PotionSlots]: [16],
        [BasePropertyType.MinimumStrength]: [50],
        [BasePropertyType.Durability]: [14],
      },
    },
  },
  {
    id: ids.MithrilCoil,
    name: 'Mithril Coil',
    tier: ItemTierType.Elite,
    clvl: 56,
    qlvl: 75,
    baseId: ids.Belt,
    imageId: ids.Belt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [58, 65],
        [BasePropertyType.PotionSlots]: [16],
        [BasePropertyType.MinimumStrength]: [106],
        [BasePropertyType.Durability]: [16],
      },
    },
  },
  {
    id: ids.TrollBelt,
    name: 'Troll Belt',
    tier: ItemTierType.Elite,
    clvl: 62,
    qlvl: 82,
    baseId: ids.HeavyBelt,
    imageId: ids.HeavyBelt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [59, 66],
        [BasePropertyType.PotionSlots]: [16],
        [BasePropertyType.MinimumStrength]: [151],
        [BasePropertyType.Durability]: [18],
      },
    },
  },
  {
    id: ids.ColossusGirdle,
    name: 'Colossus Girdle',
    tier: ItemTierType.Elite,
    clvl: 67,
    qlvl: 85,
    baseId: ids.PlatedBelt,
    imageId: ids.PlatedBelt,
    properties: {
      base: {
        [BasePropertyType.Defense]: [61, 71],
        [BasePropertyType.PotionSlots]: [16],
        [BasePropertyType.MinimumStrength]: [185],
        [BasePropertyType.Durability]: [24],
      },
    },
  },
]);

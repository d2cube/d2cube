import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  type: ItemType.Belt,
  size: [1, 2],
})([
  {
    id: ids.Sash,
    name: 'Sash',
    tier: ItemTierType.Normal,
    qlvl: 3,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [2, 2],
        },
        [BasePropertyType.PotionSlots]: {
          values: [8],
        },
        [BasePropertyType.Durability]: {
          values: [12],
        },
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
        [BasePropertyType.Defense]: {
          values: [3, 3],
        },
        [BasePropertyType.PotionSlots]: {
          values: [8],
        },
        [BasePropertyType.Durability]: {
          values: [14],
        },
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
        [BasePropertyType.Defense]: {
          values: [5, 5],
        },
        [BasePropertyType.PotionSlots]: {
          values: [12],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.Durability]: {
          values: [16],
        },
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
        [BasePropertyType.Defense]: {
          values: [6, 6],
        },
        [BasePropertyType.PotionSlots]: {
          values: [12],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [45],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
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
        [BasePropertyType.Defense]: {
          values: [8, 11],
        },
        [BasePropertyType.PotionSlots]: {
          values: [16],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [60],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
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
        [BasePropertyType.Defense]: {
          values: [29, 34],
        },
        [BasePropertyType.PotionSlots]: {
          values: [16],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [20],
        },
        [BasePropertyType.Durability]: {
          values: [12],
        },
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
        [BasePropertyType.Defense]: {
          values: [31, 36],
        },
        [BasePropertyType.PotionSlots]: {
          values: [16],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [20],
        },
        [BasePropertyType.Durability]: {
          values: [14],
        },
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
        [BasePropertyType.Defense]: {
          values: [35, 40],
        },
        [BasePropertyType.PotionSlots]: {
          values: [16],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [58],
        },
        [BasePropertyType.Durability]: {
          values: [16],
        },
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
        [BasePropertyType.Defense]: {
          values: [37, 42],
        },
        [BasePropertyType.PotionSlots]: {
          values: [16],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [88],
        },
        [BasePropertyType.Durability]: {
          values: [18],
        },
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
        [BasePropertyType.Defense]: {
          values: [41, 52],
        },
        [BasePropertyType.PotionSlots]: {
          values: [16],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [110],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
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
        [BasePropertyType.Defense]: {
          values: [55, 62],
        },
        [BasePropertyType.PotionSlots]: {
          values: [16],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [50],
        },
        [BasePropertyType.Durability]: {
          values: [12],
        },
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
        [BasePropertyType.Defense]: {
          values: [56, 63],
        },
        [BasePropertyType.PotionSlots]: {
          values: [16],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [50],
        },
        [BasePropertyType.Durability]: {
          values: [14],
        },
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
        [BasePropertyType.Defense]: {
          values: [58, 65],
        },
        [BasePropertyType.PotionSlots]: {
          values: [16],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [106],
        },
        [BasePropertyType.Durability]: {
          values: [16],
        },
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
        [BasePropertyType.Defense]: {
          values: [59, 66],
        },
        [BasePropertyType.PotionSlots]: {
          values: [16],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [151],
        },
        [BasePropertyType.Durability]: {
          values: [18],
        },
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
        [BasePropertyType.Defense]: {
          values: [61, 71],
        },
        [BasePropertyType.PotionSlots]: {
          values: [16],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [185],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
      },
    },
  },
]);

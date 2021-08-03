import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  size: [2, 2],
  type: ItemType.Glove,
})([
  {
    id: ids.LeatherGloves,
    name: 'Leather Gloves',
    tier: ItemTierType.Normal,
    qlvl: 3,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [2, 3],
        },
        [BasePropertyType.Durability]: {
          values: [12],
        },
      },
    },
  },
  {
    id: ids.HeavyGloves,
    name: 'Heavy Gloves',
    tier: ItemTierType.Normal,
    qlvl: 7,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [5, 6],
        },
        [BasePropertyType.Durability]: {
          values: [14],
        },
      },
    },
  },
  {
    id: ids.ChainGloves,
    name: 'Chain Gloves',
    tier: ItemTierType.Normal,
    qlvl: 12,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [8, 9],
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
    id: ids.LightGauntlets,
    name: 'Light Gauntlets',
    tier: ItemTierType.Normal,
    qlvl: 20,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [9, 11],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [45],
        },
        [BasePropertyType.Durability]: {
          values: [18],
        },
      },
    },
  },
  {
    id: ids.Gauntlets,
    name: 'Gauntlets',
    tier: ItemTierType.Normal,
    qlvl: 27,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [12, 15],
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
    id: ids.DemonhideGlove,
    name: 'Demonhide Glove',
    tier: ItemTierType.Exceptional,
    clvl: 24,
    qlvl: 33,
    baseId: ids.LeatherGloves,
    imageId: ids.LeatherGloves,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [28, 35],
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
    id: ids.SharkskinGloves,
    name: 'Sharkskin Gloves',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 39,
    baseId: ids.HeavyGloves,
    imageId: ids.HeavyGloves,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [33, 39],
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
    id: ids.HeavyBracers,
    name: 'Heavy Bracers',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 43,
    baseId: ids.ChainGloves,
    imageId: ids.ChainGloves,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [37, 44],
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
    id: ids.BattleGauntlets,
    name: 'Battle Gauntlets',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 49,
    baseId: ids.LightGauntlets,
    imageId: ids.LightGauntlets,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [39, 47],
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
    id: ids.WarGauntlets,
    name: 'War Gauntlets',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 54,
    baseId: ids.Gauntlets,
    imageId: ids.Gauntlets,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [43, 53],
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
    id: ids.BrambleMitts,
    name: 'Bramble Mitts',
    tier: ItemTierType.Elite,
    clvl: 42,
    qlvl: 57,
    baseId: ids.LeatherGloves,
    imageId: ids.LeatherGloves,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [54, 62],
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
    id: ids.VampireboneGloves,
    name: 'Vampirebone Gloves',
    tier: ItemTierType.Elite,
    clvl: 47,
    qlvl: 63,
    baseId: ids.HeavyGloves,
    imageId: ids.HeavyGloves,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [56, 65],
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
    id: ids.Vambraces,
    name: 'Vambraces',
    tier: ItemTierType.Elite,
    clvl: 51,
    qlvl: 69,
    baseId: ids.ChainGloves,
    imageId: ids.ChainGloves,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [59, 67],
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
    id: ids.CrusaderGauntlets,
    name: 'Crusader Gauntlets',
    tier: ItemTierType.Elite,
    clvl: 57,
    qlvl: 76,
    baseId: ids.LightGauntlets,
    imageId: ids.LightGauntlets,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [59, 68],
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
    id: ids.OgreGauntlets,
    name: 'Ogre Gauntlets',
    tier: ItemTierType.Elite,
    clvl: 64,
    qlvl: 85,
    baseId: ids.Gauntlets,
    imageId: ids.Gauntlets,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [62, 71],
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

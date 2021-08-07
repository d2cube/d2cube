import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  size: [2, 2],
  type: ItemType.Glove,
})([
  {
    id: ids.LeatherGloves,
    name: 'Leather Gloves',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [2, 3],
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.QualityLevel]: 3,
      },
    },
  },
  {
    id: ids.HeavyGloves,
    name: 'Heavy Gloves',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [5, 6],
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.QualityLevel]: 7,
      },
    },
  },
  {
    id: ids.ChainGloves,
    name: 'Chain Gloves',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [8, 9],
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.QualityLevel]: 12,
      },
    },
  },
  {
    id: ids.LightGauntlets,
    name: 'Light Gauntlets',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [9, 11],
        [BasePropertyType.RequiredStrength]: 45,
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.QualityLevel]: 20,
      },
    },
  },
  {
    id: ids.Gauntlets,
    name: 'Gauntlets',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [12, 15],
        [BasePropertyType.RequiredStrength]: 60,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.QualityLevel]: 27,
      },
    },
  },
  {
    id: ids.DemonhideGlove,
    name: 'Demonhide Glove',
    tier: ItemTierType.Exceptional,
    baseId: ids.LeatherGloves,
    imageId: ids.LeatherGloves,
    properties: {
      base: {
        [BasePropertyType.Defense]: [28, 35],
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.RequiredLevel]: 24,
        [BasePropertyType.QualityLevel]: 33,
      },
    },
  },
  {
    id: ids.SharkskinGloves,
    name: 'Sharkskin Gloves',
    tier: ItemTierType.Exceptional,
    baseId: ids.HeavyGloves,
    imageId: ids.HeavyGloves,
    properties: {
      base: {
        [BasePropertyType.Defense]: [33, 39],
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 39,
      },
    },
  },
  {
    id: ids.HeavyBracers,
    name: 'Heavy Bracers',
    tier: ItemTierType.Exceptional,
    baseId: ids.ChainGloves,
    imageId: ids.ChainGloves,
    properties: {
      base: {
        [BasePropertyType.Defense]: [37, 44],
        [BasePropertyType.RequiredStrength]: 58,
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 43,
      },
    },
  },
  {
    id: ids.BattleGauntlets,
    name: 'Battle Gauntlets',
    tier: ItemTierType.Exceptional,
    baseId: ids.LightGauntlets,
    imageId: ids.LightGauntlets,
    properties: {
      base: {
        [BasePropertyType.Defense]: [39, 47],
        [BasePropertyType.RequiredStrength]: 88,
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 49,
      },
    },
  },
  {
    id: ids.WarGauntlets,
    name: 'War Gauntlets',
    tier: ItemTierType.Exceptional,
    baseId: ids.Gauntlets,
    imageId: ids.Gauntlets,
    properties: {
      base: {
        [BasePropertyType.Defense]: [43, 53],
        [BasePropertyType.RequiredStrength]: 110,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.QualityLevel]: 54,
      },
    },
  },
  {
    id: ids.BrambleMitts,
    name: 'Bramble Mitts',
    tier: ItemTierType.Elite,
    baseId: ids.LeatherGloves,
    imageId: ids.LeatherGloves,
    properties: {
      base: {
        [BasePropertyType.Defense]: [54, 62],
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.RequiredLevel]: 42,
        [BasePropertyType.QualityLevel]: 57,
      },
    },
  },
  {
    id: ids.VampireboneGloves,
    name: 'Vampirebone Gloves',
    tier: ItemTierType.Elite,
    baseId: ids.HeavyGloves,
    imageId: ids.HeavyGloves,
    properties: {
      base: {
        [BasePropertyType.Defense]: [56, 65],
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.RequiredLevel]: 47,
        [BasePropertyType.QualityLevel]: 63,
      },
    },
  },
  {
    id: ids.Vambraces,
    name: 'Vambraces',
    tier: ItemTierType.Elite,
    baseId: ids.ChainGloves,
    imageId: ids.ChainGloves,
    properties: {
      base: {
        [BasePropertyType.Defense]: [59, 67],
        [BasePropertyType.RequiredStrength]: 106,
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.RequiredLevel]: 51,
        [BasePropertyType.QualityLevel]: 69,
      },
    },
  },
  {
    id: ids.CrusaderGauntlets,
    name: 'Crusader Gauntlets',
    tier: ItemTierType.Elite,
    baseId: ids.LightGauntlets,
    imageId: ids.LightGauntlets,
    properties: {
      base: {
        [BasePropertyType.Defense]: [59, 68],
        [BasePropertyType.RequiredStrength]: 151,
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredLevel]: 57,
        [BasePropertyType.QualityLevel]: 76,
      },
    },
  },
  {
    id: ids.OgreGauntlets,
    name: 'Ogre Gauntlets',
    tier: ItemTierType.Elite,
    baseId: ids.Gauntlets,
    imageId: ids.Gauntlets,
    properties: {
      base: {
        [BasePropertyType.Defense]: [62, 71],
        [BasePropertyType.RequiredStrength]: 185,
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredLevel]: 64,
        [BasePropertyType.QualityLevel]: 85,
      },
    },
  },
]);

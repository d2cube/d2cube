import {
  BasePropertyType,
  ItemQualityType,
  ItemTierType,
  ItemType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Normal,
  size: [2, 2],
  type: ItemType.Glove,
})([
  {
    id: ids.LeatherGloves,
    name: 'Leather Gloves',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [2, 3],
        [BasePropertyType.Durability]: 12,
      },
    },
  },
  {
    id: ids.HeavyGloves,
    name: 'Heavy Gloves',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [5, 6],
        [BasePropertyType.Durability]: 14,
      },
    },
  },
  {
    id: ids.ChainGloves,
    name: 'Chain Gloves',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [8, 9],
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.RequiredStrength]: 25,
      },
    },
  },
  {
    id: ids.LightGauntlets,
    name: 'Light Gauntlets',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [9, 11],
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredStrength]: 45,
      },
    },
  },
  {
    id: ids.Gauntlets,
    name: 'Gauntlets',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [12, 15],
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredStrength]: 60,
      },
    },
  },
  {
    id: ids.DemonhideGloves,
    name: 'Demonhide Glove',
    tier: ItemTierType.Exceptional,
    baseId: ids.LeatherGloves,
    imageId: ids.LeatherGloves,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [28, 35],
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.RequiredLevel]: 24,
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
        [BasePropertyType.BaseDefense]: [33, 39],
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.RequiredLevel]: 25,
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
        [BasePropertyType.BaseDefense]: [37, 44],
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.RequiredStrength]: 58,
        [BasePropertyType.RequiredLevel]: 25,
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
        [BasePropertyType.BaseDefense]: [39, 47],
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredStrength]: 88,
        [BasePropertyType.RequiredLevel]: 25,
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
        [BasePropertyType.BaseDefense]: [43, 53],
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredStrength]: 110,
        [BasePropertyType.RequiredLevel]: 25,
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
        [BasePropertyType.BaseDefense]: [54, 62],
        [BasePropertyType.Durability]: 12,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.RequiredLevel]: 42,
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
        [BasePropertyType.BaseDefense]: [56, 65],
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.RequiredLevel]: 47,
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
        [BasePropertyType.BaseDefense]: [59, 67],
        [BasePropertyType.Durability]: 16,
        [BasePropertyType.RequiredStrength]: 106,
        [BasePropertyType.RequiredLevel]: 51,
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
        [BasePropertyType.BaseDefense]: [59, 68],
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredStrength]: 151,
        [BasePropertyType.RequiredLevel]: 57,
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
        [BasePropertyType.BaseDefense]: [62, 71],
        [BasePropertyType.Durability]: 24,
        [BasePropertyType.RequiredStrength]: 185,
        [BasePropertyType.RequiredLevel]: 64,
      },
    },
  },
]);

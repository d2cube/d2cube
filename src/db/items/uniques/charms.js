import {
  BasePropertyType,
  ItemQualityType,
  MagicPropertyType,
  SkillSetType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
})([
  {
    id: ids.Annihilus,
    name: 'Annihilus',
    baseId: ids.SmallCharm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 70,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.AllAttributes]: [10, 20],
        [MagicPropertyType.AllResistances]: [10, 20],
        [MagicPropertyType.Experience]: [5, 10],
      },
    },
  },
  {
    id: ids.HellfireTorch,
    name: 'Hellfire Torch',
    baseId: ids.LargeCharm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 75,
      },
      magic: {
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Firestorm]: {x: 10, y: 5},
        },
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.CharacterSkills]: 3,
        },
        [MagicPropertyType.AllAttributes]: [10, 20],
        [MagicPropertyType.AllResistances]: [10, 20],
        [MagicPropertyType.LightRadius]: 8,
        [MagicPropertyType.SpellCharges]: {
          [SkillType.Hydra]: {x: 30, y: 10},
        },
      },
    },
  },
  {
    id: ids.GheedsFortune,
    name: "Gheed's Fortune",
    baseId: ids.GrandCharm,
    imageId: ids.GrandCharm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 62,
      },
      magic: {
        [MagicPropertyType.ExtraGold]: [80, 160],
        [MagicPropertyType.ReduceVendorPrices]: [10, 15],
        [MagicPropertyType.MagicFind]: [20, 40],
      },
    },
  },
]);

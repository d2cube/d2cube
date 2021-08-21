import {
  BasePropertyType,
  ItemQualityType,
  ItemType,
  MagicPropertyType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  baseId: ids.Jewel,
  imageId: ids.Jewel,
  name: 'Rainbow Facet',
  quality: ItemQualityType.Unique,
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 49,
    },
  },
  type: ItemType.Unique,
})([
  {
    id: ids.RainbowFacetLevelCold,
    properties: {
      magic: {
        [MagicPropertyType.ChanceToCastSpellOnLevel]: {
          [SkillType.FrostNova]: {x: 43},
        },
        [MagicPropertyType.ColdDamage]: {x: 24, y: 38, z: 0.12},
        [MagicPropertyType.ColdSkillDamage]: [3, 5],
        [MagicPropertyType.LowerColdResist]: [-3, -5],
      },
    },
  },
  {
    id: ids.RainbowFacetLevelFire,
    properties: {
      magic: {
        [MagicPropertyType.ChanceToCastSpellOnLevel]: {
          [SkillType.Blaze]: {x: 29},
        },
        [MagicPropertyType.FireDamage]: {x: 17, y: 45},
        [MagicPropertyType.FireSkillDamage]: [3, 5],
        [MagicPropertyType.LowerFireResist]: [-3, -5],
      },
    },
  },
  {
    id: ids.RainbowFacetLevelLightning,
    properties: {
      magic: {
        [MagicPropertyType.ChanceToCastSpellOnLevel]: {
          [SkillType.Nova]: {x: 41},
        },
        [MagicPropertyType.LightningDamage]: {x: 1, y: 74},
        [MagicPropertyType.LightningSkillDamage]: [3, 5],
        [MagicPropertyType.LowerLightningResist]: [-3, -5],
      },
    },
  },
  {
    id: ids.RainbowFacetLevelPoison,
    properties: {
      magic: {
        [MagicPropertyType.ChanceToCastSpellOnLevel]: {
          [SkillType.Venom]: {x: 23},
        },
        [MagicPropertyType.PoisonDamage]: {x: 37, y: 37, z: 2},
        [MagicPropertyType.PoisonSkillDamage]: [3, 5],
        [MagicPropertyType.LowerPoisonResist]: [-3, -5],
      },
    },
  },
  {
    id: ids.RainbowFacetDeathCold,
    properties: {
      magic: {
        [MagicPropertyType.ChanceToCastSpellOnDeath]: {
          [SkillType.Blizzard]: {x: 37},
        },
        [MagicPropertyType.ColdDamage]: {x: 24, y: 38, z: 0.12},
        [MagicPropertyType.ColdSkillDamage]: [3, 5],
        [MagicPropertyType.LowerColdResist]: [-3, -5],
      },
    },
  },
  {
    id: ids.RainbowFacetDeathFire,
    properties: {
      magic: {
        [MagicPropertyType.ChanceToCastSpellOnDeath]: {
          [SkillType.Meteor]: {x: 31},
        },
        [MagicPropertyType.FireDamage]: {x: 17, y: 45},
        [MagicPropertyType.FireSkillDamage]: [3, 5],
        [MagicPropertyType.LowerFireResist]: [-3, -5],
      },
    },
  },
  {
    id: ids.RainbowFacetDeathLightning,
    properties: {
      magic: {
        [MagicPropertyType.ChanceToCastSpellOnDeath]: {
          [SkillType.ChainLightning]: {x: 47},
        },
        [MagicPropertyType.LightningDamage]: {x: 1, y: 74},
        [MagicPropertyType.LightningSkillDamage]: [3, 5],
        [MagicPropertyType.LowerLightningResist]: [-3, -5],
      },
    },
  },
  {
    id: ids.RainbowFacetDeathPoison,
    properties: {
      magic: {
        [MagicPropertyType.ChanceToCastSpellOnDeath]: {
          [SkillType.PoisonNova]: {x: 51},
        },
        [MagicPropertyType.PoisonDamage]: {x: 37, y: 37, z: 2},
        [MagicPropertyType.PoisonSkillDamage]: [3, 5],
        [MagicPropertyType.LowerPoisonResist]: [-3, -5],
      },
    },
  },
]);

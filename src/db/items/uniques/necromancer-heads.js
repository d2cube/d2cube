import {
  BasePropertyType,
  ItemQualityType,
  ItemType,
  MagicPropertyType,
  SkillSetType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
  type: ItemType.Unique,
})([
  {
    id: ids.Homunculus,
    name: 'Homunculus',
    baseId: ids.HierophantTrophy,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 200],
        [MagicPropertyType.IncreasedChanceOfBlocking]: 40,
        [MagicPropertyType.FasterBlockRate]: 30,
        [MagicPropertyType.ManaAfterKill]: 5,
        [MagicPropertyType.Energy]: 20,
        [MagicPropertyType.RegenerateMana]: 33,
        [MagicPropertyType.AllResistances]: 40,
        [MagicPropertyType.ManaAfterKill]: 5,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.NecromancerCurses]: 2,
          [SkillSetType.NecromancerSkills]: 2,
        },
      },
    },
  },
  {
    id: ids.Boneflame,
    name: 'Boneflame',
    baseId: ids.SuccubusSkull,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 72,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [120, 150],
        [MagicPropertyType.FasterRunWalk]: 20,
        [MagicPropertyType.AllResistances]: [20, 30],
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.Terror]: {x: 3, y: 15},
        },
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.NecromancerSkills]: [2, 3],
        },
      },
    },
  },
  {
    id: ids.DarkforceSpawn,
    name: 'Darkforce Spawn',
    baseId: ids.BloodlordSkull,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [140, 180],
        [MagicPropertyType.FasterCastRate]: 30,
        [MagicPropertyType.IncreaseMaximumMana]: 10,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.NecromancerSummoningSkills]: 2,
          [SkillSetType.NecromancerPoisonAndBoneSkills]: [1, 3],
          [SkillSetType.NecromancerSkills]: [1, 3],
          [SkillSetType.NecromancerCurses]: [1, 3],
        },
      },
    },
  },
]);

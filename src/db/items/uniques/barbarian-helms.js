import {
  BasePropertyType,
  ItemQualityType,
  MagicPropertyType,
  PlayerClassType,
  SkillSetType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
})([
  {
    id: ids.ArreatsFace,
    name: "Arreat's Face",
    baseId: ids.SlayerGuard,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 200],
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.BonusToAttackRating]: 20,
        [MagicPropertyType.LifeStolenPerHit]: [3, 6],
        [MagicPropertyType.AllResistances]: 30,
        [MagicPropertyType.Strength]: 20,
        [MagicPropertyType.Dexterity]: 20,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.BarbarianCombatSkills]: 2,
          [SkillSetType.BarbarianSkills]: 2,
        },
      },
    },
  },
  {
    id: ids.Wolfhowl,
    name: 'Wolfhowl',
    baseId: ids.FuryVisor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 79,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [120, 150],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.BarbarianWarcries]: [2, 3],
        },
        [MagicPropertyType.Spell]: {
          [SkillType.FeralRage]: {x: [3, 6]},
          [SkillType.Lycanthropy]: {x: [3, 6]},
          [SkillType.Werewolf]: {x: [3, 6]},
        },
        [MagicPropertyType.Strength]: [8, 15],
        [MagicPropertyType.Dexterity]: [8, 15],
        [MagicPropertyType.Vitality]: [8, 15],
        [MagicPropertyType.SpellCharges]: {
          [SkillType.SummonDireWolf]: {x: 15, y: 18},
        },
      },
    },
  },
  {
    id: ids.DemonhornsEdge,
    name: "Demonhorn's Edge",
    baseId: ids.DestroyerHelm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 61,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [120, 160],
        [MagicPropertyType.IncreasedAttackSpeed]: 10,
        [MagicPropertyType.LifeStolenPerHit]: [3, 6],
        [MagicPropertyType.AttackerTakesDamage]: [55, 77],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.BarbarianWarcries]: [1, 3],
          [SkillSetType.BarbarianMasteries]: [1, 3],
          [SkillSetType.BarbarianCombatSkills]: [1, 3],
        },
      },
    },
  },
  {
    id: ids.HalaberdsReign,
    name: "Halaberd's Reign",
    baseId: ids.ConquerorCrown,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 77,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [140, 170],
        [MagicPropertyType.FasterHitRecovery]: 20,
        [MagicPropertyType.ReplenishLife]: [15, 23],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.BarbarianMasteries]: 1,
          [SkillSetType.BarbarianSkills]: 2,
        },
        [MagicPropertyType.Spell]: {
          [SkillType.BattleCommand]: {x: [1, 2], y: PlayerClassType.Barbarian},
          [SkillType.BattleOrders]: {x: [1, 2], y: PlayerClassType.Barbarian},
        },
      },
    },
  },
]);

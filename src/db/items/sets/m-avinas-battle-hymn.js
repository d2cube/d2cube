import {
  BasePropertyType,
  ItemQualityType,
  ItemSetType,
  ItemType,
  MagicPropertyType,
  SkillSetType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Set,
  set: ItemSetType.MAvinasBattleHymn,
  type: ItemType.Set,
})([
  {
    id: ids.MAvinasCaster,
    name: "M'avina's Caster",
    baseId: ids.GrandMatronBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 70,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 40,
        [MagicPropertyType.FiresMagicArrows]: 1,
        [MagicPropertyType.EnhancedDamage]: 188,
        [MagicPropertyType.AttackRating]: 50,
      },
      set: [
        null,
        {
          [MagicPropertyType.MagicDamage]: {x: 114, y: 377},
        },
        {
          [MagicPropertyType.ChanceToCastOnStriking]: {
            [SkillType.Nova]: {x: 15, y: 10},
          },
        },
        {
          [MagicPropertyType.SkillSetLevels]: {
            [SkillSetType.AmazonBowAndCrossbowSkills]: 2,
          },
        },
        null,
      ],
    },
  },
  {
    id: ids.MAvinasEmbrace,
    name: "M'avina's Embrace",
    baseId: ids.KrakenShell,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 70,
      },
      magic: {
        [MagicPropertyType.ChanceToCastWhenStruck]: {
          [SkillType.GlacialSpike]: {x: 3, y: 10},
        },
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AmazonPassiveAndMagicSkills]: 2,
        },
        [MagicPropertyType.DefenseByLevel]: 4,
        [MagicPropertyType.Defense]: 350,
        [MagicPropertyType.MagicDamageReduced]: [5, 12],
        [MagicPropertyType.Requirements]: -30,
      },
      set: [
        null,
        null,
        {
          [MagicPropertyType.FasterHitRecovery]: 30,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.MAvinasTrueSight,
    name: "M'avina's True Sight",
    baseId: ids.Diadem,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 64,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.Defense]: 150,
        [MagicPropertyType.ReplenishLife]: 10,
        [MagicPropertyType.Mana]: 25,
      },
      set: [
        null,
        {
          [MagicPropertyType.AllSkillLevels]: 1,
        },
        {
          [MagicPropertyType.BonusToAttackRating]: 50,
        },
        {
          [MagicPropertyType.AllResistances]: 25,
        },
        null,
      ],
    },
  },
  {
    id: ids.MAvinasIcyClutch,
    name: "M'avina's Icy Clutch",
    baseId: ids.BattleGauntlets,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 32,
      },
      magic: {
        [MagicPropertyType.ColdDamage]: {x: 6, y: 18, z: 6},
        [MagicPropertyType.Defense]: [45, 50],
        [MagicPropertyType.Strength]: 10,
        [MagicPropertyType.Dexterity]: 15,
        [MagicPropertyType.HalfFreezeDuration]: true,
        [MagicPropertyType.ExtraGold]: 56,
      },
      set: [
        null,
        null,
        null,
        {
          [MagicPropertyType.ColdDamage]: {x: 131, y: 252, z: 4},
        },
        {
          [MagicPropertyType.ColdSkillDamage]: 20,
        },
      ],
    },
  },
  {
    id: ids.MAvinasTenet,
    name: "M'avina's Tenet",
    baseId: ids.SharksinBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 45,
      },
      magic: {
        [MagicPropertyType.FasterRunWalk]: 20,
        [MagicPropertyType.ManaStolenPerHit]: 5,
        [MagicPropertyType.Defense]: 50,
        [MagicPropertyType.LightRadius]: 5,
      },
      set: [
        null,
        null,
        null,
        {
          [MagicPropertyType.AllResistances]: 25,
        },
        null,
      ],
    },
  },
]);

import {
  BasePropertyType,
  ItemQualityType,
  ItemSetType,
  ItemType,
  MagicPropertyType,
  PlayerClassType,
  SkillSetType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Set,
  set: ItemSetType.TalRashasWrappings,
  type: ItemType.Set,
})([
  {
    id: ids.TalRashasLidlessEye,
    name: "Tal Rasha's Lidless Eye",
    baseId: ids.SwirlingCrystal,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.Skill]: {
          [SkillType.ColdMastery]: {x: [1, 2], y: PlayerClassType.Sorceress},
          [SkillType.LightningMastery]: {
            x: [1, 2],
            y: PlayerClassType.Sorceress,
          },
          [SkillType.FireMastery]: {x: [1, 2], y: PlayerClassType.Sorceress},
        },
        [MagicPropertyType.Energy]: 10,
        [MagicPropertyType.Life]: 57,
        [MagicPropertyType.Mana]: 77,
      },
      set: [
        null,
        {
          [MagicPropertyType.SkillSetLevels]: {
            [SkillSetType.SorceressSkills]: 1,
          },
        },
        {
          [MagicPropertyType.LowerFireResist]: -15,
        },
        {
          [MagicPropertyType.LowerLightningResist]: -15,
        },
        {
          [MagicPropertyType.ColdSkillDamage]: 15,
        },
      ],
    },
  },
  {
    id: ids.TalRashasGuardianship,
    name: "Tal Rasha's Guardianship",
    baseId: ids.LacqueredPlate,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 71,
      },
      magic: {
        [MagicPropertyType.Defense]: 400,
        [MagicPropertyType.ColdResist]: 40,
        [MagicPropertyType.LightningResist]: 40,
        [MagicPropertyType.FireResist]: 40,
        [MagicPropertyType.MagicDamageReduced]: 15,
        [MagicPropertyType.MagicFind]: 88,
        [MagicPropertyType.Requirements]: -60,
      },
      set: [
        null,
        {
          [MagicPropertyType.FasterCastRate]: 10,
        },
        null,
        null,
        null,
      ],
    },
  },
  {
    id: ids.TalRashasHoradricCrest,
    name: "Tal Rasha's Horadric Crest",
    baseId: ids.DeathMask,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 66,
      },
      magic: {
        [MagicPropertyType.ManaStolenPerHit]: 10,
        [MagicPropertyType.LifeStolenPerHit]: 10,
        [MagicPropertyType.Defense]: 45,
        [MagicPropertyType.Life]: 60,
        [MagicPropertyType.Mana]: 30,
        [MagicPropertyType.AllResistances]: 15,
      },
      set: [null, null, null, null, null],
    },
  },
  {
    id: ids.TalRashasFineSpunCloth,
    name: "Tal Rasha's Fine-Spun Cloth",
    baseId: ids.MeshBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.Dexterity]: 20,
        [MagicPropertyType.Mana]: 30,
        [MagicPropertyType.DamageTakenGoesToMana]: 37,
        [MagicPropertyType.MagicFind]: [10, 15],
        [MagicPropertyType.Requirements]: -20,
      },
      set: [
        null,
        {
          [MagicPropertyType.Defense]: 60,
        },
        {
          [MagicPropertyType.FasterCastRate]: 10,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.TalRashasAdjudication,
    name: "Tal Rasha's Adjudication",
    baseId: ids.Amulet,
    imageId: ids.Amulet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.SorceressSkills]: 2,
        },
        [MagicPropertyType.LightningDamage]: {x: 3, y: 32},
        [MagicPropertyType.Life]: 50,
        [MagicPropertyType.Mana]: 42,
        [MagicPropertyType.LightningResist]: 33,
      },
      set: [
        null,
        null,
        null,
        {
          [MagicPropertyType.FasterCastRate]: 10,
        },
        null,
      ],
    },
  },
]);

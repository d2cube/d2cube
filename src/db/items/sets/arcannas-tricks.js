import {
  BasePropertyType,
  ItemQualityType,
  ItemSetType,
  MagicPropertyType,
  SkillSetType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Set,
  set: ItemSetType.ArcannasTricks,
})([
  {
    id: ids.ArcannasDeathwand,
    name: "Arcanna's Deathwand",
    baseId: ids.WarStaff,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.SorceressSkills]: 1,
        },
        [MagicPropertyType.DeadlyStrike]: 25,
      },
      set: [
        null,
        {
          [MagicPropertyType.Mana]: 50,
        },
        {
          [MagicPropertyType.RegenerateMana]: 5,
        },
        null,
      ],
    },
  },
  {
    id: ids.ArcannasFlesh,
    name: "Arcanna's Flesh",
    baseId: ids.LightPlate,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.DamageReduced]: 3,
        [MagicPropertyType.LightRadius]: 2,
      },
      set: [
        null,
        {
          [MagicPropertyType.Defense]: 100,
        },
        {
          [MagicPropertyType.Energy]: 10,
        },
        null,
      ],
    },
  },
  {
    id: ids.ArcannasHead,
    name: "Arcanna's Head",
    baseId: ids.SkullCap,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.ReplenishLife]: 4,
        [MagicPropertyType.AttackerTakesDamage]: 2,
      },
      set: [
        null,
        {
          [MagicPropertyType.DefenseByLevel]: 3,
        },
        {
          [MagicPropertyType.LightningResist]: 15,
        },
        null,
      ],
    },
  },
  {
    id: ids.ArcannasSign,
    name: "Arcanna's Sign",
    baseId: ids.Amulet,
    imageId: ids.Amulet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.Mana]: 15,
        [MagicPropertyType.RegenerateMana]: 20,
      },
      set: [
        null,
        {
          [MagicPropertyType.MagicFind]: 50,
        },
        {
          [MagicPropertyType.FireResist]: 20,
        },
        null,
      ],
    },
  },
]);

import {
  BasePropertyType,
  ItemQualityType,
  ItemSetType,
  ItemType,
  MagicPropertyType,
  SkillSetType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Set,
  set: ItemSetType.BerserkersArsenal,
  type: ItemType.Set,
})([
  {
    id: ids.BerserkersHatchet,
    name: "Berserker's Hatchet",
    baseId: ids.DoubleAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 3,
      },
      magic: {
        [MagicPropertyType.BonusToAttackRating]: 30,
        [MagicPropertyType.ManaStolenPerHit]: 5,
      },
      set: [
        null,
        {
          [MagicPropertyType.EnhancedDamage]: 50,
        },
        null,
      ],
    },
  },
  {
    id: ids.BerserkersHauberk,
    name: "Berserker's Hauberk",
    baseId: ids.SplintMail,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 3,
      },
      magic: {
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.BarbarianSkills]: 1,
        },
        [MagicPropertyType.MagicDamageReduced]: 2,
      },
      set: [
        null,
        {
          [MagicPropertyType.DefenseByLevel]: 3,
        },
        null,
      ],
    },
  },
  {
    id: ids.BerserkersHeadgear,
    name: "Berserker's Headgear",
    baseId: ids.Helm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 3,
      },
      magic: {
        [MagicPropertyType.Defense]: 15,
        [MagicPropertyType.FireResist]: 25,
      },
      set: [
        null,
        {
          [MagicPropertyType.AttackRatingByLevel]: 8,
        },
        null,
      ],
    },
  },
]);

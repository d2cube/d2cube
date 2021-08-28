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
  set: ItemSetType.GrisworldsLegacy,
})([
  {
    id: ids.GrisworldsRedemption,
    name: "Grisworld's Redemption",
    baseId: ids.Caduceus,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 66,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 40,
        [MagicPropertyType.EnhancedDamage]: [200, 240],
        [MagicPropertyType.DamageToUndead]: 200,
        [MagicPropertyType.Requirements]: -20,
        [MagicPropertyType.Socketed]: [3, 4],
      },
      set: [
        null,
        {
          [MagicPropertyType.SkillSetLevels]: {
            [SkillSetType.PaladinCombatSkills]: 2,
          },
        },
        {
          [MagicPropertyType.AddDamage]: {x: 10, y: 20},
        },
        {
          [MagicPropertyType.AddDamage]: {x: 10, y: 20},
        },
      ],
    },
  },
  {
    id: ids.GrisworldsHeart,
    name: "Grisworld's Heart",
    baseId: ids.OrnatePlate,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 45,
      },
      magic: {
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinDefensiveAuras]: 2,
        },
        [MagicPropertyType.Defense]: 500,
        [MagicPropertyType.Strength]: 20,
        [MagicPropertyType.Requirements]: -40,
        [MagicPropertyType.Socketed]: 3,
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.GrisworldsHonor,
    name: "Grisworld's Honor",
    baseId: ids.VortexShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 68,
      },
      magic: {
        [MagicPropertyType.FasterBlockRate]: 65,
        [MagicPropertyType.IncreasedChanceOfBlocking]: 20,
        [MagicPropertyType.Defense]: 108,
        [MagicPropertyType.AllResistances]: 45,
        [MagicPropertyType.Socketed]: 3,
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.GrisworldsValor,
    name: "Grisworld's Valor",
    baseId: ids.Corona,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 69,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [50, 75],
        [MagicPropertyType.AllResistances]: 5,
        [MagicPropertyType.ColdAbsorbByLevel]: 0.25,
        [MagicPropertyType.MagicFind]: [20, 30],
        [MagicPropertyType.Requirements]: -40,
        [MagicPropertyType.Socketed]: 2,
      },
      set: [
        null,
        {
          [MagicPropertyType.SkillSetLevels]: {
            [SkillSetType.PaladinOffensiveAuras]: 2,
          },
        },
        null,
        null,
      ],
    },
  },
]);

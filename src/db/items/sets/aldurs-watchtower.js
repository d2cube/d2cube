import {
  BasePropertyType,
  ItemQualityType,
  ItemSetType,
  ItemType,
  MagicPropertyType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Set,
  set: ItemSetType.AldursWatchtower,
  type: ItemType.Set,
})([
  {
    id: ids.AldursRhythm,
    name: "Aldur's Rhythm",
    baseId: ids.JaggedStar,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.Damage]: {x: 40, y: 62},
        [MagicPropertyType.DamageToDemons]: 200,
        [MagicPropertyType.LightningDamage]: {x: 50, y: 75},
        [MagicPropertyType.ManaStolenPerHit]: 5,
        [MagicPropertyType.LifeStolenPerHit]: 10,
        [MagicPropertyType.DamageToUndead]: 50,
        [MagicPropertyType.Socketed]: [2, 3],
      },
      set: [
        null,
        {
          [MagicPropertyType.Strength]: 15,
        },
        {
          [MagicPropertyType.Strength]: 15,
        },
        {
          [MagicPropertyType.Strength]: 15,
        },
      ],
    },
  },
  {
    id: ids.AldursDeception,
    name: "Aldur's Deception",
    baseId: ids.ShadowPlate,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 76,
      },
      magic: {
        [MagicPropertyType.DruidElementalSkills]: 1,
        [MagicPropertyType.DruidShapeShiftingSkills]: 1,
        [MagicPropertyType.Defense]: 300,
        [MagicPropertyType.Strength]: 20,
        [MagicPropertyType.Dexterity]: 15,
        [MagicPropertyType.LightningResist]: [40, 50],
        [MagicPropertyType.Requirements]: -50,
      },
      set: [
        null,
        {
          [MagicPropertyType.Vitality]: 15,
        },
        {
          [MagicPropertyType.Vitality]: 15,
        },
        {
          [MagicPropertyType.Vitality]: 15,
        },
      ],
    },
  },
  {
    id: ids.AldursStonyGaze,
    name: "Aldur's Stony Gaze",
    baseId: ids.HuntersGuise,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 36,
      },
      magic: {
        [MagicPropertyType.FasterHitRecovery]: 25,
        [MagicPropertyType.Defense]: 90,
        [MagicPropertyType.RegenerateMana]: 17,
        [MagicPropertyType.ColdResist]: [40, 50],
        [MagicPropertyType.LightRadius]: 5,
        [MagicPropertyType.Socketed]: 2,
      },
      set: [
        null,
        {
          [MagicPropertyType.Energy]: 15,
        },
        {
          [MagicPropertyType.Energy]: 15,
        },
        {
          [MagicPropertyType.Energy]: 15,
        },
      ],
    },
  },
  {
    id: ids.AldursAdvance,
    name: "Aldur's Advance",
    baseId: ids.BattleBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 45,
      },
      magic: {
        [MagicPropertyType.Indestructible]: true,
        [MagicPropertyType.FasterRunWalk]: 40,
        [MagicPropertyType.Life]: 50,
        [MagicPropertyType.MaximumStamina]: 180,
        [MagicPropertyType.HealStamina]: 32,
        [MagicPropertyType.FireResist]: [40, 50],
        [MagicPropertyType.DamageTakenGoesToMana]: 10,
      },
      set: [
        null,
        {
          [MagicPropertyType.Dexterity]: 15,
        },
        {
          [MagicPropertyType.Dexterity]: 15,
        },
        {
          [MagicPropertyType.Dexterity]: 15,
        },
      ],
    },
  },
]);

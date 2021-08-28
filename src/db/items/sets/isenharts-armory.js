import {
  BasePropertyType,
  ItemQualityType,
  ItemSetType,
  MagicPropertyType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Set,
  set: ItemSetType.IsenhartsAmory,
})([
  {
    id: ids.IsenhartsLightbrand,
    name: "Isenhart's Lightbrand",
    baseId: ids.BroadSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 8,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.MinimumDamage]: 10,
      },
      set: [
        null,
        {
          [MagicPropertyType.AttackRatingByLevel]: 5,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.IsenhartsCase,
    name: "Isenhart's Case",
    baseId: ids.BreastPlate,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 8,
      },
      magic: {
        [MagicPropertyType.Defense]: 40,
        [MagicPropertyType.MagicDamageReduced]: 2,
      },
      set: [
        null,
        {
          [MagicPropertyType.DefenseByLevel]: 2,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.IsenhartsParry,
    name: "Isenhart's Parry",
    baseId: ids.GothicShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 8,
      },
      magic: {
        [MagicPropertyType.Defense]: 40,
        [MagicPropertyType.AttackerTakesDamage]: 4,
      },
      set: [
        null,
        {
          [MagicPropertyType.AllResistances]: 8,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.IsenhartsHorns,
    name: "Isenhart's Horns",
    baseId: ids.FullHelm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 8,
      },
      magic: {
        [MagicPropertyType.Dexterity]: 6,
        [MagicPropertyType.DamageReduced]: 2,
      },
      set: [
        null,
        {
          [MagicPropertyType.AllResistances]: 8,
        },
        null,
        null,
      ],
    },
  },
]);

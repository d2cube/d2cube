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
  set: ItemSetType.InfernalTools,
  type: ItemType.Set,
})([
  {
    id: ids.InfernalTorch,
    name: 'Infernal Torch',
    baseId: ids.GrimWand,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
      magic: {
        [MagicPropertyType.NecromancerSkillLevels]: 1,
        [MagicPropertyType.MinimumDamage]: 8,
        [MagicPropertyType.DamageToUndead]: 150,
      },
      set: [
        null,
        {
          [MagicPropertyType.AttackRatingByLevel]: 10,
        },
        null,
      ],
    },
  },
  {
    id: ids.InfernalCranium,
    name: 'Infernal Cranium',
    baseId: ids.Cap,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
      magic: {
        [MagicPropertyType.AllResistances]: 10,
        [MagicPropertyType.DamageTakenGoesToMana]: 20,
      },
      set: [
        null,
        {
          [MagicPropertyType.DefenseByLevel]: 2,
        },
        null,
      ],
    },
  },
  {
    id: ids.InfernalSign,
    name: 'Infernal Sign',
    baseId: ids.HeavyBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
      magic: {
        [MagicPropertyType.Defense]: 25,
        [MagicPropertyType.Life]: 20,
      },
      set: [
        null,
        {
          [MagicPropertyType.PoisonResist]: 25,
        },
        {
          [MagicPropertyType.HalfFreezeDuration]: true,
        },
      ],
    },
  },
]);

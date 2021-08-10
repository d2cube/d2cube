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
  set: ItemSetType.AngelicRaiment,
  type: ItemType.Set,
})([
  {
    id: ids.AngelicSickle,
    name: 'Angelic Sickle',
    baseId: ids.Sabre,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 12,
      },
      magic: {
        [MagicPropertyType.AttackRating]: 75,
        [MagicPropertyType.DamageToUndead]: 250,
      },
      set: [
        null,
        {
          [MagicPropertyType.EnhancedDamage]: 75,
        },
        {
          [MagicPropertyType.IncreasedAttackSpeed]: 30,
        },
        null,
      ],
    },
  },
  {
    id: ids.AngelicMantle,
    name: 'Angelic Mantle',
    baseId: ids.RingMail,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 12,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: 40,
        [MagicPropertyType.DamageReduced]: 3,
      },
      set: [
        null,
        {
          [MagicPropertyType.Defense]: 150,
        },
        {
          [MagicPropertyType.FireResist]: 50,
        },
        null,
      ],
    },
  },
  {
    id: ids.AngelicHalo,
    name: 'Angelic Halo',
    baseId: ids.Ring,
    imageId: ids.Ring,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 12,
      },
      magic: {
        [MagicPropertyType.Life]: 20,
        [MagicPropertyType.ReplenishLife]: 6,
      },
      set: [
        null,
        {
          [MagicPropertyType.AttackRatingByLevel]: 12,
        },
        {
          [MagicPropertyType.MagicFind]: 50,
        },
        null,
      ],
    },
  },
  {
    id: ids.AngelicWings,
    name: 'Angelic Wings',
    baseId: ids.Amulet,
    imageId: ids.Amulet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 12,
      },
      magic: {
        [MagicPropertyType.DamageTakenGoesToMana]: 20,
        [MagicPropertyType.LightRadius]: 3,
      },
      set: [
        null,
        {
          [MagicPropertyType.Life]: 75,
        },
        {
          [MagicPropertyType.AllSkillLevels]: 1,
        },
        {},
        null,
      ],
    },
  },
]);

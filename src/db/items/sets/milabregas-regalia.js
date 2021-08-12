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
  set: ItemSetType.MilabregasRegalia,
  type: ItemType.Set,
})([
  {
    id: ids.MilabregasRod,
    name: "Milabrega's Rod",
    baseId: ids.WarScepter,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 17,
      },
      magic: {
        [MagicPropertyType.PaladinSkillLevels]: 1,
        [MagicPropertyType.EnhancedDamage]: 50,
        [MagicPropertyType.LightRadius]: 2,
        [MagicPropertyType.DamageToUndead]: 50,
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.MilabregasRobe,
    name: "Milabrega's Robe",
    baseId: ids.AncientArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 17,
      },
      magic: {
        [MagicPropertyType.DamageReduced]: 2,
        [MagicPropertyType.AttackerTakesDamage]: 3,
      },
      set: [
        null,
        {
          [MagicPropertyType.EnhancedDefense]: 100,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.MilabregasOrb,
    name: "Milabrega's Orb",
    baseId: ids.KiteShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 17,
      },
      magic: {
        [MagicPropertyType.Defense]: 25,
        [MagicPropertyType.MagicFind]: 20,
      },
      set: [
        null,
        {
          [MagicPropertyType.Life]: 50,
        },
        {
          [MagicPropertyType.EnhancedDefense]: 50,
        },
        null,
      ],
    },
  },
  {
    id: ids.MilabregasDiadem,
    name: "Milabrega's Diadem",
    baseId: ids.Crown,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 17,
      },
      magic: {
        [MagicPropertyType.Life]: 15,
        [MagicPropertyType.Mana]: 15,
      },
      set: [
        null,
        {
          [MagicPropertyType.ColdResist]: 40,
        },
        null,
        null,
      ],
    },
  },
]);

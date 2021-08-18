import {
  BasePropertyType,
  ItemQualityType,
  ItemSetType,
  ItemType,
  MagicPropertyType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Set,
  set: ItemSetType.CowKingsLeathers,
  type: ItemType.Set,
})([
  {
    id: ids.CowKingsHorns,
    name: "Cow King's Horns",
    baseId: ids.WarHat,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 25,
      },
      magic: {
        [MagicPropertyType.Defense]: 75,
        [MagicPropertyType.HalfFreezeDuration]: true,
        [MagicPropertyType.AttackerTakesDamage]: 10,
        [MagicPropertyType.DamageTakenGoesToMana]: 35,
      },
      set: [null, null, null],
    },
  },
  {
    id: ids.CowKingsHide,
    name: "Cow King's Hide",
    baseId: ids.StuddedLeather,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 18,
      },
      magic: {
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.ChainLightning]: {x: 5, y: 18},
        },
        [MagicPropertyType.EnhancedDefense]: 60,
        [MagicPropertyType.Life]: 30,
        [MagicPropertyType.AllResistances]: 18,
      },
      set: [null, null, null],
    },
  },
  {
    id: ids.CowKingsHooves,
    name: "Cow King's Hooves",
    baseId: ids.HeavyBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 13,
      },
      magic: {
        [MagicPropertyType.FasterRunWalk]: 30,
        [MagicPropertyType.FireDamage]: {x: 25, y: 35},
        [MagicPropertyType.Defense]: [25, 35],
        [MagicPropertyType.Dexterity]: 20,
        [MagicPropertyType.MagicFind]: 25,
      },
      set: [null, null, null],
    },
  },
]);

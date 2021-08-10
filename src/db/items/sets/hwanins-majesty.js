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
  set: ItemSetType.HwaninsMajesty,
  type: ItemType.Set,
})([
  {
    id: ids.HwaninsJustice,
    name: "Hwanin's Justice",
    baseId: ids.Bill,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.ChanceToCastIceBlastOnStriking]: {x: 3, y: 10},
        [MagicPropertyType.Indestructible]: true,
        [MagicPropertyType.IncreasedAttackSpeed]: 40,
        [MagicPropertyType.EnhancedDamage]: 200,
        [MagicPropertyType.AttackRating]: 330,
        [MagicPropertyType.LightningDamage]: {x: 5, y: 25},
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.HwaninsRefuge,
    name: "Hwanin's Refuge",
    baseId: ids.TigulatedMail,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 30,
      },
      magic: {
        [MagicPropertyType.ChanceToCastStaticFieldWhenStruck]: {x: 3, y: 10},
        [MagicPropertyType.Defense]: 200,
        [MagicPropertyType.Life]: 100,
        [MagicPropertyType.PoisonResist]: 27,
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.HwaninsSplendor,
    name: "Hwanin's Splendor",
    baseId: ids.GrandCrown,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 45,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: 100,
        [MagicPropertyType.ReplenishLife]: 20,
        [MagicPropertyType.ColdResist]: 37,
        [MagicPropertyType.MagicDamageReduced]: 10,
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.HwaninsBlessing,
    name: "Hwanin's Blessing",
    baseId: ids.Belt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 35,
      },
      magic: {
        [MagicPropertyType.LightningDamage]: {x: 3, y: 33},
        [MagicPropertyType.PreventMonsterHeal]: true,
        [MagicPropertyType.DefenseByLevel]: 1.5,
        [MagicPropertyType.DamageTakenGoesToMana]: 12,
      },
      set: [null, null, null, null],
    },
  },
]);

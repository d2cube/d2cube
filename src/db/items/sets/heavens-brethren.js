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
  set: ItemSetType.HeavensBrethren,
  type: ItemType.Set,
})([
  {
    id: ids.DangoonsTeaching,
    name: "Dangoon's Teaching",
    baseId: ids.ReinforcedMace,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 68,
      },
      magic: {
        [MagicPropertyType.ChanceToCastFrostNovaOnStriking]: {x: 3, y: 10},
        [MagicPropertyType.IncreasedAttackSpeed]: 40,
        [MagicPropertyType.MaximumDamageByLevel]: 1.5,
        [MagicPropertyType.FireDamage]: {x: 20, y: 30},
        [MagicPropertyType.DamageToUndead]: 50,
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.HaemosusAdamant,
    name: "Haemosu's Teaching",
    baseId: ids.Cuirass,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 44,
      },
      magic: {
        [MagicPropertyType.Defense]: 500,
        [MagicPropertyType.DefenseVsMelee]: 40,
        [MagicPropertyType.DefenseVsMissle]: 35,
        [MagicPropertyType.Life]: 75,
        [MagicPropertyType.Requirements]: -20,
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.TaebaeksGlory,
    name: "Taebaek's Teaching",
    baseId: ids.Ward,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 81,
      },
      magic: {
        [MagicPropertyType.Indestructible]: true,
        [MagicPropertyType.FasterBlockRate]: 30,
        [MagicPropertyType.IncreasedChanceOfBlocking]: 25,
        [MagicPropertyType.Defense]: 50,
        [MagicPropertyType.Mana]: 100,
        [MagicPropertyType.LightningResist]: 30,
        [MagicPropertyType.AttackerTakesDamage]: 30,
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.OndalsAlmighty,
    name: "Ondal's Teaching",
    baseId: ids.SpiredHelm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 69,
      },
      magic: {
        [MagicPropertyType.ChanceToCastWeakenOnStriking]: {x: 3, y: 10},
        [MagicPropertyType.FasterHitRecovery]: 24,
        [MagicPropertyType.Defense]: 50,
        [MagicPropertyType.Strength]: 10,
        [MagicPropertyType.Dexterity]: 15,
        [MagicPropertyType.Requirements]: -40,
      },
      set: [null, null, null, null],
    },
  },
]);

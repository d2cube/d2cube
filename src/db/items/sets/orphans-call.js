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
  set: ItemSetType.OrphansCall,
  type: ItemType.Set,
})([
  {
    id: ids.GuillaumesFace,
    name: "Guillaume's Face",
    baseId: ids.WingedHelm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 34,
      },
      magic: {
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.CrushingBlow]: 35,
        [MagicPropertyType.DeadlyStrike]: 15,
        [MagicPropertyType.EnhancedDefense]: 120,
        [MagicPropertyType.Strength]: 15,
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.WhitstansGuard,
    name: "Whitstan's Guard",
    baseId: ids.RoundShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.FasterBlockRate]: 40,
        [MagicPropertyType.IncreasedChanceOfBlocking]: 55,
        [MagicPropertyType.EnhancedDefense]: 175,
        [MagicPropertyType.HalfFreezeDuration]: true,
        [MagicPropertyType.LightRadius]: 5,
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.MagnusSkin,
    name: "Magnus' Skin",
    baseId: ids.SharkskinGloves,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 37,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.AttackRating]: 100,
        [MagicPropertyType.EnhancedDefense]: 50,
        [MagicPropertyType.FireResist]: 15,
        [MagicPropertyType.LightRadius]: 3,
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.WilhelmsPride,
    name: "Wilhelm's Pride",
    baseId: ids.BattleBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.ManaStolenPerHit]: 5,
        [MagicPropertyType.LifeStolenPerHit]: 5,
        [MagicPropertyType.EnhancedDefense]: 75,
        [MagicPropertyType.ColdResist]: 10,
      },
      set: [null, null, null, null],
    },
  },
]);

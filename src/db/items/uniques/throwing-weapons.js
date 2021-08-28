import {
  BasePropertyType,
  ItemQualityType,
  MagicPropertyType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
})([
  {
    id: ids.Deathbit,
    name: 'Deathbit',
    baseId: ids.BattleDart,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 44,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [130, 180],
        [MagicPropertyType.DeadlyStrike]: 40,
        [MagicPropertyType.AttackRating]: [200, 450],
        [MagicPropertyType.LifeStolenPerHit]: [7, 9],
        [MagicPropertyType.ManaStolenPerHit]: [4, 6],
        [MagicPropertyType.ReplenishesQuantity]: 4,
      },
    },
  },
  {
    id: ids.TheScalper,
    name: 'The Scalper',
    baseId: ids.Francisca,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 57,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 200],
        [MagicPropertyType.OpenWounds]: 33,
        [MagicPropertyType.ManaAfterKill]: 4,
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.BonusToAttackRating]: 25,
        [MagicPropertyType.LifeStolenPerHit]: [4, 6],
        [MagicPropertyType.ReplenishesQuantity]: 3,
      },
    },
  },
  {
    id: ids.Warshrike,
    name: 'Warshrike',
    baseId: ids.WingedKnife,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 75,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [200, 250],
        [MagicPropertyType.DeadlyStrike]: 50,
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.PiercingAttack]: 50,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Nova]: {x: 9, y: 25},
        },
        [MagicPropertyType.ReplenishesQuantity]: 3,
      },
    },
  },
  {
    id: ids.Gimmershred,
    name: 'Gimmershred',
    baseId: ids.FlyingAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 70,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [160, 210],
        [MagicPropertyType.FireDamage]: {x: 218, y: 483},
        [MagicPropertyType.LightningDamage]: {x: 29, y: 501},
        [MagicPropertyType.ColdDamage]: {x: 176, y: 397, z: 4},
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.IncreasedStackSize]: 60,
      },
    },
  },
  {
    id: ids.Lacerator,
    name: 'Lacerator',
    baseId: ids.WingedAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 70,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 210],
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.OpenWounds]: 33,
        [MagicPropertyType.PreventMonsterHeal]: true,
        [MagicPropertyType.HitCausesMonsterToFlee]: 50,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.AmplifyDamage]: {x: 3, y: 33},
        },
        [MagicPropertyType.ReplenishesQuantity]: 4,
      },
    },
  },
]);

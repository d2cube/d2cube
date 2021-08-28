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
  set: ItemSetType.SigonsCompleteSteel,
})([
  {
    id: ids.SigonsShelter,
    name: "Sigon's Shelter",
    baseId: ids.GothicPlate,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 6,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: 25,
        [MagicPropertyType.LightningResist]: 30,
      },
      set: [
        null,
        {
          [MagicPropertyType.AttackerTakesDamage]: 20,
        },
        null,
        null,
        null,
        null,
      ],
    },
  },
  {
    id: ids.SigonsGuard,
    name: "Sigon's Guard",
    baseId: ids.TowerShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 6,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.IncreasedChanceOfBlocking]: 20,
      },
      set: [null, null, null, null, null, null],
    },
  },
  {
    id: ids.SigonsVisor,
    name: "Sigon's Visor",
    baseId: ids.GreatHelm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 6,
      },
      magic: {
        [MagicPropertyType.Defense]: 25,
        [MagicPropertyType.Mana]: 30,
      },
      set: [
        null,
        {
          [MagicPropertyType.AttackRatingByLevel]: 8,
        },
        null,
        null,
        null,
        null,
      ],
    },
  },
  {
    id: ids.SigonsGage,
    name: "Sigon's Gage",
    baseId: ids.Gauntlets,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 6,
      },
      magic: {
        [MagicPropertyType.AttackRating]: 20,
        [MagicPropertyType.Strength]: 10,
      },
      set: [
        null,
        {
          [MagicPropertyType.IncreasedAttackSpeed]: 30,
        },
        null,
        null,
        null,
        null,
      ],
    },
  },
  {
    id: ids.SigonsWrap,
    name: "Sigon's Wrap",
    baseId: ids.PlatedBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 6,
      },
      magic: {
        [MagicPropertyType.Life]: 20,
        [MagicPropertyType.FireResist]: 20,
      },
      set: [
        null,
        {
          [MagicPropertyType.DefenseByLevel]: 2,
        },
        null,
        null,
        null,
        null,
      ],
    },
  },
  {
    id: ids.SigonsSabot,
    name: "Sigon's Sabot",
    baseId: ids.Greaves,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 6,
      },
      magic: {
        [MagicPropertyType.FasterRunWalk]: 20,
        [MagicPropertyType.ColdResist]: 40,
      },
      set: [
        null,
        {
          [MagicPropertyType.AttackRating]: 50,
        },
        {
          [MagicPropertyType.MagicFind]: 50,
        },
        null,
        null,
        null,
      ],
    },
  },
]);

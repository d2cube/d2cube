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
  set: ItemSetType.TrangOulsAvatar,
  type: ItemType.Set,
})([
  {
    id: ids.TrangOulsScales,
    name: "Trang-Oul's Scales",
    baseId: ids.ChaosArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 49,
      },
      magic: {
        [MagicPropertyType.NecromancerSummoningSkills]: 2,
        [MagicPropertyType.FasterRunWalk]: 40,
        [MagicPropertyType.EnhancedDefense]: 150,
        [MagicPropertyType.DefenseVsMissle]: 100,
        [MagicPropertyType.PoisonResist]: 40,
        [MagicPropertyType.Requirements]: -40,
      },
      set: [
        null,
        null,
        {
          [MagicPropertyType.LightningResist]: 50,
        },
        null,
        {
          [MagicPropertyType.DamageReducedPercentage]: 25,
        },
      ],
    },
  },
  {
    id: ids.TrangOulsWing,
    name: "Trang-Oul's Wing",
    baseId: ids.CantorTrophy,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 54,
      },
      magic: {
        [MagicPropertyType.NecromancerPoisonAndBoneSkills]: 2,
        [MagicPropertyType.IncreasedChanceOfBlocking]: 30,
        [MagicPropertyType.Defense]: 125,
        [MagicPropertyType.Strength]: 25,
        [MagicPropertyType.Dexterity]: 15,
        [MagicPropertyType.FireResist]: [38, 45],
        [MagicPropertyType.PoisonResist]: 40,
      },
      set: [
        null,
        null,
        {
          [MagicPropertyType.LowerPoisonResist]: 25,
        },
        {
          [MagicPropertyType.ReplenishLife]: 15,
        },
        null,
      ],
    },
  },
  {
    id: ids.TrangOulsGuise,
    name: "Trang-Oul's Guise",
    baseId: ids.BoneVisage,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.FasterHitRecovery]: 25,
        [MagicPropertyType.Defense]: [80, 100],
        [MagicPropertyType.ReplenishLife]: 5,
        [MagicPropertyType.Mana]: 150,
        [MagicPropertyType.AttackerTakesDamage]: 20,
      },
      set: [null, null, null, null, null],
    },
  },
  {
    id: ids.TrangOulsClaws,
    name: "Trang-Oul's Claws",
    baseId: ids.HeavyBracers,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 45,
      },
      magic: {
        [MagicPropertyType.NecromancerCurses]: 2,
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.PoisonSkillDamage]: 25,
        [MagicPropertyType.Defense]: 30,
        [MagicPropertyType.ColdResist]: 30,
      },
      set: [null, null, null, null, null],
    },
  },
  {
    id: ids.TrangOulsGirth,
    name: "Trang-Oul's Girth",
    baseId: ids.TrollBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.Defense]: [75, 100],
        [MagicPropertyType.Life]: 66,
        [MagicPropertyType.ReplenishLife]: 5,
        [MagicPropertyType.Mana]: [25, 50],
        [MagicPropertyType.MaximumStamina]: 30,
        [MagicPropertyType.CannotBeFrozen]: true,
        [MagicPropertyType.Requirements]: -40,
      },
      set: [
        null,
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

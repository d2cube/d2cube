import {
  BasePropertyType,
  ItemQualityType,
  ItemType,
  MagicPropertyType,
  PlayerClassType,
  SkillSetType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
  type: ItemType.Unique,
})([
  {
    id: ids.BartucsCutThroat,
    name: "Bartuc's Cut-Throat",
    baseId: ids.GreaterTalons,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 200],
        [MagicPropertyType.AddDamage]: {x: 25, y: 50},
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.BonusToAttackRating]: 20,
        [MagicPropertyType.LifeStolenPerHit]: [5, 9],
        [MagicPropertyType.Strength]: 20,
        [MagicPropertyType.Dexterity]: 20,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AssassinMartialArts]: 1,
          [SkillSetType.AssassinSkills]: 2,
        },
      },
    },
  },
  {
    id: ids.JadeTalon,
    name: 'Jade Talon',
    baseId: ids.WristSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 66,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [190, 240],
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.ManaStolenPerHit]: [10, 15],
        [MagicPropertyType.AllResistances]: [40, 50],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AssassinMartialArts]: [1, 2],
          [SkillSetType.AssassinShadowDisciplines]: [1, 2],
        },
      },
    },
  },
  {
    id: ids.ShadowKiller,
    name: 'Shadow Killer',
    baseId: ids.BattleCestus,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 78,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [170, 220],
        [MagicPropertyType.TargetDefense]: -25,
        [MagicPropertyType.FreezesTarget]: 2,
        [MagicPropertyType.ManaAfterKill]: [10, 15],
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.FrostNova]: {x: 8, y: 33},
        },
        [MagicPropertyType.Indestructible]: true,
        [MagicPropertyType.Ethereal]: true,
      },
    },
  },
  {
    id: ids.FirelizardsTalons,
    name: "Firelizard's Talons",
    baseId: ids.FeralClaws,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 67,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [200, 270],
        [MagicPropertyType.FireDamage]: {x: 236, y: 480},
        [MagicPropertyType.IncreasedAttackSpeed]: 15,
        [MagicPropertyType.FireResist]: [40, 70],
        [MagicPropertyType.Spell]: {
          [SkillType.WakeOfInferno]: {
            x: [1, 2],
            y: PlayerClassType.Assassin,
          },
          [SkillType.WakeOfFire]: {x: [1, 2], y: PlayerClassType.Assassin},
        },
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AssassinMartialArts]: [1, 3],
        },
      },
    },
  },
]);

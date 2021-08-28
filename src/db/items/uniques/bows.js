import {
  BasePropertyType,
  ItemQualityType,
  MagicPropertyType,
  PlayerClassType,
  SkillSetType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
})([
  {
    id: ids.Blastbark,
    name: 'Blastbark',
    baseId: ids.LongWarBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [70, 130],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AmazonSkills]: 1,
        },
        [MagicPropertyType.Spell]: {
          [SkillType.ExplodingArrow]: {x: 2, y: PlayerClassType.Amazon},
        },
        [MagicPropertyType.ManaStolenPerHit]: 3,
        [MagicPropertyType.Strength]: 5,
      },
    },
  },
  {
    id: ids.Hellclap,
    name: 'Hellclap',
    baseId: ids.ShortWarBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 27,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [70, 90],
        [MagicPropertyType.FireDamage]: {x: 15, y: [30, 50]},
        [MagicPropertyType.IncreasedAttackSpeed]: 10,
        [MagicPropertyType.AttackRating]: [50, 75],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.FireSkills]: 1,
        },
        [MagicPropertyType.FireResist]: 40,
        [MagicPropertyType.Dexterity]: 12,
      },
    },
  },
  {
    id: ids.Pluckeye,
    name: 'Pluckeye',
    baseId: ids.ShortBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 7,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 100,
        [MagicPropertyType.AttackRating]: 28,
        [MagicPropertyType.ManaStolenPerHit]: 3,
        [MagicPropertyType.Life]: 10,
        [MagicPropertyType.ManaAfterKill]: 2,
        [MagicPropertyType.LightRadius]: 2,
      },
    },
  },
  {
    id: ids.RavenClaw,
    name: 'Raven Claw',
    baseId: ids.LongBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [60, 70],
        [MagicPropertyType.FiresExplosiveArrowsOrBolts]: 3,
        [MagicPropertyType.BonusToAttackRating]: 50,
        [MagicPropertyType.Dexterity]: 3,
        [MagicPropertyType.Strength]: 3,
      },
    },
  },
  {
    id: ids.RoguesBow,
    name: "Rogue's Bow",
    baseId: ids.CompositeBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 20,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [40, 60],
        [MagicPropertyType.DamageToUndead]: 100,
        [MagicPropertyType.DeadlyStrike]: 30,
        [MagicPropertyType.IncreasedAttackSpeed]: 50,
        [MagicPropertyType.AttackRating]: 60,
        [MagicPropertyType.AllResistances]: 10,
      },
    },
  },
  {
    id: ids.Stormstrike,
    name: 'Stormstrike',
    baseId: ids.ShortBattleBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 25,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [70, 90],
        [MagicPropertyType.LightningDamage]: {x: 1, y: 30},
        [MagicPropertyType.PiercingAttack]: 25,
        [MagicPropertyType.AttackRating]: 28,
        [MagicPropertyType.LightningResist]: 25,
        [MagicPropertyType.Strength]: 8,
      },
    },
  },
  {
    id: ids.Witherstring,
    name: 'Witherstring',
    baseId: ids.HuntersBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 13,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [40, 50],
        [MagicPropertyType.FiresMagicArrows]: 3,
        [MagicPropertyType.AddDamage]: {x: 1, y: 3},
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.AttackRating]: 50,
      },
    },
  },
  {
    id: ids.Wizendraw,
    name: 'Wizendraw',
    baseId: ids.LongBattleBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 26,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [70, 80],
        [MagicPropertyType.AttackRating]: [50, 100],
        [MagicPropertyType.FiresMagicArrows]: 5,
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.ColdResist]: 26,
        [MagicPropertyType.Energy]: 15,
        [MagicPropertyType.Mana]: 30,
        [MagicPropertyType.LowerColdResist]: [-20, -35],
      },
    },
  },
  {
    id: ids.Cliffkiller,
    name: 'Cliffkiller',
    baseId: ids.LargeSiegeBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [190, 230],
        [MagicPropertyType.AddDamage]: {x: [5, 10], y: [20, 30]},
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AmazonSkills]: 2,
        },
        [MagicPropertyType.DefenseVsMissle]: 80,
        [MagicPropertyType.Life]: 50,
        [MagicPropertyType.Knockback]: true,
      },
    },
  },
  {
    id: ids.Endlesshail,
    name: 'Endlesshail',
    baseId: ids.DoubleBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 36,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [180, 220],
        [MagicPropertyType.ColdDamage]: {x: 15, y: 30, z: 3},
        [MagicPropertyType.ColdResist]: 35,
        [MagicPropertyType.DefenseVsMissle]: 50,
        [MagicPropertyType.Mana]: 40,
        [MagicPropertyType.Spell]: {
          [SkillType.Strafe]: {x: [3, 5], y: PlayerClassType.Amazon},
        },
      },
    },
  },
  {
    id: ids.GoldstrikeArch,
    name: 'Goldstrike Arch',
    baseId: ids.GothicBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 46,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [200, 250],
        [MagicPropertyType.DamageToDemons]: [100, 200],
        [MagicPropertyType.DamageToUndead]: [100, 200],
        [MagicPropertyType.IncreasedAttackSpeed]: 50,
        [MagicPropertyType.BonusToAttackRating]: [100, 150],
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.FistOfTheHeavens]: {x: 7, y: 5},
        },
        [MagicPropertyType.ReplenishLife]: 12,
      },
    },
  },
  {
    id: ids.KukoShakaku,
    name: 'Kuko Shakaku',
    baseId: ids.CedarBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 33,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 180],
        [MagicPropertyType.FiresExplosiveArrowsOrBolts]: 7,
        [MagicPropertyType.PiercingAttack]: 50,
        [MagicPropertyType.FireDamage]: {x: 40, y: 180},
        [MagicPropertyType.Spell]: {
          [SkillType.ImmolationArrow]: {x: 3, y: PlayerClassType.Amazon},
        },
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AmazonBowAndCrossbowSkills]: 3,
        },
      },
    },
  },
  {
    id: ids.Magewrath,
    name: 'Magewrath',
    baseId: ids.RuneBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 43,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [120, 150],
        [MagicPropertyType.AddDamage]: {x: 25, y: 50},
        [MagicPropertyType.AttackRating]: [200, 250],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AmazonSkills]: 1,
        },
        [MagicPropertyType.HitBlindsTarget]: 0,
        [MagicPropertyType.ManaStolenPerHit]: 15,
        [MagicPropertyType.MagicDamageReduced]: [9, 13],
        [MagicPropertyType.Dexterity]: 10,
        [MagicPropertyType.Spell]: {
          [SkillType.GuidedArrow]: {x: 3, y: PlayerClassType.Amazon},
        },
      },
    },
  },
  {
    id: ids.Riphook,
    name: 'Riphook',
    baseId: ids.RazorBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 31,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [180, 220],
        [MagicPropertyType.SlowsTarget]: 30,
        [MagicPropertyType.OpenWounds]: 30,
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.LifeStolenPerHit]: [7, 10],
        [MagicPropertyType.Mana]: 35,
      },
    },
  },
  {
    id: ids.Skystrike,
    name: 'Skystrike',
    baseId: ids.EdgeBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 200],
        [MagicPropertyType.LightningDamage]: {x: 1, y: 250},
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.AttackRating]: 100,
        [MagicPropertyType.Energy]: 10,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AmazonSkills]: 1,
        },
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Meteor]: {x: 6, y: 2},
        },
      },
    },
  },
  {
    id: ids.WitchwildString,
    name: 'Witchwild String',
    baseId: ids.ShortSiegeBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 39,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 170],
        [MagicPropertyType.FiresMagicArrows]: 20,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.AmplifyDamage]: {x: 5, y: 2},
        },
        [MagicPropertyType.DeadlyStrikeByLevel]: 1,
        [MagicPropertyType.AllResistances]: 40,
        [MagicPropertyType.Socketed]: 2,
      },
    },
  },
  {
    id: ids.Eaglehorn,
    name: 'Eaglehorn',
    baseId: ids.RuneBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 69,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 200,
        [MagicPropertyType.EnhancedMaximumDamageByLevel]: 2,
        [MagicPropertyType.AttackRatingByLevel]: 6,
        [MagicPropertyType.Dexterity]: 25,
        [MagicPropertyType.IgnoreTargetDefense]: true,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AmazonSkills]: 1,
        },
      },
    },
  },
  {
    id: ids.Widowmaker,
    name: 'Widowmaker',
    baseId: ids.WardBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 200],
        [MagicPropertyType.IgnoreTargetDefense]: true,
        [MagicPropertyType.FiresMagicArrows]: 1,
        [MagicPropertyType.DeadlyStrike]: 33,
        [MagicPropertyType.Spell]: {
          [SkillType.GuidedArrow]: {x: [3, 5]},
        },
      },
    },
  },
  {
    id: ids.Windforce,
    name: 'Windforce',
    baseId: ids.HydraBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 73,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 250,
        [MagicPropertyType.MaximumDamageByLevel]: 3.125,
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.ManaStolenPerHit]: [6, 8],
        [MagicPropertyType.HealStamina]: 30,
        [MagicPropertyType.Strength]: 10,
        [MagicPropertyType.Dexterity]: 5,
        [MagicPropertyType.Knockback]: true,
      },
    },
  },
]);

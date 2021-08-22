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
    id: ids.TheGnasher,
    name: 'The Gnasher',
    baseId: ids.HandAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [60, 70],
        [MagicPropertyType.CrushingBlow]: 20,
        [MagicPropertyType.OpenWounds]: 50,
        [MagicPropertyType.Strength]: 8,
      },
    },
  },
  {
    id: ids.Deathspade,
    name: 'Deathspade',
    baseId: ids.Axe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 9,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [60, 70],
        [MagicPropertyType.MinimumDamage]: 8,
        [MagicPropertyType.BonusToAttackRating]: 15,
        [MagicPropertyType.HitBlindsTarget]: true,
        [MagicPropertyType.ManaAfterKill]: 4,
      },
    },
  },
  {
    id: ids.Bladebone,
    name: 'Bladebone',
    baseId: ids.DoubleAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [30, 50],
        [MagicPropertyType.DamageToUndead]: 100,
        [MagicPropertyType.FireDamage]: {x: 8, y: 12},
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.AttackRatingAgainstUndead]: 40,
        [MagicPropertyType.Defense]: 20,
      },
    },
  },
  {
    id: ids.SkullSplitter,
    name: 'Skull Splitter',
    baseId: ids.MilitaryPick,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 21,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [60, 100],
        [MagicPropertyType.LightningDamage]: {x: 1, y: [12, 15]},
        [MagicPropertyType.AttackRating]: [50, 100],
        [MagicPropertyType.OpenWounds]: 15,
        [MagicPropertyType.HitBlindsTarget]: 2,
        [MagicPropertyType.RegenerateMana]: 20,
      },
    },
  },
  {
    id: ids.Rakescar,
    name: 'Rakescar',
    baseId: ids.WarAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 27,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [75, 150],
        [MagicPropertyType.PoisonDamage]: {x: 38, y: 38, z: 3},
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.AttackRating]: 50,
        [MagicPropertyType.PoisonResist]: 50,
      },
    },
  },
  {
    id: ids.AxeofFechmar,
    name: 'Axe of Fechmar',
    baseId: ids.LargeAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 8,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [70, 90],
        [MagicPropertyType.FreezesTarget]: 3,
        [MagicPropertyType.ColdResist]: 50,
        [MagicPropertyType.LightRadius]: 2,
      },
    },
  },
  {
    id: ids.Goreshovel,
    name: 'Goreshovel',
    baseId: ids.BroadAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 14,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [40, 50],
        [MagicPropertyType.MaximumDamage]: 9,
        [MagicPropertyType.OpenWounds]: 60,
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.Strength]: 25,
      },
    },
  },
  {
    id: ids.TheChieftain,
    name: 'The Chieftain',
    baseId: ids.BattleAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 10,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 100,
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.LightningDamage]: {x: 1, y: 40},
        [MagicPropertyType.AllResistances]: [10, 20],
        [MagicPropertyType.ManaAfterKill]: 6,
      },
    },
  },
  {
    id: ids.Brainhew,
    name: 'Brainhew',
    baseId: ids.GreatAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 25,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [50, 80],
        [MagicPropertyType.MinimumDamage]: 14,
        [MagicPropertyType.FireDamage]: {x: 15, y: 35},
        [MagicPropertyType.ManaStolenPerHit]: [10, 13],
        [MagicPropertyType.Mana]: 25,
        [MagicPropertyType.LightRadius]: 4,
      },
    },
  },
  {
    id: ids.Humongous,
    name: 'Humongous',
    baseId: ids.GiantAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [80, 120],
        [MagicPropertyType.AddDamage]: {x: 8, y: [15, 25]},
        [MagicPropertyType.CrushingBlow]: 33,
        [MagicPropertyType.Strength]: [20, 30],
        [MagicPropertyType.Requirements]: 20,
      },
    },
  },
  {
    id: ids.Coldkill,
    name: 'Coldkill',
    baseId: ids.Hatchet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 36,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 190],
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.IceBlast]: {x: 10, y: 10},
        },
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.FrostNova]: {x: 5, y: 10},
        },
        [MagicPropertyType.ColdDamage]: {x: 40, y: 40, z: 2},
        [MagicPropertyType.MaximumColdResist]: 15,
        [MagicPropertyType.ColdResist]: 15,
      },
    },
  },
  {
    id: ids.ButchersPupil,
    name: "Butcher's Pupil",
    baseId: ids.Cleaver,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 39,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 200],
        [MagicPropertyType.AddDamage]: {x: 30, y: 50},
        [MagicPropertyType.DeadlyStrike]: 35,
        [MagicPropertyType.OpenWounds]: 25,
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.Indestructible]: true,
      },
    },
  },
  {
    id: ids.Islestrike,
    name: 'Islestrike',
    baseId: ids.TwinAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 43,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [170, 190],
        [MagicPropertyType.CrushingBlow]: 25,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.DruidSkills]: 2,
        },
        [MagicPropertyType.DefenseVsMissle]: 50,
        [MagicPropertyType.AllAttributes]: 10,
        [MagicPropertyType.Spell]: {
          [SkillType.Fury]: {x: 1, y: PlayerClassType.Druid},
          [SkillType.Maul]: {x: 1, y: PlayerClassType.Druid},
        },
      },
    },
  },
  {
    id: ids.PompeiisWrath,
    name: "Pompeii's Wrath",
    baseId: ids.Crowbill,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 45,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [140, 170],
        [MagicPropertyType.FireDamage]: {x: 35, y: 150},
        [MagicPropertyType.SlowsTarget]: 50,
        [MagicPropertyType.Knockback]: true,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Volcano]: {x: 8, y: 4},
        },
      },
    },
  },
  {
    id: ids.GuardianNaga,
    name: 'Guardian Naga',
    baseId: ids.Naga,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 48,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 180],
        [MagicPropertyType.MaximumDamage]: 20,
        [MagicPropertyType.PoisonDamage]: {x: 250, y: 250, z: 10},
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.PoisonNova]: {x: 8, y: 5},
        },
        [MagicPropertyType.PoisonResist]: 30,
        [MagicPropertyType.AttackerTakesDamage]: 15,
      },
    },
  },
  {
    id: ids.WarlordsTrust,
    name: "Warlord's Trust",
    baseId: ids.MilitaryAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 35,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 175,
        [MagicPropertyType.RepairsDurability]: 4,
        [MagicPropertyType.VitalityByLevel]: 0.5,
        [MagicPropertyType.ReplenishLife]: 20,
        [MagicPropertyType.AllResistances]: 10,
        [MagicPropertyType.Defense]: 75,
      },
    },
  },
  {
    id: ids.Spellsteel,
    name: 'Spellsteel',
    baseId: ids.BeardedAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 39,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 165,
        [MagicPropertyType.FasterCastRate]: 10,
        [MagicPropertyType.Requirements]: -60,
        [MagicPropertyType.RegenerateMana]: 25,
        [MagicPropertyType.Mana]: 100,
        [MagicPropertyType.MagicDamageReduced]: [12, 15],
        [MagicPropertyType.SpellCharges]: {
          [SkillType.Firestorm]: {x: 12, y: 60},
          [SkillType.HolyBolt]: {x: 10, y: 100},
          [SkillType.Teleport]: {x: 1, y: 20},
        },
      },
    },
  },
  {
    id: ids.Stormrider,
    name: 'Stormrider',
    baseId: ids.Tabar,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 100,
        [MagicPropertyType.AddDamage]: {x: 35, y: 75},
        [MagicPropertyType.LightningDamage]: {x: 1, y: 200},
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.ChargedBolt]: {x: 5, y: 15},
        },
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.ChainLightning]: {x: 10, y: 5},
          [SkillType.ChargedBolt]: {x: [13, 20], y: 10},
        },
        [MagicPropertyType.AttackerTakesLightningDamage]: 15,
      },
    },
  },
  {
    id: ids.BoneslayerBlade,
    name: 'Boneslayer Blade',
    baseId: ids.GothicAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [180, 220],
        [MagicPropertyType.AttackRatingAgainstUndeadByLevel]: 5,
        [MagicPropertyType.DamageToUndeadByLevel]: 2.5,
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.HolyBolt]: {x: [12, 28], y: 50},
        },
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.BonusToAttackRating]: 35,
        [MagicPropertyType.Strength]: 8,
        [MagicPropertyType.SpellCharges]: {
          [SkillType.HolyBolt]: {x: 20, y: 200},
        },
      },
    },
  },
  {
    id: ids.TheMinotaur,
    name: 'The Minotaur',
    baseId: ids.AncientAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 45,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [140, 200],
        [MagicPropertyType.AddDamage]: {x: 20, y: 30},
        [MagicPropertyType.SlowsTarget]: 50,
        [MagicPropertyType.CrushingBlow]: 30,
        [MagicPropertyType.HitBlindsTarget]: 2,
        [MagicPropertyType.HalfFreezeDuration]: true,
        [MagicPropertyType.Strength]: [15, 20],
      },
    },
  },
  {
    id: ids.RazorsEdge,
    name: "Razor's Edge",
    baseId: ids.Tomahawk,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 67,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [175, 225],
        [MagicPropertyType.IncreasedAttackSpeed]: 40,
        [MagicPropertyType.TargetDefense]: -33,
        [MagicPropertyType.DeadlyStrike]: 50,
        [MagicPropertyType.OpenWounds]: 50,
      },
    },
  },
  {
    id: ids.RuneMaster,
    name: 'Rune Master',
    baseId: ids.EttinAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 72,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [220, 270],
        [MagicPropertyType.MaximumColdResist]: 5,
        [MagicPropertyType.CannotBeFrozen]: true,
        [MagicPropertyType.Socketed]: [3, 5],
      },
    },
  },
  {
    id: ids.Cranebeak,
    name: 'Cranebeak',
    baseId: ids.WarSpike,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 63,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [240, 300],
        [MagicPropertyType.IncreasedAttackSpeed]: 40,
        [MagicPropertyType.TargetDefense]: -25,
        [MagicPropertyType.LightningDamage]: {x: 1, y: 305},
        [MagicPropertyType.MagicFind]: [20, 50],
        [MagicPropertyType.SpellCharges]: {
          [SkillType.Raven]: {x: 8, y: 15},
        },
      },
    },
  },
  {
    id: ids.DeathCleaver,
    name: 'Death Cleaver',
    baseId: ids.BerserkerAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 70,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [230, 280],
        [MagicPropertyType.IncreasedAttackSpeed]: 40,
        [MagicPropertyType.TargetDefense]: -33,
        [MagicPropertyType.DeadlyStrike]: 66,
        [MagicPropertyType.LifeAfterKill]: [6, 9],
      },
    },
  },
  {
    id: ids.EtherealEdge,
    name: 'Ethereal Edge',
    baseId: ids.SilverEdgedAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 74,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 180],
        [MagicPropertyType.DamageToDemons]: [150, 200],
        [MagicPropertyType.AttackRating]: [270, 350],
        [MagicPropertyType.IncreasedAttackSpeed]: 25,
        [MagicPropertyType.FireAbsorb]: [10, 12],
        [MagicPropertyType.LifeAfterDemonKill]: [5, 10],
        [MagicPropertyType.Indestructible]: true,
        [MagicPropertyType.Ethereal]: true,
      },
    },
  },
  {
    id: ids.Hellslayer,
    name: 'Hellslayer',
    baseId: ids.Decapitator,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 66,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 100,
        [MagicPropertyType.EnhancedMaximumDamageByLevel]: 3,
        [MagicPropertyType.FireDamage]: {x: 150, y: 250},
        [MagicPropertyType.StrengthByLevel]: 0.5,
        [MagicPropertyType.VitalityByLevel]: 0.5,
        [MagicPropertyType.Life]: 25,
        [MagicPropertyType.ChanceToCastSpellOnAttack]: {
          [SkillType.FireBall]: {x: [16, 20], y: 10},
        },
      },
    },
  },
  {
    id: ids.MesserschmidtsReaver,
    name: "Messerschmidt's Reaver",
    baseId: ids.ChampionAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 70,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 200,
        [MagicPropertyType.EnhancedMaximumDamageByLevel]: 2.5,
        [MagicPropertyType.FireDamage]: {x: 20, y: 240},
        [MagicPropertyType.BonusToAttackRating]: 100,
        [MagicPropertyType.AllAttributes]: 15,
      },
    },
  },
  {
    id: ids.ExecutionersJustice,
    name: "Executioner's Justice",
    baseId: ids.GloriusAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 75,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [240, 290],
        [MagicPropertyType.CrushingBlow]: 25,
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.TargetDefense]: -33,
        [MagicPropertyType.ChanceToCastSpellOnKill]: {
          [SkillType.Decrepify]: {x: 6, y: 50},
        },
      },
    },
  },
]);

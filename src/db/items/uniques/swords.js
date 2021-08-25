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
    id: ids.BloodCrescent,
    name: 'Blood Crescent',
    baseId: ids.Scimitar,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 7,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 15,
        [MagicPropertyType.EnhancedDamage]: [60, 80],
        [MagicPropertyType.LifeStolenPerHit]: 15,
        [MagicPropertyType.OpenWounds]: 33,
        [MagicPropertyType.Life]: 15,
        [MagicPropertyType.AllResistances]: 15,
        [MagicPropertyType.LightRadius]: 4,
      },
    },
  },
  {
    id: ids.CulwensPoint,
    name: "Culwen's Point",
    baseId: ids.WarSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [70, 80],
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.PoisonLengthReduced]: 50,
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.FasterHitRecovery]: 20,
        [MagicPropertyType.AttackRating]: 60,
      },
    },
  },
  {
    id: ids.Gleamscythe,
    name: 'Gleamscythe',
    baseId: ids.Falchion,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 13,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [60, 100],
        [MagicPropertyType.ColdDamage]: {x: 3, y: 5, z: 2},
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.Defense]: 20,
        [MagicPropertyType.Mana]: 30,
        [MagicPropertyType.LightRadius]: 3,
      },
    },
  },
  {
    id: ids.GrisworldsEdge,
    name: "Grisworld's Edge",
    baseId: ids.BroadSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 17,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [80, 120],
        [MagicPropertyType.FireDamage]: {x: [10, 12], y: [15, 25]},
        [MagicPropertyType.IncreasedAttackSpeed]: 10,
        [MagicPropertyType.AttackRating]: 100,
        [MagicPropertyType.Strength]: 12,
        [MagicPropertyType.Knockback]: true,
      },
    },
  },
  {
    id: ids.Hellplague,
    name: 'Hellplague',
    baseId: ids.LongSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 22,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [70, 80],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.FireSkills]: 2,
        },
        [MagicPropertyType.FireDamage]: {x: 25, y: 75},
        [MagicPropertyType.PoisonDamage]: {x: 28, y: 56, z: 6},
        [MagicPropertyType.LifeStolenPerHit]: 5,
        [MagicPropertyType.ManaStolenPerHit]: 5,
      },
    },
  },
  {
    id: ids.RixotsKeen,
    name: "Rixot's Keen",
    baseId: ids.ShortSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 2,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 100,
        [MagicPropertyType.MinimumDamage]: 5,
        [MagicPropertyType.CrushingBlow]: 25,
        [MagicPropertyType.BonusToAttackRating]: 20,
        [MagicPropertyType.Defense]: 25,
        [MagicPropertyType.LightRadius]: 2,
      },
    },
  },
  {
    id: ids.SkewerOfKrintiz,
    name: 'Skewer of Krintiz',
    baseId: ids.Sabre,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 10,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 50,
        [MagicPropertyType.AddDamage]: {x: 3, y: 7},
        [MagicPropertyType.IgnoreTargetDefense]: true,
        [MagicPropertyType.ManaStolenPerHit]: 7,
        [MagicPropertyType.Dexterity]: 10,
        [MagicPropertyType.Strength]: 10,
      },
    },
  },
  {
    id: ids.Blacktongue,
    name: 'Blacktongue',
    baseId: ids.BastardSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 26,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [50, 60],
        [MagicPropertyType.PoisonDamage]: {x: 113, y: 113, z: 6},
        [MagicPropertyType.PreventMonsterHeal]: true,
        [MagicPropertyType.AttackRating]: 50,
        [MagicPropertyType.PoisonResist]: 50,
      },
    },
  },
  {
    id: ids.KinemilsAwl,
    name: "Kinemil's Awl",
    baseId: ids.GiantSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 23,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [80, 100],
        [MagicPropertyType.AttackRating]: [100, 150],
        [MagicPropertyType.FireDamage]: {x: 6, y: [20, 40]},
        [MagicPropertyType.Mana]: 20,
        [MagicPropertyType.Spell]: {
          [SkillType.HolyFire]: {x: 6, y: PlayerClassType.Paladin},
        },
      },
    },
  },
  {
    id: ids.Ripsaw,
    name: 'Ripsaw',
    baseId: ids.Flamberge,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 26,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [80, 100],
        [MagicPropertyType.MaximumDamage]: 15,
        [MagicPropertyType.OpenWounds]: 80,
        [MagicPropertyType.ManaStolenPerHit]: 6,
      },
    },
  },
  {
    id: ids.Shadowfang,
    name: 'Shadowfang',
    baseId: ids.TwoHandedSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 12,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 100,
        [MagicPropertyType.ColdDamage]: {x: 10, y: 30, z: 6},
        [MagicPropertyType.LifeStolenPerHit]: 9,
        [MagicPropertyType.ManaStolenPerHit]: 9,
        [MagicPropertyType.ColdResist]: 20,
        [MagicPropertyType.LightRadius]: -2,
      },
    },
  },
  {
    id: ids.Soulflay,
    name: 'Soulflay',
    baseId: ids.Claymore,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 19,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [70, 100],
        [MagicPropertyType.IncreasedAttackSpeed]: 10,
        [MagicPropertyType.LifeStolenPerHit]: 4,
        [MagicPropertyType.ManaStolenPerHit]: [4, 10],
        [MagicPropertyType.AllResistances]: 5,
      },
    },
  },
  {
    id: ids.ThePatriarch,
    name: 'The Patriach',
    baseId: ids.GreatSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [100, 120],
        [MagicPropertyType.HitBlindsTarget]: 0,
        [MagicPropertyType.Strength]: 10,
        [MagicPropertyType.ExtraGold]: 100,
        [MagicPropertyType.MagicDamageReduced]: 3,
        [MagicPropertyType.DamageReduced]: 3,
      },
    },
  },
  {
    id: ids.BladeOfAliBaba,
    name: 'Blade of Ali Baba',
    baseId: ids.Tulwar,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 35,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [60, 120],
        [MagicPropertyType.Dexterity]: [5, 15],
        [MagicPropertyType.Mana]: 15,
        [MagicPropertyType.ExtraGoldByLevel]: 2.5,
        [MagicPropertyType.MagicFindByLevel]: 1,
        [MagicPropertyType.Socketed]: 2,
      },
    },
  },
  {
    id: ids.Bloodletter,
    name: 'Bloodletter',
    baseId: ids.Gladius,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 30,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 140,
        [MagicPropertyType.AddDamage]: {x: 12, y: 45},
        [MagicPropertyType.AttackRating]: 90,
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.SlowerStaminaDrain]: 10,
        [MagicPropertyType.LifeStolenPerHit]: 8,
        [MagicPropertyType.Spell]: {
          [SkillType.Whirlwind]: {x: [1, 3], y: PlayerClassType.Barbarian},
          [SkillType.SwordMastery]: {x: [2, 4], y: PlayerClassType.Barbarian},
        },
      },
    },
  },
  {
    id: ids.ColdsteelEye,
    name: 'Coldsteel Eye',
    baseId: ids.Cutlass,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 31,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [200, 250],
        [MagicPropertyType.DeadlyStrike]: 50,
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.ManaStolenPerHit]: 6,
        [MagicPropertyType.SlowsTarget]: 30,
        [MagicPropertyType.HitBlindsTarget]: 0,
      },
    },
  },
  {
    id: ids.GinthersRift,
    name: "Ginther's Rift",
    baseId: ids.DimensionalBlade,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 37,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [100, 150],
        [MagicPropertyType.MagicDamage]: {x: 50, y: 120},
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.MagicDamageReduced]: [7, 12],
        [MagicPropertyType.RepairsDurability]: 5,
      },
    },
  },
  {
    id: ids.Headstriker,
    name: 'Headstriker',
    baseId: ids.BattleSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 39,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 150,
        [MagicPropertyType.MaximumDamageByLevel]: 1,
        [MagicPropertyType.DeadlyStrikeByLevel]: 1.5,
        [MagicPropertyType.PreventMonsterHeal]: true,
        [MagicPropertyType.Strength]: 15,
      },
    },
  },
  {
    id: ids.Hexfire,
    name: 'Hexfire',
    baseId: ids.Shamshir,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 33,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [140, 160],
        [MagicPropertyType.AddDamage]: {x: 35, y: 40},
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.FireSkills]: 3,
        },
        [MagicPropertyType.SpellCharges]: {
          [SkillType.Hydra]: {x: 6, y: 36},
        },
        [MagicPropertyType.IgnoreTargetDefense]: true,
        [MagicPropertyType.FireResist]: 25,
        [MagicPropertyType.MaximumFireResist]: 10,
      },
    },
  },
  {
    id: ids.PlagueBearer,
    name: 'Plague Bearer',
    baseId: ids.RuneSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 150,
        [MagicPropertyType.AddDamage]: {x: 10, y: 45},
        [MagicPropertyType.PoisonDamage]: {x: 300, y: 300, z: 8},
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.PoisonNova]: {x: 5, y: 4},
        },
        [MagicPropertyType.PoisonResist]: 45,
        [MagicPropertyType.Spell]: {
          [SkillType.Rabies]: {x: 5, y: PlayerClassType.Druid},
        },
      },
    },
  },
  {
    id: ids.TheAtlantean,
    name: 'The Atlantean',
    baseId: ids.AncientSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [200, 250],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinSkills]: 2,
        },
        [MagicPropertyType.BonusToAttackRating]: 50,
        [MagicPropertyType.Defense]: 75,
        [MagicPropertyType.Vitality]: 8,
        [MagicPropertyType.Dexterity]: 12,
        [MagicPropertyType.Strength]: 16,
      },
    },
  },
  {
    id: ids.BingSzWang,
    name: 'Bing Sz Wang',
    baseId: ids.DacianFalx,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 43,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [130, 160],
        [MagicPropertyType.ColdDamage]: {x: 50, y: 140, z: 3},
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.FrozenOrb]: {x: 3, y: 5},
        },
        [MagicPropertyType.FreezesTarget]: 2,
        [MagicPropertyType.Requirements]: -30,
        [MagicPropertyType.Strength]: 20,
      },
    },
  },
  {
    id: ids.Cloudcrack,
    name: 'Cloudcrack',
    baseId: ids.GothicSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 45,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 200],
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.FistOfTheHeavens]: {x: 7, y: 6},
        },
        [MagicPropertyType.LightningDamage]: {x: 1, y: 240},
        [MagicPropertyType.MaximumLightningResist]: 10,
        [MagicPropertyType.Defense]: 30,
        [MagicPropertyType.AttackerTakesLightningDamage]: 15,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinDefensiveAuras]: 2,
          [SkillSetType.PaladinOffensiveAuras]: 2,
        },
        [MagicPropertyType.LightRadius]: 2,
      },
    },
  },
  {
    id: ids.CrainteVomir,
    name: 'Crainte Vomir',
    baseId: ids.Espandon,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [160, 200],
        [MagicPropertyType.IncreasedAttackSpeed]: 50,
        [MagicPropertyType.SlowsTarget]: 35,
        [MagicPropertyType.MonsterDefensePerHit]: -70,
        [MagicPropertyType.FasterRunWalk]: 20,
        [MagicPropertyType.DamageReducedPercentage]: 10,
      },
    },
  },
  {
    id: ids.Swordguard,
    name: 'Swordguard',
    baseId: ids.ExecutionerSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 48,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [170, 180],
        [MagicPropertyType.DefenseByLevel]: 5,
        [MagicPropertyType.DamageTakenGoesToMana]: 30,
        [MagicPropertyType.Requirements]: -50,
        [MagicPropertyType.AllResistances]: [10, 20],
        [MagicPropertyType.FasterHitRecovery]: 20,
        [MagicPropertyType.IncreasedChanceOfBlocking]: 20,
        [MagicPropertyType.DefenseVsMissle]: 100,
        [MagicPropertyType.DefenseVsMelee]: 200,
      },
    },
  },
  {
    id: ids.TheVileHusk,
    name: 'The Vile Husk',
    baseId: ids.TuskSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 44,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 200],
        [MagicPropertyType.DamageToUndeadByLevel]: 7.5,
        [MagicPropertyType.AttackRatingAgainstUndeadByLevel]: 10,
        [MagicPropertyType.PoisonDamage]: {x: 250, y: 250, z: 6},
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.AmplifyDamage]: {x: 1, y: 6},
        },
        [MagicPropertyType.PoisonResist]: 50,
      },
    },
  },
  {
    id: ids.TodesfaelleFlamme,
    name: 'Todesfaelle Flamme',
    baseId: ids.Zweihander,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 46,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [120, 160],
        [MagicPropertyType.FireDamage]: {x: 50, y: 200},
        [MagicPropertyType.ChanceToCastSpellOnAttack]: {
          [SkillType.FireBall]: {x: 6, y: 10},
        },
        [MagicPropertyType.SpellCharges]: {
          [SkillType.FireWall]: {x: 10, y: 20},
          [SkillType.Enchant]: {x: 10, y: 20},
        },
        [MagicPropertyType.FireAbsorb]: 10,
        [MagicPropertyType.FireResist]: 40,
      },
    },
  },
  {
    id: ids.Azurewrath,
    name: 'Azurewrath',
    baseId: ids.PhaseBlade,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 85,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [230, 270],
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.MagicDamage]: {x: 250, y: 500},
        [MagicPropertyType.ColdDamage]: {x: 250, y: 500, z: 10},
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.AllAttributes]: [5, 10],
        [MagicPropertyType.Aura]: {
          [SkillType.Sanctuary]: {x: [10, 13]},
        },
        [MagicPropertyType.LightRadius]: 3,
      },
    },
  },
  {
    id: ids.Bloodmoon,
    name: 'Bloodmoon',
    baseId: ids.ElegantBlade,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 61,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [210, 260],
        [MagicPropertyType.LifeStolenPerHit]: [10, 15],
        [MagicPropertyType.OpenWounds]: 50,
        [MagicPropertyType.LifeAfterKill]: [7, 13],
        [MagicPropertyType.SpellCharges]: {
          [SkillType.BloodGolem]: {x: 15, y: 9},
        },
      },
    },
  },
  {
    id: ids.DjinnSlayer,
    name: 'Djinn Slayer',
    baseId: ids.Ataghan,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [190, 240],
        [MagicPropertyType.DamageToDemons]: [100, 150],
        [MagicPropertyType.AttackRatingAgainstDemons]: [200, 300],
        [MagicPropertyType.FireDamage]: {x: 250, y: 500},
        [MagicPropertyType.ManaStolenPerHit]: [3, 6],
        [MagicPropertyType.LightningAbsorb]: [3, 7],
        [MagicPropertyType.Socketed]: [1, 2],
      },
    },
  },
  {
    id: ids.Frostwind,
    name: 'Frostwind',
    baseId: ids.CrypticSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 70,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [180, 230],
        [MagicPropertyType.ColdDamage]: {x: 237, y: 486, z: 6},
        [MagicPropertyType.Spell]: {
          [SkillType.ArticBlast]: {x: [7, 14]},
        },
        [MagicPropertyType.FreezesTarget]: 4,
        [MagicPropertyType.ColdAbsorbPercentage]: [7, 15],
        [MagicPropertyType.HalfFreezeDuration]: true,
        [MagicPropertyType.IncreasedAttackSpeed]: 25,
      },
    },
  },
  {
    id: ids.Lightsabre,
    name: 'Lightsabre',
    baseId: ids.PhaseBlade,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 58,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 200],
        [MagicPropertyType.AddDamage]: {x: 10, y: 30},
        [MagicPropertyType.MagicDamage]: {x: 60, y: 120},
        [MagicPropertyType.LightningDamage]: {x: 1, y: 200},
        [MagicPropertyType.ManaStolenPerHit]: [5, 7],
        [MagicPropertyType.ChanceToCastSpellOnAttack]: {
          [SkillType.ChainLightning]: {x: [14, 20], y: 5},
        },
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.IgnoreTargetDefense]: true,
        [MagicPropertyType.LightningAbsorb]: 25,
        [MagicPropertyType.LightRadius]: 7,
      },
    },
  },
  {
    id: ids.Doombringer,
    name: 'Doombringer',
    baseId: ids.ChampionSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 69,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [180, 250],
        [MagicPropertyType.AddDamage]: {x: 30, y: 100},
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Weaken]: {x: 3, y: 8},
        },
        [MagicPropertyType.BonusToAttackRating]: 40,
        [MagicPropertyType.IncreaseMaximumLife]: 20,
        [MagicPropertyType.LifeStolenPerHit]: [5, 7],
        [MagicPropertyType.Indestructible]: true,
      },
    },
  },
  {
    id: ids.Flamebellow,
    name: 'Flamebellow',
    baseId: ids.BalrogBlade,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 71,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [170, 240],
        [MagicPropertyType.FireDamage]: {x: 233, y: 482},
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.FireSkills]: 3,
        },
        [MagicPropertyType.Spell]: {
          [SkillType.Inferno]: {x: [12, 18]},
        },
        [MagicPropertyType.Strength]: [10, 20],
        [MagicPropertyType.Vitality]: [5, 10],
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Firestorm]: {x: 16, y: 12},
        },
        [MagicPropertyType.FireAbsorbPercentage]: [20, 30],
      },
    },
  },
  {
    id: ids.TheGrandfather,
    name: 'The Grandfather',
    baseId: ids.ColossusBlade,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 81,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 250],
        [MagicPropertyType.MaximumDamageByLevel]: 2.5,
        [MagicPropertyType.BonusToAttackRating]: 50,
        [MagicPropertyType.Life]: 80,
        [MagicPropertyType.AllAttributes]: 20,
        [MagicPropertyType.Indestructible]: true,
      },
    },
  },
]);

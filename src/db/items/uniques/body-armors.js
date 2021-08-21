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
    id: ids.Greyform,
    name: 'Greyform',
    baseId: ids.QuiltedArmor,
    properties: {
      magic: {
        [MagicPropertyType.Defense]: 20,
        [MagicPropertyType.LifeStolenPerHit]: 5,
        [MagicPropertyType.MagicDamageReduced]: 3,
        [MagicPropertyType.ColdResist]: 20,
        [MagicPropertyType.FireResist]: 20,
        [MagicPropertyType.Dexterity]: 10,
      },
    },
  },
  {
    id: ids.BlinkbatsForm,
    name: "Blinkbat's Form",
    baseId: ids.LeatherArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 12,
      },
      magic: {
        [MagicPropertyType.Defense]: 25,
        [MagicPropertyType.DefenseVsMissle]: 50,
        [MagicPropertyType.FasterRunWalk]: 10,
        [MagicPropertyType.FasterHitRecovery]: 40,
        [MagicPropertyType.FireDamage]: {x: 3, y: 6},
      },
    },
  },
  {
    id: ids.TheCenturion,
    name: 'The Centurion',
    baseId: ids.HardLeatherArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 14,
      },
      magic: {
        [MagicPropertyType.Defense]: 30,
        [MagicPropertyType.ReplenishLife]: 5,
        [MagicPropertyType.AttackRating]: 50,
        [MagicPropertyType.Mana]: 15,
        [MagicPropertyType.MaximumStamina]: 15,
        [MagicPropertyType.Life]: 15,
        [MagicPropertyType.SlowerStaminaDrain]: 25,
        [MagicPropertyType.DamageReduced]: 2,
      },
    },
  },
  {
    id: ids.Twitchthroe,
    name: 'Twitchthroe',
    baseId: ids.StuddedLeather,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 16,
      },
      magic: {
        [MagicPropertyType.Defense]: 25,
        [MagicPropertyType.IncreasedChanceOfBlocking]: 25,
        [MagicPropertyType.FasterHitRecovery]: 20,
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.Dexterity]: 10,
        [MagicPropertyType.Strength]: 10,
      },
    },
  },
  {
    id: ids.Darkglow,
    name: 'Darkglow',
    baseId: ids.RingMail,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 14,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [70, 100],
        [MagicPropertyType.MaximumPoisonResist]: 5,
        [MagicPropertyType.MaximumColdResist]: 5,
        [MagicPropertyType.MaximumLightningResist]: 5,
        [MagicPropertyType.MaximumFireResist]: 5,
        [MagicPropertyType.DefenseVsMelee]: 50,
        [MagicPropertyType.AttackRating]: 20,
        [MagicPropertyType.AllResistances]: 10,
        [MagicPropertyType.LightRadius]: 3,
      },
    },
  },
  {
    id: ids.Hawkmail,
    name: 'Hawkmail',
    baseId: ids.ScaleMail,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [80, 100],
        [MagicPropertyType.FasterRunWalk]: 10,
        [MagicPropertyType.MaximumColdResist]: 15,
        [MagicPropertyType.ColdResist]: 15,
        [MagicPropertyType.CannotBeFrozen]: true,
      },
    },
  },
  {
    id: ids.VenomWard,
    name: 'Venom Ward',
    baseId: ids.BreastPlate,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 20,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [60, 100],
        [MagicPropertyType.LightRadius]: 2,
        [MagicPropertyType.MaximumPoisonResist]: 15,
        [MagicPropertyType.PoisonResist]: 90,
        [MagicPropertyType.PoisonLengthReduced]: 50,
      },
    },
  },
  {
    id: ids.SparkingMail,
    name: 'Sparking Mail',
    baseId: ids.ChainMail,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 17,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [75, 85],
        [MagicPropertyType.LightningResist]: 30,
        [MagicPropertyType.AttackerTakesDamage]: [10, 14],
        [MagicPropertyType.LightningDamage]: {x: 1, y: 20},
      },
    },
  },
  {
    id: ids.Iceblink,
    name: 'Iceblink',
    baseId: ids.SplintMail,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 22,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [70, 80],
        [MagicPropertyType.FreezesTarget]: 0,
        [MagicPropertyType.ColdResist]: 30,
        [MagicPropertyType.MagicDamageReduced]: 1,
        [MagicPropertyType.LightRadius]: 4,
      },
    },
  },
  {
    id: ids.HeavenlyGarb,
    name: 'Heavenly Garb',
    baseId: ids.LightPlate,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: 100,
        [MagicPropertyType.RegenerateMana]: 25,
        [MagicPropertyType.AllResistances]: 10,
        [MagicPropertyType.Energy]: 15,
        [MagicPropertyType.DamageToUndead]: 50,
        [MagicPropertyType.AttackRatingAgainstUndead]: 100,
      },
    },
  },
  {
    id: ids.Boneflesh,
    name: 'Boneflesh',
    baseId: ids.PlateMail,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 26,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [100, 120],
        [MagicPropertyType.LifeStolenPerHit]: 5,
        [MagicPropertyType.OpenWounds]: 25,
        [MagicPropertyType.AttackRating]: 35,
      },
    },
  },
  {
    id: ids.Rockfleece,
    name: 'Rockfleece',
    baseId: ids.FieldPlate,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [100, 130],
        [MagicPropertyType.Requirements]: -10,
        [MagicPropertyType.DamageReducedPercentage]: 10,
        [MagicPropertyType.Strength]: 5,
        [MagicPropertyType.DamageReduced]: 5,
      },
    },
  },
  {
    id: ids.Rattlecage,
    name: 'Rattlecage',
    baseId: ids.GothicPlate,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.Defense]: 200,
        [MagicPropertyType.CrushingBlow]: 25,
        [MagicPropertyType.HitCausesMonsterToFlee]: 40,
        [MagicPropertyType.AttackRating]: 45,
      },
    },
  },
  {
    id: ids.Goldskin,
    name: 'Goldskin',
    baseId: ids.FullPlateMail,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [120, 150],
        [MagicPropertyType.LightRadius]: 2,
        [MagicPropertyType.AllResistances]: 35,
        [MagicPropertyType.AttackerTakesDamage]: 10,
        [MagicPropertyType.ExtraGold]: 100,
      },
    },
  },
  {
    id: ids.SilksOfTheVictor,
    name: 'Silks of the Victor',
    baseId: ids.AncientArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [100, 120],
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.ManaStolenPerHit]: 5,
        [MagicPropertyType.LightRadius]: 2,
      },
    },
  },
  {
    id: ids.SilksOfTheVictor,
    name: 'Silks of the Victor',
    baseId: ids.AncientArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [100, 120],
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.ManaStolenPerHit]: 5,
        [MagicPropertyType.LightRadius]: 2,
      },
    },
  },
  {
    id: ids.TheSpiritShroud,
    name: 'The Spirit Shroud',
    baseId: ids.GhostArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: 150,
        [MagicPropertyType.CannotBeFrozen]: true,
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.ReplenishLife]: 10,
        [MagicPropertyType.MagicDamageReduced]: [7, 11],
      },
    },
  },
  {
    id: ids.SkinOfTheVipermagi,
    name: 'Skin of the Vipermagi',
    baseId: ids.SerpentskinArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 279,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: 120,
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.FasterCastRate]: 30,
        [MagicPropertyType.MagicDamageReduced]: [9, 13],
        [MagicPropertyType.AllResistances]: [20, 35],
      },
    },
  },
  {
    id: ids.SkinOfTheFlayedOne,
    name: 'Skin of the Flayed One',
    baseId: ids.DemonhideArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 31,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 190],
        [MagicPropertyType.RepairsDurability]: 10,
        [MagicPropertyType.LifeStolenPerHit]: [5, 7],
        [MagicPropertyType.ReplenishLife]: [15, 25],
        [MagicPropertyType.AttackerTakesDamage]: 15,
      },
    },
  },
  {
    id: ids.IronPelt,
    name: 'Iron Pelt',
    baseId: ids.TrellisedArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 33,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [50, 100],
        [MagicPropertyType.DefenseByLevel]: 3,
        [MagicPropertyType.DamageReduced]: [15, 20],
        [MagicPropertyType.MagicDamageReduced]: [10, 16],
        [MagicPropertyType.Life]: 25,
      },
    },
  },
  {
    id: ids.SpiritForge,
    name: 'Spirit Forge',
    baseId: ids.LinkedMail,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 35,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [120, 160],
        [MagicPropertyType.LifeByLevel]: 1.25,
        [MagicPropertyType.FireResist]: 5,
        [MagicPropertyType.FireDamage]: {x: 20, y: 65},
        [MagicPropertyType.Strength]: 15,
        [MagicPropertyType.Socketed]: 2,
        [MagicPropertyType.LightRadius]: 4,
      },
    },
  },
  {
    id: ids.CrowCaw,
    name: 'Crow Caw',
    baseId: ids.TigulatedMail,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 37,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 180],
        [MagicPropertyType.IncreasedAttackSpeed]: 15,
        [MagicPropertyType.FasterHitRecovery]: 15,
        [MagicPropertyType.OpenWounds]: 35,
        [MagicPropertyType.Dexterity]: 15,
      },
    },
  },
  {
    id: ids.DurielsShell,
    name: "Duriel's Shell",
    baseId: ids.Cuirass,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [160, 200],
        [MagicPropertyType.DefenseByLevel]: 1.25,
        [MagicPropertyType.LifeByLevel]: 1,
        [MagicPropertyType.FireResist]: 20,
        [MagicPropertyType.LightningResist]: 20,
        [MagicPropertyType.PoisonResist]: 20,
        [MagicPropertyType.ColdResist]: 20,
        [MagicPropertyType.CannotBeFrozen]: true,
        [MagicPropertyType.Strength]: 15,
      },
    },
  },
  {
    id: ids.Shaftstop,
    name: 'Shaftstop',
    baseId: ids.MeshArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 38,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [180, 220],
        [MagicPropertyType.DamageReducedPercentage]: 30,
        [MagicPropertyType.DefenseVsMissle]: 250,
        [MagicPropertyType.Life]: 60,
      },
    },
  },
  {
    id: ids.SkulldersIre,
    name: "Skullder's Ire",
    baseId: ids.RussetArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [160, 220],
        [MagicPropertyType.RepairsDurability]: 5,
        [MagicPropertyType.MagicFindByLevel]: 1.25,
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.MagicDamageReduced]: 10,
      },
    },
  },
  {
    id: ids.QueHegansWisdom,
    name: "Que-Hegan's Wisdom",
    baseId: ids.MagePlate,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 51,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [140, 160],
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.ManaAfterKill]: 3,
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.FasterHitRecovery]: 20,
        [MagicPropertyType.MagicDamageReduced]: [6, 10],
        [MagicPropertyType.Energy]: 15,
      },
    },
  },
  {
    id: ids.GuardianAngel,
    name: 'Guardian Angel',
    baseId: ids.TemplarCoat,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 45,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [180, 200],
        [MagicPropertyType.IncreasedChanceOfBlocking]: 20,
        [MagicPropertyType.FasterBlockRate]: 30,
        [MagicPropertyType.AttackRatingAgainstDemonsByLevel]: 2.5,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinSkills]: 1,
        },
        [MagicPropertyType.LightRadius]: 4,
        [MagicPropertyType.MaximumColdResist]: 15,
        [MagicPropertyType.MaximumPoisonResist]: 15,
        [MagicPropertyType.MaximumLightningResist]: 15,
        [MagicPropertyType.MaximumFireResist]: 15,
      },
    },
  },
  {
    id: ids.Toothrow,
    name: 'Toothrow',
    baseId: ids.SharktoothArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 48,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [160, 220],
        [MagicPropertyType.Defense]: [40, 60],
        [MagicPropertyType.OpenWounds]: 40,
        [MagicPropertyType.FireResist]: 15,
        [MagicPropertyType.Strength]: 10,
        [MagicPropertyType.AttackerTakesDamage]: [20, 40],
      },
    },
  },
  {
    id: ids.AtmasWail,
    name: "Atma's Wail",
    baseId: ids.EmbossedPlate,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 51,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [120, 160],
        [MagicPropertyType.DefenseByLevel]: 2,
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.ReplenishLife]: 10,
        [MagicPropertyType.IncreaseMaximumMana]: 15,
        [MagicPropertyType.Dexterity]: 15,
        [MagicPropertyType.MagicFind]: 20,
      },
    },
  },
  {
    id: ids.BlackHades,
    name: 'Black Hades',
    baseId: ids.ChaosArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 53,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [140, 200],
        [MagicPropertyType.DamageToDemons]: [30, 60],
        [MagicPropertyType.AttackRatingAgainstDemons]: [200, 250],
        [MagicPropertyType.HalfFreezeDuration]: true,
        [MagicPropertyType.Socketed]: 3,
        [MagicPropertyType.LightRadius]: -2,
      },
    },
  },
  {
    id: ids.Corpsemourn,
    name: 'Corpsemourn',
    baseId: ids.OrnatePlate,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 55,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 180],
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.IronMaiden]: {x: 2, y: 6},
        },
        [MagicPropertyType.SpellCharges]: {
          [SkillType.CorpseExplosion]: {x: 5, y: 40},
        },
        [MagicPropertyType.FireDamage]: {x: 12, y: 36},
        [MagicPropertyType.ColdResist]: 35,
        [MagicPropertyType.Vitality]: 10,
        [MagicPropertyType.Strength]: 8,
      },
    },
  },
  {
    id: ids.OrmusRobes,
    name: "Ormus' Robes",
    baseId: ids.DuskShroud,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 75,
      },
      magic: {
        [MagicPropertyType.Defense]: [10, 20],
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.ColdSkillDamage]: [10, 15],
        [MagicPropertyType.FireSkillDamage]: [10, 15],
        [MagicPropertyType.LightningSkillDamage]: [10, 15],
        [MagicPropertyType.RegenerateMana]: [10, 15],
        [MagicPropertyType.Spell]: {
          [SkillType.RandomSorceressSkill]: {
            x: 3,
            y: PlayerClassType.Sorceress,
          },
        },
      },
    },
  },
  {
    id: ids.TheGladiatorsBane,
    name: "The Gladiator's Bane",
    baseId: ids.WireFleece,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 85,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 200],
        [MagicPropertyType.Defense]: 50,
        [MagicPropertyType.CannotBeFrozen]: true,
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.PoisonLengthReduced]: 50,
        [MagicPropertyType.AttackerTakesDamage]: 20,
        [MagicPropertyType.DamageReduced]: [15, 20],
        [MagicPropertyType.MagicDamageReduced]: [15, 20],
      },
    },
  },
  {
    id: ids.ArkainesValor,
    name: "Arkaine's Valor",
    baseId: ids.BalrogSkin,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 85,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 180],
        [MagicPropertyType.AllSkillLevels]: [1, 2],
        [MagicPropertyType.VitalityByLevel]: 0.5,
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.DamageReduced]: [10, 15],
      },
    },
  },
  {
    id: ids.Leviathan,
    name: 'Leviathan',
    baseId: ids.KrakenShell,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [170, 200],
        [MagicPropertyType.Defense]: [100, 150],
        [MagicPropertyType.Strength]: [40, 50],
        [MagicPropertyType.DamageReducedPercentage]: [15, 25],
        [MagicPropertyType.Indestructible]: true,
      },
    },
  },
  {
    id: ids.SteelCarapace,
    name: 'Steel Carapace',
    baseId: ids.ShadowPlate,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 66,
      },
      magic: {
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.IronMaiden]: {x: 6, y: 8},
        },
        [MagicPropertyType.EnhancedDefense]: [190, 220],
        [MagicPropertyType.RegenerateMana]: [10, 15],
        [MagicPropertyType.FasterHitRecovery]: 20,
        [MagicPropertyType.ColdResist]: [40, 60],
        [MagicPropertyType.DamageReduced]: [9, 14],
        [MagicPropertyType.RepairsDurability]: 20,
      },
    },
  },
  {
    id: ids.TemplarsMight,
    name: "Templar's Might",
    baseId: ids.SacredArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 74,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [170, 220],
        [MagicPropertyType.DefenseVsMissle]: [250, 300],
        [MagicPropertyType.Strength]: [10, 15],
        [MagicPropertyType.Vitality]: [10, 15],
        [MagicPropertyType.FasterHitRecovery]: 20,
        [MagicPropertyType.MaximumStamina]: [40, 50],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinOffensiveAuras]: [1, 2],
        },
      },
    },
  },
  {
    id: ids.TyraelsMight,
    name: "Tyrael's Might",
    baseId: ids.SacredArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 84,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [120, 150],
        [MagicPropertyType.DamageToDemons]: [50, 100],
        [MagicPropertyType.FasterRunWalk]: 20,
        [MagicPropertyType.Strength]: [20, 30],
        [MagicPropertyType.AllResistances]: [20, 30],
        [MagicPropertyType.CannotBeFrozen]: true,
        [MagicPropertyType.Requirements]: -100,
        [MagicPropertyType.SlainMonstersRestInPeace]: true,
        [MagicPropertyType.Indestructible]: true,
      },
    },
  },
]);

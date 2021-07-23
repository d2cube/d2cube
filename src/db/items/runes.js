import {PropertyType} from '../enums/index.js';
import ids from '../ids/index.js';

export default {
  [ids.El]: {
    id: ids.El,
    name: 'El Rune',
    clvl: 11,
    stats: {
      weapons: [
        {
          property: PropertyType.AttackRating,
          values: [50],
        },
        {
          property: PropertyType.LightRadius,
          values: [1],
        },
      ],
      armor: [
        {
          property: PropertyType.Defense,
          values: [15],
        },
        {
          property: PropertyType.LightRadius,
          values: [1],
        },
      ],
      shields: [
        {
          property: PropertyType.Defense,
          values: [15],
        },
        {
          property: PropertyType.LightRadius,
          values: [1],
        },
      ],
    },
  },
  [ids.Eld]: {
    id: ids.Eld,
    name: 'Eld Rune',
    clvl: 11,
    stats: {
      weapons: [
        {
          property: PropertyType.DamageToUndead,
          values: [75],
        },
        {
          property: PropertyType.AttackRatingAgainstUndead,
          values: [50],
        },
      ],
      armor: {
        property: PropertyType.SlowerStaminaDrain,
        values: [15],
      },
      shields: {
        property: PropertyType.IncreasedChanceOfBlocking,
        values: [7],
      },
    },
  },
  [ids.Tir]: {
    id: ids.Tir,
    name: 'Tir Rune',
    clvl: 13,
    stats: {
      weapons: {
        property: PropertyType.ManaAfterKill,
        values: [2],
      },
      armor: {
        property: PropertyType.ManaAfterKill,
        values: [2],
      },
      shields: {
        property: PropertyType.ManaAfterKill,
        values: [2],
      },
    },
  },
  [ids.Nef]: {
    id: ids.Nef,
    name: 'Nef Rune',
    clvl: 13,
    stats: {
      weapons: {
        property: PropertyType.Knockback,
        values: [],
      },
      armor: {
        property: PropertyType.DefenseVsMissle,
        values: [30],
      },
      shields: {
        property: PropertyType.DefenseVsMissle,
        values: [30],
      },
    },
  },
  [ids.Eth]: {
    id: ids.Eth,
    name: 'Eth Rune',
    clvl: 15,
    stats: {
      weapons: {
        property: PropertyType.TargetDefense,
        values: [25],
      },
      armor: {
        property: PropertyType.RegenerateMana,
        values: [15],
      },
      shields: {
        property: PropertyType.RegenerateMana,
        values: [15],
      },
    },
  },
  [ids.Ith]: {
    id: ids.Ith,
    name: 'Ith Rune',
    clvl: 15,
    stats: {
      weapons: {
        property: PropertyType.MaximumDamage,
        values: [9],
      },
      armor: {
        property: PropertyType.DamageTakenGoesToMana,
        values: [15],
      },
      shields: {
        property: PropertyType.DamageTakenGoesToMana,
        values: [15],
      },
    },
  },
  [ids.Tal]: {
    id: ids.Tal,
    name: 'Tal Rune',
    clvl: 17,
    stats: {
      weapons: {
        property: PropertyType.PoisonDamage,
        values: [75, 5],
      },
      armor: {
        property: PropertyType.PoisonResist,
        values: [30],
      },
      shields: {
        property: PropertyType.PoisonResist,
        values: [35],
      },
    },
  },
  [ids.Ral]: {
    id: ids.Ral,
    name: 'Ral Rune',
    clvl: 19,
    stats: {
      weapons: {
        property: PropertyType.FireDamage,
        values: [5, 30],
      },
      armor: {
        property: PropertyType.FireResist,
        values: [30],
      },
      shields: {
        property: PropertyType.FireResist,
        values: [35],
      },
    },
  },
  [ids.Ort]: {
    id: ids.Ort,
    name: 'Ort Rune',
    clvl: 21,
    stats: {
      weapons: {
        property: PropertyType.LightningDamage,
        values: [1, 50],
      },
      armor: {
        property: PropertyType.LightningResist,
        values: [30],
      },
      shields: {
        property: PropertyType.LightningResist,
        values: [35],
      },
    },
  },
  [ids.Thul]: {
    id: ids.Thul,
    name: 'Thul Rune',
    clvl: 23,
    stats: {
      weapons: {
        property: PropertyType.ColdDamage,
        values: [3, 14, 3],
      },
      armor: {
        property: PropertyType.ColdResist,
        values: [30],
      },
      shields: {
        property: PropertyType.ColdResist,
        values: [35],
      },
    },
  },
  [ids.Amn]: {
    id: ids.Amn,
    name: 'Amn Rune',
    clvl: 25,
    stats: {
      weapons: {
        property: PropertyType.LifeStolenPerHit,
        values: [7],
      },
      armor: {
        property: PropertyType.AttackerTakesDamage,
        values: [14],
      },
      shields: {
        property: PropertyType.AttackerTakesDamage,
        values: [14],
      },
    },
  },
  [ids.Sol]: {
    id: ids.Sol,
    name: 'Sol Rune',
    clvl: 27,
    stats: {
      weapons: {
        property: PropertyType.MinimumDamage,
        values: [9],
      },
      armor: {
        property: PropertyType.DamageReduced,
        values: [7],
      },
      shields: {
        property: PropertyType.DamageReduced,
        values: [7],
      },
    },
  },
  [ids.Shael]: {
    id: ids.Shael,
    name: 'Shael Rune',
    clvl: 29,
    stats: {
      weapons: {
        property: PropertyType.IncreasedAttackSpeed,
        values: [20],
      },
      armor: {
        property: PropertyType.FasterHitRecovery,
        values: [20],
      },
      shields: {
        property: PropertyType.FasterBlockRate,
        values: [20],
      },
    },
  },
  [ids.Dol]: {
    id: ids.Dol,
    name: 'Dol Rune',
    clvl: 31,
    stats: {
      weapons: {
        property: PropertyType.HitCausesMonsterToFlee,
        values: [25],
      },
      armor: {
        property: PropertyType.ReplenishLife,
        values: [7],
      },
      shields: {
        property: PropertyType.ReplenishLife,
        values: [7],
      },
    },
  },
  [ids.Hel]: {
    id: ids.Hel,
    name: 'Hel Rune',
    clvl: null,
    stats: {
      weapons: {
        property: PropertyType.Requirements,
        values: [20],
      },
      armor: {
        property: PropertyType.Requirements,
        values: [15],
      },
      shields: {
        property: PropertyType.Requirements,
        values: [15],
      },
    },
  },
  [ids.Io]: {
    id: ids.Io,
    name: 'Io Rune',
    clvl: 35,
    stats: {
      weapons: {
        property: PropertyType.Vitality,
        values: [10],
      },
      armor: {
        property: PropertyType.Vitality,
        values: [10],
      },
      shields: {
        property: PropertyType.Vitality,
        values: [10],
      },
    },
  },
  [ids.Lum]: {
    id: ids.Lum,
    name: 'Lum Rune',
    clvl: 37,
    stats: {
      weapons: {
        property: PropertyType.Energy,
        values: [10],
      },
      armor: {
        property: PropertyType.Energy,
        values: [10],
      },
      shields: {
        property: PropertyType.Energy,
        values: [10],
      },
    },
  },
  [ids.Ko]: {
    id: ids.Ko,
    name: 'Ko Rune',
    clvl: 39,
    stats: {
      weapons: {
        property: PropertyType.Dexterity,
        values: [10],
      },
      armor: {
        property: PropertyType.Dexterity,
        values: [10],
      },
      shields: {
        property: PropertyType.Dexterity,
        values: [10],
      },
    },
  },
  [ids.Fal]: {
    id: ids.Fal,
    name: 'Fal Rune',
    clvl: 41,
    stats: {
      weapons: {
        property: PropertyType.Strength,
        values: [10],
      },
      armor: {
        property: PropertyType.Strength,
        values: [10],
      },
      shields: {
        property: PropertyType.Strength,
        values: [10],
      },
    },
  },
  [ids.Lem]: {
    id: ids.Lem,
    name: 'Lem Rune',
    clvl: 43,
    stats: {
      weapons: {
        property: PropertyType.ExtraGold,
        values: [75],
      },
      armor: {
        property: PropertyType.ExtraGold,
        values: [50],
      },
      shields: {
        property: PropertyType.ExtraGold,
        values: [50],
      },
    },
  },
  [ids.Pul]: {
    id: ids.Pul,
    name: 'Pul Rune',
    clvl: 45,
    stats: {
      weapons: [
        {
          property: PropertyType.DamageToDemons,
          values: [75],
        },
        {
          property: PropertyType.AttackRatingAgainstDemons,
          values: [100],
        },
      ],
      armor: {
        property: PropertyType.EnhancedDefense,
        values: [30],
      },
      shields: {
        property: PropertyType.EnhancedDefense,
        values: [30],
      },
    },
  },
  [ids.Um]: {
    id: ids.Um,
    name: 'Um Rune',
    clvl: 47,
    stats: {
      weapons: {
        property: PropertyType.OpenWounds,
        values: [25],
      },
      armor: {
        property: PropertyType.AllResistances,
        values: [15],
      },
      shields: {
        property: PropertyType.AllResistances,
        values: [22],
      },
    },
  },
  [ids.Mal]: {
    id: ids.Mal,
    name: 'Mal Rune',
    clvl: 49,
    stats: {
      weapons: {
        property: PropertyType.PreventMonsterHeal,
        values: [],
      },
      armor: {
        property: PropertyType.MagicDamageReduced,
        values: [7],
      },
      shields: {
        property: PropertyType.MagicDamageReduced,
        values: [7],
      },
    },
  },
  [ids.Ist]: {
    id: ids.Ist,
    name: 'Ist Rune',
    clvl: 51,
    stats: {
      weapons: {
        property: PropertyType.MagicFind,
        values: [30],
      },
      armor: {
        property: PropertyType.MagicFind,
        values: [25],
      },
      shields: {
        property: PropertyType.MagicFind,
        values: [25],
      },
    },
  },
  [ids.Gul]: {
    id: ids.Gul,
    name: 'Gul Rune',
    clvl: 53,
    stats: {
      weapons: {
        property: PropertyType.BonusToAttackRating,
        values: [20],
      },
      armor: {
        property: PropertyType.MaximumPoisonResist,
        values: [5],
      },
      shields: {
        property: PropertyType.MaximumPoisonResist,
        values: [5],
      },
    },
  },
  [ids.Vex]: {
    id: ids.Vex,
    name: 'Vex Rune',
    clvl: 55,
    stats: {
      weapons: {
        property: PropertyType.ManaStolenPerHit,
        values: [7],
      },
      armor: {
        property: PropertyType.MaximumFireResist,
        values: [5],
      },
      shields: {
        property: PropertyType.MaximumFireResist,
        values: [5],
      },
    },
  },
  [ids.Ohm]: {
    id: ids.Ohm,
    name: 'Ohm Rune',
    clvl: 57,
    stats: {
      weapons: {
        property: PropertyType.EnhancedDamage,
        values: [50],
      },
      armor: {
        property: PropertyType.MaximumColdResist,
        values: [5],
      },
      shields: {
        property: PropertyType.MaximumColdResist,
        values: [5],
      },
    },
  },
  [ids.Lo]: {
    id: ids.Lo,
    name: 'Lo Rune',
    clvl: 59,
    stats: {
      weapons: {
        property: PropertyType.DeadlyStrike,
        values: [20],
      },
      armor: {
        property: PropertyType.MaximumLightningResist,
        values: [5],
      },
      shields: {
        property: PropertyType.MaximumLightningResist,
        values: [5],
      },
    },
  },
  [ids.Sur]: {
    id: ids.Sur,
    name: 'Sur Rune',
    clvl: 61,
    stats: {
      weapons: {
        property: PropertyType.HitBlindsTarget,
        values: [],
      },
      armor: {
        property: PropertyType.IncreaseMaximumMana,
        values: [5],
      },
      shields: {
        property: PropertyType.Mana,
        values: [50],
      },
    },
  },
  [ids.Ber]: {
    id: ids.Ber,
    name: 'Ber Rune',
    clvl: 63,
    stats: {
      weapons: {
        property: PropertyType.CrushingBlow,
        values: [20],
      },
      armor: {
        property: PropertyType.DamageReducedPercentage,
        values: [8],
      },
      shields: {
        property: PropertyType.DamageReducedPercentage,
        values: [8],
      },
    },
  },
  [ids.Jah]: {
    id: ids.Jah,
    name: 'Jah Rune',
    clvl: 65,
    stats: {
      weapons: {
        property: PropertyType.IgnoreTargetDefense,
        values: [],
      },
      armor: {
        property: PropertyType.IncreaseMaximumLife,
        values: [5],
      },
      shields: {
        property: PropertyType.Life,
        values: [50],
      },
    },
  },
  [ids.Cham]: {
    id: ids.Cham,
    name: 'Cham Rune',
    clvl: 67,
    stats: {
      weapons: {
        property: PropertyType.FreezesTarget,
        values: [3],
      },
      armor: {
        property: PropertyType.CannotBeFrozen,
        values: [],
      },
      shields: {
        property: PropertyType.CannotBeFrozen,
        values: [],
      },
    },
  },
  [ids.Zod]: {
    id: ids.Zod,
    name: 'Zod Rune',
    clvl: 69,
    stats: {
      weapons: {
        property: PropertyType.Indestructible,
        values: [],
      },
      armor: {
        property: PropertyType.Indestructible,
        values: [],
      },
      shields: {
        property: PropertyType.Indestructible,
        values: [],
      },
    },
  },
};

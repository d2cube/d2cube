import {ItemType, MagicPropertyType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  size: [1, 1],
  type: ItemType.Rune,
})([
  {
    id: ids.El,
    name: 'El Rune',
    clvl: 11,
    stats: {
      weapons: [
        {
          property: MagicPropertyType.AttackRating,
          values: [50],
        },
        {
          property: MagicPropertyType.LightRadius,
          values: [1],
        },
      ],
      armor: [
        {
          property: MagicPropertyType.Defense,
          values: [15],
        },
        {
          property: MagicPropertyType.LightRadius,
          values: [1],
        },
      ],
      shields: [
        {
          property: MagicPropertyType.Defense,
          values: [15],
        },
        {
          property: MagicPropertyType.LightRadius,
          values: [1],
        },
      ],
    },
  },
  {
    id: ids.Eld,
    name: 'Eld Rune',
    clvl: 11,
    stats: {
      weapons: [
        {
          property: MagicPropertyType.DamageToUndead,
          values: [75],
        },
        {
          property: MagicPropertyType.AttackRatingAgainstUndead,
          values: [50],
        },
      ],
      armor: {
        property: MagicPropertyType.SlowerStaminaDrain,
        values: [15],
      },
      shields: {
        property: MagicPropertyType.IncreasedChanceOfBlocking,
        values: [7],
      },
    },
  },
  {
    id: ids.Tir,
    name: 'Tir Rune',
    clvl: 13,
    stats: {
      weapons: {
        property: MagicPropertyType.ManaAfterKill,
        values: [2],
      },
      armor: {
        property: MagicPropertyType.ManaAfterKill,
        values: [2],
      },
      shields: {
        property: MagicPropertyType.ManaAfterKill,
        values: [2],
      },
    },
  },
  {
    id: ids.Nef,
    name: 'Nef Rune',
    clvl: 13,
    stats: {
      weapons: {
        property: MagicPropertyType.Knockback,
        values: [],
      },
      armor: {
        property: MagicPropertyType.DefenseVsMissle,
        values: [30],
      },
      shields: {
        property: MagicPropertyType.DefenseVsMissle,
        values: [30],
      },
    },
  },
  {
    id: ids.Eth,
    name: 'Eth Rune',
    clvl: 15,
    stats: {
      weapons: {
        property: MagicPropertyType.TargetDefense,
        values: [25],
      },
      armor: {
        property: MagicPropertyType.RegenerateMana,
        values: [15],
      },
      shields: {
        property: MagicPropertyType.RegenerateMana,
        values: [15],
      },
    },
  },
  {
    id: ids.Ith,
    name: 'Ith Rune',
    clvl: 15,
    stats: {
      weapons: {
        property: MagicPropertyType.MaximumDamage,
        values: [9],
      },
      armor: {
        property: MagicPropertyType.DamageTakenGoesToMana,
        values: [15],
      },
      shields: {
        property: MagicPropertyType.DamageTakenGoesToMana,
        values: [15],
      },
    },
  },
  {
    id: ids.Tal,
    name: 'Tal Rune',
    clvl: 17,
    stats: {
      weapons: {
        property: MagicPropertyType.PoisonDamage,
        values: [75, 5],
      },
      armor: {
        property: MagicPropertyType.PoisonResist,
        values: [30],
      },
      shields: {
        property: MagicPropertyType.PoisonResist,
        values: [35],
      },
    },
  },
  {
    id: ids.Ral,
    name: 'Ral Rune',
    clvl: 19,
    stats: {
      weapons: {
        property: MagicPropertyType.FireDamage,
        values: [5, 30],
      },
      armor: {
        property: MagicPropertyType.FireResist,
        values: [30],
      },
      shields: {
        property: MagicPropertyType.FireResist,
        values: [35],
      },
    },
  },
  {
    id: ids.Ort,
    name: 'Ort Rune',
    clvl: 21,
    stats: {
      weapons: {
        property: MagicPropertyType.LightningDamage,
        values: [1, 50],
      },
      armor: {
        property: MagicPropertyType.LightningResist,
        values: [30],
      },
      shields: {
        property: MagicPropertyType.LightningResist,
        values: [35],
      },
    },
  },
  {
    id: ids.Thul,
    name: 'Thul Rune',
    clvl: 23,
    stats: {
      weapons: {
        property: MagicPropertyType.ColdDamage,
        values: [3, 14, 3],
      },
      armor: {
        property: MagicPropertyType.ColdResist,
        values: [30],
      },
      shields: {
        property: MagicPropertyType.ColdResist,
        values: [35],
      },
    },
  },
  {
    id: ids.Amn,
    name: 'Amn Rune',
    clvl: 25,
    stats: {
      weapons: {
        property: MagicPropertyType.LifeStolenPerHit,
        values: [7],
      },
      armor: {
        property: MagicPropertyType.AttackerTakesDamage,
        values: [14],
      },
      shields: {
        property: MagicPropertyType.AttackerTakesDamage,
        values: [14],
      },
    },
  },
  {
    id: ids.Sol,
    name: 'Sol Rune',
    clvl: 27,
    stats: {
      weapons: {
        property: MagicPropertyType.MinimumDamage,
        values: [9],
      },
      armor: {
        property: MagicPropertyType.DamageReduced,
        values: [7],
      },
      shields: {
        property: MagicPropertyType.DamageReduced,
        values: [7],
      },
    },
  },
  {
    id: ids.Shael,
    name: 'Shael Rune',
    clvl: 29,
    stats: {
      weapons: {
        property: MagicPropertyType.IncreasedAttackSpeed,
        values: [20],
      },
      armor: {
        property: MagicPropertyType.FasterHitRecovery,
        values: [20],
      },
      shields: {
        property: MagicPropertyType.FasterBlockRate,
        values: [20],
      },
    },
  },
  {
    id: ids.Dol,
    name: 'Dol Rune',
    clvl: 31,
    stats: {
      weapons: {
        property: MagicPropertyType.HitCausesMonsterToFlee,
        values: [25],
      },
      armor: {
        property: MagicPropertyType.ReplenishLife,
        values: [7],
      },
      shields: {
        property: MagicPropertyType.ReplenishLife,
        values: [7],
      },
    },
  },
  {
    id: ids.Hel,
    name: 'Hel Rune',
    clvl: null,
    stats: {
      weapons: {
        property: MagicPropertyType.Requirements,
        values: [20],
      },
      armor: {
        property: MagicPropertyType.Requirements,
        values: [15],
      },
      shields: {
        property: MagicPropertyType.Requirements,
        values: [15],
      },
    },
  },
  {
    id: ids.Io,
    name: 'Io Rune',
    clvl: 35,
    stats: {
      weapons: {
        property: MagicPropertyType.Vitality,
        values: [10],
      },
      armor: {
        property: MagicPropertyType.Vitality,
        values: [10],
      },
      shields: {
        property: MagicPropertyType.Vitality,
        values: [10],
      },
    },
  },
  {
    id: ids.Lum,
    name: 'Lum Rune',
    clvl: 37,
    stats: {
      weapons: {
        property: MagicPropertyType.Energy,
        values: [10],
      },
      armor: {
        property: MagicPropertyType.Energy,
        values: [10],
      },
      shields: {
        property: MagicPropertyType.Energy,
        values: [10],
      },
    },
  },
  {
    id: ids.Ko,
    name: 'Ko Rune',
    clvl: 39,
    stats: {
      weapons: {
        property: MagicPropertyType.Dexterity,
        values: [10],
      },
      armor: {
        property: MagicPropertyType.Dexterity,
        values: [10],
      },
      shields: {
        property: MagicPropertyType.Dexterity,
        values: [10],
      },
    },
  },
  {
    id: ids.Fal,
    name: 'Fal Rune',
    clvl: 41,
    stats: {
      weapons: {
        property: MagicPropertyType.Strength,
        values: [10],
      },
      armor: {
        property: MagicPropertyType.Strength,
        values: [10],
      },
      shields: {
        property: MagicPropertyType.Strength,
        values: [10],
      },
    },
  },
  {
    id: ids.Lem,
    name: 'Lem Rune',
    clvl: 43,
    stats: {
      weapons: {
        property: MagicPropertyType.ExtraGold,
        values: [75],
      },
      armor: {
        property: MagicPropertyType.ExtraGold,
        values: [50],
      },
      shields: {
        property: MagicPropertyType.ExtraGold,
        values: [50],
      },
    },
  },
  {
    id: ids.Pul,
    name: 'Pul Rune',
    clvl: 45,
    stats: {
      weapons: [
        {
          property: MagicPropertyType.DamageToDemons,
          values: [75],
        },
        {
          property: MagicPropertyType.AttackRatingAgainstDemons,
          values: [100],
        },
      ],
      armor: {
        property: MagicPropertyType.EnhancedDefense,
        values: [30],
      },
      shields: {
        property: MagicPropertyType.EnhancedDefense,
        values: [30],
      },
    },
  },
  {
    id: ids.Um,
    name: 'Um Rune',
    clvl: 47,
    stats: {
      weapons: {
        property: MagicPropertyType.OpenWounds,
        values: [25],
      },
      armor: {
        property: MagicPropertyType.AllResistances,
        values: [15],
      },
      shields: {
        property: MagicPropertyType.AllResistances,
        values: [22],
      },
    },
  },
  {
    id: ids.Mal,
    name: 'Mal Rune',
    clvl: 49,
    stats: {
      weapons: {
        property: MagicPropertyType.PreventMonsterHeal,
        values: [],
      },
      armor: {
        property: MagicPropertyType.MagicDamageReduced,
        values: [7],
      },
      shields: {
        property: MagicPropertyType.MagicDamageReduced,
        values: [7],
      },
    },
  },
  {
    id: ids.Ist,
    name: 'Ist Rune',
    clvl: 51,
    stats: {
      weapons: {
        property: MagicPropertyType.MagicFind,
        values: [30],
      },
      armor: {
        property: MagicPropertyType.MagicFind,
        values: [25],
      },
      shields: {
        property: MagicPropertyType.MagicFind,
        values: [25],
      },
    },
  },
  {
    id: ids.Gul,
    name: 'Gul Rune',
    clvl: 53,
    stats: {
      weapons: {
        property: MagicPropertyType.BonusToAttackRating,
        values: [20],
      },
      armor: {
        property: MagicPropertyType.MaximumPoisonResist,
        values: [5],
      },
      shields: {
        property: MagicPropertyType.MaximumPoisonResist,
        values: [5],
      },
    },
  },
  {
    id: ids.Vex,
    name: 'Vex Rune',
    clvl: 55,
    stats: {
      weapons: {
        property: MagicPropertyType.ManaStolenPerHit,
        values: [7],
      },
      armor: {
        property: MagicPropertyType.MaximumFireResist,
        values: [5],
      },
      shields: {
        property: MagicPropertyType.MaximumFireResist,
        values: [5],
      },
    },
  },
  {
    id: ids.Ohm,
    name: 'Ohm Rune',
    clvl: 57,
    stats: {
      weapons: {
        property: MagicPropertyType.EnhancedDamage,
        values: [50],
      },
      armor: {
        property: MagicPropertyType.MaximumColdResist,
        values: [5],
      },
      shields: {
        property: MagicPropertyType.MaximumColdResist,
        values: [5],
      },
    },
  },
  {
    id: ids.Lo,
    name: 'Lo Rune',
    clvl: 59,
    stats: {
      weapons: {
        property: MagicPropertyType.DeadlyStrike,
        values: [20],
      },
      armor: {
        property: MagicPropertyType.MaximumLightningResist,
        values: [5],
      },
      shields: {
        property: MagicPropertyType.MaximumLightningResist,
        values: [5],
      },
    },
  },
  {
    id: ids.Sur,
    name: 'Sur Rune',
    clvl: 61,
    stats: {
      weapons: {
        property: MagicPropertyType.HitBlindsTarget,
        values: [],
      },
      armor: {
        property: MagicPropertyType.IncreaseMaximumMana,
        values: [5],
      },
      shields: {
        property: MagicPropertyType.Mana,
        values: [50],
      },
    },
  },
  {
    id: ids.Ber,
    name: 'Ber Rune',
    clvl: 63,
    stats: {
      weapons: {
        property: MagicPropertyType.CrushingBlow,
        values: [20],
      },
      armor: {
        property: MagicPropertyType.DamageReducedPercentage,
        values: [8],
      },
      shields: {
        property: MagicPropertyType.DamageReducedPercentage,
        values: [8],
      },
    },
  },
  {
    id: ids.Jah,
    name: 'Jah Rune',
    clvl: 65,
    stats: {
      weapons: {
        property: MagicPropertyType.IgnoreTargetDefense,
        values: [],
      },
      armor: {
        property: MagicPropertyType.IncreaseMaximumLife,
        values: [5],
      },
      shields: {
        property: MagicPropertyType.Life,
        values: [50],
      },
    },
  },
  {
    id: ids.Cham,
    name: 'Cham Rune',
    clvl: 67,
    stats: {
      weapons: {
        property: MagicPropertyType.FreezesTarget,
        values: [3],
      },
      armor: {
        property: MagicPropertyType.CannotBeFrozen,
        values: [],
      },
      shields: {
        property: MagicPropertyType.CannotBeFrozen,
        values: [],
      },
    },
  },
  {
    id: ids.Zod,
    name: 'Zod Rune',
    clvl: 69,
    stats: {
      weapons: {
        property: MagicPropertyType.Indestructible,
        values: [],
      },
      armor: {
        property: MagicPropertyType.Indestructible,
        values: [],
      },
      shields: {
        property: MagicPropertyType.Indestructible,
        values: [],
      },
    },
  },
]);

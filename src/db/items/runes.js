import {
  ItemType,
  MagicPropertyType,
  SocketCategoryType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  size: [1, 1],
  type: ItemType.Rune,
})([
  {
    id: ids.El,
    name: 'El Rune',
    clvl: 11,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.AttackRating]: [50],
          [MagicPropertyType.LightRadius]: [1],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Defense]: [15],
          [MagicPropertyType.LightRadius]: [1],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Defense]: [15],
          [MagicPropertyType.LightRadius]: [1],
        },
      },
    },
  },
  {
    id: ids.Eld,
    name: 'Eld Rune',
    clvl: 11,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.DamageToUndead]: [75],
          [MagicPropertyType.AttackRatingAgainstUndead]: [50],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.SlowerStaminaDrain]: [15],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.IncreasedChanceOfBlocking]: [7],
        },
      },
    },
  },
  {
    id: ids.Tir,
    name: 'Tir Rune',
    clvl: 13,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ManaAfterKill]: [2],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.ManaAfterKill]: [2],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ManaAfterKill]: [2],
        },
      },
    },
  },
  {
    id: ids.Nef,
    name: 'Nef Rune',
    clvl: 13,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.Knockback]: [],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.DefenseVsMissle]: [30],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.DefenseVsMissle]: [30],
        },
      },
    },
  },
  {
    id: ids.Eth,
    name: 'Eth Rune',
    clvl: 15,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.TargetDefense]: [25],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.RegenerateMana]: [15],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.RegenerateMana]: [15],
        },
      },
    },
  },
  {
    id: ids.Ith,
    name: 'Ith Rune',
    clvl: 15,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.MaximumDamage]: [9],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.DamageTakenGoesToMana]: [15],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.DamageTakenGoesToMana]: [15],
        },
      },
    },
  },
  {
    id: ids.Tal,
    name: 'Tal Rune',
    clvl: 17,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.PoisonDamage]: [75, 5],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.PoisonResist]: [30],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.PoisonResist]: [35],
        },
      },
    },
  },
  {
    id: ids.Ral,
    name: 'Ral Rune',
    clvl: 19,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.FireDamage]: [5, 30],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.FireResist]: [30],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FireResist]: [35],
        },
      },
    },
  },
  {
    id: ids.Ort,
    name: 'Ort Rune',
    clvl: 21,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LightningDamage]: [1, 50],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.LightningResist]: [30],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.LightningResist]: [35],
        },
      },
    },
  },
  {
    id: ids.Thul,
    name: 'Thul Rune',
    clvl: 23,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ColdDamage]: [3, 14, 3],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.ColdResist]: [30],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ColdResist]: [35],
        },
      },
    },
  },
  {
    id: ids.Amn,
    name: 'Amn Rune',
    clvl: 25,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LifeStolenPerHit]: [7],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AttackerTakesDamage]: [14],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AttackerTakesDamage]: [14],
        },
      },
    },
  },
  {
    id: ids.Sol,
    name: 'Sol Rune',
    clvl: 27,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.MinimumDamage]: [9],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.DamageReduced]: [7],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.DamageReduced]: [7],
        },
      },
    },
  },
  {
    id: ids.Shael,
    name: 'Shael Rune',
    clvl: 29,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.IncreasedAttackSpeed]: [20],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.FasterHitRecovery]: [20],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FasterBlockRate]: [20],
        },
      },
    },
  },
  {
    id: ids.Dol,
    name: 'Dol Rune',
    clvl: 31,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.HitCausesMonsterToFlee]: [25],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.ReplenishLife]: [7],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ReplenishLife]: [7],
        },
      },
    },
  },
  {
    id: ids.Hel,
    name: 'Hel Rune',
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.Requirements]: [20],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Requirements]: [15],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Requirements]: [15],
        },
      },
    },
  },
  {
    id: ids.Io,
    name: 'Io Rune',
    clvl: 35,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.Vitality]: [10],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Vitality]: [10],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Vitality]: [10],
        },
      },
    },
  },
  {
    id: ids.Lum,
    name: 'Lum Rune',
    clvl: 37,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.Energy]: [10],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Energy]: [10],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Energy]: [10],
        },
      },
    },
  },
  {
    id: ids.Ko,
    name: 'Ko Rune',
    clvl: 39,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.Dexterity]: [10],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Dexterity]: [10],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Dexterity]: [10],
        },
      },
    },
  },
  {
    id: ids.Fal,
    name: 'Fal Rune',
    clvl: 41,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.Strength]: [10],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Strength]: [10],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Strength]: [10],
        },
      },
    },
  },
  {
    id: ids.Lem,
    name: 'Lem Rune',
    clvl: 43,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ExtraGold]: [75],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.ExtraGold]: [50],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ExtraGold]: [50],
        },
      },
    },
  },
  {
    id: ids.Pul,
    name: 'Pul Rune',
    clvl: 45,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.DamageToDemons]: [75],
          [MagicPropertyType.AttackRatingAgainstDemons]: [100],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.EnhancedDefense]: [30],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.EnhancedDefense]: [30],
        },
      },
    },
  },
  {
    id: ids.Um,
    name: 'Um Rune',
    clvl: 47,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.OpenWounds]: [25],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AllResistances]: [15],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AllResistances]: [22],
        },
      },
    },
  },
  {
    id: ids.Mal,
    name: 'Mal Rune',
    clvl: 49,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.PreventMonsterHeal]: [],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicDamageReduced]: [7],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MagicDamageReduced]: [7],
        },
      },
    },
  },
  {
    id: ids.Ist,
    name: 'Ist Rune',
    clvl: 51,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.MagicFind]: [30],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicFind]: [25],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MagicFind]: [25],
        },
      },
    },
  },
  {
    id: ids.Gul,
    name: 'Gul Rune',
    clvl: 53,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.BonusToAttackRating]: [20],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MaximumPoisonResist]: [5],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MaximumPoisonResist]: [5],
        },
      },
    },
  },
  {
    id: ids.Vex,
    name: 'Vex Rune',
    clvl: 55,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ManaStolenPerHit]: [7],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MaximumFireResist]: [5],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MaximumFireResist]: [5],
        },
      },
    },
  },
  {
    id: ids.Ohm,
    name: 'Ohm Rune',
    clvl: 57,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.EnhancedDamage]: [50],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MaximumColdResist]: [5],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MaximumColdResist]: [5],
        },
      },
    },
  },
  {
    id: ids.Lo,
    name: 'Lo Rune',
    clvl: 59,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.DeadlyStrike]: [20],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MaximumLightningResist]: [5],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MaximumLightningResist]: [5],
        },
      },
    },
  },
  {
    id: ids.Sur,
    name: 'Sur Rune',
    clvl: 61,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.HitBlindsTarget]: [],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.IncreaseMaximumMana]: [5],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Mana]: [50],
        },
      },
    },
  },
  {
    id: ids.Ber,
    name: 'Ber Rune',
    clvl: 63,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.CrushingBlow]: [20],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.DamageReducedPercentage]: [8],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.DamageReducedPercentage]: [8],
        },
      },
    },
  },
  {
    id: ids.Jah,
    name: 'Jah Rune',
    clvl: 65,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.IgnoreTargetDefense]: [],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.IncreaseMaximumLife]: [5],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Life]: [50],
        },
      },
    },
  },
  {
    id: ids.Cham,
    name: 'Cham Rune',
    clvl: 67,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.FreezesTarget]: [3],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.CannotBeFrozen]: [],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.CannotBeFrozen]: [],
        },
      },
    },
  },
  {
    id: ids.Zod,
    name: 'Zod Rune',
    clvl: 69,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.Indestructible]: [],
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Indestructible]: [],
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Indestructible]: [],
        },
      },
    },
  },
]);

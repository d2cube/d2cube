import {
  ItemType,
  MagicPropertyType,
  SocketCategoryType,
} from '../../enums/index.js';
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
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.AttackRating]: {
            values: [50],
          },
          [MagicPropertyType.LightRadius]: {
            values: [1],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Defense]: {
            values: [15],
          },
          [MagicPropertyType.LightRadius]: {
            values: [1],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Defense]: {
            values: [15],
          },
          [MagicPropertyType.LightRadius]: {
            values: [1],
          },
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
          [MagicPropertyType.DamageToUndead]: {
            values: [75],
          },
          [MagicPropertyType.AttackRatingAgainstUndead]: {
            values: [50],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.SlowerStaminaDrain]: {
            values: [15],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.IncreasedChanceOfBlocking]: {
            values: [7],
          },
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
          [MagicPropertyType.ManaAfterKill]: {
            values: [2],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.ManaAfterKill]: {
            values: [2],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ManaAfterKill]: {
            values: [2],
          },
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
          [MagicPropertyType.Knockback]: {
            values: [],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.DefenseVsMissle]: {
            values: [30],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.DefenseVsMissle]: {
            values: [30],
          },
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
          [MagicPropertyType.TargetDefense]: {
            values: [25],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.RegenerateMana]: {
            values: [15],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.RegenerateMana]: {
            values: [15],
          },
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
          [MagicPropertyType.MaximumDamage]: {
            values: [9],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.DamageTakenGoesToMana]: {
            values: [15],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.DamageTakenGoesToMana]: {
            values: [15],
          },
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
          [MagicPropertyType.PoisonDamage]: {
            values: [75, 5],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.PoisonResist]: {
            values: [30],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.PoisonResist]: {
            values: [35],
          },
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
          [MagicPropertyType.FireDamage]: {
            values: [5, 30],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.FireResist]: {
            values: [30],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FireResist]: {
            values: [35],
          },
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
          [MagicPropertyType.LightningDamage]: {
            values: [1, 50],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.LightningResist]: {
            values: [30],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.LightningResist]: {
            values: [35],
          },
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
          [MagicPropertyType.ColdDamage]: {
            values: [3, 14, 3],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.ColdResist]: {
            values: [30],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ColdResist]: {
            values: [35],
          },
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
          [MagicPropertyType.LifeStolenPerHit]: {
            values: [7],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AttackerTakesDamage]: {
            values: [14],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AttackerTakesDamage]: {
            values: [14],
          },
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
          [MagicPropertyType.MinimumDamage]: {
            values: [9],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.DamageReduced]: {
            values: [7],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.DamageReduced]: {
            values: [7],
          },
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
          [MagicPropertyType.IncreasedAttackSpeed]: {
            values: [20],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.FasterHitRecovery]: {
            values: [20],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FasterBlockRate]: {
            values: [20],
          },
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
          [MagicPropertyType.HitCausesMonsterToFlee]: {
            values: [25],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.ReplenishLife]: {
            values: [7],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ReplenishLife]: {
            values: [7],
          },
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
          [MagicPropertyType.Requirements]: {
            values: [20],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Requirements]: {
            values: [15],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Requirements]: {
            values: [15],
          },
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
          [MagicPropertyType.Vitality]: {
            values: [10],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Vitality]: {
            values: [10],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Vitality]: {
            values: [10],
          },
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
          [MagicPropertyType.Energy]: {
            values: [10],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Energy]: {
            values: [10],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Energy]: {
            values: [10],
          },
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
          [MagicPropertyType.Dexterity]: {
            values: [10],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Dexterity]: {
            values: [10],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Dexterity]: {
            values: [10],
          },
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
          [MagicPropertyType.Strength]: {
            values: [10],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Strength]: {
            values: [10],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Strength]: {
            values: [10],
          },
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
          [MagicPropertyType.ExtraGold]: {
            values: [75],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.ExtraGold]: {
            values: [50],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ExtraGold]: {
            values: [50],
          },
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
          [MagicPropertyType.DamageToDemons]: {
            values: [75],
          },
          [MagicPropertyType.AttackRatingAgainstDemons]: {
            values: [100],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.EnhancedDefense]: {
            values: [30],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.EnhancedDefense]: {
            values: [30],
          },
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
          [MagicPropertyType.OpenWounds]: {
            values: [25],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AllResistances]: {
            values: [15],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AllResistances]: {
            values: [22],
          },
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
          [MagicPropertyType.PreventMonsterHeal]: {
            values: [],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicDamageReduced]: {
            values: [7],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MagicDamageReduced]: {
            values: [7],
          },
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
          [MagicPropertyType.MagicFind]: {
            values: [30],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicFind]: {
            values: [25],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MagicFind]: {
            values: [25],
          },
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
          [MagicPropertyType.BonusToAttackRating]: {
            values: [20],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MaximumPoisonResist]: {
            values: [5],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MaximumPoisonResist]: {
            values: [5],
          },
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
          [MagicPropertyType.ManaStolenPerHit]: {
            values: [7],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MaximumFireResist]: {
            values: [5],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MaximumFireResist]: {
            values: [5],
          },
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
          [MagicPropertyType.EnhancedDamage]: {
            values: [50],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MaximumColdResist]: {
            values: [5],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MaximumColdResist]: {
            values: [5],
          },
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
          [MagicPropertyType.DeadlyStrike]: {
            values: [20],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MaximumLightningResist]: {
            values: [5],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MaximumLightningResist]: {
            values: [5],
          },
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
          [MagicPropertyType.HitBlindsTarget]: {
            values: [],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.IncreaseMaximumMana]: {
            values: [5],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Mana]: {
            values: [50],
          },
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
          [MagicPropertyType.CrushingBlow]: {
            values: [20],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.DamageReducedPercentage]: {
            values: [8],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.DamageReducedPercentage]: {
            values: [8],
          },
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
          [MagicPropertyType.IgnoreTargetDefense]: {
            values: [],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.IncreaseMaximumLife]: {
            values: [5],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Life]: {
            values: [50],
          },
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
          [MagicPropertyType.FreezesTarget]: {
            values: [3],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.CannotBeFrozen]: {
            values: [],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.CannotBeFrozen]: {
            values: [],
          },
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
          [MagicPropertyType.Indestructible]: {
            values: [],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Indestructible]: {
            values: [],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Indestructible]: {
            values: [],
          },
        },
      },
    },
  },
]);

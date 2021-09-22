import {
  BasePropertyType,
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
    level: 1,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 11,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.AttackRating]: 50,
          [MagicPropertyType.LightRadius]: 1,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Defense]: 15,
          [MagicPropertyType.LightRadius]: 1,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.Defense]: 15,
          [MagicPropertyType.LightRadius]: 1,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Defense]: 15,
          [MagicPropertyType.LightRadius]: 1,
        },
      },
    },
  },
  {
    id: ids.Eld,
    name: 'Eld Rune',
    level: 2,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 11,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.DamageToUndead]: 75,
          [MagicPropertyType.AttackRatingAgainstUndead]: 50,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.SlowerStaminaDrain]: 15,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.SlowerStaminaDrain]: 15,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.IncreasedChanceOfBlocking]: 7,
        },
      },
    },
  },
  {
    id: ids.Tir,
    name: 'Tir Rune',
    level: 3,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 13,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ManaAfterKill]: 2,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.ManaAfterKill]: 2,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.ManaAfterKill]: 2,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ManaAfterKill]: 2,
        },
      },
    },
  },
  {
    id: ids.Nef,
    name: 'Nef Rune',
    level: 4,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 13,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.Knockback]: true,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.DefenseVsMissle]: 30,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.DefenseVsMissle]: 30,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.DefenseVsMissle]: 30,
        },
      },
    },
  },
  {
    id: ids.Eth,
    name: 'Eth Rune',
    level: 5,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.TargetDefense]: -25,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.RegenerateMana]: 15,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.RegenerateMana]: 15,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.RegenerateMana]: 15,
        },
      },
    },
  },
  {
    id: ids.Ith,
    name: 'Ith Rune',
    level: 6,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.MaximumDamage]: 9,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.DamageTakenGoesToMana]: 15,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.DamageTakenGoesToMana]: 15,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.DamageTakenGoesToMana]: 15,
        },
      },
    },
  },
  {
    id: ids.Tal,
    name: 'Tal Rune',
    level: 7,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 17,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.PoisonDamage]: {x: 75, y: 75, z: 5},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.PoisonResist]: 30,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.PoisonResist]: 30,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.PoisonResist]: 35,
        },
      },
    },
  },
  {
    id: ids.Ral,
    name: 'Ral Rune',
    level: 8,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 19,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.FireDamage]: {x: 5, y: 30},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.FireResist]: 30,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.FireResist]: 30,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FireResist]: 35,
        },
      },
    },
  },
  {
    id: ids.Ort,
    name: 'Ort Rune',
    level: 9,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 21,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LightningDamage]: {x: 1, y: 50},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.LightningResist]: 30,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.LightningResist]: 30,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.LightningResist]: 35,
        },
      },
    },
  },
  {
    id: ids.Thul,
    name: 'Thul Rune',
    level: 10,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 23,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ColdDamage]: {x: 3, y: 14, z: 3},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.ColdResist]: 30,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.ColdResist]: 30,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ColdResist]: 35,
        },
      },
    },
  },
  {
    id: ids.Amn,
    name: 'Amn Rune',
    level: 11,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 25,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LifeStolenPerHit]: 7,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AttackerTakesDamage]: 14,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.AttackerTakesDamage]: 14,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AttackerTakesDamage]: 14,
        },
      },
    },
  },
  {
    id: ids.Sol,
    name: 'Sol Rune',
    level: 12,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 27,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.MinimumDamage]: 9,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.DamageReduced]: 7,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.DamageReduced]: 7,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.DamageReduced]: 7,
        },
      },
    },
  },
  {
    id: ids.Shael,
    name: 'Shael Rune',
    level: 13,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.IncreasedAttackSpeed]: 20,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.FasterHitRecovery]: 20,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.FasterHitRecovery]: 20,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FasterBlockRate]: 20,
        },
      },
    },
  },
  {
    id: ids.Dol,
    name: 'Dol Rune',
    level: 14,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 31,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.HitCausesMonsterToFlee]: 25,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.ReplenishLife]: 7,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.ReplenishLife]: 7,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ReplenishLife]: 7,
        },
      },
    },
  },
  {
    id: ids.Hel,
    name: 'Hel Rune',
    level: 15,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.Requirements]: -20,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Requirements]: -15,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.Requirements]: -15,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Requirements]: -15,
        },
      },
    },
  },
  {
    id: ids.Io,
    name: 'Io Rune',
    level: 16,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 35,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.Vitality]: 10,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Vitality]: 10,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.Vitality]: 10,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Vitality]: 10,
        },
      },
    },
  },
  {
    id: ids.Lum,
    name: 'Lum Rune',
    level: 17,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 37,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.Energy]: 10,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Energy]: 10,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.Energy]: 10,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Energy]: 10,
        },
      },
    },
  },
  {
    id: ids.Ko,
    name: 'Ko Rune',
    level: 18,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 39,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.Dexterity]: 10,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Dexterity]: 10,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.Dexterity]: 10,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Dexterity]: 10,
        },
      },
    },
  },
  {
    id: ids.Fal,
    name: 'Fal Rune',
    level: 19,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.Strength]: 10,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Strength]: 10,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.Strength]: 10,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Strength]: 10,
        },
      },
    },
  },
  {
    id: ids.Lem,
    name: 'Lem Rune',
    level: 20,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 43,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ExtraGold]: 75,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.ExtraGold]: 50,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.ExtraGold]: 50,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ExtraGold]: 50,
        },
      },
    },
  },
  {
    id: ids.Pul,
    name: 'Pul Rune',
    level: 21,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 45,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.DamageToDemons]: 75,
          [MagicPropertyType.AttackRatingAgainstDemons]: 100,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.EnhancedDefense]: 30,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.EnhancedDefense]: 30,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.EnhancedDefense]: 30,
        },
      },
    },
  },
  {
    id: ids.Um,
    name: 'Um Rune',
    level: 22,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 47,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.OpenWounds]: 25,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AllResistances]: 15,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.AllResistances]: 15,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AllResistances]: 22,
        },
      },
    },
  },
  {
    id: ids.Mal,
    name: 'Mal Rune',
    level: 23,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 49,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.PreventMonsterHeal]: 1,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicDamageReduced]: 7,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.MagicDamageReduced]: 7,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MagicDamageReduced]: 7,
        },
      },
    },
  },
  {
    id: ids.Ist,
    name: 'Ist Rune',
    level: 24,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 51,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.MagicFind]: 30,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicFind]: 25,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.MagicFind]: 25,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MagicFind]: 25,
        },
      },
    },
  },
  {
    id: ids.Gul,
    name: 'Gul Rune',
    level: 25,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 53,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.BonusToAttackRating]: 20,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MaximumPoisonResist]: 5,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.MaximumPoisonResist]: 5,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MaximumPoisonResist]: 5,
        },
      },
    },
  },
  {
    id: ids.Vex,
    name: 'Vex Rune',
    level: 26,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 55,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ManaStolenPerHit]: 7,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MaximumFireResist]: 5,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.MaximumFireResist]: 5,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MaximumFireResist]: 5,
        },
      },
    },
  },
  {
    id: ids.Ohm,
    name: 'Ohm Rune',
    level: 27,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 57,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.EnhancedDamage]: 50,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MaximumColdResist]: 5,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.MaximumColdResist]: 5,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MaximumColdResist]: 5,
        },
      },
    },
  },
  {
    id: ids.Lo,
    name: 'Lo Rune',
    level: 28,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 59,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.DeadlyStrike]: 20,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MaximumLightningResist]: 5,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.MaximumLightningResist]: 5,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.MaximumLightningResist]: 5,
        },
      },
    },
  },
  {
    id: ids.Sur,
    name: 'Sur Rune',
    level: 29,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 61,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.HitBlindsTarget]: 0,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.IncreaseMaximumMana]: 5,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.IncreaseMaximumMana]: 5,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Mana]: 50,
        },
      },
    },
  },
  {
    id: ids.Ber,
    name: 'Ber Rune',
    level: 30,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 63,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.CrushingBlow]: 20,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.DamageReducedPercentage]: 8,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.DamageReducedPercentage]: 8,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.DamageReducedPercentage]: 8,
        },
      },
    },
  },
  {
    id: ids.Jah,
    name: 'Jah Rune',
    level: 31,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.IgnoreTargetDefense]: true,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.IncreaseMaximumLife]: 5,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.IncreaseMaximumLife]: 5,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Life]: 50,
        },
      },
    },
  },
  {
    id: ids.Cham,
    name: 'Cham Rune',
    level: 32,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 67,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.FreezesTarget]: 3,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.CannotBeFrozen]: true,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.CannotBeFrozen]: true,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.CannotBeFrozen]: true,
        },
      },
    },
  },
  {
    id: ids.Zod,
    name: 'Zod Rune',
    level: 33,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 69,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.Indestructible]: true,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Indestructible]: true,
        },
        [SocketCategoryType.Helm]: {
          [MagicPropertyType.Indestructible]: true,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Indestructible]: true,
        },
      },
    },
  },
]);

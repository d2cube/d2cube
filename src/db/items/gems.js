import {
  GemClassType,
  GemQualityType,
  ItemType,
  MagicPropertyType,
  SocketCategoryType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  size: [1, 1],
  type: ItemType.Gem,
})([
  {
    id: ids.ChippedRuby,
    name: 'Chipped Ruby',
    clvl: 1,
    class: GemClassType.Ruby,
    quality: GemQualityType.Chipped,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.FireDamage]: {min: 3, max: 4},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Life]: 10,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FireResist]: 12,
        },
      },
    },
  },
  {
    id: ids.FlawedRuby,
    name: 'Flawed Ruby',
    clvl: 5,
    class: GemClassType.Ruby,
    quality: GemQualityType.Flawed,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.FireDamage]: {min: 5, max: 8},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Life]: 17,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FireResist]: 16,
        },
      },
    },
  },
  {
    id: ids.Ruby,
    name: 'Ruby',
    clvl: 12,
    class: GemClassType.Ruby,
    quality: GemQualityType.Regular,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.FireDamage]: {min: 8, max: 12},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Life]: 24,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FireResist]: 22,
        },
      },
    },
  },
  {
    id: ids.FlawlessRuby,
    name: 'Flawless Ruby',
    clvl: 15,
    class: GemClassType.Ruby,
    quality: GemQualityType.Flawless,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.FireDamage]: {min: 10, max: 16},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Life]: 31,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FireResist]: 28,
        },
      },
    },
  },
  {
    id: ids.PerfectRuby,
    name: 'Perfect Ruby',
    clvl: 18,
    class: GemClassType.Ruby,
    quality: GemQualityType.Perfect,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.FireDamage]: {min: 15, max: 20},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Life]: 38,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FireResist]: 40,
        },
      },
    },
  },
  {
    id: ids.ChippedSapphire,
    name: 'Chipped Sapphire',
    clvl: 1,
    class: GemClassType.Sapphire,
    quality: GemQualityType.Chipped,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ColdDamage]: {min: 1, max: 3, t: 1},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Mana]: 10,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ColdResist]: 12,
        },
      },
    },
  },
  {
    id: ids.FlawedSapphire,
    name: 'Flawed Sapphire',
    clvl: 5,
    class: GemClassType.Sapphire,
    quality: GemQualityType.Flawed,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ColdDamage]: {min: 3, max: 5, t: 1.4},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Mana]: 17,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ColdResist]: 16,
        },
      },
    },
  },
  {
    id: ids.Sapphire,
    name: 'Sapphire',
    clvl: 12,
    class: GemClassType.Sapphire,
    quality: GemQualityType.Regular,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ColdDamage]: {min: 4, max: 7, t: 2},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Mana]: 24,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ColdResist]: 22,
        },
      },
    },
  },
  {
    id: ids.FlawlessSapphire,
    name: 'Flawless Sapphire',
    clvl: 15,
    class: GemClassType.Sapphire,
    quality: GemQualityType.Flawless,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ColdDamage]: {min: 6, max: 10, t: 2.4},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Mana]: 31,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ColdResist]: 28,
        },
      },
    },
  },
  {
    id: ids.PerfectSapphire,
    name: 'Perfect Sapphire',
    clvl: 18,
    class: GemClassType.Sapphire,
    quality: GemQualityType.Perfect,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ColdDamage]: {min: 10, max: 14, t: 3},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Mana]: 38,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ColdResist]: 40,
        },
      },
    },
  },
  {
    id: ids.ChippedTopaz,
    name: 'Chipped Topaz',
    clvl: 1,
    class: GemClassType.Topaz,
    quality: GemQualityType.Chipped,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LightningDamage]: {min: 1, max: 8},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicFind]: 9,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.LightningResist]: 12,
        },
      },
    },
  },
  {
    id: ids.FlawedTopaz,
    name: 'Flawed Topaz',
    clvl: 5,
    class: GemClassType.Topaz,
    quality: GemQualityType.Flawed,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LightningDamage]: {min: 1, max: 14},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicFind]: 13,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.LightningResist]: 16,
        },
      },
    },
  },
  {
    id: ids.Topaz,
    name: 'Topaz',
    clvl: 12,
    class: GemClassType.Topaz,
    quality: GemQualityType.Regular,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LightningDamage]: {min: 1, max: 22},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicFind]: 16,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.LightningResist]: 22,
        },
      },
    },
  },
  {
    id: ids.FlawlessTopaz,
    name: 'Flawless Topaz',
    clvl: 15,
    class: GemClassType.Topaz,
    quality: GemQualityType.Flawless,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LightningDamage]: {min: 1, max: 30},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicFind]: 20,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.LightningResist]: 28,
        },
      },
    },
  },
  {
    id: ids.PerfectTopaz,
    name: 'Perfect Topaz',
    clvl: 18,
    class: GemClassType.Topaz,
    quality: GemQualityType.Perfect,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LightningDamage]: {min: 1, max: 40},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicFind]: 24,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.LightningResist]: 40,
        },
      },
    },
  },
  {
    id: ids.ChippedEmerald,
    name: 'Chipped Emerald',
    clvl: 1,
    class: GemClassType.Emerald,
    quality: GemQualityType.Chipped,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.PoisonDamage]: {min: 10, max: 3},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Dexterity]: 3,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.PoisonResist]: 12,
        },
      },
    },
  },
  {
    id: ids.FlawedEmerald,
    name: 'Flawed Emerald',
    clvl: 5,
    class: GemClassType.Emerald,
    quality: GemQualityType.Flawed,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.PoisonDamage]: {min: 20, max: 4},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Dexterity]: 4,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.PoisonResist]: 16,
        },
      },
    },
  },
  {
    id: ids.Emerald,
    name: 'Emerald',
    clvl: 12,
    class: GemClassType.Emerald,
    quality: GemQualityType.Regular,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.PoisonDamage]: {min: 40, max: 5},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Dexterity]: 6,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.PoisonResist]: 22,
        },
      },
    },
  },
  {
    id: ids.FlawlessEmerald,
    name: 'Flawless Emerald',
    clvl: 15,
    class: GemClassType.Emerald,
    quality: GemQualityType.Flawless,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.PoisonDamage]: {min: 60, max: 6},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Dexterity]: 8,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.PoisonResist]: 28,
        },
      },
    },
  },
  {
    id: ids.PerfectEmerald,
    name: 'Perfect Emerald',
    clvl: 18,
    class: GemClassType.Emerald,
    quality: GemQualityType.Perfect,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.PoisonDamage]: {min: 100, max: 7},
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Dexterity]: 10,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.PoisonResist]: 40,
        },
      },
    },
  },
  {
    id: ids.ChippedDiamond,
    name: 'Chipped Diamond',
    clvl: 1,
    class: GemClassType.Diamond,
    quality: GemQualityType.Chipped,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.DamageToUndead]: 28,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AttackRating]: 20,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AllResistances]: 6,
        },
      },
    },
  },
  {
    id: ids.FlawedDiamond,
    name: 'Flawed Diamond',
    clvl: 5,
    class: GemClassType.Diamond,
    quality: GemQualityType.Flawed,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.DamageToUndead]: 34,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AttackRating]: 40,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AllResistances]: 8,
        },
      },
    },
  },
  {
    id: ids.Diamond,
    name: 'Diamond',
    clvl: 12,
    class: GemClassType.Diamond,
    quality: GemQualityType.Regular,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.DamageToUndead]: 44,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AttackRating]: 60,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AllResistances]: 11,
        },
      },
    },
  },
  {
    id: ids.FlawlessDiamond,
    name: 'Flawless Diamond',
    clvl: 15,
    class: GemClassType.Diamond,
    quality: GemQualityType.Flawless,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.DamageToUndead]: 54,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AttackRating]: 80,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AllResistances]: 14,
        },
      },
    },
  },
  {
    id: ids.PerfectDiamond,
    name: 'Perfect Diamond',
    clvl: 18,
    class: GemClassType.Diamond,
    quality: GemQualityType.Perfect,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.DamageToUndead]: 68,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AttackRating]: 100,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AllResistances]: 19,
        },
      },
    },
  },
  {
    id: ids.ChippedAmethyst,
    name: 'Chipped Amethyst',
    clvl: 1,
    class: GemClassType.Amethyst,
    quality: GemQualityType.Chipped,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.AttackRating]: 40,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Strength]: 3,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Defense]: 8,
        },
      },
    },
  },
  {
    id: ids.FlawedAmethyst,
    name: 'Flawed Amethyst',
    clvl: 5,
    class: GemClassType.Amethyst,
    quality: GemQualityType.Flawed,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.AttackRating]: 60,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Strength]: 4,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Defense]: 12,
        },
      },
    },
  },
  {
    id: ids.Amethyst,
    name: 'Amethyst',
    clvl: 12,
    class: GemClassType.Amethyst,
    quality: GemQualityType.Regular,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.AttackRating]: 80,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Strength]: 6,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Defense]: 18,
        },
      },
    },
  },
  {
    id: ids.FlawlessAmethyst,
    name: 'Flawless Amethyst',
    clvl: 15,
    class: GemClassType.Amethyst,
    quality: GemQualityType.Flawless,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.AttackRating]: 100,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Strength]: 8,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Defense]: 24,
        },
      },
    },
  },
  {
    id: ids.PerfectAmethyst,
    name: 'Perfect Amethyst',
    clvl: 18,
    class: GemClassType.Amethyst,
    quality: GemQualityType.Perfect,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.AttackRating]: 150,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Strength]: 10,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Defense]: 30,
        },
      },
    },
  },
  {
    id: ids.ChippedSkull,
    name: 'Chipped Skull',
    clvl: 1,
    class: GemClassType.Skull,
    quality: GemQualityType.Chipped,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LifeStolenPerHit]: 2,
          [MagicPropertyType.ManaStolenPerHit]: 1,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.RegenerateMana]: 8,
          [MagicPropertyType.ReplenishLife]: 2,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AttackerTakesDamage]: 4,
        },
      },
    },
  },
  {
    id: ids.FlawedSkull,
    name: 'Flawed Skull',
    clvl: 5,
    class: GemClassType.Skull,
    quality: GemQualityType.Flawed,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LifeStolenPerHit]: 2,
          [MagicPropertyType.ManaStolenPerHit]: 2,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.RegenerateMana]: 8,
          [MagicPropertyType.ReplenishLife]: 3,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AttackerTakesDamage]: 8,
        },
      },
    },
  },
  {
    id: ids.Skull,
    name: 'Skull',
    clvl: 12,
    class: GemClassType.Skull,
    quality: GemQualityType.Regular,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LifeStolenPerHit]: 3,
          [MagicPropertyType.ManaStolenPerHit]: 2,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.RegenerateMana]: 12,
          [MagicPropertyType.ReplenishLife]: 3,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AttackerTakesDamage]: 12,
        },
      },
    },
  },
  {
    id: ids.FlawlessSkull,
    name: 'Flawless Skull',
    clvl: 15,
    class: GemClassType.Skull,
    quality: GemQualityType.Flawless,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LifeStolenPerHit]: 3,
          [MagicPropertyType.ManaStolenPerHit]: 3,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.RegenerateMana]: 12,
          [MagicPropertyType.ReplenishLife]: 4,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AttackerTakesDamage]: 16,
        },
      },
    },
  },
  {
    id: ids.PerfectSkull,
    name: 'Perfect Skull',
    clvl: 18,
    class: GemClassType.Skull,
    quality: GemQualityType.Perfect,
    properties: {
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LifeStolenPerHit]: 4,
          [MagicPropertyType.ManaStolenPerHit]: 3,
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.RegenerateMana]: 19,
          [MagicPropertyType.ReplenishLife]: 5,
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AttackerTakesDamage]: 20,
        },
      },
    },
  },
]);

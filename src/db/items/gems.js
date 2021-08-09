import {
  BasePropertyType,
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
    class: GemClassType.Ruby,
    quality: GemQualityType.Chipped,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 1,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.FireDamage]: {x: 3, y: 4},
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
    class: GemClassType.Ruby,
    quality: GemQualityType.Flawed,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.FireDamage]: {x: 5, y: 8},
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
    class: GemClassType.Ruby,
    quality: GemQualityType.Regular,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 12,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.FireDamage]: {x: 8, y: 12},
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
    class: GemClassType.Ruby,
    quality: GemQualityType.Flawless,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.FireDamage]: {x: 10, y: 16},
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
    class: GemClassType.Ruby,
    quality: GemQualityType.Perfect,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 18,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.FireDamage]: {x: 15, y: 20},
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
    quality: GemQualityType.Chipped,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 1,
      },
      class: GemClassType.Sapphire,
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ColdDamage]: {x: 1, y: 3, z: 1},
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
    class: GemClassType.Sapphire,
    quality: GemQualityType.Flawed,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ColdDamage]: {x: 3, y: 5, z: 1.4},
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
    class: GemClassType.Sapphire,
    quality: GemQualityType.Regular,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 12,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ColdDamage]: {x: 4, y: 7, z: 2},
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
    class: GemClassType.Sapphire,
    quality: GemQualityType.Flawless,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ColdDamage]: {x: 6, y: 10, z: 2.4},
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
    class: GemClassType.Sapphire,
    quality: GemQualityType.Perfect,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 18,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.ColdDamage]: {x: 10, y: 14, z: 3},
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
    class: GemClassType.Topaz,
    quality: GemQualityType.Chipped,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 1,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LightningDamage]: {x: 1, y: 8},
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
    class: GemClassType.Topaz,
    quality: GemQualityType.Flawed,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LightningDamage]: {x: 1, y: 14},
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
    class: GemClassType.Topaz,
    quality: GemQualityType.Regular,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 12,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LightningDamage]: {x: 1, y: 22},
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
    class: GemClassType.Topaz,
    quality: GemQualityType.Flawless,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LightningDamage]: {x: 1, y: 30},
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
    class: GemClassType.Topaz,
    quality: GemQualityType.Perfect,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 18,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.LightningDamage]: {x: 1, y: 40},
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
    class: GemClassType.Emerald,
    quality: GemQualityType.Chipped,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 1,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.PoisonDamage]: {x: 10, z: 3},
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
    class: GemClassType.Emerald,
    quality: GemQualityType.Flawed,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.PoisonDamage]: {x: 20, z: 4},
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
    class: GemClassType.Emerald,
    quality: GemQualityType.Regular,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 12,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.PoisonDamage]: {x: 40, z: 5},
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
    class: GemClassType.Emerald,
    quality: GemQualityType.Flawless,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.PoisonDamage]: {x: 60, z: 6},
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
    class: GemClassType.Emerald,
    quality: GemQualityType.Perfect,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 18,
      },
      socket: {
        [SocketCategoryType.Weapon]: {
          [MagicPropertyType.PoisonDamage]: {x: 100, z: 7},
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
    class: GemClassType.Diamond,
    quality: GemQualityType.Chipped,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 1,
      },
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
    class: GemClassType.Diamond,
    quality: GemQualityType.Flawed,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
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
    class: GemClassType.Diamond,
    quality: GemQualityType.Regular,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 12,
      },
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
    class: GemClassType.Diamond,
    quality: GemQualityType.Flawless,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
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
    class: GemClassType.Diamond,
    quality: GemQualityType.Perfect,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 18,
      },
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
    class: GemClassType.Amethyst,
    quality: GemQualityType.Chipped,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 1,
      },
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
    class: GemClassType.Amethyst,
    quality: GemQualityType.Flawed,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
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
    class: GemClassType.Amethyst,
    quality: GemQualityType.Regular,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 12,
      },
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
    class: GemClassType.Amethyst,
    quality: GemQualityType.Flawless,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
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
    class: GemClassType.Amethyst,
    quality: GemQualityType.Perfect,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 18,
      },
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
    class: GemClassType.Skull,
    quality: GemQualityType.Chipped,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 1,
      },
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
    class: GemClassType.Skull,
    quality: GemQualityType.Flawed,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
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
    class: GemClassType.Skull,
    quality: GemQualityType.Regular,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 12,
      },
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
    class: GemClassType.Skull,
    quality: GemQualityType.Flawless,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
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
    class: GemClassType.Skull,
    quality: GemQualityType.Perfect,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 18,
      },
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

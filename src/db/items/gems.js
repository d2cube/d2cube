import {
  GemClassType,
  GemQualityType,
  ItemType,
  MagicPropertyType,
  SocketCategoryType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
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
          [MagicPropertyType.FireDamage]: {
            values: [3, 4],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Life]: {
            values: [10],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FireResist]: {
            values: [12],
          },
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
          [MagicPropertyType.FireDamage]: {
            values: [5, 8],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Life]: {
            values: [17],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FireResist]: {
            values: [16],
          },
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
          [MagicPropertyType.FireDamage]: {
            values: [8, 12],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Life]: {
            values: [24],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FireResist]: {
            values: [22],
          },
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
          [MagicPropertyType.FireDamage]: {
            values: [10, 16],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Life]: {
            values: [31],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FireResist]: {
            values: [28],
          },
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
          [MagicPropertyType.FireDamage]: {
            values: [15, 20],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Life]: {
            values: [38],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.FireResist]: {
            values: [40],
          },
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
          [MagicPropertyType.ColdDamage]: {
            values: [1, 3, 1],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Mana]: {
            values: [10],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ColdResist]: {
            values: [12],
          },
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
          [MagicPropertyType.ColdDamage]: {
            values: [3, 5, 1.4],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Mana]: {
            values: [17],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ColdResist]: {
            values: [16],
          },
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
          [MagicPropertyType.ColdDamage]: {
            values: [4, 7, 2],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Mana]: {
            values: [24],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ColdResist]: {
            values: [22],
          },
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
          [MagicPropertyType.ColdDamage]: {
            values: [6, 10, 2.4],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Mana]: {
            values: [31],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ColdResist]: {
            values: [28],
          },
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
          [MagicPropertyType.ColdDamage]: {
            values: [10, 14, 3],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Mana]: {
            values: [38],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.ColdResist]: {
            values: [40],
          },
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
          [MagicPropertyType.LightningDamage]: {
            values: [1, 8],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicFind]: {
            values: [9],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.LightningResist]: {
            values: [12],
          },
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
          [MagicPropertyType.LightningDamage]: {
            values: [1, 14],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicFind]: {
            values: [13],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.LightningResist]: {
            values: [16],
          },
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
          [MagicPropertyType.LightningDamage]: {
            values: [1, 22],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicFind]: {
            values: [16],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.LightningResist]: {
            values: [22],
          },
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
          [MagicPropertyType.LightningDamage]: {
            values: [1, 30],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicFind]: {
            values: [20],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.LightningResist]: {
            values: [28],
          },
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
          [MagicPropertyType.LightningDamage]: {
            values: [1, 40],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.MagicFind]: {
            values: [24],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.LightningResist]: {
            values: [40],
          },
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
          [MagicPropertyType.PoisonDamage]: {
            values: [10, 3],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Dexterity]: {
            values: [3],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.PoisonResist]: {
            values: [12],
          },
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
          [MagicPropertyType.PoisonDamage]: {
            values: [20, 4],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Dexterity]: {
            values: [4],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.PoisonResist]: {
            values: [16],
          },
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
          [MagicPropertyType.PoisonDamage]: {
            values: [40, 5],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Dexterity]: {
            values: [6],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.PoisonResist]: {
            values: [22],
          },
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
          [MagicPropertyType.PoisonDamage]: {
            values: [60, 6],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Dexterity]: {
            values: [8],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.PoisonResist]: {
            values: [28],
          },
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
          [MagicPropertyType.PoisonDamage]: {
            values: [100, 7],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Dexterity]: {
            values: [10],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.PoisonResist]: {
            values: [40],
          },
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
          [MagicPropertyType.DamageToUndead]: {
            values: [28],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AttackRating]: {
            values: [20],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AllResistances]: {
            values: [6],
          },
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
          [MagicPropertyType.DamageToUndead]: {
            values: [34],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AttackRating]: {
            values: [40],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AllResistances]: {
            values: [8],
          },
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
          [MagicPropertyType.DamageToUndead]: {
            values: [44],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AttackRating]: {
            values: [60],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AllResistances]: {
            values: [11],
          },
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
          [MagicPropertyType.DamageToUndead]: {
            values: [54],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AttackRating]: {
            values: [80],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AllResistances]: {
            values: [14],
          },
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
          [MagicPropertyType.DamageToUndead]: {
            values: [68],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.AttackRating]: {
            values: [100],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AllResistances]: {
            values: [19],
          },
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
          [MagicPropertyType.AttackRating]: {
            values: [40],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Strength]: {
            values: [3],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Defense]: {
            values: [8],
          },
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
          [MagicPropertyType.AttackRating]: {
            values: [60],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Strength]: {
            values: [4],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Defense]: {
            values: [12],
          },
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
          [MagicPropertyType.AttackRating]: {
            values: [80],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Strength]: {
            values: [6],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Defense]: {
            values: [18],
          },
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
          [MagicPropertyType.AttackRating]: {
            values: [100],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Strength]: {
            values: [8],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Defense]: {
            values: [24],
          },
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
          [MagicPropertyType.AttackRating]: {
            values: [150],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.Strength]: {
            values: [10],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.Defense]: {
            values: [30],
          },
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
          [MagicPropertyType.LifeStolenPerHit]: {
            values: [2],
          },
          [MagicPropertyType.ManaStolenPerHit]: {
            values: [1],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.RegenerateMana]: {
            values: [8],
          },
          [MagicPropertyType.ReplenishLife]: {
            values: [2],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AttackerTakesDamage]: {
            values: [4],
          },
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
          [MagicPropertyType.LifeStolenPerHit]: {
            values: [2],
          },
          [MagicPropertyType.ManaStolenPerHit]: {
            values: [2],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.RegenerateMana]: {
            values: [8],
          },
          [MagicPropertyType.ReplenishLife]: {
            values: [3],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AttackerTakesDamage]: {
            values: [8],
          },
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
          [MagicPropertyType.LifeStolenPerHit]: {
            values: [3],
          },
          [MagicPropertyType.ManaStolenPerHit]: {
            values: [2],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.RegenerateMana]: {
            values: [12],
          },
          [MagicPropertyType.ReplenishLife]: {
            values: [3],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AttackerTakesDamage]: {
            values: [12],
          },
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
          [MagicPropertyType.LifeStolenPerHit]: {
            values: [3],
          },
          [MagicPropertyType.ManaStolenPerHit]: {
            values: [3],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.RegenerateMana]: {
            values: [12],
          },
          [MagicPropertyType.ReplenishLife]: {
            values: [4],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AttackerTakesDamage]: {
            values: [16],
          },
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
          [MagicPropertyType.LifeStolenPerHit]: {
            values: [4],
          },
          [MagicPropertyType.ManaStolenPerHit]: {
            values: [3],
          },
        },
        [SocketCategoryType.Armor]: {
          [MagicPropertyType.RegenerateMana]: {
            values: [19],
          },
          [MagicPropertyType.ReplenishLife]: {
            values: [5],
          },
        },
        [SocketCategoryType.Shield]: {
          [MagicPropertyType.AttackerTakesDamage]: {
            values: [20],
          },
        },
      },
    },
  },
]);

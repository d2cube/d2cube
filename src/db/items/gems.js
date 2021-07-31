import {
  GemClassType,
  GemQualityType,
  ItemType,
  MagicPropertyType,
} from '../../enums/index.js';
import {mapItems} from '../utils/map-items.js';
import {mapItemClvl} from '../utils/map-item-clvl.js';
import {resolveItemStats} from '../utils/resolve-item-stats.js';
import ids from '../ids/index.js';

const items = {
  [ids.ChippedRuby]: {
    id: ids.ChippedRuby,
    name: 'Chipped Ruby',
    clvl: 1,
    class: GemClassType.Ruby,
    quality: GemQualityType.Chipped,
    stats: {
      weapons: {
        property: MagicPropertyType.FireDamage,
        values: [3, 4],
      },
      armor: {
        property: MagicPropertyType.Life,
        values: [10],
      },
      shields: {
        property: MagicPropertyType.FireResist,
        values: [12],
      },
    },
  },
  [ids.FlawedRuby]: {
    id: ids.FlawedRuby,
    name: 'Flawed Ruby',
    clvl: 5,
    class: GemClassType.Ruby,
    quality: GemQualityType.Flawed,
    stats: {
      weapons: {
        property: MagicPropertyType.FireDamage,
        values: [5, 8],
      },
      armor: {
        property: MagicPropertyType.Life,
        values: [17],
      },
      shields: {
        property: MagicPropertyType.FireResist,
        values: [16],
      },
    },
  },
  [ids.Ruby]: {
    id: ids.Ruby,
    name: 'Ruby',
    clvl: 12,
    class: GemClassType.Ruby,
    quality: GemQualityType.Regular,
    stats: {
      weapons: {
        property: MagicPropertyType.FireDamage,
        values: [8, 12],
      },
      armor: {
        property: MagicPropertyType.Life,
        values: [24],
      },
      shields: {
        property: MagicPropertyType.FireResist,
        values: [22],
      },
    },
  },
  [ids.FlawlessRuby]: {
    id: ids.FlawlessRuby,
    name: 'Flawless Ruby',
    clvl: 15,
    class: GemClassType.Ruby,
    quality: GemQualityType.Flawless,
    stats: {
      weapons: {
        property: MagicPropertyType.FireDamage,
        values: [10, 16],
      },
      armor: {
        property: MagicPropertyType.Life,
        values: [31],
      },
      shields: {
        property: MagicPropertyType.FireResist,
        values: [28],
      },
    },
  },
  [ids.PerfectRuby]: {
    id: ids.PerfectRuby,
    name: 'Perfect Ruby',
    clvl: 18,
    class: GemClassType.Ruby,
    quality: GemQualityType.Perfect,
    stats: {
      weapons: {
        property: MagicPropertyType.FireDamage,
        values: [15, 20],
      },
      armor: {
        property: MagicPropertyType.Life,
        values: [38],
      },
      shields: {
        property: MagicPropertyType.FireResist,
        values: [40],
      },
    },
  },
  [ids.ChippedSapphire]: {
    id: ids.ChippedSapphire,
    name: 'Chipped Sapphire',
    clvl: 1,
    class: GemClassType.Sapphire,
    quality: GemQualityType.Chipped,
    stats: {
      weapons: {
        property: MagicPropertyType.ColdDamage,
        values: [1, 3, 1],
      },
      armor: {
        property: MagicPropertyType.Mana,
        values: [10],
      },
      shields: {
        property: MagicPropertyType.ColdResist,
        values: [12],
      },
    },
  },
  [ids.FlawedSapphire]: {
    id: ids.FlawedSapphire,
    name: 'Flawed Sapphire',
    clvl: 5,
    class: GemClassType.Sapphire,
    quality: GemQualityType.Flawed,
    stats: {
      weapons: {
        property: MagicPropertyType.ColdDamage,
        values: [3, 5, 1.4],
      },
      armor: {
        property: MagicPropertyType.Mana,
        values: [17],
      },
      shields: {
        property: MagicPropertyType.ColdResist,
        values: [16],
      },
    },
  },
  [ids.Sapphire]: {
    id: ids.Sapphire,
    name: 'Sapphire',
    clvl: 12,
    class: GemClassType.Sapphire,
    quality: GemQualityType.Regular,
    stats: {
      weapons: {
        property: MagicPropertyType.ColdDamage,
        values: [4, 7, 2],
      },
      armor: {
        property: MagicPropertyType.Mana,
        values: [24],
      },
      shields: {
        property: MagicPropertyType.ColdResist,
        values: [22],
      },
    },
  },
  [ids.FlawlessSapphire]: {
    id: ids.FlawlessSapphire,
    name: 'Flawless Sapphire',
    clvl: 15,
    class: GemClassType.Sapphire,
    quality: GemQualityType.Flawless,
    stats: {
      weapons: {
        property: MagicPropertyType.ColdDamage,
        values: [6, 10, 2.4],
      },
      armor: {
        property: MagicPropertyType.Mana,
        values: [31],
      },
      shields: {
        property: MagicPropertyType.ColdResist,
        values: [28],
      },
    },
  },
  [ids.PerfectSapphire]: {
    id: ids.PerfectSapphire,
    name: 'Perfect Sapphire',
    clvl: 18,
    class: GemClassType.Sapphire,
    quality: GemQualityType.Perfect,
    stats: {
      weapons: {
        property: MagicPropertyType.ColdDamage,
        values: [10, 14, 3],
      },
      armor: {
        property: MagicPropertyType.Mana,
        values: [38],
      },
      shields: {
        property: MagicPropertyType.ColdResist,
        values: [40],
      },
    },
  },
  [ids.ChippedTopaz]: {
    id: ids.ChippedTopaz,
    name: 'Chipped Topaz',
    clvl: 1,
    class: GemClassType.Topaz,
    quality: GemQualityType.Chipped,
    stats: {
      weapons: {
        property: MagicPropertyType.LightningDamage,
        values: [1, 8],
      },
      armor: {
        property: MagicPropertyType.MagicFind,
        values: [9],
      },
      shields: {
        property: MagicPropertyType.LightningResist,
        values: [12],
      },
    },
  },
  [ids.FlawedTopaz]: {
    id: ids.FlawedTopaz,
    name: 'Flawed Topaz',
    clvl: 5,
    class: GemClassType.Topaz,
    quality: GemQualityType.Flawed,
    stats: {
      weapons: {
        property: MagicPropertyType.LightningDamage,
        values: [1, 14],
      },
      armor: {
        property: MagicPropertyType.MagicFind,
        values: [13],
      },
      shields: {
        property: MagicPropertyType.LightningResist,
        values: [16],
      },
    },
  },
  [ids.Topaz]: {
    id: ids.Topaz,
    name: 'Topaz',
    clvl: 12,
    class: GemClassType.Topaz,
    quality: GemQualityType.Regular,
    stats: {
      weapons: {
        property: MagicPropertyType.LightningDamage,
        values: [1, 22],
      },
      armor: {
        property: MagicPropertyType.MagicFind,
        values: [16],
      },
      shields: {
        property: MagicPropertyType.LightningResist,
        values: [22],
      },
    },
  },
  [ids.FlawlessTopaz]: {
    id: ids.FlawlessTopaz,
    name: 'Flawless Topaz',
    clvl: 15,
    class: GemClassType.Topaz,
    quality: GemQualityType.Flawless,
    stats: {
      weapons: {
        property: MagicPropertyType.LightningDamage,
        values: [1, 30],
      },
      armor: {
        property: MagicPropertyType.MagicFind,
        values: [20],
      },
      shields: {
        property: MagicPropertyType.LightningResist,
        values: [28],
      },
    },
  },
  [ids.PerfectTopaz]: {
    id: ids.PerfectTopaz,
    name: 'Perfect Topaz',
    clvl: 18,
    class: GemClassType.Topaz,
    quality: GemQualityType.Perfect,
    stats: {
      weapons: {
        property: MagicPropertyType.LightningDamage,
        values: [1, 40],
      },
      armor: {
        property: MagicPropertyType.MagicFind,
        values: [24],
      },
      shields: {
        property: MagicPropertyType.LightningResist,
        values: [40],
      },
    },
  },
  [ids.ChippedEmerald]: {
    id: ids.ChippedEmerald,
    name: 'Chipped Emerald',
    clvl: 1,
    class: GemClassType.Emerald,
    quality: GemQualityType.Chipped,
    stats: {
      weapons: {
        property: MagicPropertyType.PoisonDamage,
        values: [10, 3],
      },
      armor: {
        property: MagicPropertyType.Dexterity,
        values: [3],
      },
      shields: {
        property: MagicPropertyType.PoisonResist,
        values: [12],
      },
    },
  },
  [ids.FlawedEmerald]: {
    id: ids.FlawedEmerald,
    name: 'Flawed Emerald',
    clvl: 5,
    class: GemClassType.Emerald,
    quality: GemQualityType.Flawed,
    stats: {
      weapons: {
        property: MagicPropertyType.PoisonDamage,
        values: [20, 4],
      },
      armor: {
        property: MagicPropertyType.Dexterity,
        values: [4],
      },
      shields: {
        property: MagicPropertyType.PoisonResist,
        values: [16],
      },
    },
  },
  [ids.Emerald]: {
    id: ids.Emerald,
    name: 'Emerald',
    clvl: 12,
    class: GemClassType.Emerald,
    quality: GemQualityType.Regular,
    stats: {
      weapons: {
        property: MagicPropertyType.PoisonDamage,
        values: [40, 5],
      },
      armor: {
        property: MagicPropertyType.Dexterity,
        values: [6],
      },
      shields: {
        property: MagicPropertyType.PoisonResist,
        values: [22],
      },
    },
  },
  [ids.FlawlessEmerald]: {
    id: ids.FlawlessEmerald,
    name: 'Flawless Emerald',
    clvl: 15,
    class: GemClassType.Emerald,
    quality: GemQualityType.Flawless,
    stats: {
      weapons: {
        property: MagicPropertyType.PoisonDamage,
        values: [60, 6],
      },
      armor: {
        property: MagicPropertyType.Dexterity,
        values: [8],
      },
      shields: {
        property: MagicPropertyType.PoisonResist,
        values: [28],
      },
    },
  },
  [ids.PerfectEmerald]: {
    id: ids.PerfectEmerald,
    name: 'Perfect Emerald',
    clvl: 18,
    class: GemClassType.Emerald,
    quality: GemQualityType.Perfect,
    stats: {
      weapons: {
        property: MagicPropertyType.PoisonDamage,
        values: [100, 7],
      },
      armor: {
        property: MagicPropertyType.Dexterity,
        values: [10],
      },
      shields: {
        property: MagicPropertyType.PoisonResist,
        values: [40],
      },
    },
  },
  [ids.ChippedDiamond]: {
    id: ids.ChippedDiamond,
    name: 'Chipped Diamond',
    clvl: 1,
    class: GemClassType.Diamond,
    quality: GemQualityType.Chipped,
    stats: {
      weapons: {
        property: MagicPropertyType.DamageToUndead,
        values: [28],
      },
      armor: {
        property: MagicPropertyType.AttackRating,
        values: [20],
      },
      shields: {
        property: MagicPropertyType.AllResistances,
        values: [6],
      },
    },
  },
  [ids.FlawedDiamond]: {
    id: ids.FlawedDiamond,
    name: 'Flawed Diamond',
    clvl: 5,
    class: GemClassType.Diamond,
    quality: GemQualityType.Flawed,
    stats: {
      weapons: {
        property: MagicPropertyType.DamageToUndead,
        values: [34],
      },
      armor: {
        property: MagicPropertyType.AttackRating,
        values: [40],
      },
      shields: {
        property: MagicPropertyType.AllResistances,
        values: [8],
      },
    },
  },
  [ids.Diamond]: {
    id: ids.Diamond,
    name: 'Diamond',
    clvl: 12,
    class: GemClassType.Diamond,
    quality: GemQualityType.Regular,
    stats: {
      weapons: {
        property: MagicPropertyType.DamageToUndead,
        values: [44],
      },
      armor: {
        property: MagicPropertyType.AttackRating,
        values: [60],
      },
      shields: {
        property: MagicPropertyType.AllResistances,
        values: [11],
      },
    },
  },
  [ids.FlawlessDiamond]: {
    id: ids.FlawlessDiamond,
    name: 'Flawless Diamond',
    clvl: 15,
    class: GemClassType.Diamond,
    quality: GemQualityType.Flawless,
    stats: {
      weapons: {
        property: MagicPropertyType.DamageToUndead,
        values: [54],
      },
      armor: {
        property: MagicPropertyType.AttackRating,
        values: [80],
      },
      shields: {
        property: MagicPropertyType.AllResistances,
        values: [14],
      },
    },
  },
  [ids.PerfectDiamond]: {
    id: ids.PerfectDiamond,
    name: 'Perfect Diamond',
    clvl: 18,
    class: GemClassType.Diamond,
    quality: GemQualityType.Perfect,
    stats: {
      weapons: {
        property: MagicPropertyType.DamageToUndead,
        values: [68],
      },
      armor: {
        property: MagicPropertyType.AttackRating,
        values: [100],
      },
      shields: {
        property: MagicPropertyType.AllResistances,
        values: [19],
      },
    },
  },
  [ids.ChippedAmethyst]: {
    id: ids.ChippedAmethyst,
    name: 'Chipped Amethyst',
    clvl: 1,
    class: GemClassType.Amethyst,
    quality: GemQualityType.Chipped,
    stats: {
      weapons: {
        property: MagicPropertyType.AttackRating,
        values: [40],
      },
      armor: {
        property: MagicPropertyType.Strength,
        values: [3],
      },
      shields: {
        property: MagicPropertyType.Defense,
        values: [8],
      },
    },
  },
  [ids.FlawedAmethyst]: {
    id: ids.FlawedAmethyst,
    name: 'Flawed Amethyst',
    clvl: 5,
    class: GemClassType.Amethyst,
    quality: GemQualityType.Flawed,
    stats: {
      weapons: {
        property: MagicPropertyType.AttackRating,
        values: [60],
      },
      armor: {
        property: MagicPropertyType.Strength,
        values: [4],
      },
      shields: {
        property: MagicPropertyType.Defense,
        values: [12],
      },
    },
  },
  [ids.Amethyst]: {
    id: ids.Amethyst,
    name: 'Amethyst',
    clvl: 12,
    class: GemClassType.Amethyst,
    quality: GemQualityType.Regular,
    stats: {
      weapons: {
        property: MagicPropertyType.AttackRating,
        values: [80],
      },
      armor: {
        property: MagicPropertyType.Strength,
        values: [6],
      },
      shields: {
        property: MagicPropertyType.Defense,
        values: [18],
      },
    },
  },
  [ids.FlawlessAmethyst]: {
    id: ids.FlawlessAmethyst,
    name: 'Flawless Amethyst',
    clvl: 15,
    class: GemClassType.Amethyst,
    quality: GemQualityType.Flawless,
    stats: {
      weapons: {
        property: MagicPropertyType.AttackRating,
        values: [100],
      },
      armor: {
        property: MagicPropertyType.Strength,
        values: [8],
      },
      shields: {
        property: MagicPropertyType.Defense,
        values: [24],
      },
    },
  },
  [ids.PerfectAmethyst]: {
    id: ids.PerfectAmethyst,
    name: 'Perfect Amethyst',
    clvl: 18,
    class: GemClassType.Amethyst,
    quality: GemQualityType.Perfect,
    stats: {
      weapons: {
        property: MagicPropertyType.AttackRating,
        values: [150],
      },
      armor: {
        property: MagicPropertyType.Strength,
        values: [10],
      },
      shields: {
        property: MagicPropertyType.Defense,
        values: [30],
      },
    },
  },
  [ids.ChippedSkull]: {
    id: ids.ChippedSkull,
    name: 'Chipped Skull',
    clvl: 1,
    class: GemClassType.Skull,
    quality: GemQualityType.Chipped,
    stats: {
      weapons: [
        {
          property: MagicPropertyType.LifeStolenPerHit,
          values: [2],
        },
        {
          property: MagicPropertyType.ManaStolenPerHit,
          values: [1],
        },
      ],
      armor: [
        {
          property: MagicPropertyType.RegenerateMana,
          values: [8],
        },
        {
          property: MagicPropertyType.ReplenishLife,
          values: [2],
        },
      ],
      shields: {
        property: MagicPropertyType.AttackerTakesDamage,
        values: [4],
      },
    },
  },
  [ids.FlawedSkull]: {
    id: ids.FlawedSkull,
    name: 'Flawed Skull',
    clvl: 5,
    class: GemClassType.Skull,
    quality: GemQualityType.Flawed,
    stats: {
      weapons: [
        {
          property: MagicPropertyType.LifeStolenPerHit,
          values: [2],
        },
        {
          property: MagicPropertyType.ManaStolenPerHit,
          values: [2],
        },
      ],
      armor: [
        {
          property: MagicPropertyType.RegenerateMana,
          values: [8],
        },
        {
          property: MagicPropertyType.ReplenishLife,
          values: [3],
        },
      ],
      shields: {
        property: MagicPropertyType.AttackerTakesDamage,
        values: [8],
      },
    },
  },
  [ids.Skull]: {
    id: ids.Skull,
    name: 'Skull',
    clvl: 12,
    class: GemClassType.Skull,
    quality: GemQualityType.Regular,
    stats: {
      weapons: [
        {
          property: MagicPropertyType.LifeStolenPerHit,
          values: [3],
        },
        {
          property: MagicPropertyType.ManaStolenPerHit,
          values: [2],
        },
      ],
      armor: [
        {
          property: MagicPropertyType.RegenerateMana,
          values: [12],
        },
        {
          property: MagicPropertyType.ReplenishLife,
          values: [3],
        },
      ],
      shields: {
        property: MagicPropertyType.AttackerTakesDamage,
        values: [12],
      },
    },
  },
  [ids.FlawlessSkull]: {
    id: ids.FlawlessSkull,
    name: 'Flawless Skull',
    clvl: 15,
    class: GemClassType.Skull,
    quality: GemQualityType.Flawless,
    stats: {
      weapons: [
        {
          property: MagicPropertyType.LifeStolenPerHit,
          values: [3],
        },
        {
          property: MagicPropertyType.ManaStolenPerHit,
          values: [3],
        },
      ],
      armor: [
        {
          property: MagicPropertyType.RegenerateMana,
          values: [12],
        },
        {
          property: MagicPropertyType.ReplenishLife,
          values: [4],
        },
      ],
      shields: {
        property: MagicPropertyType.AttackerTakesDamage,
        values: [16],
      },
    },
  },
  [ids.PerfectSkull]: {
    id: ids.PerfectSkull,
    name: 'Perfect Skull',
    clvl: 18,
    class: GemClassType.Skull,
    quality: GemQualityType.Perfect,
    stats: {
      weapons: [
        {
          property: MagicPropertyType.LifeStolenPerHit,
          values: [4],
        },
        {
          property: MagicPropertyType.ManaStolenPerHit,
          values: [3],
        },
      ],
      armor: [
        {
          property: MagicPropertyType.RegenerateMana,
          values: [19],
        },
        {
          property: MagicPropertyType.ReplenishLife,
          values: [5],
        },
      ],
      shields: {
        property: MagicPropertyType.AttackerTakesDamage,
        values: [20],
      },
    },
  },
};

export default mapItems({
  size: [1, 1],
  type: ItemType.Gem,
  mapDescription: (item) => [
    [{text: item.name}, {text: 'Can be inserted into socked items'}],
    [
      {text: `Weapons: ${resolveItemStats(item.stats.weapons, ', ')}`},
      {text: `Armor: ${resolveItemStats(item.stats.armor, ', ')}`},
      {text: `Helms: ${resolveItemStats(item.stats.armor, ', ')}`},
      {text: `Shields: ${resolveItemStats(item.stats.shields, ', ')}`},
    ],
    [mapItemClvl(item)],
  ],
})(items);

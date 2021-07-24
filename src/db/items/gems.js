import {
  GemCategoryType,
  GemQualityType,
  ItemType,
  PropertyType,
} from '../enums/index.js';
import {mapItemProps} from '../utils/map-item-props.js';
import ids from '../ids/index.js';

const items = {
  [ids.ChippedRuby]: {
    id: ids.ChippedRuby,
    name: 'Chipped Ruby',
    clvl: 1,
    category: GemCategoryType.Ruby,
    quality: GemQualityType.Chipped,
    stats: {
      weapons: {
        property: PropertyType.FireDamage,
        values: [3, 4],
      },
      armor: {
        property: PropertyType.Life,
        values: [10],
      },
      shields: {
        property: PropertyType.FireResist,
        values: [12],
      },
    },
  },
  [ids.FlawedRuby]: {
    id: ids.FlawedRuby,
    name: 'Flawed Ruby',
    clvl: 5,
    category: GemCategoryType.Ruby,
    quality: GemQualityType.Flawed,
    stats: {
      weapons: {
        property: PropertyType.FireDamage,
        values: [5, 8],
      },
      armor: {
        property: PropertyType.Life,
        values: [17],
      },
      shields: {
        property: PropertyType.FireResist,
        values: [16],
      },
    },
  },
  [ids.Ruby]: {
    id: ids.Ruby,
    name: 'Ruby',
    clvl: 12,
    category: GemCategoryType.Ruby,
    quality: GemQualityType.Regular,
    stats: {
      weapons: {
        property: PropertyType.FireDamage,
        values: [8, 12],
      },
      armor: {
        property: PropertyType.Life,
        values: [24],
      },
      shields: {
        property: PropertyType.FireResist,
        values: [22],
      },
    },
  },
  [ids.FlawlessRuby]: {
    id: ids.FlawlessRuby,
    name: 'Flawless Ruby',
    clvl: 15,
    category: GemCategoryType.Ruby,
    quality: GemQualityType.Flawless,
    stats: {
      weapons: {
        property: PropertyType.FireDamage,
        values: [10, 16],
      },
      armor: {
        property: PropertyType.Life,
        values: [31],
      },
      shields: {
        property: PropertyType.FireResist,
        values: [28],
      },
    },
  },
  [ids.PerfectRuby]: {
    id: ids.PerfectRuby,
    name: 'Perfect Ruby',
    clvl: 18,
    category: GemCategoryType.Ruby,
    quality: GemQualityType.Perfect,
    stats: {
      weapons: {
        property: PropertyType.FireDamage,
        values: [15, 20],
      },
      armor: {
        property: PropertyType.Life,
        values: [38],
      },
      shields: {
        property: PropertyType.FireResist,
        values: [40],
      },
    },
  },
  [ids.ChippedSapphire]: {
    id: ids.ChippedSapphire,
    name: 'Chipped Sapphire',
    clvl: 1,
    category: GemCategoryType.Sapphire,
    quality: GemQualityType.Chipped,
    stats: {
      weapons: {
        property: PropertyType.ColdDamage,
        values: [1, 3, 1],
      },
      armor: {
        property: PropertyType.Mana,
        values: [10],
      },
      shields: {
        property: PropertyType.ColdResist,
        values: [12],
      },
    },
  },
  [ids.FlawedSapphire]: {
    id: ids.FlawedSapphire,
    name: 'Flawed Sapphire',
    clvl: 5,
    category: GemCategoryType.Sapphire,
    quality: GemQualityType.Flawed,
    stats: {
      weapons: {
        property: PropertyType.ColdDamage,
        values: [3, 5, 1.4],
      },
      armor: {
        property: PropertyType.Mana,
        values: [17],
      },
      shields: {
        property: PropertyType.ColdResist,
        values: [16],
      },
    },
  },
  [ids.Sapphire]: {
    id: ids.Sapphire,
    name: 'Sapphire',
    clvl: 12,
    category: GemCategoryType.Sapphire,
    quality: GemQualityType.Regular,
    stats: {
      weapons: {
        property: PropertyType.ColdDamage,
        values: [4, 7, 2],
      },
      armor: {
        property: PropertyType.Mana,
        values: [24],
      },
      shields: {
        property: PropertyType.ColdResist,
        values: [22],
      },
    },
  },
  [ids.FlawlessSapphire]: {
    id: ids.FlawlessSapphire,
    name: 'Flawless Sapphire',
    clvl: 15,
    category: GemCategoryType.Sapphire,
    quality: GemQualityType.Flawless,
    stats: {
      weapons: {
        property: PropertyType.ColdDamage,
        values: [6, 10, 2.4],
      },
      armor: {
        property: PropertyType.Mana,
        values: [31],
      },
      shields: {
        property: PropertyType.ColdResist,
        values: [28],
      },
    },
  },
  [ids.PerfectSapphire]: {
    id: ids.PerfectSapphire,
    name: 'Perfect Sapphire',
    clvl: 18,
    category: GemCategoryType.Sapphire,
    quality: GemQualityType.Perfect,
    stats: {
      weapons: {
        property: PropertyType.ColdDamage,
        values: [10, 14, 3],
      },
      armor: {
        property: PropertyType.Mana,
        values: [38],
      },
      shields: {
        property: PropertyType.ColdResist,
        values: [40],
      },
    },
  },
  [ids.ChippedTopaz]: {
    id: ids.ChippedTopaz,
    name: 'Chipped Topaz',
    clvl: 1,
    category: GemCategoryType.Topaz,
    quality: GemQualityType.Chipped,
    stats: {
      weapons: {
        property: PropertyType.LightningDamage,
        values: [1, 8],
      },
      armor: {
        property: PropertyType.MagicFind,
        values: [9],
      },
      shields: {
        property: PropertyType.LightningResist,
        values: [12],
      },
    },
  },
  [ids.FlawedTopaz]: {
    id: ids.FlawedTopaz,
    name: 'Flawed Topaz',
    clvl: 5,
    category: GemCategoryType.Topaz,
    quality: GemQualityType.Flawed,
    stats: {
      weapons: {
        property: PropertyType.LightningDamage,
        values: [1, 14],
      },
      armor: {
        property: PropertyType.MagicFind,
        values: [13],
      },
      shields: {
        property: PropertyType.LightningResist,
        values: [16],
      },
    },
  },
  [ids.Topaz]: {
    id: ids.Topaz,
    name: 'Topaz',
    clvl: 12,
    category: GemCategoryType.Topaz,
    quality: GemQualityType.Regular,
    stats: {
      weapons: {
        property: PropertyType.LightningDamage,
        values: [1, 22],
      },
      armor: {
        property: PropertyType.MagicFind,
        values: [16],
      },
      shields: {
        property: PropertyType.LightningResist,
        values: [22],
      },
    },
  },
  [ids.FlawlessTopaz]: {
    id: ids.FlawlessTopaz,
    name: 'Flawless Topaz',
    clvl: 15,
    category: GemCategoryType.Topaz,
    quality: GemQualityType.Flawless,
    stats: {
      weapons: {
        property: PropertyType.LightningDamage,
        values: [1, 30],
      },
      armor: {
        property: PropertyType.MagicFind,
        values: [20],
      },
      shields: {
        property: PropertyType.LightningResist,
        values: [28],
      },
    },
  },
  [ids.PerfectTopaz]: {
    id: ids.PerfectTopaz,
    name: 'Perfect Topaz',
    clvl: 18,
    category: GemCategoryType.Topaz,
    quality: GemQualityType.Perfect,
    stats: {
      weapons: {
        property: PropertyType.LightningDamage,
        values: [1, 40],
      },
      armor: {
        property: PropertyType.MagicFind,
        values: [24],
      },
      shields: {
        property: PropertyType.LightningResist,
        values: [40],
      },
    },
  },
  [ids.ChippedEmerald]: {
    id: ids.ChippedEmerald,
    name: 'Chipped Emerald',
    clvl: 1,
    category: GemCategoryType.Emerald,
    quality: GemQualityType.Chipped,
    stats: {
      weapons: {
        property: PropertyType.PoisonDamage,
        values: [10, 3],
      },
      armor: {
        property: PropertyType.Dexterity,
        values: [3],
      },
      shields: {
        property: PropertyType.PoisonResist,
        values: [12],
      },
    },
  },
  [ids.FlawedEmerald]: {
    id: ids.FlawedEmerald,
    name: 'Flawed Emerald',
    clvl: 5,
    category: GemCategoryType.Emerald,
    quality: GemQualityType.Flawed,
    stats: {
      weapons: {
        property: PropertyType.PoisonDamage,
        values: [20, 4],
      },
      armor: {
        property: PropertyType.Dexterity,
        values: [4],
      },
      shields: {
        property: PropertyType.PoisonResist,
        values: [16],
      },
    },
  },
  [ids.Emerald]: {
    id: ids.Emerald,
    name: 'Emerald',
    clvl: 12,
    category: GemCategoryType.Emerald,
    quality: GemQualityType.Regular,
    stats: {
      weapons: {
        property: PropertyType.PoisonDamage,
        values: [40, 5],
      },
      armor: {
        property: PropertyType.Dexterity,
        values: [6],
      },
      shields: {
        property: PropertyType.PoisonResist,
        values: [22],
      },
    },
  },
  [ids.FlawlessEmerald]: {
    id: ids.FlawlessEmerald,
    name: 'Flawless Emerald',
    clvl: 15,
    category: GemCategoryType.Emerald,
    quality: GemQualityType.Flawless,
    stats: {
      weapons: {
        property: PropertyType.PoisonDamage,
        values: [60, 6],
      },
      armor: {
        property: PropertyType.Dexterity,
        values: [8],
      },
      shields: {
        property: PropertyType.PoisonResist,
        values: [28],
      },
    },
  },
  [ids.PerfectEmerald]: {
    id: ids.PerfectEmerald,
    name: 'Perfect Emerald',
    clvl: 18,
    category: GemCategoryType.Emerald,
    quality: GemQualityType.Perfect,
    stats: {
      weapons: {
        property: PropertyType.PoisonDamage,
        values: [100, 7],
      },
      armor: {
        property: PropertyType.Dexterity,
        values: [10],
      },
      shields: {
        property: PropertyType.PoisonResist,
        values: [40],
      },
    },
  },
  [ids.ChippedDiamond]: {
    id: ids.ChippedDiamond,
    name: 'Chipped Diamond',
    clvl: 1,
    category: GemCategoryType.Diamond,
    quality: GemQualityType.Chipped,
    stats: {
      weapons: {
        property: PropertyType.DamageToUndead,
        values: [28],
      },
      armor: {
        property: PropertyType.AttackRating,
        values: [20],
      },
      shields: {
        property: PropertyType.AllResistances,
        values: [6],
      },
    },
  },
  [ids.FlawedDiamond]: {
    id: ids.FlawedDiamond,
    name: 'Flawed Diamond',
    clvl: 5,
    category: GemCategoryType.Diamond,
    quality: GemQualityType.Flawed,
    stats: {
      weapons: {
        property: PropertyType.DamageToUndead,
        values: [34],
      },
      armor: {
        property: PropertyType.AttackRating,
        values: [40],
      },
      shields: {
        property: PropertyType.AllResistances,
        values: [8],
      },
    },
  },
  [ids.Diamond]: {
    id: ids.Diamond,
    name: 'Diamond',
    clvl: 12,
    category: GemCategoryType.Diamond,
    quality: GemQualityType.Regular,
    stats: {
      weapons: {
        property: PropertyType.DamageToUndead,
        values: [44],
      },
      armor: {
        property: PropertyType.AttackRating,
        values: [60],
      },
      shields: {
        property: PropertyType.AllResistances,
        values: [11],
      },
    },
  },
  [ids.FlawlessDiamond]: {
    id: ids.FlawlessDiamond,
    name: 'Flawless Diamond',
    clvl: 15,
    category: GemCategoryType.Diamond,
    quality: GemQualityType.Flawless,
    stats: {
      weapons: {
        property: PropertyType.DamageToUndead,
        values: [54],
      },
      armor: {
        property: PropertyType.AttackRating,
        values: [80],
      },
      shields: {
        property: PropertyType.AllResistances,
        values: [14],
      },
    },
  },
  [ids.PerfectDiamond]: {
    id: ids.PerfectDiamond,
    name: 'Perfect Diamond',
    clvl: 18,
    category: GemCategoryType.Diamond,
    quality: GemQualityType.Perfect,
    stats: {
      weapons: {
        property: PropertyType.DamageToUndead,
        values: [68],
      },
      armor: {
        property: PropertyType.AttackRating,
        values: [100],
      },
      shields: {
        property: PropertyType.AllResistances,
        values: [19],
      },
    },
  },
  [ids.ChippedAmethyst]: {
    id: ids.ChippedAmethyst,
    name: 'Chipped Amethyst',
    clvl: 1,
    category: GemCategoryType.Amethyst,
    quality: GemQualityType.Chipped,
    stats: {
      weapons: {
        property: PropertyType.AttackRating,
        values: [40],
      },
      armor: {
        property: PropertyType.Strength,
        values: [3],
      },
      shields: {
        property: PropertyType.Defense,
        values: [8],
      },
    },
  },
  [ids.FlawedAmethyst]: {
    id: ids.FlawedAmethyst,
    name: 'Flawed Amethyst',
    clvl: 5,
    category: GemCategoryType.Amethyst,
    quality: GemQualityType.Flawed,
    stats: {
      weapons: {
        property: PropertyType.AttackRating,
        values: [60],
      },
      armor: {
        property: PropertyType.Strength,
        values: [4],
      },
      shields: {
        property: PropertyType.Defense,
        values: [12],
      },
    },
  },
  [ids.Amethyst]: {
    id: ids.Amethyst,
    name: 'Amethyst',
    clvl: 12,
    category: GemCategoryType.Amethyst,
    quality: GemQualityType.Regular,
    stats: {
      weapons: {
        property: PropertyType.AttackRating,
        values: [80],
      },
      armor: {
        property: PropertyType.Strength,
        values: [6],
      },
      shields: {
        property: PropertyType.Defense,
        values: [18],
      },
    },
  },
  [ids.FlawlessAmethyst]: {
    id: ids.FlawlessAmethyst,
    name: 'Flawless Amethyst',
    clvl: 15,
    category: GemCategoryType.Amethyst,
    quality: GemQualityType.Flawless,
    stats: {
      weapons: {
        property: PropertyType.AttackRating,
        values: [100],
      },
      armor: {
        property: PropertyType.Strength,
        values: [8],
      },
      shields: {
        property: PropertyType.Defense,
        values: [24],
      },
    },
  },
  [ids.PerfectAmethyst]: {
    id: ids.PerfectAmethyst,
    name: 'Perfect Amethyst',
    clvl: 18,
    category: GemCategoryType.Amethyst,
    quality: GemQualityType.Perfect,
    stats: {
      weapons: {
        property: PropertyType.AttackRating,
        values: [150],
      },
      armor: {
        property: PropertyType.Strength,
        values: [10],
      },
      shields: {
        property: PropertyType.Defense,
        values: [30],
      },
    },
  },
  [ids.ChippedSkull]: {
    id: ids.ChippedSkull,
    name: 'Chipped Skull',
    clvl: 1,
    category: GemCategoryType.Skull,
    quality: GemQualityType.Chipped,
    stats: {
      weapons: [
        {
          property: PropertyType.LifeStolenPerHit,
          values: [2],
        },
        {
          property: PropertyType.ManaStolenPerHit,
          values: [1],
        },
      ],
      armor: [
        {
          property: PropertyType.RegenerateMana,
          values: [8],
        },
        {
          property: PropertyType.ReplenishLife,
          values: [2],
        },
      ],
      shields: {
        property: PropertyType.AttackerTakesDamage,
        values: [4],
      },
    },
  },
  [ids.FlawedSkull]: {
    id: ids.FlawedSkull,
    name: 'Flawed Skull',
    clvl: 5,
    category: GemCategoryType.Skull,
    quality: GemQualityType.Flawed,
    stats: {
      weapons: [
        {
          property: PropertyType.LifeStolenPerHit,
          values: [2],
        },
        {
          property: PropertyType.ManaStolenPerHit,
          values: [2],
        },
      ],
      armor: [
        {
          property: PropertyType.RegenerateMana,
          values: [8],
        },
        {
          property: PropertyType.ReplenishLife,
          values: [3],
        },
      ],
      shields: {
        property: PropertyType.AttackerTakesDamage,
        values: [8],
      },
    },
  },
  [ids.Skull]: {
    id: ids.Skull,
    name: 'Skull',
    clvl: 12,
    category: GemCategoryType.Skull,
    quality: GemQualityType.Regular,
    stats: {
      weapons: [
        {
          property: PropertyType.LifeStolenPerHit,
          values: [3],
        },
        {
          property: PropertyType.ManaStolenPerHit,
          values: [2],
        },
      ],
      armor: [
        {
          property: PropertyType.RegenerateMana,
          values: [12],
        },
        {
          property: PropertyType.ReplenishLife,
          values: [3],
        },
      ],
      shields: {
        property: PropertyType.AttackerTakesDamage,
        values: [12],
      },
    },
  },
  [ids.FlawlessSkull]: {
    id: ids.FlawlessSkull,
    name: 'Flawless Skull',
    clvl: 15,
    category: GemCategoryType.Skull,
    quality: GemQualityType.Flawless,
    stats: {
      weapons: [
        {
          property: PropertyType.LifeStolenPerHit,
          values: [3],
        },
        {
          property: PropertyType.ManaStolenPerHit,
          values: [3],
        },
      ],
      armor: [
        {
          property: PropertyType.RegenerateMana,
          values: [12],
        },
        {
          property: PropertyType.ReplenishLife,
          values: [4],
        },
      ],
      shields: {
        property: PropertyType.AttackerTakesDamage,
        values: [16],
      },
    },
  },
  [ids.PerfectSkull]: {
    id: ids.PerfectSkull,
    name: 'Perfect Skull',
    clvl: 18,
    category: GemCategoryType.Skull,
    quality: GemQualityType.Perfect,
    stats: {
      weapons: [
        {
          property: PropertyType.LifeStolenPerHit,
          values: [4],
        },
        {
          property: PropertyType.ManaStolenPerHit,
          values: [3],
        },
      ],
      armor: [
        {
          property: PropertyType.RegenerateMana,
          values: [19],
        },
        {
          property: PropertyType.ReplenishLife,
          values: [5],
        },
      ],
      shields: {
        property: PropertyType.AttackerTakesDamage,
        values: [20],
      },
    },
  },
};

export default mapItemProps({
  size: [1, 1],
  type: ItemType.Gem,
  mapDescription: (item) => [
    [{text: item.name}, {text: 'Can be inserted into socked items'}],
    [
      {text: 'Weapons: {{}}', stats: item.stats.weapons},
      {text: 'Armor: {{}}', stats: item.stats.armor},
      {text: 'Helms: {{}}', stats: item.stats.armor},
      {text: 'Shields: {{}}', stats: item.stats.shields},
    ],
    [{text: `Required Level: ${item.clvl || 'None'}`}],
  ],
})(items);

import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  class: WeaponClassType.Bow,
  type: ItemType.Bow,
})([
  {
    id: ids.ShortBow,
    name: 'Short Bow',
    tier: ItemTierType.Normal,
    qlvl: 1,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [1, 4],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [5],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [15],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.HuntersBow,
    name: "Hunter's Bow",
    tier: ItemTierType.Normal,
    qlvl: 5,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [2, 6],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.LongBow,
    name: 'Long Bow',
    tier: ItemTierType.Normal,
    qlvl: 8,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [3, 10],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [22],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [19],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.CompositeBow,
    name: 'Composite Bow',
    tier: ItemTierType.Normal,
    qlvl: 12,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [4, 8],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.ShortBattleBow,
    name: 'Short Battle Bow',
    tier: ItemTierType.Normal,
    qlvl: 18,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [5, 11],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [30],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [40],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.LongBattleBow,
    name: 'Long Battle Bow',
    tier: ItemTierType.Normal,
    qlvl: 23,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [3, 18],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [40],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.ShortWarBow,
    name: 'Short War Bow',
    tier: ItemTierType.Normal,
    qlvl: 27,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [6, 14],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [35],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.LongWarBow,
    name: 'Long War Bow',
    tier: ItemTierType.Normal,
    qlvl: 31,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [3, 23],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [50],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [65],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.EdgeBow,
    name: 'Edge Bow',
    tier: ItemTierType.Exceptional,
    clvl: 18,
    qlvl: 30,
    size: [3, 2],
    baseId: ids.ShortBow,
    imageId: ids.ShortBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [6, 19],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [5],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [43],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.RazorBow,
    name: 'Razor Bow',
    tier: ItemTierType.Exceptional,
    clvl: 21,
    qlvl: 33,
    size: [3, 2],
    baseId: ids.HuntersBow,
    imageId: ids.HuntersBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [8, 22],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [62],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.CedarBow,
    name: 'Cedar Bow',
    tier: ItemTierType.Exceptional,
    clvl: 23,
    qlvl: 35,
    size: [4, 2],
    baseId: ids.LongBow,
    imageId: ids.LongBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [10, 29],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [53],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [48],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.DoubleBow,
    name: 'Double Bow',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 39,
    size: [3, 2],
    baseId: ids.CompositeBow,
    imageId: ids.CompositeBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [11, 26],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [58],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [73],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.ShortSiegeBow,
    name: 'Short Siege Bow',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 43,
    size: [3, 2],
    baseId: ids.ShortBattleBow,
    imageId: ids.ShortBattleBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [13, 30],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [65],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [80],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.LargeSiegeBow,
    name: 'Large Siege Bow',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 46,
    size: [4, 2],
    baseId: ids.LongBattleBow,
    imageId: ids.LongBattleBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [10, 42],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [80],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [95],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.RuneBow,
    name: 'Rune Bow',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 49,
    size: [3, 2],
    baseId: ids.ShortWarBow,
    imageId: ids.ShortWarBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [14, 35],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [73],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [103],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.GothicBow,
    name: 'Gothic Bow',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 52,
    size: [4, 2],
    baseId: ids.LongWarBow,
    imageId: ids.LongWarBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [10, 50],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [95],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [118],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.SpiderBow,
    name: 'Spider Bow',
    tier: ItemTierType.Elite,
    clvl: 41,
    qlvl: 55,
    size: [3, 2],
    baseId: ids.ShortBow,
    imageId: ids.ShortBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [23, 50],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [5],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [64],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [143],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.BladeBow,
    name: 'Blade Bow',
    tier: ItemTierType.Elite,
    clvl: 45,
    qlvl: 60,
    size: [3, 2],
    baseId: ids.HuntersBow,
    imageId: ids.HuntersBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [21, 41],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [76],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [119],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.ShadowBow,
    name: 'Shadow Bow',
    tier: ItemTierType.Elite,
    clvl: 47,
    qlvl: 63,
    size: [4, 2],
    baseId: ids.LongBow,
    imageId: ids.LongBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [15, 59],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [52],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [188],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.GreatBow,
    name: 'Great Bow',
    tier: ItemTierType.Elite,
    clvl: 51,
    qlvl: 68,
    size: [3, 2],
    baseId: ids.CompositeBow,
    imageId: ids.CompositeBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [12, 52],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [121],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [107],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.DiamondBow,
    name: 'Diamond Bow',
    tier: ItemTierType.Elite,
    clvl: 54,
    qlvl: 72,
    size: [3, 2],
    baseId: ids.ShortBattleBow,
    imageId: ids.ShortBattleBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [33, 40],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [89],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [132],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.CrusaderBow,
    name: 'Crusader Bow',
    tier: ItemTierType.Elite,
    clvl: 57,
    qlvl: 77,
    size: [4, 2],
    baseId: ids.LongBattleBow,
    imageId: ids.LongBattleBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [15, 63],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [97],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [121],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.WardBow,
    name: 'Ward Bow',
    tier: ItemTierType.Elite,
    clvl: 60,
    qlvl: 80,
    size: [3, 2],
    baseId: ids.ShortWarBow,
    imageId: ids.ShortWarBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [20, 53],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [72],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [146],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.HydraBow,
    name: 'Hydra Bow',
    tier: ItemTierType.Elite,
    clvl: 63,
    qlvl: 85,
    size: [4, 2],
    baseId: ids.LongWarBow,
    imageId: ids.LongWarBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [10, 68],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [134],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [167],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
]);

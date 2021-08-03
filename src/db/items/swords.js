import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  class: WeaponClassType.Sword,
  type: ItemType.Sword,
})([
  {
    id: ids.ShortSword,
    name: 'Short Sword',
    tier: ItemTierType.Normal,
    qlvl: 1,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [2, 7],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Scimitar,
    name: 'Scimitar',
    tier: ItemTierType.Normal,
    qlvl: 5,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [2, 6],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [21],
        },
        [BasePropertyType.Durability]: {
          values: [22],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Sabre,
    name: 'Sabre',
    tier: ItemTierType.Normal,
    qlvl: 8,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [3, 8],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [25],
        },
        [BasePropertyType.Durability]: {
          values: [32],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Falchion,
    name: 'Falchion',
    tier: ItemTierType.Normal,
    qlvl: 11,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [9, 17],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [33],
        },
        [BasePropertyType.Durability]: {
          values: [32],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.CrystalSword,
    name: 'Crystal Sword',
    tier: ItemTierType.Normal,
    qlvl: 11,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [5, 15],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [43],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.BroadSword,
    name: 'Broad Sword',
    tier: ItemTierType.Normal,
    qlvl: 15,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [7, 14],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [48],
        },
        [BasePropertyType.Durability]: {
          values: [32],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.LongSword,
    name: 'Long Sword',
    tier: ItemTierType.Normal,
    qlvl: 20,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [3, 19],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [55],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [39],
        },
        [BasePropertyType.Durability]: {
          values: [44],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.WarSword,
    name: 'War Sword',
    tier: ItemTierType.Normal,
    qlvl: 27,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [8, 20],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [71],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [45],
        },
        [BasePropertyType.Durability]: {
          values: [44],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.TwoHandedSword,
    name: 'Two-handed Sword',
    tier: ItemTierType.Normal,
    qlvl: 10,
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [2, 9],
        },
        [BasePropertyType.Damage2H]: {
          values: [8, 17],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [35],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [27],
        },
        [BasePropertyType.Durability]: {
          values: [44],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.Claymore,
    name: 'Claymore',
    tier: ItemTierType.Normal,
    qlvl: 17,
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [5, 12],
        },
        [BasePropertyType.Damage2H]: {
          values: [13, 30],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [47],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.GiantSword,
    name: 'Giant Sword',
    tier: ItemTierType.Normal,
    qlvl: 21,
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [3, 16],
        },
        [BasePropertyType.Damage2H]: {
          values: [9, 28],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [56],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [34],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.BastardSword,
    name: 'Bastard Sword',
    tier: ItemTierType.Normal,
    qlvl: 24,
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [7, 19],
        },
        [BasePropertyType.Damage2H]: {
          values: [20, 28],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [62],
        },
        [BasePropertyType.Durability]: {
          values: [40],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.Flamberge,
    name: 'Flamberge',
    tier: ItemTierType.Normal,
    qlvl: 27,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [9, 15],
        },
        [BasePropertyType.Damage2H]: {
          values: [13, 26],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [70],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [49],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.GreatSword,
    name: 'Great Sword',
    tier: ItemTierType.Normal,
    qlvl: 33,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [12, 20],
        },
        [BasePropertyType.Damage2H]: {
          values: [25, 42],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [100],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [60],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.Gladius,
    name: 'Gladius',
    tier: ItemTierType.Exceptional,
    clvl: 18,
    qlvl: 30,
    size: [3, 1],
    baseId: ids.ShortSword,
    imageId: ids.ShortSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [8, 22],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Cutlass,
    name: 'Cutlass',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 43,
    size: [3, 1],
    baseId: ids.Scimitar,
    imageId: ids.Scimitar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [8, 21],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-30],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [52],
        },
        [BasePropertyType.Durability]: {
          values: [22],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Shamshir,
    name: 'Shamshir',
    tier: ItemTierType.Exceptional,
    clvl: 23,
    qlvl: 35,
    size: [3, 1],
    baseId: ids.Sabre,
    imageId: ids.Sabre,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [10, 24],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [58],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [58],
        },
        [BasePropertyType.Durability]: {
          values: [32],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Tulwar,
    name: 'Tulwar',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 37,
    size: [3, 1],
    baseId: ids.Falchion,
    imageId: ids.Falchion,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [16, 35],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [70],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [42],
        },
        [BasePropertyType.Durability]: {
          values: [32],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.DimensionalBlade,
    name: 'Dimensional Blade',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 37,
    size: [3, 2],
    baseId: ids.CrystalSword,
    imageId: ids.CrystalSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [13, 35],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [85],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [60],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.BattleSword,
    name: 'Battle Sword',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 40,
    size: [3, 2],
    baseId: ids.BroadSword,
    imageId: ids.BroadSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [16, 34],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [92],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [43],
        },
        [BasePropertyType.Durability]: {
          values: [32],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.RuneSword,
    name: 'Rune Sword',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 44,
    size: [3, 2],
    baseId: ids.LongSword,
    imageId: ids.LongSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [10, 42],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [103],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [79],
        },
        [BasePropertyType.Durability]: {
          values: [44],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.AncientSword,
    name: 'Ancient Sword',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 49,
    size: [3, 1],
    baseId: ids.WarSword,
    imageId: ids.WarSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [18, 43],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [127],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [88],
        },
        [BasePropertyType.Durability]: {
          values: [44],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.Espandon,
    name: 'Espandon',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 37,
    size: [4, 1],
    baseId: ids.TwoHandedSword,
    imageId: ids.TwoHandedSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [8, 26],
        },
        [BasePropertyType.Damage2H]: {
          values: [18, 40],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [73],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [61],
        },
        [BasePropertyType.Durability]: {
          values: [44],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.DacianFalx,
    name: 'Dacian Falx',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 42,
    size: [4, 1],
    baseId: ids.Claymore,
    imageId: ids.Claymore,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [13, 30],
        },
        [BasePropertyType.Damage2H]: {
          values: [26, 61],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [91],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [20],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.TuskSword,
    name: 'Tusk Sword',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 45,
    size: [4, 1],
    baseId: ids.GiantSword,
    imageId: ids.GiantSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [10, 37],
        },
        [BasePropertyType.Damage2H]: {
          values: [19, 58],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [104],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [71],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.GothicSword,
    name: 'Gothic Sword',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 48,
    size: [4, 1],
    baseId: ids.BastardSword,
    imageId: ids.BastardSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [14, 40],
        },
        [BasePropertyType.Damage2H]: {
          values: [39, 60],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [113],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [20],
        },
        [BasePropertyType.Durability]: {
          values: [40],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.Zweihander,
    name: 'Zweihander',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 49,
    size: [4, 2],
    baseId: ids.Flamberge,
    imageId: ids.Flamberge,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [19, 35],
        },
        [BasePropertyType.Damage2H]: {
          values: [29, 54],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [125],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [94],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.ExecutionerSword,
    name: 'Executioner Sword',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 54,
    size: [4, 2],
    baseId: ids.GreatSword,
    imageId: ids.GreatSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [24, 40],
        },
        [BasePropertyType.Damage2H]: {
          values: [47, 80],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [170],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [110],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.Falcata,
    name: 'Falcata',
    tier: ItemTierType.Elite,
    clvl: 42,
    qlvl: 56,
    size: [3, 1],
    baseId: ids.ShortSword,
    imageId: ids.ShortSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [31, 59],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [150],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [88],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Ataghan,
    name: 'Ataghan',
    tier: ItemTierType.Elite,
    clvl: 45,
    qlvl: 61,
    size: [3, 1],
    baseId: ids.Scimitar,
    imageId: ids.Scimitar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [26, 46],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [135],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [95],
        },
        [BasePropertyType.Durability]: {
          values: [22],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.ElegantBlade,
    name: 'Elegant Blade',
    tier: ItemTierType.Elite,
    clvl: 47,
    qlvl: 63,
    size: [3, 1],
    baseId: ids.Sabre,
    imageId: ids.Sabre,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [33, 45],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [109],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [122],
        },
        [BasePropertyType.Durability]: {
          values: [32],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.HydraEdge,
    name: 'Hydra Edge',
    tier: ItemTierType.Elite,
    clvl: 51,
    qlvl: 69,
    size: [3, 1],
    baseId: ids.Falchion,
    imageId: ids.Falchion,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [28, 68],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [142],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [105],
        },
        [BasePropertyType.Durability]: {
          values: [32],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.PhaseBlade,
    name: 'Phase Blade',
    tier: ItemTierType.Elite,
    clvl: 54,
    qlvl: 73,
    size: [3, 2],
    baseId: ids.CrystalSword,
    imageId: ids.CrystalSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [31, 35],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-30],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [136],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.ConquestSword,
    name: 'Conquest Sword',
    tier: ItemTierType.Elite,
    clvl: 58,
    qlvl: 78,
    size: [3, 2],
    baseId: ids.BroadSword,
    imageId: ids.BroadSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [37, 53],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [142],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [112],
        },
        [BasePropertyType.Durability]: {
          values: [32],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.CrypticSword,
    name: 'Cryptic Sword',
    tier: ItemTierType.Elite,
    clvl: 61,
    qlvl: 82,
    size: [3, 2],
    baseId: ids.LongSword,
    imageId: ids.LongSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [5, 77],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [99],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [109],
        },
        [BasePropertyType.Durability]: {
          values: [44],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.MythicalSword,
    name: 'Mythical Sword',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    size: [3, 1],
    baseId: ids.WarSword,
    imageId: ids.WarSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [40, 50],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [147],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [124],
        },
        [BasePropertyType.Durability]: {
          values: [44],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.LegendSword,
    name: 'Legend Sword',
    tier: ItemTierType.Elite,
    clvl: 44,
    qlvl: 59,
    size: [4, 1],
    baseId: ids.TwoHandedSword,
    imageId: ids.TwoHandedSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [20, 56],
        },
        [BasePropertyType.Damage2H]: {
          values: [50, 94],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-15],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [175],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [100],
        },
        [BasePropertyType.Durability]: {
          values: [44],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.HighlandBlade,
    name: 'Highland Blade',
    tier: ItemTierType.Elite,
    clvl: 49,
    qlvl: 66,
    size: [4, 1],
    baseId: ids.Claymore,
    imageId: ids.Claymore,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [22, 62],
        },
        [BasePropertyType.Damage2H]: {
          values: [67, 96],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-5],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [171],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [104],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.BalrogBlade,
    name: 'Balrog Blade',
    tier: ItemTierType.Elite,
    clvl: 53,
    qlvl: 71,
    size: [4, 1],
    baseId: ids.GiantSword,
    imageId: ids.GiantSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [15, 75],
        },
        [BasePropertyType.Damage2H]: {
          values: [55, 118],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [185],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [87],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.ChampionSword,
    name: 'Champion Sword',
    tier: ItemTierType.Elite,
    clvl: 57,
    qlvl: 77,
    size: [4, 1],
    baseId: ids.BastardSword,
    imageId: ids.BastardSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [24, 54],
        },
        [BasePropertyType.Damage2H]: {
          values: [71, 83],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [163],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [103],
        },
        [BasePropertyType.Durability]: {
          values: [40],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.ColossusSword,
    name: 'Colossus Sword',
    tier: ItemTierType.Elite,
    clvl: 80,
    qlvl: 60,
    size: [4, 2],
    baseId: ids.Flamberge,
    imageId: ids.Flamberge,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [26, 70],
        },
        [BasePropertyType.Damage2H]: {
          values: [61, 121],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [182],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [95],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.ColossusBlade,
    name: 'Colossus Blade',
    tier: ItemTierType.Elite,
    clvl: 63,
    qlvl: 85,
    size: [4, 2],
    baseId: ids.GreatSword,
    imageId: ids.GreatSword,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [25, 65],
        },
        [BasePropertyType.Damage2H]: {
          values: [58, 115],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [5],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [189],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [110],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
]);

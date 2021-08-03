import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  class: WeaponClassType.Staff,
  type: ItemType.Staff,
})([
  {
    id: ids.ShortStaff,
    name: 'Short Staff',
    tier: ItemTierType.Normal,
    qlvl: 1,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [1, 5],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.LongStaff,
    name: 'Long Staff',
    tier: ItemTierType.Normal,
    qlvl: 8,
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [2, 8],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.Durability]: {
          values: [30],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.GnarledStaff,
    name: 'Gnarled Staff',
    tier: ItemTierType.Normal,
    qlvl: 12,
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [4, 12],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.BattleStaff,
    name: 'Battle Staff',
    tier: ItemTierType.Normal,
    qlvl: 17,
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [6, 13],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
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
    id: ids.WarStaff,
    name: 'War Staff',
    tier: ItemTierType.Normal,
    qlvl: 24,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [12, 28],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
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
    id: ids.JoStaff,
    name: 'Jo Staff',
    tier: ItemTierType.Exceptional,
    clvl: 18,
    qlvl: 30,
    size: [3, 1],
    baseId: ids.ShortStaff,
    imageId: ids.ShortStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [6, 21],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Quaterstaff,
    name: 'Quaterstaff',
    tier: ItemTierType.Exceptional,
    clvl: 23,
    qlvl: 35,
    size: [4, 1],
    baseId: ids.LongStaff,
    imageId: ids.LongStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [8, 26],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.Durability]: {
          values: [30],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.CedarStaff,
    name: 'Cedar Staff',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 38,
    size: [4, 1],
    baseId: ids.GnarledStaff,
    imageId: ids.GnarledStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [11, 32],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.GothicStaff,
    name: 'Gothic Staff',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 42,
    size: [4, 1],
    baseId: ids.BattleStaff,
    imageId: ids.BattleStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [14, 34],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
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
    id: ids.RuneStaff,
    name: 'Rune Staff',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 47,
    size: [4, 2],
    baseId: ids.WarStaff,
    imageId: ids.WarStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [24, 58],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
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
    id: ids.WalkingStick,
    name: 'Walking Stick',
    tier: ItemTierType.Elite,
    clvl: 43,
    qlvl: 58,
    size: [3, 1],
    baseId: ids.ShortStaff,
    imageId: ids.ShortStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [69, 85],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.Stalagmite,
    name: 'Stalagmite',
    tier: ItemTierType.Elite,
    clvl: 49,
    qlvl: 66,
    size: [4, 1],
    baseId: ids.LongStaff,
    imageId: ids.LongStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [75, 107],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [63],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [35],
        },
        [BasePropertyType.Durability]: {
          values: [39],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.ElderStaff,
    name: 'Elder Staff',
    tier: ItemTierType.Elite,
    clvl: 55,
    qlvl: 74,
    size: [4, 1],
    baseId: ids.GnarledStaff,
    imageId: ids.GnarledStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [80, 93],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [44],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [37],
        },
        [BasePropertyType.Durability]: {
          values: [35],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.Shillelagh,
    name: 'Shillelagh',
    tier: ItemTierType.Elite,
    clvl: 62,
    qlvl: 83,
    size: [4, 1],
    baseId: ids.BattleStaff,
    imageId: ids.BattleStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [65, 108],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [52],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [27],
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
    id: ids.ArchonStaff,
    name: 'Archon Staff',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    size: [4, 2],
    baseId: ids.WarStaff,
    imageId: ids.WarStaff,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [83, 99],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [34],
        },
        [BasePropertyType.Durability]: {
          values: [26],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
]);

import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  size: [4, 2],
  type: ItemType.Polearm,
})([
  {
    id: ids.Bardiche,
    name: 'Bardiche',
    tier: ItemTierType.Normal,
    qlvl: 5,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [1, 27],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [40],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.Voulge,
    name: 'Voulge',
    tier: ItemTierType.Normal,
    qlvl: 11,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [6, 21],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [50],
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
    id: ids.Scythe,
    name: 'Scythe',
    tier: ItemTierType.Normal,
    qlvl: 15,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [8, 20],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [41],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [41],
        },
        [BasePropertyType.Durability]: {
          values: [65],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.Poleaxe,
    name: 'Poleaxe',
    tier: ItemTierType.Normal,
    qlvl: 21,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [18, 39],
        },
        [BasePropertyType.MeleeRange]: {
          values: [4],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [62],
        },
        [BasePropertyType.Durability]: {
          values: [65],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.Halberd,
    name: 'Halberd',
    tier: ItemTierType.Normal,
    qlvl: 29,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [12, 45],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [75],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [47],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.WarScythe,
    name: 'War Scythe',
    tier: ItemTierType.Normal,
    qlvl: 34,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [15, 36],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [80],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [80],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.LochaberAxe,
    name: 'Lochaber Axe',
    tier: ItemTierType.Exceptional,
    clvl: 21,
    qlvl: 33,
    baseId: ids.Bardiche,
    imageId: ids.Bardiche,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [6, 58],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [80],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.Bill,
    name: 'Bill',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 37,
    baseId: ids.Voulge,
    imageId: ids.Voulge,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [14, 53],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [95],
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
    id: ids.BattleScythe,
    name: 'Battle Scythe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 40,
    baseId: ids.Scythe,
    imageId: ids.Scythe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [18, 45],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [82],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [82],
        },
        [BasePropertyType.Durability]: {
          values: [65],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.Partizan,
    name: 'Partizan',
    tier: ItemTierType.Exceptional,
    clvl: 23,
    qlvl: 35,
    baseId: ids.Poleaxe,
    imageId: ids.Poleaxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [34, 75],
        },
        [BasePropertyType.MeleeRange]: {
          values: [4],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [113],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [67],
        },
        [BasePropertyType.Durability]: {
          values: [65],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.BecDeCorbin,
    name: 'Be-De-Corbin',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 51,
    baseId: ids.Halberd,
    imageId: ids.Halberd,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [13, 85],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [133],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [91],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.GrimScythe,
    name: 'Grim Scythe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 34,
    baseId: ids.WarScythe,
    imageId: ids.WarScythe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [30, 70],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [140],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [140],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.OgreAxe,
    name: 'Ogre Axe',
    tier: ItemTierType.Elite,
    clvl: 45,
    qlvl: 60,
    baseId: ids.Bardiche,
    imageId: ids.Bardiche,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [28, 145],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [195],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [75],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.ColossusVoulge,
    name: 'Colossus Voulge',
    tier: ItemTierType.Elite,
    clvl: 48,
    qlvl: 64,
    baseId: ids.Voulge,
    imageId: ids.Voulge,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [17, 165],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [210],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.Thresher,
    name: 'Thresher',
    tier: ItemTierType.Elite,
    clvl: 53,
    qlvl: 71,
    baseId: ids.Scythe,
    imageId: ids.Scythe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [12, 141],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [152],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [118],
        },
        [BasePropertyType.Durability]: {
          values: [65],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.CrypticAxe,
    name: 'Cryptic Axe',
    tier: ItemTierType.Elite,
    clvl: 59,
    qlvl: 79,
    baseId: ids.Poleaxe,
    imageId: ids.Poleaxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [33, 150],
        },
        [BasePropertyType.MeleeRange]: {
          values: [4],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [165],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [103],
        },
        [BasePropertyType.Durability]: {
          values: [65],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.GreatPoleaxe,
    name: 'Great Poleaxe',
    tier: ItemTierType.Elite,
    clvl: 63,
    qlvl: 84,
    baseId: ids.Halberd,
    imageId: ids.Halberd,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [46, 127],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [179],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [99],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.GiantThresher,
    name: 'Grim Thresher',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    baseId: ids.WarScythe,
    imageId: ids.WarScythe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [40, 114],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [188],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [140],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
]);

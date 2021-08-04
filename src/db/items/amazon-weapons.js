import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  PlayerClassType,
  WeaponClassType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  playerClass: PlayerClassType.Amazon,
  type: ItemType.AmazonWeapon,
})([
  {
    id: ids.StagBow,
    name: 'Stag Bow',
    class: WeaponClassType.Bow,
    tier: ItemTierType.Normal,
    size: [4, 2],
    clvl: 14,
    qlvl: 18,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [7, 12],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [30],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [45],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.ReflexBow,
    name: 'Reflex Bow',
    class: WeaponClassType.Bow,
    tier: ItemTierType.Normal,
    size: [4, 2],
    clvl: 20,
    qlvl: 27,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [9, 19],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [35],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.MaidenSpear,
    name: 'Maiden Spear',
    class: WeaponClassType.Spear,
    tier: ItemTierType.Normal,
    size: [4, 2],
    clvl: 14,
    qlvl: 18,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [18, 24],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [54],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [40],
        },
        [BasePropertyType.Durability]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.MaidenPike,
    name: 'Maiden Pike',
    class: WeaponClassType.Spear,
    tier: ItemTierType.Normal,
    size: [4, 2],
    clvl: 20,
    qlvl: 27,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [23, 55],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [63],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [52],
        },
        [BasePropertyType.Durability]: {
          values: [25],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.MaidenJavelin,
    name: 'Maiden Javelin',
    class: WeaponClassType.Javelin,
    tier: ItemTierType.Normal,
    size: [3, 1],
    clvl: 17,
    qlvl: 23,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [8, 14],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [33],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [47],
        },
      },
    },
  },
  {
    id: ids.AshwoodBow,
    name: 'Ashwood Bow',
    class: WeaponClassType.Bow,
    tier: ItemTierType.Exceptional,
    size: [4, 2],
    clvl: 29,
    qlvl: 39,
    baseId: ids.StagBow,
    imageId: ids.StagBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [16, 29],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [56],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [77],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.CeremonialBow,
    name: 'Ceremonial Bow',
    class: WeaponClassType.Bow,
    tier: ItemTierType.Exceptional,
    size: [4, 2],
    clvl: 35,
    qlvl: 47,
    baseId: ids.ReflexBow,
    imageId: ids.ReflexBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [19, 41],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [73],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [110],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.CeremonialSpear,
    name: 'Ceremonial Spear',
    class: WeaponClassType.Spear,
    tier: ItemTierType.Exceptional,
    size: [4, 2],
    clvl: 14,
    qlvl: 18,
    baseId: ids.MaidenSpear,
    imageId: ids.MaidenSpear,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [34, 51],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [101],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [80],
        },
        [BasePropertyType.Durability]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.CeremonialPike,
    name: 'Ceremonial Pike',
    class: WeaponClassType.Spear,
    tier: ItemTierType.Exceptional,
    size: [4, 2],
    clvl: 38,
    qlvl: 51,
    baseId: ids.MaidenPike,
    imageId: ids.MaidenPike,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [42, 101],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [115],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [98],
        },
        [BasePropertyType.Durability]: {
          values: [25],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.CeremonialJavelin,
    name: 'Ceremonial Javelin',
    class: WeaponClassType.Javelin,
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    clvl: 26,
    qlvl: 35,
    baseId: ids.MaidenJavelin,
    imageId: ids.MaidenJavelin,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [18, 35],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [109],
        },
      },
    },
  },
  {
    id: ids.MatriarchalBow,
    name: 'Matriarchal Bow',
    class: WeaponClassType.Bow,
    tier: ItemTierType.Elite,
    size: [4, 2],
    clvl: 39,
    qlvl: 53,
    baseId: ids.StagBow,
    imageId: ids.StagBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [20, 47],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [87],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [187],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.GrandMatronBow,
    name: 'Grand Matron Bow',
    class: WeaponClassType.Bow,
    tier: ItemTierType.Elite,
    size: [4, 2],
    clvl: 58,
    qlvl: 78,
    baseId: ids.ReflexBow,
    imageId: ids.ReflexBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [14, 72],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [108],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [152],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.MatriarchalSpear,
    name: 'Matriarchal Spear',
    class: WeaponClassType.Spear,
    tier: ItemTierType.Elite,
    size: [4, 2],
    clvl: 45,
    qlvl: 61,
    baseId: ids.MaidenSpear,
    imageId: ids.MaidenSpear,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [65, 95],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [114],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [142],
        },
        [BasePropertyType.Durability]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.MatriarchalPike,
    name: 'Matriarchal Pike',
    class: WeaponClassType.Spear,
    tier: ItemTierType.Elite,
    size: [4, 2],
    clvl: 60,
    qlvl: 81,
    baseId: ids.MaidenPike,
    imageId: ids.MaidenPike,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {
          values: [37, 153],
        },
        [BasePropertyType.MeleeRange]: {
          values: [5],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [132],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [149],
        },
        [BasePropertyType.Durability]: {
          values: [25],
        },
        [BasePropertyType.MaxSockets]: {
          values: [6],
        },
      },
    },
  },
  {
    id: ids.MatriarchalJavelin,
    name: 'Matriarchal Javelin',
    class: WeaponClassType.Javelin,
    tier: ItemTierType.Elite,
    size: [3, 1],
    clvl: 48,
    qlvl: 65,
    baseId: ids.MaidenJavelin,
    imageId: ids.MaidenJavelin,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [30, 54],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [107],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [151],
        },
      },
    },
  },
]);

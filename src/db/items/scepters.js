import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  class: WeaponClassType.Mace,
  type: ItemType.Scepter,
})([
  {
    id: ids.Scepter,
    name: 'Scepter',
    tier: ItemTierType.Normal,
    qlvl: 3,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [6, 11],
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
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.GrandScepter,
    name: 'Grand Scepter',
    tier: ItemTierType.Normal,
    qlvl: 15,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [8, 18],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [37],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.WarScepter,
    name: 'War Scepter',
    tier: ItemTierType.Normal,
    qlvl: 21,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [10, 17],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [55],
        },
        [BasePropertyType.Durability]: {
          values: [70],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.RuneScepter,
    name: 'Rune Scepter',
    tier: ItemTierType.Exceptional,
    clvl: 19,
    qlvl: 31,
    size: [3, 1],
    baseId: ids.Scepter,
    imageId: ids.Scepter,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [13, 24],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [58],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.HolyWaterSprinkler,
    name: 'Holy Water Sprinkler',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 40,
    size: [3, 1],
    baseId: ids.GrandScepter,
    imageId: ids.GrandScepter,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [14, 36],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [76],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.DivineScepter,
    name: 'Divine Scepter',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 45,
    size: [3, 2],
    baseId: ids.WarScepter,
    imageId: ids.WarScepter,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [16, 38],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [103],
        },
        [BasePropertyType.Durability]: {
          values: [70],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
  {
    id: ids.MightyScepter,
    name: 'Mighty Scepter',
    tier: ItemTierType.Elite,
    clvl: 46,
    qlvl: 62,
    size: [3, 1],
    baseId: ids.Scepter,
    imageId: ids.Scepter,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [40, 52],
        },
        [BasePropertyType.MeleeRange]: {
          values: [1],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [125],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [65],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.SeraphRod,
    name: 'Seraph Rod',
    tier: ItemTierType.Elite,
    clvl: 57,
    qlvl: 76,
    size: [3, 1],
    baseId: ids.GrandScepter,
    imageId: ids.GrandScepter,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [45, 54],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [108],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [69],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.Caduceus,
    name: 'Caduceus',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    size: [3, 2],
    baseId: ids.WarScepter,
    imageId: ids.WarScepter,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [37, 43],
        },
        [BasePropertyType.MeleeRange]: {
          values: [2],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [97],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [70],
        },
        [BasePropertyType.Durability]: {
          values: [70],
        },
        [BasePropertyType.MaxSockets]: {
          values: [5],
        },
      },
    },
  },
]);

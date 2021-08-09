import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Mace,
  type: ItemType.Scepter,
})([
  {
    id: ids.Scepter,
    name: 'Scepter',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 6, y: 11},
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.GrandScepter,
    name: 'Grand Scepter',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 8, y: 18},
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.RequiredStrength]: 37,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.WarScepter,
    name: 'War Scepter',
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 10, y: 17},
        [BasePropertyType.Durability]: 70,
        [BasePropertyType.RequiredStrength]: 55,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.RuneScepter,
    name: 'Rune Scepter',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.Scepter,
    imageId: ids.Scepter,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 13, y: 24},
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredStrength]: 58,
        [BasePropertyType.RequiredLevel]: 19,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.HolyWaterSprinkler,
    name: 'Holy Water Sprinkler',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.GrandScepter,
    imageId: ids.GrandScepter,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 14, y: 36},
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.RequiredStrength]: 76,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.DivineScepter,
    name: 'Divine Scepter',
    tier: ItemTierType.Exceptional,
    size: [3, 2],
    baseId: ids.WarScepter,
    imageId: ids.WarScepter,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 16, y: 38},
        [BasePropertyType.Durability]: 70,
        [BasePropertyType.RequiredStrength]: 103,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.MightyScepter,
    name: 'Mighty Scepter',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.Scepter,
    imageId: ids.Scepter,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 40, y: 52},
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredDexterity]: 65,
        [BasePropertyType.RequiredStrength]: 125,
        [BasePropertyType.RequiredLevel]: 46,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.SeraphRod,
    name: 'Seraph Rod',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.GrandScepter,
    imageId: ids.GrandScepter,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 45, y: 54},
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.RequiredDexterity]: 69,
        [BasePropertyType.RequiredStrength]: 108,
        [BasePropertyType.RequiredLevel]: 57,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Caduceus,
    name: 'Caduceus',
    tier: ItemTierType.Elite,
    size: [3, 2],
    baseId: ids.WarScepter,
    imageId: ids.WarScepter,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 37, y: 43},
        [BasePropertyType.Durability]: 70,
        [BasePropertyType.RequiredDexterity]: 70,
        [BasePropertyType.RequiredStrength]: 97,
        [BasePropertyType.RequiredLevel]: 66,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
]);

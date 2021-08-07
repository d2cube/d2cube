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
        [BasePropertyType.Damage1H]: {min: 6, max: 11},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 2,
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
        [BasePropertyType.Damage1H]: {min: 8, max: 18},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 37,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.Damage1H]: {min: 10, max: 17},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 55,
        [BasePropertyType.Durability]: 70,
        [BasePropertyType.MaxSockets]: 5,
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
        [BasePropertyType.Damage1H]: {min: 13, max: 24},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 58,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 19,
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
        [BasePropertyType.Damage1H]: {min: 14, max: 36},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 76,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 25,
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
        [BasePropertyType.Damage1H]: {min: 16, max: 38},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 103,
        [BasePropertyType.Durability]: 70,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.RequiredLevel]: 25,
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
        [BasePropertyType.Damage1H]: {min: 40, max: 52},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 125,
        [BasePropertyType.RequiredDexterity]: 65,
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 46,
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
        [BasePropertyType.Damage1H]: {min: 45, max: 54},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 108,
        [BasePropertyType.RequiredDexterity]: 69,
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 57,
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
        [BasePropertyType.Damage1H]: {min: 37, max: 43},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 97,
        [BasePropertyType.RequiredDexterity]: 70,
        [BasePropertyType.Durability]: 70,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.RequiredLevel]: 66,
      },
    },
  },
]);

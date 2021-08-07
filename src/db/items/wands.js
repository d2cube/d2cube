import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Staff,
  size: [2, 1],
  type: ItemType.Wand,
})([
  {
    id: ids.Wand,
    name: 'Wand',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 2, max: 4},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.MaxSockets]: 1,
      },
    },
  },
  {
    id: ids.YewWand,
    name: 'Yew Wand',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 2, max: 8},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.MaxSockets]: 1,
      },
    },
  },
  {
    id: ids.BoneWand,
    name: 'Bone Wand',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 3, max: 7},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.GrimWand,
    name: 'Grim Wand',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 5, max: 11},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.BurntWand,
    name: 'Burnt Wand',
    tier: ItemTierType.Exceptional,
    baseId: ids.Wand,
    imageId: ids.Wand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 8, max: 18},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.MaxSockets]: 1,
        [BasePropertyType.RequiredLevel]: 19,
      },
    },
  },
  {
    id: ids.PetrifiedWand,
    name: 'Petrified Wand',
    tier: ItemTierType.Exceptional,
    baseId: ids.YewWand,
    imageId: ids.YewWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 8, max: 24},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 25,
      },
    },
  },
  {
    id: ids.TombWand,
    name: 'Tomb Wand',
    tier: ItemTierType.Exceptional,
    baseId: ids.BoneWand,
    imageId: ids.BoneWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 10, max: 22},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 25,
      },
    },
  },
  {
    id: ids.GraveWand,
    name: 'Grave Wand',
    tier: ItemTierType.Exceptional,
    baseId: ids.GrimWand,
    imageId: ids.GrimWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 13, max: 29},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 25,
      },
    },
  },
  {
    id: ids.PolishedWand,
    name: 'Polished Wand',
    tier: ItemTierType.Elite,
    baseId: ids.Wand,
    imageId: ids.Wand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 18, max: 33},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 22,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 41,
      },
    },
  },
  {
    id: ids.GhostWand,
    name: 'Ghost Wand',
    tier: ItemTierType.Elite,
    baseId: ids.YewWand,
    imageId: ids.YewWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 20, max: 42},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 48,
      },
    },
  },
  {
    id: ids.LichWand,
    name: 'Lich Wand',
    tier: ItemTierType.Elite,
    baseId: ids.BoneWand,
    imageId: ids.BoneWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 10, max: 31},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 17,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 56,
      },
    },
  },
  {
    id: ids.UnearthedWand,
    name: 'Unearthed Wand',
    tier: ItemTierType.Elite,
    baseId: ids.GrimWand,
    imageId: ids.GrimWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 22, max: 28},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.RequiredLevel]: 64,
      },
    },
  },
]);

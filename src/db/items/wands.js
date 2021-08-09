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
        [BasePropertyType.Damage1H]: {x: 2, y: 4},
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 1,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.YewWand,
    name: 'Yew Wand',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 2, y: 8},
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 1,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.BoneWand,
    name: 'Bone Wand',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 3, y: 7},
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.GrimWand,
    name: 'Grim Wand',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 5, y: 11},
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
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
        [BasePropertyType.Damage1H]: {x: 8, y: 18},
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 19,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 1,
        [BasePropertyType.MeleeRange]: 1,
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
        [BasePropertyType.Damage1H]: {x: 8, y: 24},
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
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
        [BasePropertyType.Damage1H]: {x: 10, y: 22},
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
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
        [BasePropertyType.Damage1H]: {x: 13, y: 29},
        [BasePropertyType.Durability]: 15,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
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
        [BasePropertyType.Damage1H]: {x: 18, y: 33},
        [BasePropertyType.Durability]: 22,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 41,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
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
        [BasePropertyType.Damage1H]: {x: 20, y: 42},
        [BasePropertyType.Durability]: 14,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 48,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
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
        [BasePropertyType.Damage1H]: {x: 10, y: 31},
        [BasePropertyType.Durability]: 17,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 56,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
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
        [BasePropertyType.Damage1H]: {x: 22, y: 28},
        [BasePropertyType.Durability]: 18,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 64,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
]);

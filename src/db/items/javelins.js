import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Javelin,
  type: ItemType.Javelin,
})([
  {
    id: ids.Javelin,
    name: 'Javelin',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 1, max: 5},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: -10,
      },
    },
  },
  {
    id: ids.Pilum,
    name: 'Pilum',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 4, max: 9},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredDexterity]: 45,
      },
    },
  },
  {
    id: ids.ShortSpear,
    name: 'Short Spear',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 2, max: 13},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 40,
        [BasePropertyType.RequiredDexterity]: 40,
      },
    },
  },
  {
    id: ids.Glaive,
    name: 'Glaive',
    tier: ItemTierType.Normal,
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 5, max: 17},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.RequiredStrength]: 52,
        [BasePropertyType.RequiredDexterity]: 35,
      },
    },
  },
  {
    id: ids.ThrowingSpear,
    name: 'Throwing Spear',
    tier: ItemTierType.Normal,
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 5, max: 15},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredDexterity]: 65,
      },
    },
  },
  {
    id: ids.WarJavelin,
    name: 'War Javelin',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.Javelin,
    imageId: ids.Javelin,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 6, max: 19},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredDexterity]: 25,
        [BasePropertyType.RequiredLevel]: 18,
      },
    },
  },
  {
    id: ids.GreatPilum,
    name: 'Great Pilum',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.Pilum,
    imageId: ids.Pilum,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 11, max: 26},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredDexterity]: 88,
        [BasePropertyType.RequiredLevel]: 25,
      },
    },
  },
  {
    id: ids.Simbilan,
    name: 'Simbilan',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.ShortSpear,
    imageId: ids.ShortSpear,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 8, max: 32},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 80,
        [BasePropertyType.RequiredDexterity]: 80,
        [BasePropertyType.RequiredLevel]: 25,
      },
    },
  },
  {
    id: ids.Spiculum,
    name: 'Spiculum',
    tier: ItemTierType.Exceptional,
    size: [4, 1],
    baseId: ids.Glaive,
    imageId: ids.Glaive,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 13, max: 38},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.RequiredStrength]: 98,
        [BasePropertyType.RequiredDexterity]: 73,
        [BasePropertyType.RequiredLevel]: 25,
      },
    },
  },
  {
    id: ids.Harpoon,
    name: 'Harpoon',
    tier: ItemTierType.Exceptional,
    size: [4, 1],
    baseId: ids.ThrowingSpear,
    imageId: ids.ThrowingSpear,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 13, max: 35},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredDexterity]: 118,
        [BasePropertyType.RequiredLevel]: 25,
      },
    },
  },
  {
    id: ids.HyperionJavelin,
    name: 'Hyperion Javelin',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.Javelin,
    imageId: ids.Javelin,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 21, max: 57},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 98,
        [BasePropertyType.RequiredDexterity]: 123,
        [BasePropertyType.RequiredLevel]: 40,
      },
    },
  },
  {
    id: ids.StygianPilum,
    name: 'Stygian Pilum',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.Pilum,
    imageId: ids.Pilum,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 14, max: 64},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 118,
        [BasePropertyType.RequiredDexterity]: 112,
        [BasePropertyType.RequiredLevel]: 46,
      },
    },
  },
  {
    id: ids.BalrogSpear,
    name: 'Balrog Spear',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.ShortSpear,
    imageId: ids.ShortSpear,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 33, max: 63},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 127,
        [BasePropertyType.RequiredDexterity]: 95,
        [BasePropertyType.RequiredLevel]: 53,
      },
    },
  },
  {
    id: ids.GhostGlaive,
    name: 'Ghost Glaive',
    tier: ItemTierType.Elite,
    size: [4, 1],
    baseId: ids.Glaive,
    imageId: ids.Glaive,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 19, max: 60},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.RequiredStrength]: 89,
        [BasePropertyType.RequiredDexterity]: 137,
        [BasePropertyType.RequiredLevel]: 59,
      },
    },
  },
  {
    id: ids.WingedHarpoon,
    name: 'Winged Harpoon',
    tier: ItemTierType.Elite,
    size: [4, 1],
    baseId: ids.ThrowingSpear,
    imageId: ids.ThrowingSpear,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 27, max: 35},
        [BasePropertyType.MeleeRange]: 3,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 76,
        [BasePropertyType.RequiredLevel]: 65,
        [BasePropertyType.RequiredDexterity]: 145,
      },
    },
  },
]);

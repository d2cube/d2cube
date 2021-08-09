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
        [BasePropertyType.Damage1H]: {x: 1, y: 5},
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MeleeRange]: 3,
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
        [BasePropertyType.Damage1H]: {x: 4, y: 9},
        [BasePropertyType.RequiredDexterity]: 45,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MeleeRange]: 3,
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
        [BasePropertyType.Damage1H]: {x: 2, y: 13},
        [BasePropertyType.RequiredDexterity]: 40,
        [BasePropertyType.RequiredStrength]: 40,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MeleeRange]: 3,
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
        [BasePropertyType.Damage1H]: {x: 5, y: 17},
        [BasePropertyType.RequiredDexterity]: 35,
        [BasePropertyType.RequiredStrength]: 52,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.MeleeRange]: 3,
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
        [BasePropertyType.Damage1H]: {x: 5, y: 15},
        [BasePropertyType.RequiredDexterity]: 65,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MeleeRange]: 3,
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
        [BasePropertyType.Damage1H]: {x: 6, y: 19},
        [BasePropertyType.RequiredDexterity]: 25,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 18,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MeleeRange]: 3,
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
        [BasePropertyType.Damage1H]: {x: 11, y: 26},
        [BasePropertyType.RequiredDexterity]: 88,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MeleeRange]: 3,
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
        [BasePropertyType.Damage1H]: {x: 8, y: 32},
        [BasePropertyType.RequiredDexterity]: 80,
        [BasePropertyType.RequiredStrength]: 80,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MeleeRange]: 3,
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
        [BasePropertyType.Damage1H]: {x: 13, y: 38},
        [BasePropertyType.RequiredDexterity]: 73,
        [BasePropertyType.RequiredStrength]: 98,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.MeleeRange]: 3,
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
        [BasePropertyType.Damage1H]: {x: 13, y: 35},
        [BasePropertyType.RequiredDexterity]: 118,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MeleeRange]: 3,
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
        [BasePropertyType.Damage1H]: {x: 21, y: 57},
        [BasePropertyType.RequiredDexterity]: 123,
        [BasePropertyType.RequiredStrength]: 98,
        [BasePropertyType.RequiredLevel]: 40,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MeleeRange]: 3,
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
        [BasePropertyType.Damage1H]: {x: 14, y: 64},
        [BasePropertyType.RequiredDexterity]: 112,
        [BasePropertyType.RequiredStrength]: 118,
        [BasePropertyType.RequiredLevel]: 46,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MeleeRange]: 3,
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
        [BasePropertyType.Damage1H]: {x: 33, y: 63},
        [BasePropertyType.RequiredDexterity]: 95,
        [BasePropertyType.RequiredStrength]: 127,
        [BasePropertyType.RequiredLevel]: 53,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MeleeRange]: 3,
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
        [BasePropertyType.Damage1H]: {x: 19, y: 60},
        [BasePropertyType.RequiredDexterity]: 137,
        [BasePropertyType.RequiredStrength]: 89,
        [BasePropertyType.RequiredLevel]: 59,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.MeleeRange]: 3,
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
        [BasePropertyType.Damage1H]: {x: 27, y: 35},
        [BasePropertyType.RequiredDexterity]: 145,
        [BasePropertyType.RequiredStrength]: 76,
        [BasePropertyType.RequiredLevel]: 65,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
]);

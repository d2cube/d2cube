import {BasePropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  type: ItemType.Javelin,
})([
  {
    id: ids.Javelin,
    name: 'Javelin',
    tier: ItemTierType.Normal,
    qlvl: 1,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [1, 5],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
      },
    },
  },
  {
    id: ids.Pilum,
    name: 'Pilum',
    tier: ItemTierType.Normal,
    qlvl: 10,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [4, 9],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [45],
        },
      },
    },
  },
  {
    id: ids.ShortSpear,
    name: 'Short Spear',
    tier: ItemTierType.Normal,
    qlvl: 15,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [2, 13],
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
        [BasePropertyType.MinimumDexterity]: {
          values: [40],
        },
      },
    },
  },
  {
    id: ids.Glaive,
    name: 'Glaive',
    tier: ItemTierType.Normal,
    qlvl: 23,
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [5, 17],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [52],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [35],
        },
      },
    },
  },
  {
    id: ids.ThrowingSpear,
    name: 'Throwing Spear',
    tier: ItemTierType.Normal,
    qlvl: 29,
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [5, 15],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [65],
        },
      },
    },
  },
  {
    id: ids.WarJavelin,
    name: 'War Javelin',
    tier: ItemTierType.Exceptional,
    clvl: 18,
    qlvl: 30,
    size: [3, 1],
    baseId: ids.Javelin,
    imageId: ids.Javelin,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [6, 19],
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
          values: [25],
        },
      },
    },
  },
  {
    id: ids.GreatPilum,
    name: 'Great Pilum',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 37,
    size: [3, 1],
    baseId: ids.Pilum,
    imageId: ids.Pilum,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [11, 26],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [25],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [88],
        },
      },
    },
  },
  {
    id: ids.Simbilan,
    name: 'Simbilan',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 40,
    size: [3, 1],
    baseId: ids.ShortSpear,
    imageId: ids.ShortSpear,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [8, 32],
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
        [BasePropertyType.MinimumDexterity]: {
          values: [80],
        },
      },
    },
  },
  {
    id: ids.Spiculum,
    name: 'Spiculum',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 46,
    size: [4, 1],
    baseId: ids.Glaive,
    imageId: ids.Glaive,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [13, 38],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [98],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [73],
        },
      },
    },
  },
  {
    id: ids.Harpoon,
    name: 'Harpoon',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 51,
    size: [4, 1],
    baseId: ids.ThrowingSpear,
    imageId: ids.ThrowingSpear,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [13, 35],
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
          values: [118],
        },
      },
    },
  },
  {
    id: ids.HyperionJavelin,
    name: 'Hyperion Javelin',
    tier: ItemTierType.Elite,
    clvl: 40,
    qlvl: 54,
    size: [3, 1],
    baseId: ids.Javelin,
    imageId: ids.Javelin,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [21, 57],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [98],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [123],
        },
      },
    },
  },
  {
    id: ids.StygianPilum,
    name: 'Stygian Pilum',
    tier: ItemTierType.Elite,
    clvl: 46,
    qlvl: 62,
    size: [3, 1],
    baseId: ids.Pilum,
    imageId: ids.Pilum,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [14, 64],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [0],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [118],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [112],
        },
      },
    },
  },
  {
    id: ids.BalrogSpear,
    name: 'Balrog Spear',
    tier: ItemTierType.Elite,
    clvl: 53,
    qlvl: 71,
    size: [3, 1],
    baseId: ids.ShortSpear,
    imageId: ids.ShortSpear,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [33, 63],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [127],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [95],
        },
      },
    },
  },
  {
    id: ids.GhostGlaive,
    name: 'Ghost Glaive',
    tier: ItemTierType.Elite,
    clvl: 59,
    qlvl: 69,
    size: [4, 1],
    baseId: ids.Glaive,
    imageId: ids.Glaive,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [19, 60],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [20],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [89],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [137],
        },
      },
    },
  },
  {
    id: ids.WingedHarpoon,
    name: 'Winged Harpoon',
    tier: ItemTierType.Elite,
    clvl: 65,
    qlvl: 85,
    size: [4, 1],
    baseId: ids.ThrowingSpear,
    imageId: ids.ThrowingSpear,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {
          values: [27, 35],
        },
        [BasePropertyType.MeleeRange]: {
          values: [3],
        },
        [BasePropertyType.AttackSpeed]: {
          values: [-10],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [76],
        },
        [BasePropertyType.MinimumDexterity]: {
          values: [145],
        },
      },
    },
  },
]);

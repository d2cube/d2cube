import {up} from '../../utils/up.js';
import {ItemQualityType, RecipeType} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
import {
  isExceptionalTierUniqueArmor,
  isExceptionalTierRareArmor,
  isExceptionalTierRareWeapon,
  isExceptionalTierUniqueWeapon,
  isNormalTierRareArmor,
  isNormalTierRareWeapon,
  isNormalTierUniqueArmor,
  isNormalTierUniqueWeapon,
} from '../../utils/predicates.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '1 Ral Rune + 1 Sol Rune + 1 Perfect Emerald + 1 Normal Unique Weapon → 1 Exceptional Version of Weapon',
    sources: [
      {
        item: {
          id: ids.Ral,
        },
      },
      {
        item: {
          id: ids.Sol,
        },
      },
      {
        item: {
          id: ids.PerfectEmerald,
        },
      },
      {
        item: {
          id: ids.CrystalSword,
          quality: ItemQualityType.Unique,
        },
        test: isNormalTierUniqueWeapon,
      },
    ],
    target: {
      transform: (sources) => up(sources[3]),
    },
  },
  {
    name: '1 Tal Rune + 1 Shael Rune + 1 Perfect Diamond + 1 Normal Unique Armor → 1 Exceptional Version of Armor',
    sources: [
      {
        item: {
          id: ids.Tal,
        },
      },
      {
        item: {
          id: ids.Shael,
        },
      },
      {
        item: {
          id: ids.PerfectDiamond,
        },
      },
      {
        item: {
          id: ids.LightPlate,
          quality: ItemQualityType.Unique,
        },
        test: isNormalTierUniqueArmor,
      },
    ],
    target: {
      transform: (sources) => up(sources[3]),
    },
  },
  {
    name: '1 Lum Rune + 1 Pul Rune + 1 Perfect Emerald + 1 Exceptional Unique Weapon → 1 Elite Version of Weapon',
    sources: [
      {
        item: {
          id: ids.Lum,
        },
      },
      {
        item: {
          id: ids.Pul,
        },
      },
      {
        item: {
          id: ids.PerfectEmerald,
        },
      },
      {
        item: {
          id: ids.DimensionalBlade,
          quality: ItemQualityType.Unique,
        },
        test: isExceptionalTierUniqueWeapon,
      },
    ],
    target: {
      transform: (sources) => up(sources[3]),
    },
  },
  {
    name: '1 Ko Rune + 1 Lem Rune + 1 Perfect Diamond + 1 Exceptional Unique Armor → 1 Elite Version of Armor',
    sources: [
      {
        item: {
          id: ids.Ko,
        },
      },
      {
        item: {
          id: ids.Lem,
        },
      },
      {
        item: {
          id: ids.PerfectDiamond,
        },
      },
      {
        item: {
          id: ids.MagePlate,
          quality: ItemQualityType.Unique,
        },
        test: isExceptionalTierUniqueArmor,
      },
    ],
    target: {
      transform: (sources) => up(sources[3]),
    },
  },
  {
    name: '1 Ort Rune + 1 Amn Rune + 1 Perfect Sapphire + 1 Normal Rare Weapon → 1 Exceptional Rare Weapon',
    sources: [
      {
        item: {
          id: ids.Ort,
        },
      },
      {
        item: {
          id: ids.Amn,
        },
      },
      {
        item: {
          id: ids.PerfectSapphire,
        },
      },
      {
        item: {
          id: ids.CrystalSword,
          quality: ItemQualityType.Rare,
          overrideDescription: [
            [
              {text: 'Rare Weapon', color: 'item.quality.rare'},
              {text: 'Must be Normal tier.'},
            ],
          ],
        },
        test: isNormalTierRareWeapon,
      },
    ],
    target: {
      transform: (sources) => up(sources[3]),
    },
  },
  {
    name: '1 Ral Rune + 1 Thul Rune + 1 Perfect Amethyst + 1 Normal Rare Armor → 1 Exceptional Rare Armor',
    sources: [
      {
        item: {
          id: ids.Ral,
        },
      },
      {
        item: {
          id: ids.Thul,
        },
      },
      {
        item: {
          id: ids.PerfectAmethyst,
        },
      },
      {
        item: {
          id: ids.LightPlate,
          quality: ItemQualityType.Rare,
          overrideDescription: [
            [
              {text: 'Rare Armor', color: 'item.quality.rare'},
              {text: 'Must be Normal tier.'},
            ],
          ],
        },
        test: isNormalTierRareArmor,
      },
    ],
    target: {
      transform: (sources) => up(sources[3]),
    },
  },
  {
    name: '1 Fal Rune + 1 Um Rune + 1 Perfect Sapphire + 1 Exceptional Rare Weapon → 1 Elite Rare Weapon',
    sources: [
      {
        item: {
          id: ids.Fal,
        },
      },
      {
        item: {
          id: ids.Um,
        },
      },
      {
        item: {
          id: ids.PerfectSapphire,
        },
      },
      {
        item: {
          id: ids.DimensionalBlade,
          quality: ItemQualityType.Rare,
          overrideDescription: [
            [
              {text: 'Rare Weapon', color: 'item.quality.rare'},
              {text: 'Must be Exceptional tier.'},
            ],
          ],
        },
        test: isExceptionalTierRareWeapon,
      },
    ],
    target: {
      transform: (sources) => up(sources[3]),
    },
  },
  {
    name: '1 Ko Rune + 1 Pul Rune + 1 Perfect Amethyst + 1 Exceptional Rare Armor → 1 Elite Rare Armor',
    sources: [
      {
        item: {
          id: ids.Ko,
        },
      },
      {
        item: {
          id: ids.Pul,
        },
      },
      {
        item: {
          id: ids.PerfectAmethyst,
        },
      },
      {
        item: {
          id: ids.MagePlate,
          quality: ItemQualityType.Rare,
          overrideDescription: [
            [
              {text: 'Rare Armor', color: 'item.quality.rare'},
              {text: 'Must be Exceptional tier.'},
            ],
          ],
        },
        test: isExceptionalTierRareArmor,
      },
    ],
    target: {
      transform: (sources) => up(sources[3]),
    },
  },
];

export default createRecipes({
  type: RecipeType.Upgrade,
})(recipes);

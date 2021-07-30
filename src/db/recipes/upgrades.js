import {up} from '../../utils/up.js';
import {ItemRarityType, RecipeType} from '../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import {
  isExceptionalTierRareArmor,
  isExceptionalTierRareWeapon,
  isNormalTierRareArmor,
  isNormalTierRareWeapon,
} from '../utils/predicates.js';
import ids from '../ids/index.js';

const recipes = [
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
          rarity: ItemRarityType.Rare,
          overrideDescription: [
            [
              {text: 'Rare Weapon', color: 'item.rarity.rare'},
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
          rarity: ItemRarityType.Rare,
          overrideDescription: [
            [
              {text: 'Rare Armor', color: 'item.rarity.rare'},
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
          rarity: ItemRarityType.Rare,
          overrideDescription: [
            [
              {text: 'Rare Weapon', color: 'item.rarity.rare'},
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
          rarity: ItemRarityType.Rare,
          overrideDescription: [
            [
              {text: 'Rare Armor', color: 'item.rarity.rare'},
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

export default mapRecipeProps({
  type: RecipeType.Upgrade,
})(recipes);

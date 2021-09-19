import {ItemQualityType, RecipeType} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '1 Perfect Skull + 1 Stone of Jordan + 1 Rare Item (any type) → 1 High Quality New Rare Item (of the same type)',
    sources: [
      {
        item: {
          id: ids.PerfectSkull,
        },
      },
      {
        item: {
          id: ids.StoneOfJordan,
        },
      },
      {
        item: {
          id: ids.CrystalSword,
          quality: ItemQualityType.Rare,
        },
      },
    ],
    target: {
      transform: (sources) => sources[2],
    },
  },
  {
    name: '6 Perfect Skulls + 1 Rare Item (any type) → 1 Random Low Quality Rare Item (of the same type)',
    sources: [
      {
        item: {
          id: ids.PerfectSkull,
        },
      },
      {
        item: {
          id: ids.PerfectSkull,
        },
      },
      {
        item: {
          id: ids.PerfectSkull,
        },
      },
      {
        item: {
          id: ids.PerfectSkull,
        },
      },
      {
        item: {
          id: ids.PerfectSkull,
        },
      },
      {
        item: {
          id: ids.PerfectSkull,
        },
      },
      {
        item: {
          id: ids.CrystalSword,
          quality: ItemQualityType.Rare,
        },
      },
    ],
    target: {
      transform: (sources) => sources[6],
    },
  },
];

export default createRecipes({
  type: RecipeType.Rare,
})(recipes);

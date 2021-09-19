import {RecipeType} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '2 Bolts → 1 Arrows',
    sources: [
      {
        item: {
          id: ids.Bolts,
        },
      },
      {
        item: {
          id: ids.Bolts,
        },
      },
    ],
    target: {
      item: {
        id: ids.Arrows,
      },
    },
  },
  {
    name: '2 Arrows → 1 Bolts',
    sources: [
      {
        item: {
          id: ids.Arrows,
        },
      },
      {
        item: {
          id: ids.Arrows,
        },
      },
    ],
    target: {
      item: {
        id: ids.Bolts,
      },
    },
  },
  {
    name: '1 Spear (any type) + 1 Arrows → 1 Javelin',
    sources: [
      {
        item: {
          id: ids.Spear,
        },
      },
      {
        item: {
          id: ids.Arrows,
        },
      },
    ],
    target: {
      item: {
        id: ids.Javelin,
      },
    },
  },
  {
    name: '1 Axe (any type) + 1 Dagger → 1 Throwing Axe',
    sources: [
      {
        item: {
          id: ids.Axe,
        },
      },
      {
        item: {
          id: ids.Dagger,
        },
      },
    ],
    target: {
      item: {
        id: ids.ThrowingKnife,
      },
    },
  },
];

export default createRecipes({
  type: RecipeType.Stack,
})(recipes);

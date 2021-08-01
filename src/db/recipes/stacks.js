import {RecipeType} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
import {isAxe, isDagger, isSpear} from '../../utils/predicates.js';
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
          overrideDescription: [[{text: 'Spear (any type)'}]],
        },
        test: isSpear,
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
          overrideDescription: [[{text: 'Axe (any type)'}]],
        },
        test: isAxe,
      },
      {
        item: {
          id: ids.Dagger,
          overrideDescription: [[{text: 'Dagger (any type)'}]],
        },
        test: isDagger,
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

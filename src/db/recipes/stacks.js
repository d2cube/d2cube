import {RecipeType} from '../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import {isSpear} from '../utils/predicates.js';
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
    name: '1 Spear (any type) + 1 Arrows = → 1 Javelin',
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
];

export default mapRecipeProps({
  type: RecipeType.Stack,
})(recipes);

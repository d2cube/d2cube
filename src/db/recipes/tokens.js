import {RecipeType} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '4 Essences (1 of each type) → 1 Token of Absolution',
    sources: [
      {
        item: {
          id: ids.TwistedEssenceOfSuffering,
        },
      },
      {
        item: {
          id: ids.ChargedEssenceOfHatred,
        },
      },
      {
        item: {
          id: ids.BurningEssenceOfTerror,
        },
      },
      {
        item: {
          id: ids.FesteringEssenceOfDestruction,
        },
      },
    ],
    target: {
      item: {
        id: ids.TokenOfAbsolution,
      },
    },
  },
];

export default createRecipes({
  type: RecipeType.Token,
})(recipes);

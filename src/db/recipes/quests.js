import {RecipeType} from '../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '4 Essences (1 of each type) → 1 Token of Absolution',
    sources: [
      ids.TwistedEssenceOfSuffering,
      ids.ChargedEssenceOfHatred,
      ids.BurningEssenceOfTerror,
      ids.FesteringEssenceOfDestruction,
    ],
    target: ids.TokenOfAbsolution,
  },
];

export default mapRecipeProps({
  type: RecipeType.Quest,
})(recipes);

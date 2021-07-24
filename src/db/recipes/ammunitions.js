import {RecipeType} from '../enums/recipe-type.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '2 Bolts → 1 Arrows',
    sources: [ids.Bolts, ids.Bolts],
    target: ids.Arrows,
  },
  {
    name: '2 Arrows → 1 Bolts',
    sources: [ids.Arrows, ids.Arrows],
    target: ids.Bolts,
  },
];

export default mapRecipeProps({
  type: RecipeType.Ammunitions,
})(recipes);

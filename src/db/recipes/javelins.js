import {ItemType, RecipeType} from '../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '1 Spear (any type) + 1 Arrows = → 1 Javelin',
    sources: [
      {
        type: ItemType.Spear,
        baseId: ids.Spear,
        baseDescription: [[{text: 'Spear (any type)'}]],
      },
      ids.Arrows,
    ],
    target: ids.Javelin,
  },
];

export default mapRecipeProps({
  type: RecipeType.Javelin,
})(recipes);

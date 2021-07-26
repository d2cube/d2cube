import {ItemQualityType, RecipeType} from '../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '3 Magic Rings → 1 Magic Ring',
    sources: [
      {
        id: ids.Ring,
        quality: ItemQualityType.Magic,
      },
      {
        id: ids.Ring,
        quality: ItemQualityType.Magic,
      },
      {
        id: ids.Ring,
        quality: ItemQualityType.Magic,
      },
    ],
    target: {
      id: ids.Amulet,
      quality: ItemQualityType.Magic,
    },
  },
];

export default mapRecipeProps({
  type: RecipeType.Amulets,
})(recipes);

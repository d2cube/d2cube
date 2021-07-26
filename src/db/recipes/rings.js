import {ItemQualityType, RecipeType} from '../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '3 Magic Amulets → 1 Maigc Ring',
    sources: [
      {
        id: ids.Amulet,
        quality: ItemQualityType.Magic,
      },
      {
        id: ids.Amulet,
        quality: ItemQualityType.Magic,
      },
      {
        id: ids.Amulet,
        quality: ItemQualityType.Magic,
      },
    ],
    target: {
      id: ids.Ring,
      quality: ItemQualityType.Magic,
    },
  },
];

export default mapRecipeProps({
  type: RecipeType.Rings,
})(recipes);

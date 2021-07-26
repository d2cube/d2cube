import {ItemQualityType, PrefixType, RecipeType} from '../enums/index.js';
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
  {
    name: '6 Perfect Gems (1 of each type) → 1 Prismatic Amulet',
    sources: [
      ids.PerfectAmethyst,
      ids.PerfectDiamond,
      ids.PerfectEmerald,
      ids.PerfectRuby,
      ids.PerfectSapphire,
      ids.PerfectTopaz,
    ],
    target: {
      id: ids.Amulet,
      quality: ItemQualityType.Magic,
      prefix: PrefixType.Prismatic,
    },
  },
];

export default mapRecipeProps({
  type: RecipeType.Amulet,
})(recipes);

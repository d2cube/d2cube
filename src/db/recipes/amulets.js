import {ItemQualityType, PrefixType, RecipeType} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
import {isMagicRing} from '../../utils/predicates.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '3 Magic Rings → 1 Magic Ring',
    sources: [
      {
        item: {
          id: ids.Ring,
          quality: ItemQualityType.Magic,
        },
        test: isMagicRing,
      },
      {
        item: {
          id: ids.Ring,
          quality: ItemQualityType.Magic,
        },
        test: isMagicRing,
      },
      {
        item: {
          id: ids.Ring,
          quality: ItemQualityType.Magic,
        },
        test: isMagicRing,
      },
    ],
    target: {
      item: {
        id: ids.Amulet,
        quality: ItemQualityType.Magic,
      },
    },
  },
  {
    name: '6 Perfect Gems (1 of each type) → 1 Prismatic Amulet',
    sources: [
      {
        item: {
          id: ids.PerfectAmethyst,
        },
      },
      {
        item: {
          id: ids.PerfectDiamond,
        },
      },
      {
        item: {
          id: ids.PerfectEmerald,
        },
      },
      {
        item: {
          id: ids.PerfectRuby,
        },
      },
      {
        item: {
          id: ids.PerfectSapphire,
        },
      },
      {
        item: {
          id: ids.PerfectTopaz,
        },
      },
    ],
    target: {
      item: {
        id: ids.Amulet,
        quality: ItemQualityType.Magic,
        prefix: PrefixType.Prismatic,
      },
    },
  },
];

export default createRecipes({
  type: RecipeType.Amulet,
})(recipes);

import {ItemQualityType, PrefixType, RecipeType} from '../enums/index.js';
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
  {
    name: '1 Magic Ring + 1 Perfect Topaz + 1 Rejuvenation Potion → 1 Coral Ring',
    sources: [
      {
        id: ids.Ring,
        quality: ItemQualityType.Magic,
      },
      {
        id: ids.PerfectTopaz,
      },
      {
        id: ids.RejuvenationPotion,
      },
    ],
    target: {
      id: ids.Ring,
      quality: ItemQualityType.Magic,
      prefix: PrefixType.Coral,
    },
  },
  {
    name: '1 Magic Ring + 1 Perfect Ruby + 1 Exploding Potion → 1 Garnet Ring',
    sources: [
      {
        id: ids.Ring,
        quality: ItemQualityType.Magic,
      },
      {
        id: ids.PerfectRuby,
      },
      {
        id: ids.ExplodingPotion,
      },
    ],
    target: {
      id: ids.Ring,
      quality: ItemQualityType.Magic,
      prefix: PrefixType.Garnet,
    },
  },
  {
    name: '1 Magic Ring + 1 Perfect Sapphire + 1 Thawing Potion → 1 Cobalt Ring',
    sources: [
      {
        id: ids.Ring,
        quality: ItemQualityType.Magic,
      },
      {
        id: ids.PerfectSapphire,
      },
      {
        id: ids.ThawingPotion,
      },
    ],
    target: {
      id: ids.Ring,
      quality: ItemQualityType.Magic,
      prefix: PrefixType.Cobalt,
    },
  },
  {
    name: '1 Magic Ring + 1 Perfect Emerald + 1 Antidote Potion → 1 Jade Ring',
    sources: [
      {
        id: ids.Ring,
        quality: ItemQualityType.Magic,
      },
      {
        id: ids.PerfectEmerald,
      },
      {
        id: ids.AntidotePotion,
      },
    ],
    target: {
      id: ids.Ring,
      quality: ItemQualityType.Magic,
      prefix: PrefixType.Jade,
    },
  },
];

export default mapRecipeProps({
  type: RecipeType.Ring,
})(recipes);

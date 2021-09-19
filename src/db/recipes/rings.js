import {ItemQualityType, PrefixType, RecipeType} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '3 Magic Amulets → 1 Magic Ring',
    sources: [
      {
        item: {
          id: ids.Amulet,
          quality: ItemQualityType.Magic,
        },
      },
      {
        item: {
          id: ids.Amulet,
          quality: ItemQualityType.Magic,
        },
      },
      {
        item: {
          id: ids.Amulet,
          quality: ItemQualityType.Magic,
        },
      },
    ],
    target: {
      item: {
        id: ids.Ring,
        quality: ItemQualityType.Magic,
      },
    },
  },
  {
    name: '1 Magic Ring + 1 Perfect Topaz + 1 Rejuvenation Potion → 1 Coral Ring',
    sources: [
      {
        item: {
          id: ids.Ring,
          quality: ItemQualityType.Magic,
        },
      },
      {
        item: {
          id: ids.PerfectTopaz,
        },
      },
      {
        item: {
          id: ids.RejuvenationPotion,
        },
      },
    ],
    target: {
      item: {
        id: ids.Ring,
        quality: ItemQualityType.Magic,
        prefix: PrefixType.Coral,
      },
    },
  },
  {
    name: '1 Magic Ring + 1 Perfect Ruby + 1 Exploding Potion → 1 Garnet Ring',
    sources: [
      {
        item: {
          id: ids.Ring,
          quality: ItemQualityType.Magic,
        },
      },
      {
        item: {
          id: ids.PerfectRuby,
        },
      },
      {
        item: {
          id: ids.ExplodingPotion,
        },
      },
    ],
    target: {
      item: {
        id: ids.Ring,
        quality: ItemQualityType.Magic,
        prefix: PrefixType.Garnet,
      },
    },
  },
  {
    name: '1 Magic Ring + 1 Perfect Sapphire + 1 Thawing Potion → 1 Cobalt Ring',
    sources: [
      {
        item: {
          id: ids.Ring,
          quality: ItemQualityType.Magic,
        },
      },
      {
        item: {
          id: ids.PerfectSapphire,
        },
      },
      {
        item: {id: ids.ThawingPotion},
      },
    ],
    target: {
      item: {
        id: ids.Ring,
        quality: ItemQualityType.Magic,
        prefix: PrefixType.Cobalt,
      },
    },
  },
  {
    name: '1 Magic Ring + 1 Perfect Emerald + 1 Antidote Potion → 1 Jade Ring',
    sources: [
      {
        item: {
          id: ids.Ring,
          quality: ItemQualityType.Magic,
        },
      },
      {
        item: {id: ids.PerfectEmerald},
      },
      {
        item: {id: ids.AntidotePotion},
      },
    ],
    target: {
      item: {
        id: ids.Ring,
        quality: ItemQualityType.Magic,
        prefix: PrefixType.Jade,
      },
    },
  },
];

export default createRecipes({
  type: RecipeType.Ring,
})(recipes);

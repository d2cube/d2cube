import {RecipeType} from '../../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '3 Chipped Ruby → 1 Flawed Ruby',
    sources: [
      {
        item: {
          id: ids.ChippedRuby,
        },
      },
      {
        item: {
          id: ids.ChippedRuby,
        },
      },
      {
        item: {
          id: ids.ChippedRuby,
        },
      },
    ],
    target: {
      item: {
        id: ids.FlawedRuby,
      },
    },
  },
  {
    name: '3 Chipped Sapphire → 1 Flawed Sapphire',
    sources: [
      {
        item: {
          id: ids.ChippedSapphire,
        },
      },
      {
        item: {
          id: ids.ChippedSapphire,
        },
      },
      {
        item: {
          id: ids.ChippedSapphire,
        },
      },
    ],
    target: {
      item: {
        id: ids.FlawedSapphire,
      },
    },
  },
  {
    name: '3 Chipped Topaz → 1 Flawed Topaz',
    sources: [
      {
        item: {
          id: ids.ChippedTopaz,
        },
      },
      {
        item: {
          id: ids.ChippedTopaz,
        },
      },
      {
        item: {
          id: ids.ChippedTopaz,
        },
      },
    ],
    target: {
      item: {
        id: ids.FlawedTopaz,
      },
    },
  },
  {
    name: '3 Chipped Emerald → 1 Flawed Emerald',
    sources: [
      {
        item: {
          id: ids.ChippedEmerald,
        },
      },
      {
        item: {
          id: ids.ChippedEmerald,
        },
      },
      {
        item: {
          id: ids.ChippedEmerald,
        },
      },
    ],
    target: {
      item: {
        id: ids.FlawedEmerald,
      },
    },
  },
  {
    name: '3 Chipped Diamond → 1 Flawed Diamond',
    sources: [
      {
        item: {
          id: ids.ChippedDiamond,
        },
      },
      {
        item: {
          id: ids.ChippedDiamond,
        },
      },
      {
        item: {
          id: ids.ChippedDiamond,
        },
      },
    ],
    target: {
      item: {
        id: ids.FlawedDiamond,
      },
    },
  },
  {
    name: '3 Chipped Amethyst → 1 Flawed Amethyst',
    sources: [
      {
        item: {
          id: ids.ChippedAmethyst,
        },
      },
      {
        item: {
          id: ids.ChippedAmethyst,
        },
      },
      {
        item: {
          id: ids.ChippedAmethyst,
        },
      },
    ],
    target: {
      item: {
        id: ids.FlawedAmethyst,
      },
    },
  },
  {
    name: '3 Chipped Skull → 1 Flawed Skull',
    sources: [
      {
        item: {
          id: ids.ChippedSkull,
        },
      },
      {
        item: {
          id: ids.ChippedSkull,
        },
      },
      {
        item: {
          id: ids.ChippedSkull,
        },
      },
    ],
    target: {
      item: {
        id: ids.FlawedSkull,
      },
    },
  },
  {
    name: '3 Flawed Ruby → 1 Ruby',
    sources: [
      {
        item: {
          id: ids.FlawedRuby,
        },
      },
      {
        item: {
          id: ids.FlawedRuby,
        },
      },
      {
        item: {
          id: ids.FlawedRuby,
        },
      },
    ],
    target: {
      item: {
        id: ids.Ruby,
      },
    },
  },
  {
    name: '3 Flawed Sapphire → 1 Sapphire',
    sources: [
      {
        item: {
          id: ids.FlawedSapphire,
        },
      },
      {
        item: {
          id: ids.FlawedSapphire,
        },
      },
      {
        item: {
          id: ids.FlawedSapphire,
        },
      },
    ],
    target: {
      item: {
        id: ids.Sapphire,
      },
    },
  },
  {
    name: '3 Flawed Topaz → 1 Topaz',
    sources: [
      {
        item: {
          id: ids.FlawedTopaz,
        },
      },
      {
        item: {
          id: ids.FlawedTopaz,
        },
      },
      {
        item: {
          id: ids.FlawedTopaz,
        },
      },
    ],
    target: {
      item: {
        id: ids.Topaz,
      },
    },
  },
  {
    name: '3 Flawed Emerald → 1 Emerald',
    sources: [
      {
        item: {
          id: ids.FlawedEmerald,
        },
      },
      {
        item: {
          id: ids.FlawedEmerald,
        },
      },
      {
        item: {
          id: ids.FlawedEmerald,
        },
      },
    ],
    target: {
      item: {
        id: ids.Emerald,
      },
    },
  },
  {
    name: '3 Flawed Diamond → 1 Diamond',
    sources: [
      {
        item: {
          id: ids.FlawedDiamond,
        },
      },
      {
        item: {
          id: ids.FlawedDiamond,
        },
      },
      {
        item: {
          id: ids.FlawedDiamond,
        },
      },
    ],
    target: {
      item: {
        id: ids.Diamond,
      },
    },
  },
  {
    name: '3 Flawed Amethyst → 1 Amethyst',
    sources: [
      {
        item: {
          id: ids.FlawedAmethyst,
        },
      },
      {
        item: {
          id: ids.FlawedAmethyst,
        },
      },
      {
        item: {
          id: ids.FlawedAmethyst,
        },
      },
    ],
    target: {
      item: {
        id: ids.Amethyst,
      },
    },
  },
  {
    name: '3 Flawed Skull → 1 Skull',
    sources: [
      {
        item: {
          id: ids.FlawedSkull,
        },
      },
      {
        item: {
          id: ids.FlawedSkull,
        },
      },
      {
        item: {
          id: ids.FlawedSkull,
        },
      },
    ],
    target: {
      item: {
        id: ids.Skull,
      },
    },
  },
  {
    name: '3 Ruby → 1 Flawless Ruby',
    sources: [
      {
        item: {
          id: ids.Ruby,
        },
      },
      {
        item: {
          id: ids.Ruby,
        },
      },
      {
        item: {
          id: ids.Ruby,
        },
      },
    ],
    target: {
      item: {
        id: ids.FlawlessRuby,
      },
    },
  },
  {
    name: '3 Sapphire → 1 Flawless Sapphire',
    sources: [
      {
        item: {
          id: ids.Sapphire,
        },
      },
      {
        item: {
          id: ids.Sapphire,
        },
      },
      {
        item: {
          id: ids.Sapphire,
        },
      },
    ],
    target: {
      item: {
        id: ids.FlawlessSapphire,
      },
    },
  },
  {
    name: '3 Topaz → 1 Flawless Topaz',
    sources: [
      {
        item: {
          id: ids.Topaz,
        },
      },
      {
        item: {
          id: ids.Topaz,
        },
      },
      {
        item: {
          id: ids.Topaz,
        },
      },
    ],
    target: {
      item: {
        id: ids.FlawlessTopaz,
      },
    },
  },
  {
    name: '3 Emerald → 1 Flawless Emerald',
    sources: [
      {
        item: {
          id: ids.Emerald,
        },
      },
      {
        item: {
          id: ids.Emerald,
        },
      },
      {
        item: {
          id: ids.Emerald,
        },
      },
    ],
    target: {
      item: {
        id: ids.FlawlessEmerald,
      },
    },
  },
  {
    name: '3 Diamond → 1 Flawless Diamond',
    sources: [
      {
        item: {
          id: ids.Diamond,
        },
      },
      {
        item: {
          id: ids.Diamond,
        },
      },
      {
        item: {
          id: ids.Diamond,
        },
      },
    ],
    target: {
      item: {
        id: ids.FlawlessDiamond,
      },
    },
  },
  {
    name: '3 Amethyst → 1 Flawless Amethyst',
    sources: [
      {
        item: {
          id: ids.Amethyst,
        },
      },
      {
        item: {
          id: ids.Amethyst,
        },
      },
      {
        item: {
          id: ids.Amethyst,
        },
      },
    ],
    target: {
      item: {
        id: ids.FlawlessAmethyst,
      },
    },
  },
  {
    name: '3 Skull → 1 Flawless Skull',
    sources: [
      {
        item: {
          id: ids.Skull,
        },
      },
      {
        item: {
          id: ids.Skull,
        },
      },
      {
        item: {
          id: ids.Skull,
        },
      },
    ],
    target: {
      item: {
        id: ids.FlawlessSkull,
      },
    },
  },
  {
    name: '3 Flawless Ruby → 1  Perfect Ruby',
    sources: [
      {
        item: {
          id: ids.FlawlessRuby,
        },
      },
      {
        item: {
          id: ids.FlawlessRuby,
        },
      },
      {
        item: {
          id: ids.FlawlessRuby,
        },
      },
    ],
    target: {
      item: {
        id: ids.PerfectRuby,
      },
    },
  },
  {
    name: '3 Flawless Sapphire → 1  Perfect Sapphire',
    sources: [
      {
        item: {
          id: ids.FlawlessSapphire,
        },
      },
      {
        item: {
          id: ids.FlawlessSapphire,
        },
      },
      {
        item: {
          id: ids.FlawlessSapphire,
        },
      },
    ],
    target: {
      item: {
        id: ids.PerfectSapphire,
      },
    },
  },
  {
    name: '3 Flawless Topaz → 1  Perfect Topaz',
    sources: [
      {
        item: {
          id: ids.FlawlessTopaz,
        },
      },
      {
        item: {
          id: ids.FlawlessTopaz,
        },
      },
      {
        item: {
          id: ids.FlawlessTopaz,
        },
      },
    ],
    target: {
      item: {
        id: ids.PerfectTopaz,
      },
    },
  },
  {
    name: '3 Flawless Emerald → 1  Perfect Emerald',
    sources: [
      {
        item: {
          id: ids.FlawlessEmerald,
        },
      },
      {
        item: {
          id: ids.FlawlessEmerald,
        },
      },
      {
        item: {
          id: ids.FlawlessEmerald,
        },
      },
    ],
    target: {
      item: {
        id: ids.PerfectEmerald,
      },
    },
  },
  {
    name: '3 Flawless Diamond → 1  Perfect Diamond',
    sources: [
      {
        item: {
          id: ids.FlawlessDiamond,
        },
      },
      {
        item: {
          id: ids.FlawlessDiamond,
        },
      },
      {
        item: {
          id: ids.FlawlessDiamond,
        },
      },
    ],
    target: {
      item: {
        id: ids.PerfectDiamond,
      },
    },
  },
  {
    name: '3 Flawless Amethyst → 1  Perfect Amethyst',
    sources: [
      {
        item: {
          id: ids.FlawlessAmethyst,
        },
      },
      {
        item: {
          id: ids.FlawlessAmethyst,
        },
      },
      {
        item: {
          id: ids.FlawlessAmethyst,
        },
      },
    ],
    target: {
      item: {
        id: ids.PerfectAmethyst,
      },
    },
  },
  {
    name: '3 Flawless Skull → 1  Perfect Skull',
    sources: [
      {
        item: {
          id: ids.FlawlessSkull,
        },
      },
      {
        item: {
          id: ids.FlawlessSkull,
        },
      },
      {
        item: {
          id: ids.FlawlessSkull,
        },
      },
    ],
    target: {
      item: {
        id: ids.PerfectSkull,
      },
    },
  },
];

export default mapRecipeProps({
  type: RecipeType.Gem,
})(recipes);

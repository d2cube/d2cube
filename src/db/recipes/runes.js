import {RecipeType} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '3 El Runes → 1 Eld Rune',
    sources: [
      {
        item: {
          id: ids.El,
        },
      },
      {
        item: {
          id: ids.El,
        },
      },
      {
        item: {
          id: ids.El,
        },
      },
    ],
    target: {
      item: {
        id: ids.Eld,
      },
    },
  },
  {
    name: '3 Eld Runes → 1 Tir Rune',
    sources: [
      {
        item: {
          id: ids.Eld,
        },
      },
      {
        item: {
          id: ids.Eld,
        },
      },
      {
        item: {
          id: ids.Eld,
        },
      },
    ],
    target: {
      item: {
        id: ids.Tir,
      },
    },
  },
  {
    name: '3 Tir Runes → 1 Nef Rune',
    sources: [
      {
        item: {
          id: ids.Tir,
        },
      },
      {
        item: {
          id: ids.Tir,
        },
      },
      {
        item: {
          id: ids.Tir,
        },
      },
    ],
    target: {
      item: {
        id: ids.Nef,
      },
    },
  },
  {
    name: '3 Nef Runes → 1 Eth Rune',
    sources: [
      {
        item: {
          id: ids.Nef,
        },
      },
      {
        item: {
          id: ids.Nef,
        },
      },
      {
        item: {
          id: ids.Nef,
        },
      },
    ],
    target: {
      item: {
        id: ids.Eth,
      },
    },
  },
  {
    name: '3 Eth Runes → 1 Ith Rune',
    sources: [
      {
        item: {
          id: ids.Eth,
        },
      },
      {
        item: {
          id: ids.Eth,
        },
      },
      {
        item: {
          id: ids.Eth,
        },
      },
    ],
    target: {
      item: {
        id: ids.Ith,
      },
    },
  },
  {
    name: '3 Ith Runes → 1 Tal Rune',
    sources: [
      {
        item: {
          id: ids.Ith,
        },
      },
      {
        item: {
          id: ids.Ith,
        },
      },
      {
        item: {
          id: ids.Ith,
        },
      },
    ],
    target: {
      item: {
        id: ids.Tal,
      },
    },
  },
  {
    name: '3 Tal Runes → 1 Ral Rune',
    sources: [
      {
        item: {
          id: ids.Tal,
        },
      },
      {
        item: {
          id: ids.Tal,
        },
      },
      {
        item: {
          id: ids.Tal,
        },
      },
    ],
    target: {
      item: {
        id: ids.Ral,
      },
    },
  },
  {
    name: '3 Ral Runes → 1 Ort Rune',
    sources: [
      {
        item: {
          id: ids.Ral,
        },
      },
      {
        item: {
          id: ids.Ral,
        },
      },
      {
        item: {
          id: ids.Ral,
        },
      },
    ],
    target: {
      item: {
        id: ids.Ort,
      },
    },
  },
  {
    name: '3 Ort Runes → 1 Thul Rune',
    sources: [
      {
        item: {
          id: ids.Ort,
        },
      },
      {
        item: {
          id: ids.Ort,
        },
      },
      {
        item: {
          id: ids.Ort,
        },
      },
    ],
    target: {
      item: {
        id: ids.Thul,
      },
    },
  },
  {
    name: '3 Thul Runes + 1 Chipped Topaz → 1 Amn Rune',
    sources: [
      {
        item: {
          id: ids.Thul,
        },
      },
      {
        item: {
          id: ids.Thul,
        },
      },
      {
        item: {
          id: ids.Thul,
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
        id: ids.Amn,
      },
    },
  },
  {
    name: '3 Amn Runes + 1 Chipped Amethyst → 1 Sol Rune',
    sources: [
      {
        item: {
          id: ids.Amn,
        },
      },
      {
        item: {
          id: ids.Amn,
        },
      },
      {
        item: {
          id: ids.Amn,
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
        id: ids.Sol,
      },
    },
  },
  {
    name: '3 Sol Runes + 1 Chipped Sapphire → 1 Shael Rune',
    sources: [
      {
        item: {
          id: ids.Sol,
        },
      },
      {
        item: {
          id: ids.Sol,
        },
      },
      {
        item: {
          id: ids.Sol,
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
        id: ids.Shael,
      },
    },
  },
  {
    name: '3 Shael Runes + 1 Chipped Ruby → 1 Dol Rune',
    sources: [
      {
        item: {
          id: ids.Shael,
        },
      },
      {
        item: {
          id: ids.Shael,
        },
      },
      {
        item: {
          id: ids.Shael,
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
        id: ids.Dol,
      },
    },
  },
  {
    name: '3 Dol Runes + 1 Chipped Emerald → 1 Hel Rune',
    sources: [
      {
        item: {
          id: ids.Dol,
        },
      },
      {
        item: {
          id: ids.Dol,
        },
      },
      {
        item: {
          id: ids.Dol,
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
        id: ids.Hel,
      },
    },
  },
  {
    name: '3 Hel Runes + 1 Chipped Diamond → 1 Io Rune',
    sources: [
      {
        item: {
          id: ids.Hel,
        },
      },
      {
        item: {
          id: ids.Hel,
        },
      },
      {
        item: {
          id: ids.Hel,
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
        id: ids.Io,
      },
    },
  },
  {
    name: '3 Io Runes + 1 Flawed Topaz → 1 Lum Rune',
    sources: [
      {
        item: {
          id: ids.Io,
        },
      },
      {
        item: {
          id: ids.Io,
        },
      },
      {
        item: {
          id: ids.Io,
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
        id: ids.Lum,
      },
    },
  },
  {
    name: '3 Lum Runes + 1 Flawed Amethyst → 1 Ko Rune',
    sources: [
      {
        item: {
          id: ids.Lum,
        },
      },
      {
        item: {
          id: ids.Lum,
        },
      },
      {
        item: {
          id: ids.Lum,
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
        id: ids.Ko,
      },
    },
  },
  {
    name: '3 Ko Runes + 1 Flawed Sapphire → 1 Fal Rune',
    sources: [
      {
        item: {
          id: ids.Ko,
        },
      },
      {
        item: {
          id: ids.Ko,
        },
      },
      {
        item: {
          id: ids.Ko,
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
        id: ids.Fal,
      },
    },
  },
  {
    name: '3 Fal Runes + 1 Flawed Ruby → 1 Lem Rune',
    sources: [
      {
        item: {
          id: ids.Fal,
        },
      },
      {
        item: {
          id: ids.Fal,
        },
      },
      {
        item: {
          id: ids.Fal,
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
        id: ids.Lem,
      },
    },
  },
  {
    name: '3 Lem Runes + 1 Flawed Emerald → 1 Pul Rune',
    sources: [
      {
        item: {
          id: ids.Lem,
        },
      },
      {
        item: {
          id: ids.Lem,
        },
      },
      {
        item: {
          id: ids.Lem,
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
        id: ids.Pul,
      },
    },
  },
  {
    name: '2 Pul Runes + 1 Flawed Diamond → 1 Um Rune',
    sources: [
      {
        item: {
          id: ids.Pul,
        },
      },
      {
        item: {
          id: ids.Pul,
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
        id: ids.Um,
      },
    },
  },
  {
    name: '2 Um Runes + 1 Topaz → 1 Mal Rune',
    sources: [
      {
        item: {
          id: ids.Um,
        },
      },
      {
        item: {
          id: ids.Um,
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
        id: ids.Mal,
      },
    },
  },
  {
    name: '2 Mal Runes + 1 Amethyst → 1 Ist Rune',
    sources: [
      {
        item: {
          id: ids.Mal,
        },
      },
      {
        item: {
          id: ids.Mal,
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
        id: ids.Ist,
      },
    },
  },
  {
    name: '2 Ist Runes + 1 Sapphire → 1 Gul Rune',
    sources: [
      {
        item: {
          id: ids.Ist,
        },
      },
      {
        item: {
          id: ids.Ist,
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
        id: ids.Gul,
      },
    },
  },
  {
    name: '2 Gul Runes + 1 Ruby → 1 Vex Rune',
    sources: [
      {
        item: {
          id: ids.Gul,
        },
      },
      {
        item: {
          id: ids.Gul,
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
        id: ids.Vex,
      },
    },
  },
  {
    name: '2 Vex Runes + 1 Emerald → 1 Ohm Rune',
    sources: [
      {
        item: {
          id: ids.Vex,
        },
      },
      {
        item: {
          id: ids.Vex,
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
        id: ids.Ohm,
      },
    },
  },
  {
    name: '2 Ohm Runes + 1 Diamond → 1 Lo Rune',
    sources: [
      {
        item: {
          id: ids.Ohm,
        },
      },
      {
        item: {
          id: ids.Ohm,
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
        id: ids.Lo,
      },
    },
  },
  {
    name: '2 Lo Runes + 1 Flawless Topaz → 1 Sur Rune',
    sources: [
      {
        item: {
          id: ids.Lo,
        },
      },
      {
        item: {
          id: ids.Lo,
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
        id: ids.Sur,
      },
    },
  },
  {
    name: '2 Sur Runes + 1 Flawless Amethyst → 1 Ber Rune',
    sources: [
      {
        item: {
          id: ids.Sur,
        },
      },
      {
        item: {
          id: ids.Sur,
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
        id: ids.Ber,
      },
    },
  },
  {
    name: '2 Ber Runes + 1 Flawless Sapphire → 1 Jah Rune',
    sources: [
      {
        item: {
          id: ids.Ber,
        },
      },
      {
        item: {
          id: ids.Ber,
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
        id: ids.Jah,
      },
    },
  },
  {
    name: '2 Jah Runes + 1 Flawless Ruby → 1 Cham Rune',
    sources: [
      {
        item: {
          id: ids.Jah,
        },
      },
      {
        item: {
          id: ids.Jah,
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
        id: ids.Cham,
      },
    },
  },
  {
    name: '2 Cham Runes + 1 Flawless Emerald → 1 Zod Rune',
    sources: [
      {
        item: {
          id: ids.Cham,
        },
      },
      {
        item: {
          id: ids.Cham,
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
        id: ids.Zod,
      },
    },
  },
];

export default createRecipes({
  type: RecipeType.Rune,
})(recipes);

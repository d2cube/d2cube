import {merge} from 'uinix-fp';

import {fillNull} from '../../utils/fp.js';
import {random} from '../../utils/random.js';
import {
  BasePropertyType,
  ItemQualityType,
  RecipeType,
} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '3 Perfect Skulls + 1 Stone of Jordan + 1 Rare Item → Add 1 Socket to Rare Item',
    sources: [
      {
        item: {
          id: ids.PerfectSkull,
        },
      },
      {
        item: {
          id: ids.PerfectSkull,
        },
      },
      {
        item: {
          id: ids.PerfectSkull,
        },
      },
      {
        item: {
          id: ids.StoneOfJordan,
        },
      },
      {
        item: {
          id: ids.CrystalSword,
          quality: ItemQualityType.Rare,
        },
      },
    ],
    target: {
      transform: (sources) =>
        merge(sources[4])({
          sockets: [null],
        }),
    },
  },
  {
    name: '3 Chipped Gems + 1 Magic Weapon (any type) → Socketed Magic Weapon',
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
      {
        item: {
          id: ids.CrystalSword,
          quality: ItemQualityType.Magic,
        },
      },
    ],
    target: {
      transform: (sources) =>
        merge(sources[3])({
          sockets: fillNull(random(1, 2)),
        }),
    },
  },
  {
    name: '3 Flawless Gems + 1 Magic Weapon (any type) → Socketed Magic Weapon',
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
      {
        item: {
          id: ids.CrystalSword,
          quality: ItemQualityType.Magic,
        },
      },
    ],
    target: {
      transform: (sources) =>
        merge(sources[3])({
          sockets: fillNull(random(1, 2)),
        }),
    },
  },
  {
    name: '1 Hel Rune + Scroll of Town Portal → Remove items from sockets',
    sources: [
      {
        item: {
          id: ids.Hel,
        },
      },
      {
        item: {
          id: ids.ScrollOfTownPortal,
        },
      },
      {
        item: {
          id: ids.CrystalSword,
          sockets: ['Jah', 'Ber', 'Ist'],
        },
      },
    ],
    target: {
      transform: (sources) => {
        const item = sources[2];
        return merge(item)({
          sockets: item.sockets.map(() => null),
        });
      },
    },
  },
  {
    name: '1 Tal Rune + 1 Thul Rune + 1 Perfect Topaz + 1 Normal Body Armor → Socketed Body Armor (of the same type)',
    sources: [
      {
        item: {
          id: ids.Tal,
        },
      },
      {
        item: {
          id: ids.Thul,
        },
      },
      {
        item: {
          id: ids.PerfectTopaz,
        },
      },
      {
        item: {
          id: ids.ArchonPlate,
          quality: ItemQualityType.Normal,
        },
      },
    ],
    target: {
      transform: (sources) => {
        const item = sources[3];
        const maxSockets = item.properties[BasePropertyType.MaxSockets];
        return merge(item)({
          sockets: fillNull(random(1, Math.min(maxSockets, 4))),
        });
      },
    },
  },
  {
    name: '1 Ral Rune + 1 Amn Rune + 1 Perfect Amethyst + 1 Normal Weapon → Socketed Weapon (of the same type)',
    sources: [
      {
        item: {
          id: ids.Ral,
        },
      },
      {
        item: {
          id: ids.Amn,
        },
      },
      {
        item: {
          id: ids.PerfectAmethyst,
        },
      },
      {
        item: {
          id: ids.CrystalSword,
          quality: ItemQualityType.Normal,
        },
      },
    ],
    target: {
      transform: (sources) => {
        const item = sources[3];
        const maxSockets = item.properties[BasePropertyType.MaxSockets];
        return merge(item)({
          sockets: fillNull(random(1, Math.min(maxSockets, 6))),
        });
      },
    },
  },
  {
    name: '1 Ral Rune + 1 Thul Rune + 1 Perfect Sapphire + 1 Normal Helm → Socketed Helm (of the same type)',
    sources: [
      {
        item: {
          id: ids.Ral,
        },
      },
      {
        item: {
          id: ids.Thul,
        },
      },
      {
        item: {
          id: ids.PerfectSapphire,
        },
      },
      {
        item: {
          id: ids.Crown,
          quality: ItemQualityType.Normal,
        },
      },
    ],
    target: {
      transform: (sources) => {
        const item = sources[3];
        const maxSockets = item.properties[BasePropertyType.MaxSockets];
        return merge(item)({
          sockets: fillNull(random(1, Math.min(maxSockets, 3))),
        });
      },
    },
  },
  {
    name: '1 Tal Rune + 1 Amn Rune + 1 Perfect Ruby + 1 Normal Shield → Socketed Shield (of the same type)',
    sources: [
      {
        item: {
          id: ids.Tal,
        },
      },
      {
        item: {
          id: ids.Amn,
        },
      },
      {
        item: {
          id: ids.PerfectRuby,
        },
      },
      {
        item: {
          id: ids.Monarch,
          quality: ItemQualityType.Normal,
        },
      },
    ],
    target: {
      transform: (sources) => {
        const item = sources[3];
        const maxSockets = item.properties[BasePropertyType.MaxSockets];
        return merge(item)({
          sockets: fillNull(random(1, Math.min(maxSockets, 4))),
        });
      },
    },
  },
];

export default createRecipes({
  type: RecipeType.Socket,
})(recipes);

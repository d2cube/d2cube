import {merge} from 'uinix-fp';

import {ItemRarityType, RecipeType} from '../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import {
  hasSockets,
  isChippedGem,
  isMagicWeapon,
  isSocketableRare,
} from '../utils/predicates.js';
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
          rarity: ItemRarityType.Rare,
          overrideDescription: [
            [{text: 'Rare Item', color: 'item.rarity.rare'}],
            [{text: 'Item must be socketable and have no initial sockets.'}],
          ],
        },
        test: isSocketableRare,
      },
    ],
    target: {
      transform: (sources) => {
        const {item} = sources[4];
        return merge(item)({
          sockets: [null],
        });
      },
    },
  },
  {
    name: '3 Chipped Gems + 1 Magic Weapon (any type) → Socketed Magic Weapon',
    sources: [
      {
        item: {
          id: ids.ChippedDiamond,
          overrideDescription: [[{text: 'Chipped Gem (any type)'}]],
        },
        test: isChippedGem,
      },
      {
        item: {
          id: ids.ChippedDiamond,
          overrideDescription: [[{text: 'Chipped Gem (any type)'}]],
        },
        test: isChippedGem,
      },
      {
        item: {
          id: ids.ChippedDiamond,
          overrideDescription: [[{text: 'Chipped Gem (any type)'}]],
        },
        test: isChippedGem,
      },
      {
        item: {
          id: ids.CrystalSword,
          rarity: ItemRarityType.Magic,
          overrideDescription: [
            [{text: 'Magic Weapon', color: 'item.rarity.magic'}],
            [
              {text: '1-2 sockets will be added.'},
              {text: 'Properties will be rerolled'},
            ],
          ],
        },
        test: isMagicWeapon,
      },
    ],
    target: {
      transform: (sources) => {
        const {item} = sources[3];
        return merge(item)({
          sockets: [null, null],
        });
      },
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
          overrideDescription: [
            [
              {
                text: 'Any item with sockets.  This will destroy any socketed items.',
              },
            ],
          ],
          sockets: ['Jah', 'Ber', 'Ist'],
        },
        test: hasSockets,
      },
    ],
    target: {
      transform: (sources) => {
        const {item} = sources[2];
        return merge(item)({
          sockets: item.sockets.map(() => null),
        });
      },
    },
  },
];

export default mapRecipeProps({
  type: RecipeType.Socket,
})(recipes);

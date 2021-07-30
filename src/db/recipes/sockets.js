import {merge} from 'uinix-fp';

import {roll} from '../../utils/roll.js';
import {ItemPropertyType, ItemRarityType, RecipeType} from '../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import {
  isChippedGem,
  isFlawlessGem,
  isMagicWeapon,
  isSocketed,
  isUnsocketedNormalBodyArmor,
  isUnsocketedRare,
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
        test: isUnsocketedRare,
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
              {text: 'Always creates an ilvl 25 weapon'},
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
          sockets: Array.from({length: roll(1, 2)}).map(() => null),
        });
      },
    },
  },
  {
    name: '3 Flawless Gems + 1 Magic Weapon (any type) → Socketed Magic Weapon',
    sources: [
      {
        item: {
          id: ids.FlawlessDiamond,
          overrideDescription: [[{text: 'Flawless Gem (any type)'}]],
        },
        test: isFlawlessGem,
      },
      {
        item: {
          id: ids.FlawlessDiamond,
          overrideDescription: [[{text: 'Flawless Gem (any type)'}]],
        },
        test: isFlawlessGem,
      },
      {
        item: {
          id: ids.FlawlessDiamond,
          overrideDescription: [[{text: 'Flawless Gem (any type)'}]],
        },
        test: isFlawlessGem,
      },
      {
        item: {
          id: ids.CrystalSword,
          rarity: ItemRarityType.Magic,
          overrideDescription: [
            [{text: 'Magic Weapon', color: 'item.rarity.magic'}],
            [
              {text: 'Always creates an ilvl 30 weapon'},
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
          sockets: Array.from({length: roll(1, 2)}).map(() => null),
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
        test: isSocketed,
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
          id: ids.DuskShroud,
          rarity: ItemRarityType.Normal,
          overrideDescription: [
            [
              {text: 'Adds 1-4 sockets to an unsocketed normal body armor.'},
              {text: 'Does not work with low-quality or superior armor.'},
            ],
          ],
        },
        test: isUnsocketedNormalBodyArmor,
      },
    ],
    target: {
      transform: (sources) => {
        const {item} = sources[3];
        const maxSockets = item.properties[ItemPropertyType.MaxSockets];
        return merge(item)({
          sockets: Array.from({length: roll(1, Math.min(maxSockets, 4))}).map(
            () => null,
          ),
        });
      },
    },
  },
];

export default mapRecipeProps({
  type: RecipeType.Socket,
})(recipes);

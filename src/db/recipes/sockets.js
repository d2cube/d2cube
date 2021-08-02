import {merge} from 'uinix-fp';

import {fillNull} from '../../utils/fp.js';
import {random} from '../../utils/random.js';
import {
  BasePropertyType,
  ItemQualityType,
  RecipeType,
} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
import {
  isChippedGem,
  isFlawlessGem,
  isMagicWeapon,
  isSocketed,
  isUnsocketedNormalBodyArmor,
  isUnsocketedNormalHelm,
  isUnsocketedNormalShield,
  isUnsocketedNormalWeapon,
  isUnsocketedRare,
} from '../../utils/predicates.js';
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
          overrideDescription: [
            [{text: 'Rare Item', color: 'item.quality.rare'}],
            [{text: 'Item must be socketable and have no initial sockets.'}],
          ],
        },
        test: isUnsocketedRare,
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
          quality: ItemQualityType.Magic,
          overrideDescription: [
            [{text: 'Magic Weapon', color: 'item.quality.magic'}],
            [
              {text: 'Always creates an qlvl 25 weapon'},
              {text: '1-2 sockets will be added.'},
              {text: 'Properties will be rerolled'},
            ],
          ],
        },
        test: isMagicWeapon,
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
          quality: ItemQualityType.Magic,
          overrideDescription: [
            [{text: 'Magic Weapon', color: 'item.quality.magic'}],
            [
              {text: 'Always creates an qlvl 30 weapon'},
              {text: '1-2 sockets will be added.'},
              {text: 'Properties will be rerolled'},
            ],
          ],
        },
        test: isMagicWeapon,
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
          overrideDescription: [
            [
              {text: 'Adds 1-4 sockets to an unsocketed normal body armor.'},
              {text: 'Does not work with low-quality or superior items.'},
              {text: 'Cannot add sockets beyond the max socket of the item.'},
            ],
          ],
        },
        test: isUnsocketedNormalBodyArmor,
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
          overrideDescription: [
            [
              {text: 'Adds 1-6 sockets to an unsocketed normal weapon.'},
              {text: 'Does not work with low-quality or superior items.'},
              {text: 'Cannot add sockets beyond the max socket of the item.'},
            ],
          ],
        },
        test: isUnsocketedNormalWeapon,
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
          overrideDescription: [
            [
              {text: 'Adds 1-3 sockets to an unsocketed normal helm.'},
              {text: 'Does not work with low-quality or superior items.'},
              {text: 'Cannot add sockets beyond the max socket of the item.'},
            ],
          ],
        },
        test: isUnsocketedNormalHelm,
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
          overrideDescription: [
            [
              {text: 'Adds 1-4 sockets to an unsocketed normal shield.'},
              {text: 'Does not work with low-quality or superior items.'},
              {text: 'Cannot add sockets beyond the max socket of the item.'},
            ],
          ],
        },
        test: isUnsocketedNormalShield,
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

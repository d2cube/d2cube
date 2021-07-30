import {and, not} from '../../utils/fp.js';
import {ItemRarityType, RecipeType} from '../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import {isRare, isSize} from '../utils/predicates.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '1 Perfect Skull + 1 Stone of Jordan + 1 Rare Item (any type) → 1 High Quality New Rare Item (of the same type)',
    sources: [
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
            [{text: 'Change to create a higher quality rare.'}],
          ],
        },
        test: isRare,
      },
    ],
    target: {
      transform: (sources) => sources[2],
    },
  },
  {
    name: '6 Perfect Skulls + 1 Rare Item (any type) → 1 Random Low Quality Rare Item (of the same type)',
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
          id: ids.CrystalSword,
          rarity: ItemRarityType.Rare,
          overrideDescription: [
            [{text: 'Rare Item', color: 'item.rarity.rare'}],
            [
              {text: 'Use this recipe to reroll a rare of the same type'},
              {text: 'Will not work on items larger than 3x2'},
            ],
          ],
        },
        test: and([isRare, not(isSize([4, 2]))]),
      },
    ],
    target: {
      transform: (sources) => sources[6],
    },
  },
];

export default mapRecipeProps({
  type: RecipeType.Rare,
})(recipes);

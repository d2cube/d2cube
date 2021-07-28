import {ItemRarityType, RecipeType} from '../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import {isRare} from '../utils/predicates.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '1 Perfect Skull + 1 Stone of Jordan + 1 Rare Item → 1 High Quality New Rare Item of the same type',
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
          id: ids.Spear,
          rarity: ItemRarityType.Rare,
          overrideDescription: [
            [{text: 'Rare Item', color: 'item.rarity.rare'}],
            [{text: 'Item must be socketable and have no initial sockets.'}],
          ],
        },
        test: isRare,
      },
    ],
    target: {
      transform: (sources) => {
        const {item} = sources[2];
        return item;
      },
    },
  },
];

export default mapRecipeProps({
  type: RecipeType.Rare,
})(recipes);

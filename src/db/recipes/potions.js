import {RecipeType} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '3 Rejuvenation Potions → 1 Full Rejuvenation Potion',
    sources: [
      {
        item: {
          id: ids.RejuvenationPotion,
        },
      },
      {
        item: {
          id: ids.RejuvenationPotion,
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
        id: ids.FullRejuvenationPotion,
      },
    },
  },
  {
    name: '3 Health Potions + 3 Mana Potions + 1 Chipped Gem → 1 Rejuvenation Potion',
    sources: [
      {
        item: {
          id: ids.SuperHealingPotion,
        },
      },
      {
        item: {
          id: ids.SuperHealingPotion,
        },
      },
      {
        item: {
          id: ids.SuperHealingPotion,
        },
      },
      {
        item: {
          id: ids.SuperManaPotion,
        },
      },
      {
        item: {
          id: ids.SuperManaPotion,
        },
      },
      {
        item: {
          id: ids.SuperManaPotion,
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
        id: ids.RejuvenationPotion,
      },
    },
  },
  {
    name: '3 Health Potions + 3 Mana Potions + 1 Regular Gem → 1 Full Rejuvenation Potion',
    sources: [
      {
        item: {
          id: ids.SuperHealingPotion,
        },
      },
      {
        item: {
          id: ids.SuperHealingPotion,
        },
      },
      {
        item: {
          id: ids.SuperHealingPotion,
        },
      },
      {
        item: {
          id: ids.SuperManaPotion,
        },
      },
      {
        item: {
          id: ids.SuperManaPotion,
        },
      },
      {
        item: {
          id: ids.SuperManaPotion,
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
        id: ids.FullRejuvenationPotion,
      },
    },
  },
  {
    name: '1 Strangling Gas Potion + 1 Health Potion → 1 Antidote Potion',
    sources: [
      {
        item: {
          id: ids.StranglingGasPotion,
        },
      },
      {
        item: {
          id: ids.SuperHealingPotion,
        },
      },
    ],
    target: {
      item: {
        id: ids.AntidotePotion,
      },
    },
  },
];

export default createRecipes({
  type: RecipeType.Potion,
})(recipes);

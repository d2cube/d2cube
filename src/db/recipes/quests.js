import {RecipeType} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: 'Staff of Kings + Amulet of the Viper → Horadric Staff',
    sources: [
      {
        item: {
          id: ids.StaffOfKings,
        },
      },
      {
        item: {
          id: ids.AmuletOfTheViper,
        },
      },
    ],
    target: {
      item: {
        id: ids.HoradricStaff,
      },
    },
  },
  {
    name: "Khalim's Heart + Khalim's Brain + Khalim's Eye + Khalim's Flail → Khalim's Will",
    sources: [
      {
        item: {
          id: ids.KhalimsHeart,
        },
      },
      {
        item: {
          id: ids.KhalimsBrain,
        },
      },
      {
        item: {
          id: ids.KhalimsEye,
        },
      },
      {
        item: {
          id: ids.KhalimsFlail,
        },
      },
    ],
    target: {
      item: {
        id: ids.KhalimsWill,
      },
    },
  },
];

export default createRecipes({
  type: RecipeType.Quest,
})(recipes);

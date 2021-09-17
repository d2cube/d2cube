import {RecipeType} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: "1 Wirt's Leg + 1 Tome of Town Portal → Secret Cow Level",
    sources: [
      {
        item: {
          id: ids.WirtsLeg,
        },
      },
      {
        item: {
          id: ids.TomeOfTownPortal,
        },
      },
    ],
    target: {
      event: 'Secret Cow Level',
    },
  },
  {
    name: '1 Key of Terror + 1 Key of Hate + 1 Key of Destruction → Chaos Tristram',
    sources: [
      {
        item: {
          id: ids.KeyOfTerror,
        },
      },
      {
        item: {
          id: ids.KeyOfHate,
        },
      },
      {
        item: {
          id: ids.KeyOfDestruction,
        },
      },
    ],
    target: {
      event: 'Chaos Tristram',
    },
  },
  {
    name: "Mephisto's Brain + Diablo's Horn + Baal's Eye → Uber Tristram",
    sources: [
      {
        item: {
          id: ids.MephistosBrain,
        },
      },
      {
        item: {
          id: ids.DiablosHorn,
        },
      },
      {
        item: {
          id: ids.BaalsEye,
        },
      },
    ],
    target: {
      event: 'Uber Tristram',
    },
  },
];

export default createRecipes({
  type: RecipeType.Portal,
})(recipes);

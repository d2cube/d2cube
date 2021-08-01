import {merge} from 'uinix-fp';

import {BasePropertyType, RecipeType} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
import {
  isChippedGem,
  isFlawedGem,
  isNonEtherealArmor,
  isNonEtherealWeapon,
} from '../../utils/predicates.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '1 Ort + 1 Weapon → Fully Repaired Weapon',
    sources: [
      {
        item: {
          id: ids.Ort,
        },
      },
      {
        item: {
          id: ids.CrystalSword,
          overrideDescription: [[{text: 'Any non-ethereal weapon'}]],
        },
        test: isNonEtherealWeapon,
      },
    ],
    target: {
      transform: (sources) => {
        const item = sources[1];
        return merge(item)({
          durability: item.properties[BasePropertyType.Durability],
        });
      },
    },
  },
  {
    name: '1 Ort + 1 Chipped Gem (any type) + 1 Weapon → Fully Repaired Weapon',
    sources: [
      {
        item: {
          id: ids.Ort,
        },
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
          overrideDescription: [[{text: 'Any non-ethereal weapon'}]],
        },
        test: isNonEtherealWeapon,
      },
    ],
    target: {
      transform: (sources) => {
        const item = sources[2];
        return merge(item)({
          durability: item.properties[BasePropertyType.Durability],
        });
      },
    },
  },
  {
    name: '1 Ral + 1 Armor → Fully Repaired Armor',
    sources: [
      {
        item: {
          id: ids.Ral,
        },
      },
      {
        item: {
          id: ids.ArchonPlate,
          overrideDescription: [
            [{text: 'Any non-ethereal armor (helms, belts, gloves etc)'}],
          ],
        },
        test: isNonEtherealArmor,
      },
    ],
    target: {
      transform: (sources) => {
        const item = sources[1];
        return merge(item)({
          durability: item.properties[BasePropertyType.Durability],
        });
      },
    },
  },
  {
    name: '1 Ral + 1 Flawed Gem (any type) + 1 Armor → Fully Repaired and Recharged Armor',
    sources: [
      {
        item: {
          id: ids.Ral,
        },
      },
      {
        item: {
          id: ids.FlawedDiamond,
          overrideDescription: [[{text: 'Flawed Gem (any type)'}]],
        },
        test: isFlawedGem,
      },
      {
        item: {
          id: ids.ArchonPlate,
          overrideDescription: [
            [{text: 'Any non-ethereal armor (helms, belts, gloves etc)'}],
          ],
        },
        test: isNonEtherealArmor,
      },
    ],
    target: {
      transform: (sources) => {
        const item = sources[2];
        return merge(item)({
          durability: item.properties[BasePropertyType.Durability],
        });
      },
    },
  },
];

export default createRecipes({
  type: RecipeType.RepairRecharge,
})(recipes);

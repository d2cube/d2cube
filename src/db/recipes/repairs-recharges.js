import {merge} from 'uinix-fp';

import {
  BasePropertyType,
  ItemQualityType,
  MagicPropertyType,
  RecipeType,
  SkillType,
} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
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
          durability: 1,
        },
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
    name: '1 Ort + 1 Chipped Gem (any type) + 1 Weapon → Fully Repaired and Recharged Weapon',
    sources: [
      {
        item: {
          id: ids.Ort,
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
          durability: 1,
          properties: {
            magic: {
              [MagicPropertyType.SpellCharges]: {
                [SkillType.Enchant]: {x: 1, y: 10},
                [SkillType.Teleport]: {x: 1, y: 10},
              },
            },
          },
        },
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
          durability: 1,
        },
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
        },
      },
      {
        item: {
          id: ids.ArchonPlate,
          durability: 1,
          properties: {
            magic: {
              [MagicPropertyType.SpellCharges]: {
                [SkillType.Enchant]: {x: 1, y: 10},
                [SkillType.Teleport]: {x: 1, y: 10},
              },
            },
          },
        },
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

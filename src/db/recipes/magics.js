import {merge} from 'uinix-fp';

import {fillNull} from '../../utils/fp.js';
import {random} from '../../utils/random.js';
import {ItemQualityType, RecipeType, SuffixType} from '../../enums/index.js';
import {createRecipes} from '../../utils/create-recipes.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '4 Health Potions (any type) + 1 Ruby (any type) + Magic Sword → 1 Magic Sword of the Leech',
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
          id: ids.ChippedRuby,
        },
      },
      {
        item: {
          id: ids.CrystalSword,
          quality: ItemQualityType.Magic,
        },
      },
    ],
    target: {
      transform: (sources) =>
        merge(sources[4])({
          suffix: SuffixType.Leech,
        }),
    },
  },
  {
    name: '3 Perfect Gems (any type) + 1 Magic Item → 1 Random Magic Item of the Same Type',
    sources: [
      {
        item: {
          id: ids.PerfectDiamond,
        },
      },
      {
        item: {
          id: ids.PerfectDiamond,
        },
      },
      {
        item: {
          id: ids.PerfectDiamond,
        },
      },
      {
        item: {
          id: ids.CrystalSword,
          quality: ItemQualityType.Magic,
        },
      },
    ],
    target: {
      transform: (sources) => sources[3],
    },
  },
  {
    name: '3 Regular Gems (any type) + 1 Socketed Weapon (any type) → 1 Socketed Magic Weapon (of the same type)',
    sources: [
      {
        item: {
          id: ids.Diamond,
        },
      },
      {
        item: {
          id: ids.Diamond,
        },
      },
      {
        item: {
          id: ids.Diamond,
        },
      },
      {
        item: {
          id: ids.CrystalSword,
          quality: ItemQualityType.Normal,
          sockets: fillNull(random(1, 6)),
        },
      },
    ],
    target: {
      transform: (sources) =>
        merge(sources[3])({
          quality: ItemQualityType.Magic,
          sockets: fillNull(random(1, 2)),
        }),
    },
  },
];

export default createRecipes({
  type: RecipeType.Magic,
})(recipes);

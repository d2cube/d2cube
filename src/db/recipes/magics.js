import {merge} from 'uinix-fp';

import {ItemRarityType, RecipeType, SuffixType} from '../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import {isHealthPotion, isMagicSword, isRuby} from '../utils/predicates.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '4 Health Potions (any type) + 1 Ruby (any type) + Magic Sword → 1 Magic Sword of the Leech',
    sources: [
      {
        item: {
          id: ids.SuperHealingPotion,
          overrideDescription: [[{text: 'Health Potion (any type)'}]],
        },
        test: isHealthPotion,
      },
      {
        item: {
          id: ids.SuperHealingPotion,
          overrideDescription: [[{text: 'Health Potion (any type)'}]],
        },
        test: isHealthPotion,
      },
      {
        item: {
          id: ids.SuperHealingPotion,
          overrideDescription: [[{text: 'Health Potion (any type)'}]],
        },
        test: isHealthPotion,
      },
      {
        item: {
          id: ids.ChippedRuby,
          overrideDescription: [[{text: 'Ruby (any type)'}]],
        },
        test: isRuby,
      },
      {
        item: {
          id: ids.CrystalSword,
          rarity: ItemRarityType.Magic,
          overrideDescription: [
            [{text: 'Magic Sword', color: 'item.rarity.magic'}],
          ],
        },
        test: isMagicSword,
      },
    ],
    target: {
      transform: (sources) => {
        const {item} = sources[4];
        return merge(item)({
          suffix: SuffixType.Leech,
        });
      },
    },
  },
];

export default mapRecipeProps({
  type: RecipeType.Magic,
})(recipes);

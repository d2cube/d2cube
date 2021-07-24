import {
  ItemType,
  GemQualityType,
  PotionCategoryType,
  RecipeType,
} from '../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '3 Rejuvenation Potions → 1 Full Rejuvenation Potion',
    sources: [
      ids.RejuvenationPotion,
      ids.RejuvenationPotion,
      ids.RejuvenationPotion,
    ],
    target: ids.FullRejuvenationPotion,
  },
  {
    name: '3 Health Potions + 3 Mana Potions + 1 Chipped Gem = 1 Rejuvenation Potion',
    sources: [
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        baseId: ids.SuperHealingPotion,
        baseDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        baseId: ids.SuperHealingPotion,
        baseDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        baseId: ids.SuperHealingPotion,
        baseDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        baseId: ids.SuperManaPotion,
        baseDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        baseId: ids.SuperManaPotion,
        baseDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        baseId: ids.SuperManaPotion,
        baseDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Gem,
        quality: GemQualityType.Chipped,
        baseId: ids.ChippedDiamond,
        baseDescription: [[{text: 'Chipped Gem (any type)'}]],
      },
    ],
    target: ids.RejuvenationPotion,
  },
  {
    name: '3 Health Potions + 3 Mana Potions + 1 Regular Gem = 1 Full Rejuvenation Potion',
    sources: [
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        baseId: ids.SuperHealingPotion,
        baseDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        baseId: ids.SuperHealingPotion,
        baseDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        baseId: ids.SuperHealingPotion,
        baseDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        baseId: ids.SuperManaPotion,
        baseDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        baseId: ids.SuperManaPotion,
        baseDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        baseId: ids.SuperManaPotion,
        baseDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Gem,
        quality: GemQualityType.Regular,
        baseId: ids.Diamond,
        baseDescription: [[{text: 'Regular Gem (any type)'}]],
      },
    ],
    target: ids.FullRejuvenationPotion,
  },
  {
    name: '1 Strangling Gas Potion + 1 Health Potion = 1 Antidote Potion',
    sources: [
      ids.StranglingGasPotion,
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        baseId: ids.SuperHealingPotion,
        baseDescription: [[{text: 'Health Potion (any type)'}]],
      },
    ],
    target: ids.AntidotePotion,
  },
];

export default mapRecipeProps({
  type: RecipeType.Potions,
})(recipes);

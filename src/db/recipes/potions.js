import {ItemType, GemQualityType, PotionCategoryType} from '../enums/index.js';
import ids from '../ids/index.js';

export default [
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
        placeholderId: ids.SuperHealingPotion,
        placeholderDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        placeholderId: ids.SuperHealingPotion,
        placeholderDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        placeholderId: ids.SuperHealingPotion,
        placeholderDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        placeholderId: ids.SuperManaPotion,
        placeholderDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        placeholderId: ids.SuperManaPotion,
        placeholderDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        placeholderId: ids.SuperManaPotion,
        placeholderDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Gem,
        quality: GemQualityType.Chipped,
        placeholderId: ids.ChippedDiamond,
        placeholderDescription: [[{text: 'Chipped Gem (any type)'}]],
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
        placeholderId: ids.SuperHealingPotion,
        placeholderDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        placeholderId: ids.SuperHealingPotion,
        placeholderDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        placeholderId: ids.SuperHealingPotion,
        placeholderDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        placeholderId: ids.SuperManaPotion,
        placeholderDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        placeholderId: ids.SuperManaPotion,
        placeholderDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        placeholderId: ids.SuperManaPotion,
        placeholderDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Gem,
        quality: GemQualityType.Regular,
        placeholderId: ids.Diamond,
        placeholderDescription: [[{text: 'Regular Gem (any type)'}]],
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
        placeholderId: ids.SuperHealingPotion,
        placeholderDescription: [[{text: 'Health Potion (any type)'}]],
      },
    ],
    target: ids.AntidotePotion,
  },
];

import {RecipeType} from '../enums/index.js';

export const getRecipeTypeLabel = (type) => LABELS[type];

const LABELS = {
  [RecipeType.Amulet]: 'Amulets',
  [RecipeType.Gem]: 'Gems',
  [RecipeType.Magic]: 'Magic Items',
  [RecipeType.Portal]: 'Portals',
  [RecipeType.Potion]: 'Potions',
  [RecipeType.Quest]: 'Quests',
  [RecipeType.Rare]: 'Rare Items',
  [RecipeType.RepairRecharge]: 'Repair/Recharge Items',
  [RecipeType.Ring]: 'Rings',
  [RecipeType.Rune]: 'Runes',
  [RecipeType.Socket]: 'Socketed Items',
  [RecipeType.Stack]: 'Stacked Items',
  [RecipeType.Token]: 'Tokens',
  [RecipeType.Upgrade]: 'Upped Items',
};

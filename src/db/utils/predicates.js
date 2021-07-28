import {props} from 'uinix-fp';

import {and, not, isEqualPropValue} from '../../utils/fp.js';
import {
  GemQualityType,
  ItemRarityType,
  ItemPropertyType,
  ItemType,
  PotionCategoryType,
} from '../enums/index.js';

const getItemPropertyPath = (property) => props(`properties.${property}`);

/**
 * Simple
 **/
// Props
export const isCategoryEqual = isEqualPropValue('category');
export const isQualityEqual = isEqualPropValue('quality');
export const isRarityEqual = isEqualPropValue('rarity');
export const isTypeEqual = isEqualPropValue('type');

// Types
export const isAmulet = isTypeEqual(ItemType.Amulet);
export const isGem = isTypeEqual(ItemType.Gem);
export const isPotion = isTypeEqual(ItemType.Potion);
export const isRing = isTypeEqual(ItemType.Ring);
export const isSpear = isTypeEqual(ItemType.Spear);

// Quality
export const isChipped = isQualityEqual(GemQualityType.Chipped);

// Rarity
export const isMagic = isRarityEqual(ItemRarityType.Magic);
export const isRare = isRarityEqual(ItemRarityType.Rare);

// Socketable
export const isSocketable = (x) =>
  getItemPropertyPath(ItemPropertyType.MaxSockets)(x) > 0;

export const hasSockets = (x) => x.sockets?.length > 0;

/**
 * Composed
 **/
export const isChippedGem = and([
  isQualityEqual(GemQualityType.Chipped),
  isGem,
]);

export const isHealthPotion = and([
  isCategoryEqual(PotionCategoryType.Health),
  isPotion,
]);

export const isMagicAmulet = and([isMagic, isAmulet]);

export const isMagicRing = and([isMagic, isRing]);

export const isManaPotion = and([
  isCategoryEqual(PotionCategoryType.Mana),
  isPotion,
]);

export const isRegularGem = and([
  isQualityEqual(GemQualityType.Regular),
  isGem,
]);

// A socketable rare must be socketable and have no sockets
export const isSocketableRare = and([isSocketable, isRare, not(hasSockets)]);

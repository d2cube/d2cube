import {and, or, not, isPropValueEqual} from '../../utils/fp.js';
import {
  GemQualityType,
  ItemRarityType,
  ItemPropertyType,
  ItemType,
  PotionCategoryType,
} from '../enums/index.js';

/**
 * Simple
 **/
// Props
export const isCategoryEqual = isPropValueEqual('category');

export const isQualityEqual = isPropValueEqual('quality');

export const isRarityEqual = isPropValueEqual('rarity');

export const isTypeEqual = isPropValueEqual('type');

export const isSize = (size) => (x) =>
  x.size[0] === size[0] && x.size[1] === size[1]; // Simplify with a deepEqual utility

export const isItemPropertyEqual = (property) =>
  isPropValueEqual(`properties.${property}`);

export const hasItemProperty = (property) =>
  not(isItemPropertyEqual(property)(undefined));

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
export const isSocketable = hasItemProperty(ItemPropertyType.MaxSockets);

export const hasSockets = (x) => x.sockets?.length > 0;

// Weapon
export const isWeapon = or([
  hasItemProperty(ItemPropertyType.Damage1H),
  hasItemProperty(ItemPropertyType.Damage2H),
]);

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

export const isMagicWeapon = and([isMagic, isWeapon]);

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

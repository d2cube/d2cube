import {and, or, not, isPropValueEqual} from '../../utils/fp.js';
import {
  GemCategoryType,
  GemQualityType,
  ItemRarityType,
  ItemPropertyType,
  ItemType,
  PotionCategoryType,
  ItemTierType,
} from '../enums/index.js';

/**
 * Simple
 **/
// Props
export const isCategoryEqual = isPropValueEqual('category');

export const isQualityEqual = isPropValueEqual('quality');

export const isRarityEqual = isPropValueEqual('rarity');

export const isTierEqual = isPropValueEqual('tier');

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

export const isAxe = isTypeEqual(ItemType.Axe);

export const isDagger = isTypeEqual(ItemType.Dagger);

export const isSpear = isTypeEqual(ItemType.Spear);

export const isSword = isTypeEqual(ItemType.Sword);

// Rarity
export const isNormal = isRarityEqual(ItemRarityType.Normal);

export const isMagic = isRarityEqual(ItemRarityType.Magic);

export const isRare = isRarityEqual(ItemRarityType.Rare);

// Weapon/Armor
export const isArmor = hasItemProperty(ItemPropertyType.Defense);

export const isWeapon = or([
  hasItemProperty(ItemPropertyType.Damage1H),
  hasItemProperty(ItemPropertyType.Damage2H),
]);

export const isSocketable = hasItemProperty(ItemPropertyType.MaxSockets);

export const isEthereal = isPropValueEqual('isEthereal')(true);

export const hasSockets = (x) => x.sockets?.length > 0;

export const isNormalTier = isTierEqual(ItemTierType.Normal);

export const isExceptionalTier = isTierEqual(ItemTierType.Exceptional);

export const isEliteTier = isTierEqual(ItemTierType.Elite);

/**
 * Composed
 **/
export const isChippedGem = and([
  isQualityEqual(GemQualityType.Chipped),
  isGem,
]);

export const isRegularGem = and([
  isQualityEqual(GemQualityType.Regular),
  isGem,
]);

export const isPerfectGem = and([
  isQualityEqual(GemQualityType.Perfect),
  isGem,
]);

export const isRuby = and([isCategoryEqual(GemCategoryType.Ruby), isGem]);

export const isHealthPotion = and([
  isCategoryEqual(PotionCategoryType.Health),
  isPotion,
]);

export const isMagicAmulet = and([isMagic, isAmulet]);

export const isMagicRing = and([isMagic, isRing]);

export const isMagicSword = and([isMagic, isSword]);

export const isMagicWeapon = and([isMagic, isWeapon]);

export const isManaPotion = and([
  isCategoryEqual(PotionCategoryType.Mana),
  isPotion,
]);

// A socketable rare must be socketable and have no sockets
export const isSocketableRare = and([isSocketable, isRare, not(hasSockets)]);

export const isSocketedNormalWeapon = and([isNormal, hasSockets, isWeapon]);

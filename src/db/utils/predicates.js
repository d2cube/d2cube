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

export const isHelm = isTypeEqual(ItemType.Helm);

export const isShield = isTypeEqual(ItemType.Shield);

export const isSpear = isTypeEqual(ItemType.Spear);

export const isSword = isTypeEqual(ItemType.Sword);

export const isBodyArmor = isTypeEqual(ItemType.BodyArmor);

// Rarity
export const isNormal = isRarityEqual(ItemRarityType.Normal);

export const isMagic = isRarityEqual(ItemRarityType.Magic);

export const isRare = isRarityEqual(ItemRarityType.Rare);

export const isUnique = isRarityEqual(ItemRarityType.Unique);

// Weapon/Armor
export const isArmor = hasItemProperty(ItemPropertyType.Defense);

export const isWeapon = or([
  hasItemProperty(ItemPropertyType.Damage1H),
  hasItemProperty(ItemPropertyType.Damage2H),
]);

export const isSocketable = hasItemProperty(ItemPropertyType.MaxSockets);

export const isEthereal = isPropValueEqual('isEthereal')(true);

export const isNonEthereal = not(isEthereal);

export const isSocketed = (x) => x.sockets?.length > 0;

export const isUnsocketed = not(isSocketed);

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

export const isFlawedGem = and([isQualityEqual(GemQualityType.Flawed), isGem]);

export const isFlawlessGem = and([
  isQualityEqual(GemQualityType.Flawless),
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

export const isNormalBodyArmor = and([isNormal, isBodyArmor]);

export const isNormalHelm = and([isNormal, isHelm]);

export const isNormalShield = and([isNormal, isShield]);

export const isNormalWeapon = and([isNormal, isWeapon]);

export const isNonEtherealArmor = and([isNonEthereal, isArmor]);

export const isNonEtherealWeapon = and([isNonEthereal, isWeapon]);

export const isUnsocketedRare = and([isUnsocketed, isRare]);

export const isUnsocketedNormalBodyArmor = and([
  isUnsocketed,
  isNormalBodyArmor,
]);

export const isUnsocketedNormalHelm = and([isUnsocketed, isNormalHelm]);

export const isUnsocketedNormalShield = and([isUnsocketed, isNormalShield]);

export const isUnsocketedNormalWeapon = and([isUnsocketed, isNormalWeapon]);

export const isSocketedNormalWeapon = and([isSocketed, isNormal, isWeapon]);

export const isExceptionalTierRareArmor = and([
  isExceptionalTier,
  isRare,
  isArmor,
]);

export const isExceptionalTierUniqueArmor = and([
  isExceptionalTier,
  isUnique,
  isArmor,
]);

export const isExceptionalTierUniqueWeapon = and([
  isExceptionalTier,
  isUnique,
  isWeapon,
]);

export const isExceptionalTierRareWeapon = and([
  isExceptionalTier,
  isRare,
  isWeapon,
]);

export const isNormalTierRareArmor = and([isNormalTier, isRare, isArmor]);

export const isNormalTierRareWeapon = and([isNormalTier, isRare, isWeapon]);

export const isNormalTierUniqueArmor = and([isNormalTier, isUnique, isArmor]);

export const isNormalTierUniqueWeapon = and([isNormalTier, isUnique, isWeapon]);

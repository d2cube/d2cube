import {ItemType} from '../../enums/index.js';

const bodyArmorItemTypes = [ItemType.BodyArmor];

const helmItemTypes = [
  ItemType.BarbarianHelm,
  ItemType.Circlet,
  ItemType.DruidPelt,
  ItemType.Helm,
];

const meleeItemTypes = [
  ItemType.AmazonSpear,
  ItemType.AssassinKatar,
  ItemType.Axe,
  ItemType.Club,
  ItemType.Dagger,
  ItemType.Hammer,
  ItemType.Mace,
  ItemType.Polearm,
  ItemType.Scepter,
  ItemType.Spear,
  ItemType.Staff,
  ItemType.Sword,
  ItemType.Wand,
];

const missleItemTypes = [ItemType.AmazonBow, ItemType.Bow, ItemType.Crossbow];

const shieldItemTypes = [
  ItemType.NecromancerHead,
  ItemType.PaladinShield,
  ItemType.Shield,
];

export const resolveRunewordItemTypes = (category) => {
  switch (category) {
    case 'armor':
      return bodyArmorItemTypes;
    case 'helm':
      return helmItemTypes;
    case 'melee':
      return meleeItemTypes;
    case 'missle':
      return missleItemTypes;
    case 'shield':
      return shieldItemTypes;
    case 'weapons':
      return [...meleeItemTypes, ...missleItemTypes, ItemType.SorceressOrb];
    default:
      return [];
  }
};

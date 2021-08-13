import {ItemType, SocketCategoryType} from '../../enums/index.js';

export const resolveItemSocketCategoryType = (item) => {
  switch (item.type) {
    case ItemType.AmazonWeapon:
    case ItemType.AssassinKatar:
    case ItemType.Axe:
    case ItemType.Bow:
    case ItemType.Crossbow:
    case ItemType.Dagger:
    case ItemType.Javelin:
    case ItemType.Mace:
    case ItemType.Polearm:
    case ItemType.Scepter:
    case ItemType.SorceressOrb:
    case ItemType.Spear:
    case ItemType.Staff:
    case ItemType.Sword:
    case ItemType.Wand:
      return SocketCategoryType.Weapon;
    case ItemType.BarbarianHelm:
    case ItemType.Circlet:
    case ItemType.DruidPelt:
    case ItemType.Helm:
      return SocketCategoryType.Helm;
    case ItemType.BodyArmor:
      return SocketCategoryType.Armor;
    case ItemType.NecromancerHead:
    case ItemType.PaladinShield:
    case ItemType.Shield:
      return SocketCategoryType.Shield;
    default:
      return null;
  }
};

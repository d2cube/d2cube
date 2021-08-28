import {EquipSlotType, ItemType} from '../enums/index.js';

export const getValidEquipSlot = (reservedSlotsSet) => (item) => {
  switch (item.type) {
    case ItemType.AmazonBow:
    case ItemType.AmazonJavelin:
    case ItemType.AmazonSpear:
    case ItemType.AssassinKatar:
    case ItemType.Axe:
    case ItemType.Bow:
    case ItemType.Club:
    case ItemType.Crossbow:
    case ItemType.Dagger:
    case ItemType.Hammer:
    case ItemType.Javelin:
    case ItemType.Mace:
    case ItemType.Polearm:
    case ItemType.Scepter:
    case ItemType.SorceressOrb:
    case ItemType.Spear:
    case ItemType.Staff:
    case ItemType.Sword:
    case ItemType.ThrowingWeapon:
    case ItemType.Wand:
      return reservedSlotsSet.has(EquipSlotType.MainHand)
        ? EquipSlotType.OffHand
        : EquipSlotType.MainHand;
    case ItemType.Amulet:
      return EquipSlotType.Neck;
    case ItemType.BarbarianHelm:
    case ItemType.Circlet:
    case ItemType.DruidPelt:
    case ItemType.Helm:
      return EquipSlotType.Head;
    case ItemType.Belt:
      return EquipSlotType.Waist;
    case ItemType.BodyArmor:
      return EquipSlotType.Torso;
    case ItemType.Boot:
      return EquipSlotType.Feet;
    case ItemType.Glove:
      return EquipSlotType.Hands;
    case ItemType.NecromancerHead:
    case ItemType.PaladinShield:
    case ItemType.Shield:
      return EquipSlotType.OffHand;
    case ItemType.Ring:
      return reservedSlotsSet.has(EquipSlotType.RightFinger)
        ? EquipSlotType.LeftFinger
        : EquipSlotType.RightFinger;
    default:
      return null;
  }
};

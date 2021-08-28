import {EquipSlotType} from '../enums/equip-slot-type.js';
import {ItemQualityType} from '../enums/item-quality-type.js';
import {rollItem} from '../utils/roll-item.js';

export const cubeItems = [
  {
    id: 'El',
    position: [2, 1],
  },
  {
    id: 'FlawlessRuby',
    position: [4, 3],
  },
  {
    id: 'Bolts',
    position: [1, 2],
  },
  {
    id: 'Bolts',
    position: [1, 3],
  },
].map(rollItem);

export const inventoryItems = [
  {
    id: 'Ruby',
    position: [1, 1],
  },
  {
    id: 'El',
    position: [2, 1],
  },
  {
    id: 'RejuvenationPotion',
    position: [3, 1],
  },
  {
    id: 'ImmortalKingsWill',
    equipped: EquipSlotType.Head,
    sockets: ['PerfectTopaz', 'Zod'],
  },
  {
    id: 'ImmortalKingsForge',
    equipped: EquipSlotType.Hands,
  },
  {
    id: 'ImmortalKingsPillar',
    equipped: EquipSlotType.Feet,
  },
  {
    id: 'Bolts',
    equipped: EquipSlotType.OffHand,
  },
  {
    id: 'StringOfEars',
    equipped: EquipSlotType.Waist,
  },
  {
    id: 'BulKathosTribalGuardian',
    equipped: EquipSlotType.AlternateMainHand,
  },
  {
    id: 'BulKathosSacredCharge',
    equipped: EquipSlotType.AlternateOffHand,
  },
  {
    id: 'StoneOfJordan',
    equipped: EquipSlotType.LeftFinger,
  },
  {
    id: 'Ring',
    position: [3, 8],
    quality: ItemQualityType.Magic,
    equipped: EquipSlotType.RightFinger,
  },
  {
    id: 'Ring',
    position: [3, 7],
    quality: ItemQualityType.Crafted,
  },
  {
    id: 'Amulet',
    equipped: EquipSlotType.Neck,
    quality: ItemQualityType.Magic,
  },
  {
    id: 'Amulet',
    position: [2, 6],
    quality: ItemQualityType.Unique,
  },
  {
    id: 'Amulet',
    position: [2, 7],
    quality: ItemQualityType.Magic,
  },
  {
    id: 'HealingPotion',
    position: [1, 7],
  },
  {
    id: 'ChippedEmerald',
    position: [1, 8],
  },
  {
    id: 'ReflexBow',
    durability: 1,
    equipped: EquipSlotType.MainHand,
    sockets: ['Pul', 'Lum', 'Ber', 'Mal'],
  },
  {
    id: 'DuskShroud',
    quality: 'normal',
    equipped: EquipSlotType.Torso,
    sockets: ['Jah', 'Ith', 'Ber'],
  },
  {
    id: 'DiablosHorn',
    position: [3, 10],
  },
  {
    id: 'MephistosBrain',
    position: [4, 10],
  },
  {
    id: 'BaalsEye',
    position: [4, 1],
  },
].map(rollItem);

export const player = {
  life: {
    max: 1000,
    value: 1000,
  },
  experience: {
    max: 1000,
    value: 642,
  },
  mana: {
    max: 1000,
    value: 1000,
  },
};

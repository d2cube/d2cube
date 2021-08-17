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
    id: 'PerfectSkull',
    position: [4, 3],
  },
  {
    id: 'Bolts',
    position: [1, 2],
  },
  {
    id: 'FlawlessTopaz',
    position: [1, 3],
  },
  {
    id: 'KeyOfTerror',
    position: [2, 3],
  },
  {
    id: 'StoneOfJordan',
    position: [3, 6],
  },
  {
    id: 'Ring',
    position: [3, 8],
    quality: ItemQualityType.Magic,
    prefix: 'Cruel',
  },
  {
    id: 'Ring',
    position: [3, 7],
    quality: ItemQualityType.Crafted,
  },
  {
    id: 'Amulet',
    position: [4, 7],
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
    id: 'Dagger',
    durability: 1,
    position: [1, 4],
    sockets: ['Jah', 'Gul', 'Eth'],
  },
  {
    id: 'Falcata',
    quality: 'normal',
    durability: 1,
    position: [1, 9],
  },
  {
    id: 'WirtsLeg',
    position: [1, 10],
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

export const beltItems = [
  {
    id: 'SuperHealingPotion',
    position: [1, 1],
  },
  {
    id: 'SuperHealingPotion',
    position: [1, 2],
  },
  {
    id: 'FullRejuvenationPotion',
    position: [1, 3],
  },
  {
    id: 'ScrollOfTownPortal',
    position: [1, 4],
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

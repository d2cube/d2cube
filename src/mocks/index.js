import db from '../db/index.js';
import {getItemById} from '../queries/index.js';

const {ItemRarityType} = db.enums;

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
].map((item) => ({
  ...getItemById(item.id),
  ...item,
}));

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
    id: 'StoneOfJordan',
    position: [3, 6],
  },
  {
    id: 'Ring',
    position: [3, 8],
    rarity: ItemRarityType.Magic,
    prefix: 'Cruel',
  },
  {
    id: 'Ring',
    position: [3, 7],
    rarity: ItemRarityType.Crafted,
  },
  {
    id: 'Amulet',
    position: [4, 7],
    rarity: ItemRarityType.Magic,
  },
  {
    id: 'Amulet',
    position: [2, 6],
    rarity: ItemRarityType.Unique,
  },
  {
    id: 'Amulet',
    position: [2, 7],
    rarity: ItemRarityType.Magic,
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
    id: 'SplintMail',
    rarity: 'normal',
    durability: 1,
    position: [1, 4],
    sockets: ['Jah', 'Ber', null],
  },
  {
    id: 'MilitaryAxe',
    rarity: 'magic',
    durability: 1,
    sockets: [],
    position: [1, 9],
  },
].map((item) => ({
  ...getItemById(item.id),
  ...item,
}));

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
];

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

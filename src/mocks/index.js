import db from '../db/index.js';
import {getItemById} from '../queries/index.js';

const {ItemQualityType} = db.enums;

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
  {
    id: 'Ring',
    position: [3, 6],
    quality: ItemQualityType.Magic,
  },
  {
    id: 'Ring',
    position: [3, 8],
    quality: ItemQualityType.Magic,
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
    position: [4, 9],
    quality: ItemQualityType.Rare,
  },
  {
    id: 'HealingPotion',
    position: [1, 7],
  },
  {
    id: 'MinorHealingPotion',
    position: [1, 8],
  },
  {
    id: 'WarSpear',
    position: [1, 4],
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

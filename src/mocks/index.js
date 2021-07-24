import {getItemById} from '../queries/index.js';

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
  },
  {
    id: 'Ring',
    position: [3, 7],
  },
  {
    id: 'Ring',
    position: [3, 8],
  },
].map((item) => ({
  ...getItemById(item.id),
  ...item,
}));

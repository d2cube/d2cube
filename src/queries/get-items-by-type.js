import {getItems} from './get-items.js';

export const getItemsByType = (type) =>
  getItems().filter((item) => item.type === type);

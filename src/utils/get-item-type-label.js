import {ItemType} from '../enums/index.js';
import {humanize} from '../utils/fp.js';

export const getItemTypeLabel = (type) => LABELS[type];

const LABELS = Object.fromEntries(
  Object.entries(ItemType).map(([key, value]) => [key, humanize(value)]),
);

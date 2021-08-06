import {merge} from 'uinix-fp';
import {ItemQualityType} from '../../enums/index.js';
import {calcItemStats} from './calc-item-stats.js';

export const createItems = (items) =>
  Object.entries(items).reduce((acc, [id, item]) => {
    acc[id] = createItem(items)(item);
    return acc;
  }, {});

const createItem = (items) => (initialItem) => {
  // Create baseItem and unset blacklisted properties
  const baseItem = items[initialItem.baseId] || {};
  baseItem.variants = undefined;

  const item = merge(baseItem)(initialItem);

  switch (item.quality) {
    case ItemQualityType.Set:
    case ItemQualityType.Unique:
      item.basename = baseItem.name;
      break;
    default:
      break;
  }

  return {
    properties: {},
    ...item,
    stats: calcItemStats(item),
  };
};

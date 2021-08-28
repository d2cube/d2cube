import {merge} from 'uinix-fp';

import {ItemQualityType, MagicPropertyType} from '../../enums/index.js';
import {fillNull} from '../../utils/fp.js';
import {resolveItemPropertyValue} from '../../utils/resolvers/resolve-item-property-value.js';

export const createItems = (items) =>
  Object.fromEntries(
    Object.entries(items).map(([id, item]) => [id, createItem(items)(item)]),
  );

const createItem = (items) => (initialItem) => {
  // Create baseItem and unset blacklisted properties
  const baseItem = items[initialItem.baseId] || {};
  const {imageId, variants, ...baseItemData} = baseItem;

  const item = merge(baseItemData)(initialItem);

  switch (item.quality) {
    case ItemQualityType.Set:
    case ItemQualityType.Unique:
      item.basename = baseItem.name;
      break;
    default:
      break;
  }

  const addSockets = resolveItemPropertyValue(
    'magic',
    MagicPropertyType.Socketed,
  )(item);
  if (addSockets) {
    const socketCount = Array.isArray(addSockets)
      ? Math.max(...addSockets)
      : addSockets;
    item.sockets = fillNull(socketCount);
  }

  const isEthereal = resolveItemPropertyValue(
    'magic',
    MagicPropertyType.Ethereal,
  )(item);
  if (isEthereal) {
    item.isEthereal = isEthereal;
  }

  return item;
};

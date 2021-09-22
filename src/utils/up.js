import {getItems} from '../api/index.js';
import {rollItem} from './roll-item.js';

export const up = (currentItem) => {
  const items = getItems();

  const {baseId = currentItem.id, tier} = currentItem;

  const uppedItem = items.find(
    (item) => item.tier === tier + 1 && item.baseId === baseId,
  );

  if (!uppedItem) {
    return currentItem;
  }

  const uppedProperties = {
    name: uppedItem.name,
    tier: tier + 1,
    properties: uppedItem.properties,
  };

  return rollItem({
    ...currentItem,
    ...uppedProperties,
  });
};

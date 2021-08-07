import {getItems} from '../api/index.js';

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
    properties: uppedItem.properties,
  };

  return {
    ...currentItem,
    ...uppedProperties,
  };
};

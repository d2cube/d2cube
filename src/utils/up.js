import {getItems} from '../queries/index.js';

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
    clvl: uppedItem.clvl,
    ilvl: uppedItem.ilvl,
    properties: uppedItem.properties,
  };

  return {
    ...currentItem,
    ...uppedProperties,
  };
};

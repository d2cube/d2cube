import {filter} from 'uinix-fp';

export const mapItemName = (item) => {
  const {name, prefix, rarity, suffix, tier} = item;

  const itemName = filter()([
    prefix || rarity,
    name,
    suffix,
    Array.from({length: tier}).join('+'),
  ]).join(' ');

  const color = `item.rarity.${rarity}`;

  return {text: itemName, color};
};

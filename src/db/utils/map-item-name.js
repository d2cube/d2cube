import {filter} from 'uinix-fp';

export const mapItemName = (item) => {
  const {name, quality, prefix, suffix, tier} = item;

  const itemName = filter()([
    prefix || quality,
    name,
    suffix,
    Array.from({length: tier}).join('+'),
  ]).join(' ');

  const color = `item.${quality}`;

  return {text: itemName, color};
};

import {filter} from 'uinix-fp';

export const mapItemName = (item) => {
  const {name, prefix, quality, suffix, tier} = item;

  const itemName = filter()([
    prefix,
    name,
    suffix ? `of ${suffix}` : '',
    Array.from({length: tier}).join('+'),
  ]).join(' ');

  return {text: itemName, color: `item.quality.${quality}`};
};

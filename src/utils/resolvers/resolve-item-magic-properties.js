import {props} from 'uinix-fp';

import {resolveItemProperty} from './resolve-item-property.js';

export const resolveItemMagicProperties = (item) => {
  const magicProperties = props('properties.magic')(item) || {};

  return Object.entries(magicProperties).map(([property, values]) => {
    const text = resolveItemProperty(item)({property, values});
    return {text, color: 'magic'};
  });
};

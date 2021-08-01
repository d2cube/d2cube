import {props} from 'uinix-fp';

import {resolveMagicProperty} from './resolve-magic-property.js';

export const resolveItemMagicProperties = (item) => {
  const magicProperties = props('properties.magic')(item);
  if (!magicProperties) {
    return [];
  }

  return Object.entries(magicProperties)
    .map(resolveMagicProperty(item))
    .map((text) => ({color: 'magic', text}));
};

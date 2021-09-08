import {props} from 'uinix-fp';

import {prepend} from '../fp.js';
import {resolveItemProperty} from './resolve-item-property.js';

export const resolveItemSetProperties = (item) => {
  const setProperties = props('properties.set')(item) || [];

  if (!item.set) {
    return [];
  }

  const resolved = [];

  [...setProperties].reverse().forEach((setProperty, i) => {
    if (setProperty) {
      const setCountText =
        i === 0 ? ' (Full set)' : ` (${setProperties.length - i} items)`;

      Object.entries(setProperty).forEach(([property, values]) => {
        const resolvedItemProperty = resolveItemProperty(item)({
          property,
          values,
        });
        const text = Array.isArray(resolvedItemProperty)
          ? resolvedItemProperty.map(prepend(setCountText)).join('\n')
          : prepend(setCountText)(resolvedItemProperty);
        resolved.push({text, color: 'item.set'});
      });
    }
  });

  return resolved;
};

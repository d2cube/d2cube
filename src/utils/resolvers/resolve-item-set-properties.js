import {props} from 'uinix-fp';
import {getSet} from '../../api/index.js';

import {prepend} from '../fp.js';
import {resolveItemProperty} from './resolve-item-property.js';
import {resolveSetItems} from './resolve-set-items.js';
import {resolveSetProperties} from './resolve-set-properties.js';

export const resolveItemSetProperties = (item) => {
  const setProperties = props('properties.set')(item) || [];

  if (!item.set) {
    return [];
  }

  const set = getSet(item.set);
  let resolved = [];

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

  resolved = [
    ...resolved,
    null,
    ...resolveSetProperties(set),
    ...resolveSetItems(set),
  ];

  return resolved;
};

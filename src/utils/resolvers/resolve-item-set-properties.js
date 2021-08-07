import {props} from 'uinix-fp';

import {getItemById, getSetById} from '../../api/index.js';
import {resolveItemProperty} from './resolve-item-property.js';

export const resolveItemSetProperties = (item) => {
  const setProperties = props('properties.set')(item) || [];

  if (!item.set) {
    return [];
  }

  const set = getSetById(item.set);
  const result = [];

  resolveSetProperties({
    item,
    result,
    setProperties,
    color: 'set',
  });

  result.push(null);
  resolveSetProperties({
    item,
    result,
    setProperties: set.bonus,
    color: 'unique',
  });

  result.push(null, {text: set.name, color: 'unique'});
  set.items.forEach((id) => {
    result.push({text: getItemById(id).name, color: 'set'});
  });

  return result;
};

const resolveSetProperties = ({item, result, setProperties, color}) => {
  [...setProperties].reverse().forEach((setProperty, i) => {
    if (setProperty) {
      Object.entries(setProperty).forEach(([property, values]) => {
        const setCountText =
          i === 0 ? ' (Full set)' : ` (${setProperties.length - i} items)`;
        const text =
          resolveItemProperty(item)({property, values}) + setCountText;
        result.push({text, color});
      });
    }
  });
};

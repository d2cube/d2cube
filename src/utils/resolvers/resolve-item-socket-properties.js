import {pipe, props} from 'uinix-fp';

import {concat, join} from '../fp.js';
import {resolveItemProperty} from './resolve-item-property.js';

export const resolveItemSocketProperties = (item) => {
  const socketProperties = props('properties.socket')(item);
  if (!socketProperties) {
    return [];
  }

  return [
    'Can be inserted into socketed items',
    null,
    ...mapSocketPropertyText(item),
    null,
  ];
};

const mapSocketPropertyText = (item) => {
  const socketProperties = item.properties.socket;
  return Object.entries(socketProperties).map(
    ([socketCategoryType, properties]) => {
      const propertyTexts = Object.entries(properties).map(
        ([property, values]) => resolveItemProperty(item)({property, values}),
      );
      return pipe([
        concat(`${socketCategoryType}s:`),
        concat(join(', ')(propertyTexts)),
        join(' '),
      ])([]);
    },
  );
};

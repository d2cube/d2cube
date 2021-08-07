import {pipe, props} from 'uinix-fp';

import {SocketCategoryType} from '../../enums/index.js';
import {concat, join} from '../fp.js';
import {resolveItemPropertyValue} from './resolve-item-property-value.js';
import {resolveItemProperty} from './resolve-item-property.js';

export const resolveItemSocketProperties = (item) => {
  const socketProperties = props('properties.socket')(item);
  if (!socketProperties) {
    return [];
  }

  return [
    'Can be inserted into socketed items',
    null,
    ...Object.keys(SocketCategoryTypeMapping).map(mapSocketPropertyText(item)),
    null,
  ];
};

const SocketCategoryTypeMapping = {
  Weapons: SocketCategoryType.Weapon,
  Armor: SocketCategoryType.Armor,
  Helms: SocketCategoryType.Armor,
  Shields: SocketCategoryType.Shield,
};

const mapSocketPropertyText = (item) => (socketType) => {
  const socketCategoryType = SocketCategoryTypeMapping[socketType];
  const socketProperties = resolveItemPropertyValue(
    'socket',
    socketCategoryType,
  )(item);
  const propertyTexts = Object.entries(socketProperties).map(
    ([property, values]) => resolveItemProperty(item)({property, values}),
  );

  const text = pipe([
    concat(`${socketType}:`),
    concat(join(', ')(propertyTexts)),
    join(' '),
  ])([]);

  return {text};
};

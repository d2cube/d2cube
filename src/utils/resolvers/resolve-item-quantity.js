import {BasePropertyType} from '../../enums/index.js';
import {cb} from '../fp.js';
import {resolveItemPropertyValue} from './resolve-item-property-value.js';

export const resolveItemQuantity = (item) => {
  const value = resolveItemPropertyValue(
    'base',
    BasePropertyType.Quantity,
  )(item);
  return cb((x) => `Quantity: ${x}`)(value);
};

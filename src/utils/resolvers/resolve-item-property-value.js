import {props} from 'uinix-fp';

export const resolveItemPropertyValue = (key, property) =>
  props(`properties.${key}.${property}`);

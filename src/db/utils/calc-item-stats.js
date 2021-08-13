import {filter, props} from 'uinix-fp';

import {sum} from '../../utils/fp.js';
import { resolveItemSocketCategoryType } from '../../utils/resolvers/resolve-item-socket-category-type.js';

// Track all magic properties from magic/set/socket bonuses
export const calcItemStats = (item) => {
  const magicProperties = props('properties.magic')(item) || {};
  const setProperties = props('properties.set')(item) || [];

  const stats = {};

  // push magic properties
  Object.entries(magicProperties).forEach(pushEntry(stats));

  // push set properties
  filter()(setProperties).map((setProperty) =>
    Object.entries(setProperty).forEach(pushEntry(stats)),
  );

  // Reduce effective value
  return Object.entries(stats).reduce((acc, [property, values]) => {
    // TODO: figure out general logic
    let effective = [];
    effective = values.length === 1 ? values[0] : sum(values);
    acc[property] = effective;
    return acc;
  }, {});
};

const pushEntry = (x) => (entry) => {
  const [key, value] = entry;
  if (!(key in x)) {
    x[key] = [];
  }

  x[key].push(value);
};

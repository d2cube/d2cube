import {filter, props} from 'uinix-fp';

// Track all magic properties from magic/set/socket bonuses
export const calcItemStats = (item) => {
  const magicProperties = props('properties.magic')(item) || {};
  const setProperties = props('properties.set')(item) || [];

  const stats = {};
  Object.entries(magicProperties).forEach(pushEntry(stats));
  filter()(setProperties).map((setProperty) =>
    Object.entries(setProperty).forEach(pushEntry(stats)),
  );

  // Reduce effective value
  return Object.entries(stats).reduce((acc, [property, values]) => {
    // TODO: figure out general logic
    const flattened = values.flat();
    acc[property] = flattened.length === 1 ? flattened[0] : flattened;
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

import {resolveItemProperty} from './resolve-item-property.js';

export const resolveItemStats = (item) =>
  Object.entries(item.stats).map(([property, stat]) => {
    const {type, values} = stat;
    const text = resolveItemProperty(item)({property, values});

    return {text, color: type};
  });

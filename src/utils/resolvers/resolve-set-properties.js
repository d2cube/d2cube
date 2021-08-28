import {resolveItemProperty} from './resolve-item-property.js';

export const resolveSetProperties = (set) => {
  const {bonus, items} = set;

  const resolved = [];
  bonus.forEach((properties, i) => {
    if (properties) {
      const equipCount = i + 1;
      const equipText =
        equipCount === items.length
          ? 'Full set equipped'
          : `${i + 1} pieces equipped`;
      resolved.push({text: equipText, color: 'item.normal'});

      Object.entries(properties).forEach(([property, values]) => {
        const text = resolveItemProperty()({
          property,
          values,
        });
        resolved.push({text, color: 'item.unique'});
      });
      resolved.push(null);
    }
  });

  return resolved;
};

import {getItem} from '../../api/index.js';

export const resolveSetBonuses = (set) => {
  const resolved = [{text: set.name, color: 'item.unique'}];
  set.items.forEach((id) => {
    const {name} = getItem(id);
    resolved.push({text: name, color: 'item.set'});
  });
  return resolved;
};

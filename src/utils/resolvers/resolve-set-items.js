import {getItem} from '../../api/index.js';

export const resolveSetItems = (set) => {
  const resolved = [{text: set.name, color: 'item.unique'}];
  set.items.forEach((id) => {
    resolved.push({text: getItem(id).name, color: 'item.set'});
  });
  return resolved;
};

import {getItem} from '../../api/index.js';
import {appendTierLabel} from '../append-tier-label.js';

export const resolveSetItems = (set) => {
  const resolved = [{text: set.name, color: 'item.unique'}];
  set.items.forEach((id) => {
    const {name, tier} = getItem(id);
    resolved.push({text: appendTierLabel(tier)(name), color: 'item.set'});
  });
  return resolved;
};

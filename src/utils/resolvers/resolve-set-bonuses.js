import {getItem} from '../../api/index.js';

import {getTierLabel} from '../get-tier-label.js';

export const resolveSetBonuses = (set) => {
  const resolved = [{text: set.name, color: 'item.unique'}];
  set.items.forEach((id) => {
    const {name, tier} = getItem(id);
    resolved.push({text: name + getTierLabel(tier), color: 'item.set'});
  });
  return resolved;
};

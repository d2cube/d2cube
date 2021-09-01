import {props} from 'uinix-fp';

import {SEARCH_OPERATORS} from '../constants/index.js';
import {and} from '../utils/fp.js';
import {getItems} from './get-items.js';

// TODO: implement in uinix-search
export const search = (filters) => {
  const conditions = filters.map(condition);
  const test = and(conditions);
  return items.filter(test);
};

const condition = (filter) => (x) => {
  const operator = SEARCH_OPERATORS[filter.operator];
  return operator(filter.value)(props(filter.field)(x));
};

const items = getItems();

import {props} from 'uinix-fp';

import {SEARCH_OPERATORS} from '../constants/index.js';
import {and} from '../utils/fp.js';
import {getItems} from './get-items.js';

export const createSearch =
  ({items, operators}) =>
  (filters = []) => {
    const conditions = filters.map(condition(operators));
    const test = and(conditions);
    return items.filter(test);
  };

const condition = (operators) => (filter) => (x) => {
  const operator = operators[filter.operator];
  return operator(filter.value)(props(filter.field)(x));
};

// TODO: implement in uinix-search
export const search = createSearch({
  items: getItems(),
  operators: SEARCH_OPERATORS,
});

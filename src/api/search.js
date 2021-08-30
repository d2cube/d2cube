import {props} from 'uinix-fp';
import {OperatorType} from '../enums/operator-type.js';

import {and} from '../utils/fp.js';
import {getItems} from './get-items.js';

// TODO: implement in uinix-search
export const search = (filters) => {
  const conditions = filters.map(condition);
  const test = and(conditions);
  return items.filter(test);
};

const condition = (filter) => (x) => {
  const operator = operators[filter.operator];
  return operator(filter.value)(props(filter.field)(x));
};

const operators = {
  [OperatorType.Contains]: (x) => (y) => y.includes(x),
  [OperatorType.Equals]: (x) => (y) => x === y,
};

const items = getItems();

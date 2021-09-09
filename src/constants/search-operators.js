import {OperatorType} from '../enums/operator-type.js';
import {match} from '../utils/fp.js';
import {resolveItemStats} from '../utils/resolvers/resolve-item-stats.js';

export const SEARCH_OPERATORS = {
  [OperatorType.Contains]: (v) => (x) => v.includes(x),
  [OperatorType.Equals]: (v) => (x) => x === v,
  [OperatorType.GreaterThan]: (v) => (x) => x > v,
  [OperatorType.FuzzyContains]: (v) => (x) =>
    match(v)(JSON.stringify(resolveItemStats({stats: x}))), // TODO: THIS IS SUPER HACKY
  [OperatorType.LessThan]: (v) => (x) => x < v,
  [OperatorType.Matches]: match,
};

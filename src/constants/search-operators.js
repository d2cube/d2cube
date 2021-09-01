import {OperatorType} from '../enums/operator-type.js';

import {isEmpty} from '../utils/fp.js';

export const SEARCH_OPERATORS = {
  [OperatorType.Between]: (y) => (x) => x > y[0] && x < y[1],
  [OperatorType.Contains]: (y) => (x) => y.includes(x),
  [OperatorType.Empty]: () => (x) => isEmpty(x),
  [OperatorType.Equals]: (y) => (x) => x === y,
  [OperatorType.GreaterThan]: (y) => (x) => x > y,
  [OperatorType.GreaterThanEqual]: (y) => (x) => x >= y,
  [OperatorType.LessThan]: (y) => (x) => x < y,
  [OperatorType.LessThanEqual]: (y) => (x) => x <= y,
};

import {BasePropertyType, OperatorType, ItemType} from '../enums/index.js';

export const SEARCH_FILTERS = {
  isQualityNormal: {
    field: 'quality',
    operator: OperatorType.Empty,
  },
  isTypeRune: {
    field: 'type',
    operator: OperatorType.Equals,
    value: ItemType.Rune,
  },
  isSocketable: {
    field: `properties.base.${BasePropertyType.MaxSockets}`,
    operator: OperatorType.GreaterThan,
    value: 0,
  },
  createContainsTypes: (types = []) => ({
    field: 'type',
    operator: OperatorType.Contains,
    value: types,
  }),
  createGreaterThanEqualSocketCount: (value) => ({
    field: `properties.base.${BasePropertyType.MaxSockets}`,
    operator: OperatorType.GreaterThanEqual,
    value,
  }),
};

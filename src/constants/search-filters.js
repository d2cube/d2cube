import {
  BasePropertyType,
  OperatorType,
  ItemQualityType,
  ItemType,
} from '../enums/index.js';

export const SEARCH_FILTERS = {
  isQualityNormal: {
    field: 'quality',
    operator: OperatorType.Equals,
    value: ItemQualityType.Normal,
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
};

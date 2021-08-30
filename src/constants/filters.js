import {OperatorType, ItemType} from '../enums/index.js';

export const FILTERS = {
  rune: {field: 'type', operator: OperatorType.Equals, value: ItemType.Rune},
};

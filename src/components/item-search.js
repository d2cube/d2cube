import {BasePropertyType, FieldType, OperatorType} from '../enums/index.js';
import Search from './ui/search.js';

const ItemSearch = ({filters, onChange}) => (
  <Search
    placeholder="Search items by applying filters..."
    schema={schema}
    filters={filters}
    onChange={onChange}
  />
);

const createFields = () => {
  const fields = {
    Name: {
      value: 'Name',
      label: 'Name',
      type: FieldType.String,
    },
    [BasePropertyType.RequiredLevel]: {
      value: [BasePropertyType.RequiredLevel],
      label: 'Required Level',
      type: FieldType.Number,
    },
  };

  return fields;
};

const operators = {
  [OperatorType.Equals]: {
    value: OperatorType.Equals,
    label: 'equals',
  },
  [OperatorType.Between]: {
    value: OperatorType.Between,
    label: 'between',
  },
  [OperatorType.Contains]: {
    value: OperatorType.Contains,
    label: 'contains',
  },
  [OperatorType.GreaterThan]: {
    value: OperatorType.GreaterThan,
    label: 'greater than',
  },
  [OperatorType.LessThan]: {
    value: OperatorType.LessThan,
    label: 'less than',
  },
};

const types = {
  [FieldType.Number]: {
    value: FieldType.Number,
    label: 'number',
    operators: [
      OperatorType.Empty,
      OperatorType.Equals,
      OperatorType.LessThan,
      OperatorType.GreaterThan,
      OperatorType.Between,
    ],
  },
  [FieldType.String]: {
    value: FieldType.String,
    label: 'string',
    operators: [OperatorType.Empty, OperatorType.Equals, OperatorType.Contains],
  },
};

const schema = {
  fields: createFields(),
  operators,
  types,
};

export default ItemSearch;

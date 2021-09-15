import {useMemo, useState} from 'react';
import ReactSelect from 'react-windowed-select';
import {props} from 'uinix-fp';

import {FieldType} from '../../enums/index.js';
import {match, isNumber} from '../../utils/fp.js';
import SearchFilter from './search-filter.js';
import {components, styles} from './react-select-overrides.js';

const overrideStyles = {
  ...styles,
  menuList: () => ({
    ...styles.menuList(),
    maxHeight: null,
  }),
};

const Search = ({placeholder, filters, schema, onChange}) => {
  const [query, setQuery] = useState('');

  const options = useMemo(
    () => createOptions({query, schema}),
    [query, schema],
  );

  const handleChange = (updatedOption, state) => {
    setQuery('');
    switch (state.action) {
      case 'clear':
        onChange([]);
        break;
      case 'select-option':
        onChange([...filters, getFilter(state.option)]);
        break;
      case 'pop-value':
      case 'remove-value':
        onChange(updatedOption.map(getFilter));
        break;
      default:
        break;
    }
  };

  return (
    <ReactSelect
      isMulti
      components={components}
      menuPortalTarget={document.body}
      options={options}
      placeholder={placeholder}
      styles={overrideStyles}
      onChange={handleChange}
      onInputChange={setQuery}
    />
  );
};

const createOptions = ({query, schema}) => {
  const {enums, fields, operators, types} = schema;
  return Object.values(fields)
    .filter(testIsValidField({query, schema}))
    .flatMap((field) => {
      const fieldOperators = types[field.type].operators.map(
        (operator) => operators[operator],
      );
      const fieldEnums = Object.values(enums[field.enums] || {}).filter(
        match(query),
      );
      return fieldOperators.map(
        createOperatorOption({enums: fieldEnums, field, query}),
      );
    });
};

const testIsValidField =
  ({query, schema}) =>
  (field) => {
    switch (field.type) {
      case FieldType.EnumSet:
        return Object.values(schema.enums[field.enums]).some(match(query));
      case FieldType.Number:
        return isNumber(query || 0);
      default:
        return true;
    }
  };

const createOperatorOption =
  ({enums, field, query}) =>
  (operator) => {
    const option = {
      data: {
        filter: {
          field: field.id,
          operator: operator.id,
          value: coerceValue({enums, field, query}),
        },
      },
      label: (
        <SearchFilter
          enums={enums}
          field={field}
          operator={operator}
          value={query}
        />
      ),
    };
    option.value = getValue(option);
    return option;
  };

const coerceValue = ({enums, field, query}) => {
  switch (field.type) {
    case FieldType.Number:
      return Number.parseInt(query, 10);
    case FieldType.EnumSet:
      return enums;
    case FieldType.String:
    default:
      return query;
  }
};

const getValue = (option) => Object.values(option.data.filter).join('-');

const getFilter = props('data.filter');

export default Search;

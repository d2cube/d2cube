import {useMemo, useState} from 'react';
import ReactSelect from 'react-windowed-select';
import {props} from 'uinix-fp';

import {FieldType} from '../../enums/index.js';
import {match, isNumber} from '../../utils/fp.js';
import BrandText from './brand-text.js';
import SearchFilter from './search-filter.js';
import {
  components as overrideComponents,
  styles as overrideStyles,
} from './react-select-overrides.js';

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
      options={options}
      placeholder={placeholder}
      styles={styles}
      onChange={handleChange}
      onInputChange={setQuery}
    />
  );
};

const MultiValueLabel = ({data}) => {
  const {enumValue, field, operator, query} = data.data;
  return (
    <SearchFilter
      isPreview
      enumValue={enumValue}
      field={field}
      operator={operator}
      query={query}
    />
  );
};

const components = {
  ...overrideComponents,
  MultiValueLabel,
};

const styles = {
  ...overrideStyles,
};

const createOptions = ({query, schema}) => {
  const {enums, fields, operators, types} = schema;
  return Object.values(fields)
    .filter(testIsValidField({query, schema}))
    .flatMap((field) => {
      const fieldOperators = types[field.type].operators.map(
        (operator) => operators[operator],
      );
      const enumValues = Object.values(enums[field.enums] || {}).filter(
        match(query),
      );

      const options = [];
      fieldOperators.forEach((operator) => {
        if (field.enums) {
          enumValues.forEach((enumValue) => {
            options.push(createOption({enumValue, field, operator, query}));
          });
        } else {
          options.push(createOption({field, operator, query}));
        }
      });

      return {
        label: (
          <BrandText color="item.crafted" fontSize="s" text={field.label} />
        ),
        options,
      };
    });
};

const createOption = ({enumValue = null, field, operator, query}) => {
  const option = {
    data: {
      enumValue,
      field,
      filter: {
        field: field.id,
        operator: operator.id,
        value: coerceValue({enumValue, field, query}),
      },
      operator,
      query,
    },
    label: (
      <SearchFilter
        enumValue={enumValue}
        field={field}
        operator={operator}
        query={query}
      />
    ),
  };
  option.value = getValue(option);
  return option;
};

const testIsValidField =
  ({query, schema}) =>
  (field) => {
    switch (field.type) {
      case FieldType.Enum:
        return Object.values(schema.enums[field.enums]).some(match(query));
      case FieldType.Number:
        return isNumber(query);
      case FieldType.String:
      case FieldType.Json:
        return Boolean(query);
      default:
        return true;
    }
  };

const coerceValue = ({enumValue, field, query}) => {
  switch (field.type) {
    case FieldType.Number:
      return Number.parseInt(query, 10);
    case FieldType.Enum:
      return enumValue;
    case FieldType.String:
    default:
      return query;
  }
};

const getValue = (option) => Object.values(option.data.filter).join('-');

const getFilter = props('data.filter');

export default Search;

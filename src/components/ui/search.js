import {useMemo} from 'react';

import {SEARCH_FILTERS} from '../../constants/index.js';
import Select from './select.js';

const Search = ({placeholder, filters, schema, onChange}) => {
  const options = useMemo(() => mapSchemaToOptions(schema), [schema]);

  const handleChange = (updatedFilters) => {
    onChange(updatedFilters);
  };

  return (
    <Select
      isMulti
      placeholder={placeholder}
      options={options}
      value={filters}
      onChange={handleChange}
    />
  );
};

const mapSchemaToOptions = (schema) => {
  console.log(schema);
  const options = [
    {
      label: 'Type === Rune',
      value: SEARCH_FILTERS.isTypeRune,
    },
  ];

  return options;
};

export default Search;

import {useMemo} from 'react';
import ReactSelect from 'react-select';

import {
  components as overrideComponents,
  styles,
} from './react-select-overrides.js';

const Search = ({placeholder, filters, schema, onChange}) => {
  console.log(filters, schema, onChange);
  const options = [];

  const components = useMemo(
    () => ({
      ...overrideComponents,
    }),
    [],
  );

  const handleChange = (updatedOptions) => {
    console.log(updatedOptions);
  };

  return (
    <ReactSelect
      components={components}
      placeholder={placeholder}
      options={options}
      // @ts-ignore
      styles={styles}
      onChange={handleChange}
    />
  );
};

export default Search;

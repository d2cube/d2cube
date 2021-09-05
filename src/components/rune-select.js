import {prop} from 'uinix-fp';

import {SEARCH_FILTERS} from '../constants/index.js';
import ItemSelect from './item-select.js';

const RuneSelect = ({max, value, onChange}) => (
  <ItemSelect
    isMulti
    formatOptionLabel={formatOptionLabel}
    filters={filters}
    max={max}
    noOptionsMessage="No runes found."
    placeholder="Search runes..."
    value={value}
    onChange={onChange}
  />
);

const filters = [SEARCH_FILTERS.isTypeRune];

const formatOptionLabel = prop('value');

export default RuneSelect;

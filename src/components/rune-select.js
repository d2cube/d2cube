import {props} from 'uinix-fp';

import {FILTERS} from '../constants/index.js';
import ItemSelect from './item-select.js';

const RuneSelect = ({value, onChange}) => (
  <ItemSelect
    isMulti
    formatOptionLabel={props('item.id')}
    filters={[FILTERS.rune]}
    placeholder="Search runes..."
    value={value}
    onChange={onChange}
  />
);

export default RuneSelect;

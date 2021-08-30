import {useMemo} from 'react';

import {search} from '../api/index.js';
import {rollItem} from '../utils/roll-item.js';
import Select from './ui/select.js';
import ItemName from './item-name.js';

const ItemSelect = ({
  isMulti = false,
  filters = [],
  formatOptionLabel = undefined,
  placeholder = 'Search items...',
  value,
  onChange,
}) => {
  const items = useMemo(() => search(filters), [filters]);
  const options = useMemo(() => items.map(mapItemToOption), [items]);

  return (
    <Select
      isMulti={isMulti}
      formatOptionLabel={formatOptionLabel}
      options={options}
      placeholder={placeholder}
      value={value}
      renderOption={renderOption}
      onChange={onChange}
    />
  );
};

const renderOption = ({option, query}) => (
  <ItemName item={option.item} query={query} />
);

const mapItemToOption = (item) => ({
  item: rollItem(item),
  value: item.id,
  label: item.name,
});

export default ItemSelect;

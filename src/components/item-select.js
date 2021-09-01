import {useMemo} from 'react';

import {search} from '../api/index.js';
import Select from './ui/select.js';
import ItemName from './item-name.js';

const ItemSelect = ({
  isMenuOpen = undefined,
  isMulti = false,
  filters = [],
  formatOptionLabel = undefined,
  group = undefined,
  noOptionsMessage = 'No items found.',
  placeholder = 'Search items...',
  value,
  onChange,
  renderExtra = undefined,
}) => {
  const items = useMemo(() => search(filters), [filters]);
  const options = useMemo(() => items.map(mapItemToOption), [items]);

  return (
    <Select
      isMenuOpen={isMenuOpen}
      isMulti={isMulti}
      formatOptionLabel={formatOptionLabel}
      group={group}
      options={options}
      noOptionsMessage={noOptionsMessage}
      placeholder={placeholder}
      value={value}
      renderOption={renderOption(renderExtra)}
      onChange={onChange}
    />
  );
};

const renderOption =
  (renderExtra) =>
  ({option, query}) =>
    <ItemName item={option.data} query={query} renderExtra={renderExtra} />;

const mapItemToOption = (item) => ({
  data: item,
  value: item.id,
  label: item.name,
});

export default ItemSelect;

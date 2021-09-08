import {useMemo} from 'react';
import {Layout} from 'uinix-ui';

import {search} from '../api/index.js';
import Select from './ui/select.js';
import ItemName from './item-name.js';

const ItemSelect = ({
  isMulti = false,
  enableDuplicateValue = false,
  filters = [],
  formatOptionLabel = undefined,
  group = undefined,
  max = undefined,
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
      enableDuplicateValue={enableDuplicateValue}
      formatOptionLabel={formatOptionLabel}
      group={group}
      isMulti={isMulti}
      options={options}
      max={max}
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
    (
      <Layout align="center" justify="space-between">
        <ItemName item={option.data} query={query} />
        {renderExtra(option.data)}
      </Layout>
    );

const mapItemToOption = (item) => ({
  data: item,
  value: item.id,
  label: item.name,
});

export default ItemSelect;

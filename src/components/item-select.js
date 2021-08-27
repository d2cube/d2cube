import {getItems} from '../api/get-items.js';
import {rollItem} from '../utils/roll-item.js';
import Select from './ui/select.js';
import ItemName from './item-name.js';

const ItemSelect = ({
  filters = [],
  value = undefined,
  onChange = undefined,
}) => (
  <Select
    options={getOptions(filters)}
    value={value}
    renderOption={renderOption}
    onChange={onChange}
  />
);

const renderOption = ({option, query}) => (
  <ItemName item={option.item} query={query} />
);

const mapItemToOption = (item) => ({
  item: rollItem(item),
  value: item.id,
  label: item.name,
});

const getOptions = (filters) => getItems().map(mapItemToOption);

export default ItemSelect;

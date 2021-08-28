import {getItems} from '../api/index.js';
import {rollItem} from '../utils/roll-item.js';
import Select from './ui/select.js';
import ItemName from './item-name.js';

const ItemSelect = ({value = undefined, onChange = undefined}) => (
  <Select
    options={options}
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

const getOptions = () => getItems().map(mapItemToOption);

const options = getOptions();

export default ItemSelect;

import {SEARCH_FILTERS} from '../constants/index.js';
import {BasePropertyType} from '../enums/base-property-type.js';
import {getItemTypeLabel} from '../utils/get-item-type-label.js';
import ItemSelect from './item-select.js';
import BrandText from './ui/brand-text.js';

const SocketedItemSelect = ({value, onChange}) => (
  <ItemSelect
    filters={filters}
    group={group}
    value={value}
    renderExtra={renderExtra}
    onChange={onChange}
  />
);

const renderExtra = (item) => (
  <BrandText
    color="text.muted"
    text={`${item.properties.base[BasePropertyType.MaxSockets]} max sockets`}
  />
);

const filters = [SEARCH_FILTERS.isQualityNormal, SEARCH_FILTERS.isSocketable];

const group = {
  key: 'data.type',
  getLabel: getItemTypeLabel,
};

export default SocketedItemSelect;

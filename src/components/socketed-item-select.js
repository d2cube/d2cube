import {SEARCH_FILTERS, ITEM_TYPE_LABELS} from '../constants/index.js';
import {BasePropertyType} from '../enums/base-property-type.js';
import ItemSelect from './item-select.js';
import BrandText from './ui/brand-text.js';

const SocketedItemSelect = ({filters = [], value, onChange}) => (
  <ItemSelect
    filters={[
      SEARCH_FILTERS.isQualityNormal,
      SEARCH_FILTERS.isSocketable,
      ...filters,
    ]}
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

const group = {
  key: 'data.type',
  labels: ITEM_TYPE_LABELS,
};

export default SocketedItemSelect;

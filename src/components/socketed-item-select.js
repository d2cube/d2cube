import {SEARCH_FILTERS} from '../constants/index.js';
import {BasePropertyType} from '../enums/index.js';
import {getItemTypeLabel} from '../utils/get-item-type-label.js';
import {getSocketedLabel} from '../utils/get-socketed-label.js';
import ItemSelect from './item-select.js';
import BrandText from './ui/brand-text.js';

const SocketedItemSelect = ({sockets, types, value, onChange}) => {
  const filters = [SEARCH_FILTERS.isQualityNormal, SEARCH_FILTERS.isSocketable];

  if (sockets) {
    filters.push(SEARCH_FILTERS.createGreaterThanEqualsSocketsCount(sockets));
  }

  if (types) {
    filters.push(SEARCH_FILTERS.createContainsTypes(types));
  }

  return (
    <ItemSelect
      filters={filters}
      group={group}
      value={value}
      renderExtra={createRenderExtra(sockets)}
      onChange={onChange}
    />
  );
};

const createRenderExtra = (sockets) => (item) =>
  (
    <BrandText
      color="text.muted"
      text={getSocketedLabel({
        max: item.properties.base[BasePropertyType.MaxSockets],
        sockets,
      })}
    />
  );

const group = {
  key: 'data.type',
  getLabel: getItemTypeLabel,
};

export default SocketedItemSelect;

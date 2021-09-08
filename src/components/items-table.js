import {props} from 'uinix-fp';

import {getItemTypeLabel} from '../utils/get-item-type-label.js';
import {resolveItemProperties} from '../utils/resolvers/resolve-item-properties.js';
import {BasePropertyType} from '../enums/base-property-type.js';
import Properties from './properties.js';
import ItemName from './item-name.js';
import BrandText from './ui/brand-text.js';
import Table from './ui/table.js';

const ItemsTable = ({items}) => <Table columns={columns} data={items} />;

const CLVL_KEY = `properties.base.${BasePropertyType.RequiredLevel}`;

const columns = {
  name: {
    key: 'name',
    label: 'Name',
    render: (d) => <ItemName shouldDisplayImage item={d} />,
  },
  type: {
    key: 'type',
    label: 'Type',
    render: (d) => <BrandText text={getItemTypeLabel(d.type)} />,
  },
  quality: {
    key: 'quality',
    label: 'Quality',
    render: (d) => <BrandText color={`item.${d.quality}`} text={d.quality} />,
  },
  class: {
    key: 'class',
    label: 'Class',
    render: (d) => <BrandText text={d.class} />,
  },
  clvl: {
    key: CLVL_KEY,
    label: 'CLvl',
    render: (d) => <BrandText text={props(CLVL_KEY)(d)} />,
  },
  tier: {
    key: 'tier',
    label: 'Tier',
    render: (d) => <BrandText text={d.tier} />,
  },
  properties: {
    key: 'properties',
    label: 'Properties',
    render: (d) => <Properties properties={resolveItemProperties(d)} />,
    width: '50%',
  },
};

export default ItemsTable;

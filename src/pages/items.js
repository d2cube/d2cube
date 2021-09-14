import {useState} from 'react';
import {v4 as uuid} from 'uuid';

import {getItems} from '../api/index.js';
import {createSearch} from '../api/search.js'; // TODO: avoid this internal API
import ItemSearch from '../components/item-search.js';
import ItemsTable from '../components/items-table.js';
import PageLayout from '../components/page-layout.js';
import BrandText from '../components/ui/brand-text.js';
import Frame from '../components/ui/frame.js';
import {SEARCH_OPERATORS} from '../constants/index.js';
import {rollItem} from '../utils/roll-item.js';

const search = createSearch({
  items: getItems().map(rollItem),
  operators: SEARCH_OPERATORS,
});

const Page = () => {
  const [filters, setFilters] = useState([]);
  const [queryKey, setQueryKey] = useState(uuid());

  const items = search(filters);

  const handleUpdateFilters = (updatedFilters) => {
    setQueryKey(uuid());
    setFilters(updatedFilters);
  };

  return (
    <PageLayout title="Items">
      <Frame help={help} size="l" title="ItemDB">
        <ItemSearch filters={filters} onChange={handleUpdateFilters} />
        <ItemsTable key={queryKey} items={items} />
      </Frame>
    </PageLayout>
  );
};

const help = (
  <div>
    <p>
      Search for items in the <code>ItemDB</code> by applying filters in
      drill-down fashion (ie. <code>AND</code> logic). A fairly large set of
      item fields are searchable with a convenient typeahead prompt!
    </p>
    <p>
      Search results are presented in a paginated and configurable table. This
      table can be conveniently exported as JSON.
    </p>
    <div>
      Item descriptions aim to stay close to its in-game presentation. The
      following additional notations are used to emphasize details.
      <ul>
        <li>
          Item quality are easily identified by their colors: e.g.{' '}
          <BrandText color="item.unique" text="Unique" />,{' '}
          <BrandText color="item.set" text="Set" />,{' '}
          <BrandText color="item.magic" text="Magic" />
        </li>
        <li>
          Range values are enclosed in <code>[...]</code>
        </li>
        <li>
          The +/++/+++ symbols indicate Normal/Exceptional/Elite item tiers.
        </li>
      </ul>
    </div>
  </div>
);

export default Page;

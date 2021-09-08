import {useState} from 'react';
import {v4 as uuid} from 'uuid';

import {search} from '../api/index.js';
import ItemSearch from '../components/item-search.js';
import ItemsTable from '../components/items-table.js';
import PageLayout from '../components/page-layout.js';
import BrandText from '../components/ui/brand-text.js';
import Frame from '../components/ui/frame.js';
import {rollItem} from '../utils/roll-item.js';

const Page = () => {
  const [filters, setFilters] = useState([]);
  const [queryKey, setQueryKey] = useState(uuid());

  const items = search(filters).map(rollItem);

  const handleUpdateFilters = (updatedFilters) => {
    setQueryKey(uuid());
    setFilters(updatedFilters);
  };

  return (
    <PageLayout title="Items">
      <Frame help={help} size="l" title="Item Database">
        <ItemSearch filters={filters} onChange={handleUpdateFilters} />
        <ItemsTable key={queryKey} items={items} />
      </Frame>
    </PageLayout>
  );
};

const help = (
  <div>
    <p>
      Items are searchable by applying filter conditions using the search input.
    </p>
    <p>Search results are presented in a table grouped on common attributes.</p>
    <div>
      Item descriptions aim to stay close to its in-game description, and use
      the following additional notation for further details.
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

import {useState} from 'react';
import {pipe, prop} from 'uinix-fp';

import {getSets} from '../api/get-sets.js';
import PageLayout from '../components/page-layout.js';
import ItemSelect from '../components/item-select.js';
import Item from '../components/item.js';
import {groupBy} from '../utils/fp.js';

const Page = () => {
  const [item, setItem] = useState(null);
  const groupedSets = getGroupedSets();
  console.log(groupedSets);

  return (
    <PageLayout title="Sets">
      <ItemSelect value={item} onChange={pipe([prop('item'), setItem])} />
      {item && <Item item={item} />}
    </PageLayout>
  );
};

const getGroupedSets = () => groupBy('tier')(getSets());

export default Page;

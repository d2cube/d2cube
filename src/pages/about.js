import {useState} from 'react';
import {pipe, prop} from 'uinix-fp';

import PageLayout from '../components/page-layout.js';
import ItemSelect from '../components/item-select.js';
import Item from '../components/item.js';

const Page = () => {
  const [item, setItem] = useState(null);

  return (
    <PageLayout title="About">
      <ItemSelect value={item} onChange={pipe([prop('item'), setItem])} />
      {item && <Item item={item} />}
    </PageLayout>
  );
};

export default Page;

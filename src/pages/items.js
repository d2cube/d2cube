import React, {useState} from 'react';
import {Layout} from 'uinix-ui';

import Item from '../components/item.js';
import PageLayout from '../components/page-layout.js';
import {ItemType} from '../enums/index.js';
import {getItemsByType} from '../api/index.js';
import {rollItem} from '../utils/roll-item.js';

const Page = () => {
  const [selectedItemType, setSelectedItemType] = useState(ItemType.Set);
  const items = getItemsByType(selectedItemType).map(rollItem);

  const handleUpdateItemType = (event) =>
    setSelectedItemType(event.target.value);

  return (
    <PageLayout title="Items">
      <Layout bg="interface.background" direction="column" spacing="l">
        <select value={selectedItemType} onChange={handleUpdateItemType}>
          {Object.values(ItemType).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <Layout wrap spacing="m">
          {items.map((item) => (
            <Layout key={item.id} direction="column" spacing="l">
              <h4>{item.title || item.name}</h4>
              <Item key={item.id} item={item} />
            </Layout>
          ))}
        </Layout>
      </Layout>
    </PageLayout>
  );
};

export default Page;

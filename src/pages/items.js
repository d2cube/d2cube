import React, {useState} from 'react';
import {Layout} from 'uinix-ui';

import ItemName from '../components/item-name.js';
import ItemSelect from '../components/item-select.js';
import PageLayout from '../components/page-layout.js';
import {ItemType} from '../enums/index.js';
import {rollItem} from '../utils/roll-item.js';
import {getItems} from '../api/index.js';

const Page = () => {
  const [selectedItemType, setSelectedItemType] = useState(ItemType.Rune);
  const items = getItemsByType(selectedItemType).map(rollItem);

  const handleUpdateItemType = (event) =>
    setSelectedItemType(event.target.value);

  return (
    <PageLayout title="Items">
      <Layout bg="interface.background" direction="column" spacing="l">
        <ItemSelect value={undefined} onChange={console.log} />
        <select value={selectedItemType} onChange={handleUpdateItemType}>
          {Object.values(ItemType).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <Layout direction="column" spacing="s">
          {items.map((item) => (
            <ItemName key={item.id} item={item} />
          ))}
        </Layout>
      </Layout>
    </PageLayout>
  );
};

const getItemsByType = (type) =>
  getItems().filter((item) => item.type === type);

export default Page;

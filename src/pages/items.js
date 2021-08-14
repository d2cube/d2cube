import React, {useState} from 'react';
import {Layout} from 'uinix-ui';

import Item from '../components/item.js';
import PageLayout from '../components/page-layout.js';
import Recipes from '../components/recipes.js';
import {ItemType} from '../enums/index.js';
import {inventoryItems} from '../mocks/index.js';
import {getItemsByType} from '../api/index.js';
import {fill} from '../utils/fp.js';
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
          {items.map((item) =>
            item.variants ? (
              fill(item.variants)((i) => (
                <Item key={i} item={item} variant={i + 1} />
              ))
            ) : (
              <Layout key={item.id} direction="column" spacing="l">
                <h4>{item.title || item.name}</h4>
                <Item key={item.id} item={item} />
                <pre>{JSON.stringify(item, null, 2)}</pre>
              </Layout>
            ),
          )}
        </Layout>
        <h3>Recipes</h3>
        <Recipes items={inventoryItems} />
      </Layout>
    </PageLayout>
  );
};

export default Page;

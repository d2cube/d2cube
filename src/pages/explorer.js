import React, {useState} from 'react';

import {Cube, Item, PageLayout} from '../components/index.js';
import db from '../db/index.js';
import {getItemsByType} from '../queries/index.js';

const {ItemType} = db.enums;

const Page = () => {
  const [selectedItemType, setSelectedItemType] = useState(ItemType.Potion);
  const items = getItemsByType(selectedItemType);

  const handleUpdateItemType = (event) =>
    setSelectedItemType(event.target.value);

  return (
    <PageLayout title="Explorer">
      <select value={selectedItemType} onChange={handleUpdateItemType}>
        {Object.values(ItemType).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <hr />
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <hr />
      <h2>Cube</h2>
      <Cube />
    </PageLayout>
  );
};

export default Page;

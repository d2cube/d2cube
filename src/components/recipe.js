import React from 'react';
import {Layout, Text} from 'uinix-ui';

import Item from './item.js';

const Recipe = ({recipe}) => {
  const {name, sources, target} = recipe;

  return (
    <Layout direction="column" spacing="xs">
      <Text>{name}</Text>
      <Layout align="center" spacing="m">
        {sources.map((source) => (
          <Item
            key={source.id}
            isInactive={source.isInactive}
            item={source.item}
          />
        ))}
        <Text>➔</Text>
        <Item isInactive={target.isInactive} item={target.item} />
      </Layout>
    </Layout>
  );
};

export default Recipe;

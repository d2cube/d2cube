import React from 'react';
import {Layout, Text} from 'uinix-ui';

import {Item} from './item.js';

export const Recipe = ({recipe}) => {
  const {name, sources, target} = recipe;

  return (
    <Layout direction="column" spacing="xs">
      <Text>{name}</Text>
      <Layout align="center" spacing="m">
        {sources.map((source) => (
          <Item key={source.id} {...source} />
        ))}
        <Text>➔</Text>
        <Item {...target} />
      </Layout>
    </Layout>
  );
};

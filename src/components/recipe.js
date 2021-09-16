import {Layout, Text} from 'uinix-ui';

import Item from './item.js';
import BrandText from './ui/brand-text.js';

const Recipe = ({recipe}) => {
  const {name, sources, target} = recipe;

  return (
    <Layout direction="column" spacing="xs">
      <Text>{name}</Text>
      <Layout align="center" spacing="m">
        {sources.map((source) => (
          <Item key={source.item.uuid} item={source.item} />
        ))}
        <Text>➔</Text>
        {typeof target === 'string' ? (
          <BrandText color="item.crafted" text={target} />
        ) : (
          <Item item={target.item} />
        )}
      </Layout>
    </Layout>
  );
};

export default Recipe;

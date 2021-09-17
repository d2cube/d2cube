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
          <Item key={source.uuid} item={source} />
        ))}
        <Text>➔</Text>
        {target.isEvent ? (
          <BrandText color="text.event" text={target.text} />
        ) : (
          <Item item={target} />
        )}
      </Layout>
    </Layout>
  );
};

export default Recipe;

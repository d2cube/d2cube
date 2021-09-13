import {Layout, Text} from 'uinix-ui';

import ItemName from './item-name.js';
import BrandText from './ui/brand-text.js';

const Recipe = ({recipe}) => {
  const {name, sources, target} = recipe;

  return (
    <Layout direction="column" spacing="xs">
      <Text>{name}</Text>
      <Layout align="center" spacing="m">
        {sources.map((source) => (
          <ItemName
            key={source.item.uuid}
            shouldDisplayImage
            item={source.item}
          />
        ))}
        <Text>➔</Text>
        {typeof target === 'string' ? (
          <BrandText text={target} />
        ) : (
          <ItemName shouldDisplayImage item={target.item} />
        )}
      </Layout>
    </Layout>
  );
};

export default Recipe;

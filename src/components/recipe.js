import {Layout, Text} from 'uinix-ui';

import {mark} from '../utils/mark.js';
import Item from './item.js';
import BrandIcon from './ui/brand-icon.js';
import BrandText from './ui/brand-text.js';

const Recipe = ({disableItems = false, query = '', recipe}) => {
  const {name, sources, target} = recipe;

  return (
    <Layout direction="column" py="xs">
      <Text>{mark(name, query)}</Text>
      {!disableItems && (
        <Layout align="center" spacing="m">
          {sources.map((source) => (
            <Item key={source.uuid} item={source} />
          ))}
          <BrandIcon color="item.socketed" icon="arrowRight" />
          {target.isEvent ? (
            <BrandText color="text.event" text={target.text} />
          ) : (
            <Item item={target} />
          )}
        </Layout>
      )}
    </Layout>
  );
};

export default Recipe;

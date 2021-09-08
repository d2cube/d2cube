import {Layout} from 'uinix-ui';

import {resolveSetProperties} from '../utils/resolvers/resolve-set-properties.js';
import {rollItem} from '../utils/roll-item.js';
import BrandText from './ui/brand-text.js';
import Divider from './ui/divider.js';
import ItemDescription from './item-description.js';
import ItemName from './item-name.js';

const SetPreview = ({set}) => (
  <Layout direction="column" px="l" spacing="xl">
    <Layout align="center" direction="column">
      <BrandText color="item.unique" text={set.name} />
      {set.items.map((id) => (
        <ItemName key={id} item={rollItem({id})} />
      ))}
    </Layout>
    <Divider />
    <BrandText
      text={<ItemDescription description={resolveSetProperties(set)} />}
    />
  </Layout>
);

export default SetPreview;

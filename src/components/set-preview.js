import {Layout} from 'uinix-ui';

import BrandText from '../components/ui/brand-text.js';
import ItemDescription from '../components/item-description.js';
import ItemName from '../components/item-name.js';
import {resolveSetProperties} from '../utils/resolvers/resolve-set-properties.js';
import {rollItem} from '../utils/roll-item.js';

const SetPreview = ({set}) => (
  <Layout direction="column" p="s">
    <BrandText text={set.name} />
    {set.items.map((id) => (
      <ItemName key={id} item={rollItem({id})} />
    ))}
    <hr />
    <BrandText
      text={<ItemDescription description={resolveSetProperties(set)} />}
    />
  </Layout>
);

export default SetPreview;

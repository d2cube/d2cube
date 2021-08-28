import {Layout} from 'uinix-ui';

import {rollItem} from '../utils/roll-item.js';
import Item from './item.js';

const SetPreview = ({set}) => {
  const {items: itemIds, name} = set;
  return (
    <Layout>
      {name}
      <pre>{JSON.stringify(set, null, 2)}</pre>
      {itemIds.map((id) => (
        <Item key={id} item={rollItem({id})} />
      ))}
    </Layout>
  );
};

export default SetPreview;

import {Text} from 'uinix-ui';
import {resolveItemColor} from '../utils/resolvers/resolve-item-color.js';

import {resolveItemDescription} from '../utils/resolvers/resolve-item-description.js';
import ItemTooltip from './item-tooltip.js';

// TODO: organize and document logic in relevant utils
const ItemName = ({item, query = ''}) => {
  const color = resolveItemColor(item);
  const description = resolveItemDescription(item);

  const snippets = item.name.split(new RegExp(`(${query})`, 'gi'));

  return (
    <ItemTooltip description={description}>
      <Text color={color}>
        {snippets.map((snippet, i) =>
          i % 2 === 0 ? snippet : <mark key={i}>{snippet}</mark>,
        )}
      </Text>
    </ItemTooltip>
  );
};

export default ItemName;

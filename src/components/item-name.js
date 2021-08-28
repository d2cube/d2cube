import {resolveItemColor} from '../utils/resolvers/resolve-item-color.js';

import {resolveItemDescription} from '../utils/resolvers/resolve-item-description.js';
import ItemTooltip from './item-tooltip.js';
import BrandText from './ui/brand-text.js';

// TODO: organize and document logic in relevant utils
const ItemName = ({item, query = ''}) => {
  const color = resolveItemColor(item);
  const description = resolveItemDescription(item);

  const snippets = item.name.split(new RegExp(`(${query})`, 'gi'));
  const matchedName = snippets.map((snippet, i) =>
    i % 2 === 0 ? snippet : <mark key={i}>{snippet}</mark>,
  );

  return (
    <ItemTooltip description={description}>
      <BrandText color={color} text={matchedName} />
    </ItemTooltip>
  );
};

export default ItemName;

import {filter, k} from 'uinix-fp';
import {Layout} from 'uinix-ui';

import {getTierLabel} from '../utils/get-tier-label.js';
import {mark} from '../utils/mark.js';
import {resolveItemColor} from '../utils/resolvers/resolve-item-color.js';
import {resolveItemDescription} from '../utils/resolvers/resolve-item-description.js';
import ItemTooltip from './item-tooltip.js';
import BrandText from './ui/brand-text.js';

// TODO: organize and document logic in relevant utils
const ItemName = ({item, query = '', renderExtra = k(null)}) => {
  const color = resolveItemColor(item);
  const description = resolveItemDescription(item);

  const name = filter()([item.name, getTierLabel(item.tier)]).join(' ');

  return (
    <ItemTooltip description={description}>
      <Layout align="center" justify="space-between" spacing="s">
        <BrandText color={color} text={mark(name, query)} />
        {renderExtra(item)}
      </Layout>
    </ItemTooltip>
  );
};

export default ItemName;

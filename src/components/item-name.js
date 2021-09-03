import {k} from 'uinix-fp';
import {Element, Layout, useStyles} from 'uinix-ui';

import {appendTierLabel} from '../utils/append-tier-label.js';
import {mark} from '../utils/mark.js';
import {resolveItemColor} from '../utils/resolvers/resolve-item-color.js';
import {resolveItemDescription} from '../utils/resolvers/resolve-item-description.js';
import ItemImage from './item-image.js';
import ItemTooltip from './item-tooltip.js';
import BrandText from './ui/brand-text.js';

// TODO: organize and document logic in relevant utils
const ItemName = ({item, query = '', renderExtra = k(null)}) => {
  const styles = useStyles();

  const {id, imageId, name, tier} = item;
  const color = resolveItemColor(item);
  const description = resolveItemDescription(item);

  const preview = (
    <Element
      styleProps={{
        size: item.size,
      }}
      styles={styles.item}
    >
      <ItemImage id={imageId || id} />
    </Element>
  );

  return (
    <ItemTooltip description={description} preview={preview}>
      <Layout align="center" justify="space-between" spacing="s">
        <BrandText
          color={color}
          text={mark(appendTierLabel(tier)(name), query)}
        />
        {renderExtra(item)}
      </Layout>
    </ItemTooltip>
  );
};

export default ItemName;

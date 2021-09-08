import {Element, Layout, useStyles} from 'uinix-ui';

import {mark} from '../utils/mark.js';
import {resolveItemColor} from '../utils/resolvers/resolve-item-color.js';
import {resolveItemDescription} from '../utils/resolvers/resolve-item-description.js';
import ItemImage from './item-image.js';
import ItemTooltip from './item-tooltip.js';
import BrandText from './ui/brand-text.js';

// TODO: organize and document logic in relevant utils
const ItemName = ({item, query = '', shouldDisplayImage = false}) => {
  const styles = useStyles();

  const {id, imageId, name} = item;
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
    <ItemTooltip
      description={description}
      preview={shouldDisplayImage ? null : preview}
    >
      <Layout direction="column" spacing="m">
        <BrandText color={color} text={mark(name, query)} />
        {shouldDisplayImage && preview}
      </Layout>
    </ItemTooltip>
  );
};

export default ItemName;

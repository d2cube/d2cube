import {Element, useStyles} from 'uinix-ui';

import {resolveItemDescription} from '../utils/resolvers/resolve-item-description.js';
import ItemImage from './item-image.js';
import ItemSockets from './item-sockets.js';
import ItemTooltip from './item-tooltip.js';

// TODO: organize and document logic in relevant utils
const Item = ({item, isInactive = false, variant = null}) => {
  const styles = useStyles();

  const {id, imageId, isEthereal, position, size, sockets, variants} = item;
  const description = resolveItemDescription(item);

  return (
    <ItemTooltip description={description}>
      <Element
        position="relative"
        styleProps={{
          isEthereal,
          isInactive,
          position,
          size,
        }}
        styles={styles.item}
      >
        <Element variant="absolute.stretch">
          <ItemSockets sockets={sockets} size={size} />
        </Element>
        <ItemImage id={imageId || id} variant={variant} variants={variants} />
      </Element>
    </ItemTooltip>
  );
};

export default Item;

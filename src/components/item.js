import React from 'react';
import {Element, useStyles} from 'uinix-ui';

import {resolveItemDescription} from '../utils/resolvers/resolve-item-description.js';
import ItemImage from './item-image.js';
import ItemSockets from './item-sockets.js';
import ItemTooltip from './item-tooltip.js';

// TODO: organize and document logic in relevant utils
const Item = ({item, isInactive = false, variant = null}) => {
  const styles = useStyles();

  const {id, imageId, isEthereal, position, size, sockets, variants} = item;

  return (
    <ItemTooltip description={resolveItemDescription(item)}>
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
        <ItemImage id={imageId || id} variant={variant} variants={variants} />
        <Element bottom={0} left={0} position="absolute" right={0} top={0}>
          <ItemSockets sockets={sockets} size={size} />
        </Element>
      </Element>
    </ItemTooltip>
  );
};

export default Item;

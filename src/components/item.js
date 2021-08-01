import React from 'react';
import {Element, useStyles} from 'uinix-ui';

import {createItem} from '../utils/create-item.js';
import {resolveItemDescription} from '../utils/resolve-item-description.js';
import ItemImage from './item-image.js';
import ItemSockets from './item-sockets.js';
import ItemTooltip from './item-tooltip.js';

// TODO: organize and document logic in relevant utils
const Item = ({item: initialItem, isInactive = false}) => {
  const styles = useStyles();

  const {id, imageId, isEthereal} = initialItem;
  const item = createItem(initialItem);
  const {position, size, sockets, variants} = item;

  return (
    <ItemTooltip description={resolveItemDescription(item)}>
      <Element
        position="relative"
        styleProps={{position, size}}
        styles={styles.gridItem}
      >
        <ItemImage
          id={imageId || id}
          isEthereal={isEthereal}
          isInactive={isInactive}
          size={size}
          variants={variants}
        />
        <Element bottom={0} left={0} position="absolute" right={0} top={0}>
          <ItemSockets sockets={sockets} size={size} />
        </Element>
      </Element>
    </ItemTooltip>
  );
};

export default Item;

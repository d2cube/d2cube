import React from 'react';
import {Element, useStyles} from 'uinix-ui';
import {ItemPropertyType} from '../db/enums/item-property-type.js';

import {getItemById} from '../queries/index.js';
import ItemImage from './item-image.js';
import ItemSockets from './item-sockets.js';
import ItemTooltip from './item-tooltip.js';

// TODO: organize and document logic in relevant utils
const Item = ({isInactive, item: initialItem}) => {
  const styles = useStyles();

  const {id, imageId} = initialItem;
  const item = {
    ...getItemById(id),
    ...initialItem,
  };
  const {
    overrideDescription,
    position,
    size,
    properties = {},
    sockets,
    variants,
    mapDescription,
  } = item;
  const description = overrideDescription || mapDescription(item);

  return (
    <ItemTooltip description={description}>
      <Element
        position="relative"
        styleProps={{position, size}}
        styles={styles.gridItem}
      >
        <ItemImage
          id={imageId || id}
          isInactive={isInactive}
          size={size}
          variants={variants}
        />
        <Element bottom={0} left={0} position="absolute" right={0} top={0}>
          <ItemSockets
            maxSockets={properties[ItemPropertyType.MaxSockets]}
            sockets={sockets}
            size={size}
          />
        </Element>
      </Element>
    </ItemTooltip>
  );
};

export default Item;

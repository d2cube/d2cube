import {Element, useStyles} from 'uinix-ui';

import {resolveItemDescription} from '../utils/resolvers/resolve-item-description.js';
import ItemImage from './item-image.js';
import ItemSockets from './item-sockets.js';
import ItemTooltip from './item-tooltip.js';

const SOCKET_CLASSNAME = 'sockets';

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
          hoverable: {
            className: SOCKET_CLASSNAME,
            default: {
              opacity: 0,
            },
            hover: {
              opacity: 1,
            },
          },
          isEthereal,
          isInactive,
          position,
          size,
        }}
        styles={[styles.item, styles.hoverableClassName]}
      >
        <Element className={SOCKET_CLASSNAME} variant="absolute">
          <ItemSockets sockets={sockets} size={size} />
        </Element>
        <ItemImage id={imageId || id} variant={variant} variants={variants} />
      </Element>
    </ItemTooltip>
  );
};

export default Item;

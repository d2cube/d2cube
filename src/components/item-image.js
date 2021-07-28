import React from 'react';
import {useStyles} from 'uinix-ui';

import db from '../db/index.js';
import {roll} from '../utils/index.js';
import Image from './ui/image.js';

const defaultVersion = db.enums.GameVersionType.D2;

const ItemImage = ({
  id,
  isInactive,
  size,
  variants,
  version = defaultVersion,
}) => {
  const styles = useStyles();

  const imageName = id + (variants ? roll(1, variants) : '');
  const src = `${version}/items/${imageName}.webp`;

  return (
    <Image
      alt={id}
      src={src}
      styleProps={{isInactive, size}}
      styles={styles.item}
    />
  );
};

export default ItemImage;

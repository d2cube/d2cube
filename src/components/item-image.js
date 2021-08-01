import React from 'react';
import {useStyles} from 'uinix-ui';

import {GameVersionType} from '../enums/index.js';
import {random} from '../utils/random.js';
import Image from './ui/image.js';

const defaultVersion = GameVersionType.D2;

const ItemImage = ({
  id,
  size,
  isEthereal = false,
  isInactive = false,
  variants = null,
  version = defaultVersion,
}) => {
  const styles = useStyles();

  const imageName = id + (variants ? random(1, variants) : '');
  const src = `${version}/items/${imageName}.webp`;

  return (
    <Image
      alt={id}
      src={src}
      styleProps={{isEthereal, isInactive, size}}
      styles={styles.item}
    />
  );
};

export default ItemImage;

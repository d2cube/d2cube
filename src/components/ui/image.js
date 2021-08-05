import React from 'react';
import {Element} from 'uinix-ui';

const Image = ({alt, src, ...rest}) => (
  <Element
    {...rest}
    as="img"
    alt={alt}
    height="100%"
    width="100%"
    src={`images/${src}`}
  />
);

export default Image;

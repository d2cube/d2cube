import React from 'react';
import {Element} from 'uinix-ui';

const PATH = '../assets/images';

const Image = ({alt, src, ...rest}) => (
  <Element
    {...rest}
    as="img"
    alt={alt}
    height="100%"
    width="100%"
    src={`${PATH}/${src}`}
  />
);

export default Image;

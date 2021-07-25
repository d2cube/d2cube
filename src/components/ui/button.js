import React from 'react';
import {Element} from 'uinix-ui';

const Button = ({text, onClick}) => (
  <Element as="button" type="button" variant="button.primary" onClick={onClick}>
    {text}
  </Element>
);

export default Button;

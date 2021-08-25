import {Element} from 'uinix-ui';

const Button = ({text, onClick}) => (
  <Element as="button" type="button" onClick={onClick}>
    {text}
  </Element>
);

export default Button;

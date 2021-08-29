import {Element} from 'uinix-ui';

const Button = ({size = 'm', text, onClick}) => (
  <Element
    as="button"
    type="button"
    variant={`button.${size}`}
    onClick={onClick}
  >
    {text}
  </Element>
);

export default Button;

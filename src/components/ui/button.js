import {Element} from 'uinix-ui';

import Tooltip from './tooltip.js';

const Button = ({size = 'm', text, tooltip = null, onClick}) => (
  <Tooltip placement="auto" tooltip={tooltip}>
    <Element
      as="button"
      type="button"
      variant={`button.${size}`}
      onClick={onClick}
    >
      {text}
    </Element>
  </Tooltip>
);

export default Button;

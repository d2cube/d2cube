import {Element} from 'uinix-ui';

import CopyButton from './copy-button.js';

const Copyable = ({children, label = 'Copy', text}) => (
  <Element position="relative">
    {children}
    <Element bottom="xs" position="absolute" right="xs">
      <CopyButton label={label} text={text} />
    </Element>
  </Element>
);

export default Copyable;

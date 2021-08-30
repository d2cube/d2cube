import {Element} from 'uinix-ui';

import CopyButton from './copy-button.js';

const Copyable = ({children, label = 'Copy', text}) => (
  <Element position="relative">
    {children}
    <Element bottom={0} position="absolute" right={0}>
      <CopyButton label={label} text={text} />
    </Element>
  </Element>
);

export default Copyable;

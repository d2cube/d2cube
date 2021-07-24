import Tippy from '@tippyjs/react';
import React from 'react';

import 'tippy.js/dist/tippy.css';

const Tooltip = ({children, tooltip}) => (
  <Tippy arrow={false} content={tooltip} maxWidth="none">
    <span tabIndex="0">{children}</span>
  </Tippy>
);

export default Tooltip;

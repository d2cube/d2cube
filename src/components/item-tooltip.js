import React from 'react';
import {Text} from 'uinix-ui';

import Tooltip from './ui/tooltip.js';

const ItemTooltip = ({children, description}) => {
  const tooltip = description.map((section, i) => (
    <Text key={i} as="div">
      {section.map(({color, text}, j) => (
        <Text key={j} as="div" color={color}>
          {text}
        </Text>
      ))}
      {i < description.length - 1 && <br />}
    </Text>
  ));

  return <Tooltip tooltip={tooltip}>{children}</Tooltip>;
};

export default ItemTooltip;

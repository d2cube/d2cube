import React from 'react';
import {Text} from 'uinix-ui';

import Tooltip from './ui/tooltip.js';

const ItemTooltip = ({children, description}) => {
  const tooltip = description.map((line, i) =>
    line ? (
      <Text key={i} as="div" color={`item.${line.color}`}>
        {typeof line === 'string' ? line : line.text}
      </Text>
    ) : (
      <br key={i} />
    ),
  );

  return <Tooltip tooltip={tooltip}>{children}</Tooltip>;
};

export default ItemTooltip;

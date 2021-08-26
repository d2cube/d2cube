import {Fragment} from 'react';
import {Text} from 'uinix-ui';

import Tooltip from './ui/tooltip.js';

const ItemTooltip = ({children, description, placement = undefined}) => (
  <Tooltip placement={placement} tooltip={resolve(description)}>
    {children}
  </Tooltip>
);

const resolve = (lines, level = 0) =>
  lines.map((line, i) => {
    let content;
    if (!line) {
      content = <br />;
    } else if (Array.isArray(line)) {
      content = <div>{resolve(line, level + 1)}</div>;
    } else {
      content = (
        <Text as={level > 0 ? 'span' : 'div'} color={`item.${line.color}`}>
          {typeof line === 'string' ? line : line.text}
        </Text>
      );
    }

    return <Fragment key={i}>{content}</Fragment>;
  });

export default ItemTooltip;

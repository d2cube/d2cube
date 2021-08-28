import {Fragment} from 'react';
import {Text} from 'uinix-ui';

const ItemDescription = ({description, level = 0}) =>
  description.map((line, i) => {
    let content;
    if (!line) {
      content = <br />;
    } else if (Array.isArray(line)) {
      content = (
        <div>
          <ItemDescription description={line} level={level + 1} />
        </div>
      );
    } else {
      const {color, text} = line;
      content = (
        <Text as={level > 0 ? 'span' : 'div'} color={color}>
          {typeof line === 'string' ? line : text}
        </Text>
      );
    }

    return <Fragment key={i}>{content}</Fragment>;
  });

export default ItemDescription;

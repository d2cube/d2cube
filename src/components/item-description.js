import {Fragment} from 'react';
import {Layout} from 'uinix-ui';

import BrandText from './ui/brand-text.js';

const ItemDescription = ({description, level = 0}) =>
  description.map((line, i) => {
    let content;
    if (!line) {
      content = <br />;
    } else if (Array.isArray(line)) {
      content = (
        <Layout justify="center">
          <ItemDescription description={line} level={level + 1} />
        </Layout>
      );
    } else {
      const {color, text} = line;
      content = (
        <BrandText
          as={level > 0 ? 'span' : 'div'}
          color={color}
          text={typeof line === 'string' ? line : text}
          textAlign="center"
        />
      );
    }

    return <Fragment key={i}>{content}</Fragment>;
  });

export default ItemDescription;

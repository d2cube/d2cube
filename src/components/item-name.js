import {Text, useStyles} from 'uinix-ui';

import {resolveItemDescription} from '../utils/resolvers/resolve-item-description.js';
import ItemTooltip from './item-tooltip.js';

// TODO: organize and document logic in relevant utils
const ItemName = ({item, query = ''}) => {
  const styles = useStyles();

  const {quality, name} = item;
  const description = resolveItemDescription(item);

  const snippets = name.split(new RegExp(`(${query})`, 'gi'));

  return (
    <ItemTooltip description={description}>
      <Text styleProps={{quality}} styles={styles.itemName}>
        {snippets.map((snippet, i) =>
          i % 2 === 0 ? snippet : <mark key={i}>{snippet}</mark>,
        )}
      </Text>
    </ItemTooltip>
  );
};

export default ItemName;

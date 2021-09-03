import {Layout} from 'uinix-ui';

import Tooltip from './ui/tooltip.js';
import ItemDescription from './item-description.js';

const ItemTooltip = ({children, description, preview = null}) => {
  const itemDescription = <ItemDescription description={description} />;
  const tooltip = preview ? (
    <Layout direction="column" align="center" spacing="l">
      {preview}
      <div>{itemDescription}</div>
    </Layout>
  ) : (
    itemDescription
  );

  return (
    <Tooltip placement="right" tooltip={tooltip}>
      {children}
    </Tooltip>
  );
};

export default ItemTooltip;

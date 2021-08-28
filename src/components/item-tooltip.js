import Tooltip from './ui/tooltip.js';
import ItemDescription from './item-description.js';

const ItemTooltip = ({children, description}) => (
  <Tooltip
    placement="right"
    tooltip={<ItemDescription description={description} />}
  >
    {children}
  </Tooltip>
);

export default ItemTooltip;

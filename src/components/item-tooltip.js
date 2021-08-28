import Tooltip from './ui/tooltip.js';
import ItemDescription from './item-description.js';

const ItemTooltip = ({children, description, placement = undefined}) => (
  <Tooltip
    placement={placement}
    tooltip={<ItemDescription description={description} />}
  >
    {children}
  </Tooltip>
);

export default ItemTooltip;

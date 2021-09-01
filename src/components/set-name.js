import {mark} from '../utils/mark.js';
import {resolveSetItems} from '../utils/resolvers/resolve-set-items.js';
import ItemTooltip from './item-tooltip.js';
import BrandText from './ui/brand-text.js';

const SetName = ({query = '', set}) => (
  <ItemTooltip description={resolveSetItems(set)}>
    <BrandText color="item.set" text={mark(set.name, query)} />
  </ItemTooltip>
);

export default SetName;

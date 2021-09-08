import {mark} from '../utils/mark.js';
import {resolveSetBonuses} from '../utils/resolvers/resolve-set-bonuses.js';
import ItemTooltip from './item-tooltip.js';
import BrandText from './ui/brand-text.js';

const SetName = ({query = '', set}) => (
  <ItemTooltip description={resolveSetBonuses(set)}>
    <BrandText color="item.set" text={mark(set.name, query)} />
  </ItemTooltip>
);

export default SetName;

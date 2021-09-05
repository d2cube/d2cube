import {Layout} from 'uinix-ui';

import {mark} from '../utils/mark.js';
import {resolveRunewordProperties} from '../utils/resolvers/resolve-runeword-properties.js';
import ItemTooltip from './item-tooltip.js';
import RunesName from './runes-name.js';
import BrandText from './ui/brand-text.js';

const RunewordName = ({
  item,
  layout = 'horizontal',
  query = '',
  runeQuery = '',
  runeword,
}) => (
  <ItemTooltip description={resolveRunewordProperties(runeword, item)}>
    <Layout
      align="center"
      direction={layout === 'horizontal' ? 'row' : 'column'}
      justify="space-between"
    >
      <BrandText color="item.runeword" text={mark(runeword.name, query)} />
      <RunesName query={runeQuery} runes={runeword.runes} />
    </Layout>
  </ItemTooltip>
);

export default RunewordName;

import {Layout} from 'uinix-ui';

import {mark} from '../utils/mark.js';
import {resolveRunewordProperties} from '../utils/resolvers/resolve-runeword-properties.js';
import ItemTooltip from './item-tooltip.js';
import BrandText from './ui/brand-text.js';

const RunewordName = ({
  query = '',
  layout = 'horizontal',
  runeQuery = '',
  runeword,
}) => (
  <ItemTooltip description={resolveRunewordProperties(runeword)}>
    <Layout
      align="center"
      direction={layout === 'horizontal' ? 'row' : 'column'}
      justify="space-between"
    >
      <BrandText color="item.runeword" text={mark(runeword.name, query)} />
      <BrandText
        color="item.rune"
        text={mark(runeword.runes.join(''), runeQuery, {isCaseSensitive: true})}
      />
    </Layout>
  </ItemTooltip>
);

export default RunewordName;

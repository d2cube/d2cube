import {Element} from 'uinix-ui';

import {search} from '../api/index.js';
import {SEARCH_FILTERS} from '../constants/index.js';
import {count} from '../utils/fp.js';
import {resolveItemRuneword} from '../utils/resolvers/resolve-item-runeword.js';
import {rollItem} from '../utils/roll-item.js';
import Item from './item.js';
import Rune from './rune.js';
import RunesName from './runes-name.js';
import RunewordName from './runeword-name.js';
import BrandText from './ui/brand-text.js';
import CircleLayout from './ui/circle-layout.js';
import Frame from './ui/frame.js';

const Runegram = ({item, runes}) => {
  let runeword;
  if (item) {
    item.sockets = item.sockets.map((_, i) => runes[i]);
    item = rollItem(item);
    runeword = resolveItemRuneword(runes.join(''))(item);
  }

  return (
    <Frame alignTitle="center" help={help} title="Runegram">
      <Element position="relative" p="l">
        <Element styleProps={{isActive: runeword}} variant="pentagram" />
        <CircleLayout radius={15}>
          {allRunes.map((rune) => (
            <Rune
              key={rune.id}
              count={count()(rune.id)(runes)}
              disabled={!runes.includes(rune.id)}
              rune={rune}
            />
          ))}
        </CircleLayout>
        <Element pt="50%" variant="absolute.center">
          {runeword ? (
            <RunewordName item={item} layout="vertical" runeword={runeword} />
          ) : item && runes.length === 0 ? (
            <BrandText text="Select runes" />
          ) : (
            <RunesName runes={runes} />
          )}
        </Element>
        <Element variant="absolute.center">
          {item ? (
            <Item item={item} />
          ) : (
            <BrandText text="Select an item base" />
          )}
        </Element>
      </Element>
    </Frame>
  );
};

const allRunes = search([SEARCH_FILTERS.isTypeRune]);

const help = (
  <div>
    <p>The Runegram visualizes socketed runes on an item.</p>
    <p>
      A selected item base of choice sits in the center of the Runegram. Runes
      are laid out in a circle in order of their quality and become active when
      they are selected. You can conveniently estimate the cost of a Runeword by
      observing its relative placement in the Runegram.
    </p>
    <p>
      The Runegram becomes active when a Runeword is spelled with valid runes on
      an appropriate item.
    </p>
  </div>
);

export default Runegram;

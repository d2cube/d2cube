import {useState} from 'react';
import {Layout} from 'uinix-ui';

import {getRuneword} from '../api/index.js';
import PageLayout from '../components/page-layout.js';
import Runegram from '../components/runegram.js';
import RuneSelect from '../components/rune-select.js';
import RunewordSelect from '../components/runeword-select.js';
import Frame from '../components/ui/frame.js';
import Interface from '../components/ui/interface.js';
import Labelled from '../components/ui/labelled.js';
import SocketedItemSelect from '../components/socketed-item-select.js';
import {SEARCH_FILTERS} from '../constants/index.js';

const Page = () => {
  const [runes, setRunes] = useState([]);
  const [runewordId, setRunewordId] = useState(null);
  const [itemId, setItemId] = useState(null);

  const handleChangeRunes = (updatedRunes) => {
    setRunes(updatedRunes);
    setRunewordId(getRuneword(updatedRunes.join(''))?.id);
  };

  const handleChangeRunewordId = (updatedRunewordId) => {
    setRunewordId(updatedRunewordId);
    setItemId(null);

    if (updatedRunewordId) {
      const updatedRuneword = getRuneword(updatedRunewordId);
      if (updatedRuneword) {
        setRunes(updatedRuneword.runes);
      }
    } else {
      setRunes([]);
    }
  };

  const runeword = getRuneword(runes.join(''));

  const itemFilters = runeword
    ? [
        SEARCH_FILTERS.createContainsTypes(runeword?.types),
        SEARCH_FILTERS.createGreaterThanEqualSocketCount(
          runeword?.runes.length,
        ),
      ]
    : [];

  const left = (
    <Frame help={help} size="s" title="Socketing Runewords">
      <Layout direction="column" spacing="l">
        <Labelled label="Runes">
          <RuneSelect value={runes} onChange={handleChangeRunes} />
        </Labelled>
        <Labelled label="Runeword">
          <RunewordSelect
            isMenuOpen
            runes={runes.join('')}
            value={runewordId}
            onChange={handleChangeRunewordId}
          />
        </Labelled>
        <Labelled label="Socketed Item">
          <SocketedItemSelect
            filters={itemFilters}
            value={itemId}
            onChange={setItemId}
          />
        </Labelled>
      </Layout>
    </Frame>
  );

  const right = <Runegram itemId={itemId} runes={runes} />;

  return (
    <PageLayout title="Runewords">
      <Interface left={left} right={right} />
    </PageLayout>
  );
};

const help = (
  <div>
    <p>Explore how to create and spell Runewords with valid runes and items.</p>
    <ul>
      <li>Applied changes can be previewed by the Runegram.</li>
      <li>Applied runes will filter valid Runewords.</li>
      <li>Applied Runewords will filter valid items.</li>
    </ul>
  </div>
);

export default Page;

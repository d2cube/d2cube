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

    if (updatedRunewordId) {
      const updatedRuneword = getRuneword(updatedRunewordId);
      if (updatedRuneword) {
        setRunes(updatedRuneword.runes);
      }
    } else {
      setRunes([]);
    }
  };

  const left = (
    <Frame help={help} size="s" title="Creating Runewords">
      <Layout direction="column" spacing="l">
        <Labelled label="Item Base">
          <SocketedItemSelect value={itemId} onChange={setItemId} />
        </Labelled>
        <Labelled label="Runes">
          <RuneSelect value={runes} onChange={handleChangeRunes} />
        </Labelled>
        <Labelled label="Runeword">
          <RunewordSelect
            isMenuOpen
            itemId={itemId}
            runes={runes.join('')}
            value={runewordId}
            onChange={handleChangeRunewordId}
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
  <ol>
    <li>Select an item base</li>
    <li>Select runes (in order)</li>
    <li>Select a valid filtered Runeword</li>
    <li>Preview with the Runegram</li>
  </ol>
);

export default Page;

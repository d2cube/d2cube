import {useState} from 'react';
import {Layout} from 'uinix-ui';

import {getRuneword} from '../api/index.js';
import PageLayout from '../components/page-layout.js';
import Runegram from '../components/runegram.js';
import RuneSelect from '../components/rune-select.js';
import RunewordSelect from '../components/runeword-select.js';
import SocketSelect from '../components/socket-select.js';
import Frame from '../components/ui/frame.js';
import Interface from '../components/ui/interface.js';
import Labelled from '../components/ui/labelled.js';
import SocketedItemSelect from '../components/socketed-item-select.js';
import {PREVIEWS} from '../constants/index.js';
import {fillNull} from '../utils/fp.js';
import {rollItem} from '../utils/roll-item.js';

const Page = () => {
  const [ethereal, setEthereal] = useState(null);
  const [runes, setRunes] = useState([]);
  const [runewordId, setRunewordId] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [sockets, setSockets] = useState(null);

  const item = rollItem({
    id: itemId,
    isEthereal: testIsEthereal(ethereal),
    isEtherealBugged: testIsEtherealBugged(ethereal),
    sockets: fillNull(sockets),
  });

  const runeword = getRuneword(runewordId);

  const handleUpdateItemId = (updatedItemId) => {
    setItemId(updatedItemId);
    setEthereal(null);
  };

  const handleUpdateRunes = (updatedRunes) => {
    setRunes(updatedRunes);
    setRunewordId(getRuneword(updatedRunes.join(''))?.id);
  };

  const handleUpdateRunewordId = (updatedRunewordId) => {
    setRunewordId(updatedRunewordId);

    if (updatedRunewordId) {
      const updatedRuneword = getRuneword(updatedRunewordId);
      if (updatedRuneword) {
        setRunes(updatedRuneword.runes);
        setSockets(updatedRuneword.runes.length);
      }
    } else {
      setRunes([]);
    }
  };

  const handleUpdateSockets = (updatedSockets) => {
    setEthereal(null);
    setSockets(updatedSockets);
    setItemId(null);
    setRunewordId(null);
    setRunes([]);
  };

  const left = (
    <Frame help={help} preview={PREVIEWS.runewords} size="s" title="Runewords">
      <Layout direction="column" spacing="m">
        <Labelled label="Sockets">
          <SocketSelect value={sockets} onChange={handleUpdateSockets} />
        </Labelled>
        <Labelled label="Item Base">
          <SocketedItemSelect
            sockets={sockets}
            types={runeword?.types}
            value={itemId}
            onChange={handleUpdateItemId}
          />
        </Labelled>
        {sockets >= 0 && (
          <Labelled label="Runes">
            <RuneSelect
              max={sockets}
              value={runes}
              onChange={handleUpdateRunes}
            />
          </Labelled>
        )}
        <Labelled label="Runeword">
          <RunewordSelect
            item={item}
            sockets={sockets}
            runes={runes.join('')}
            value={runewordId}
            onChange={handleUpdateRunewordId}
          />
        </Labelled>
      </Layout>
    </Frame>
  );

  const right = <Runegram item={item} runes={runes} />;

  return (
    <PageLayout title="Runewords">
      <Interface left={left} right={right} />
    </PageLayout>
  );
};

const help = (
  <div>
    <p>
      Use the following interface to explore creating Runewords from any valid
      combinations of socketed item bases and runes.
    </p>
    <p>
      Socket counts are indicated by the <code>○</code> (max) and <code>●</code>{' '}
      (applied) symbols. The <code>+</code> symbols in the item name indicate
      Exceptional/Elite item tiers.
    </p>
    <p>The Runegram on the right visualizes the Runeword creation process.</p>
  </div>
);

const testIsEthereal = (x) => ['ethereal', 'ethereal bugged'].includes(x);

const testIsEtherealBugged = (x) => x === 'ethereal bugged';

export default Page;

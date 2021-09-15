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
import {fillNull} from '../utils/fp.js';
import {rollItem} from '../utils/roll-item.js';

const Page = () => {
  const [runes, setRunes] = useState([]);
  const [runewordId, setRunewordId] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [sockets, setSockets] = useState(null);

  const item = rollItem({id: itemId});
  const runeword = getRuneword(runewordId);

  // Socket the item if it exists
  if (item) {
    item.sockets = fillNull(sockets);
  }

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
        setSockets(updatedRuneword.runes.length);
      }
    } else {
      setRunes([]);
    }
  };

  const handleChangeSockets = (updatedSockets) => {
    setItemId(null);
    setSockets(updatedSockets);
    setRunes([]);
  };

  const left = (
    <Frame help={help} size="m" title="Runewords">
      <Layout minH="0" spacing="l">
        <Layout direction="column" flex="1" spacing="l">
          <Labelled label="Sockets">
            <SocketSelect value={sockets} onChange={handleChangeSockets} />
          </Labelled>
          <Labelled label="Item Base">
            <SocketedItemSelect
              sockets={sockets}
              types={runeword?.types}
              value={itemId}
              onChange={setItemId}
            />
          </Labelled>
          {sockets >= 0 && (
            <Labelled label="Runes">
              <RuneSelect
                max={sockets}
                value={runes}
                onChange={handleChangeRunes}
              />
            </Labelled>
          )}
        </Layout>
        <Layout flex="1">
          <Labelled label="Runeword">
            <RunewordSelect
              isMenuOpen
              item={item}
              sockets={sockets}
              runes={runes.join('')}
              value={runewordId}
              onChange={handleChangeRunewordId}
            />
          </Labelled>
        </Layout>
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
    Use the following interface to explore creating Runewords from any valid
    combinations of socketed item bases and runes. Preview the results with the
    Runegram.
  </div>
);

export default Page;

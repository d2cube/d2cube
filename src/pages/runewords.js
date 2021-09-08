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
import {BasePropertyType} from '../enums/index.js';
import {fillNull} from '../utils/fp.js';
import {rollItem} from '../utils/roll-item.js';

const Page = () => {
  const [runes, setRunes] = useState([]);
  const [runewordId, setRunewordId] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [sockets, setSockets] = useState(null);

  const item = rollItem({id: itemId});

  if (item) {
    item.sockets = fillNull(sockets || getMaxSockets(item));
  }

  const handleChangeItemId = (updatedItemId) => {
    setItemId(updatedItemId);
    setSockets(null);
    setRunes([]);
    setRunewordId(null);
  };

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
        setSockets(Math.min(getMaxSockets(item), updatedRuneword.runes.length));
      }
    } else {
      setRunes([]);
    }
  };

  const handleChangeSockets = (updatedSockets) => {
    setSockets(updatedSockets);
    setRunes([]);
  };

  const left = (
    <Frame help={help} size="m" title="Runewords">
      <Layout minH="0" spacing="l">
        <Layout direction="column" flex="1" spacing="l">
          <Labelled label="Item Base">
            <SocketedItemSelect value={itemId} onChange={handleChangeItemId} />
          </Labelled>
          {item && (
            <Labelled label="Sockets">
              <SocketSelect
                max={getMaxSockets(item)}
                value={sockets}
                onChange={handleChangeSockets}
              />
            </Labelled>
          )}
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
              itemId={itemId}
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
    <p>
      Use the following interface to explore creating Runewords from available
      item bases, sockets, and runes.
    </p>
    <div>
      Instructions:
      <ul>
        <li>Select a socketed item base</li>
        <li>Specify sockets</li>
        <li>Specify runes in order</li>
        <li>Select a valid Runeword</li>
        <li>Preview with the Runegram</li>
      </ul>
    </div>
  </div>
);

const getMaxSockets = (item) =>
  item ? item.properties.base[BasePropertyType.MaxSockets] : 0;

export default Page;

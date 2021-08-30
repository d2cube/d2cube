import {useEffect, useState} from 'react';
import {props} from 'uinix-fp';
import {Layout} from 'uinix-ui';
import {v4 as uuidv4} from 'uuid';

import {getRuneword, search} from '../api/index.js';
import {FILTERS} from '../constants/index.js';
import {EquipSlotType} from '../enums/index.js';
import InventoryEquipSlot from './inventory-equip-slot.js';
import Rune from './rune.js';
import RuneSelect from './rune-select.js';
import RunewordSelect from './runeword-select.js';
import CircleLayout from './ui/circle-layout.js';
import Frame from './ui/frame.js';

const Runewords = () => {
  const [runeword, setRuneword] = useState();
  const [selectedRuneOptions, setSelectedRuneOptions] = useState([]);

  const runes = selectedRuneOptions.map(props('item.id'));
  const runesString = runes.join('');

  useEffect(() => {
    setRuneword(getRuneword(runesString));
  }, [runesString]);

  const handleSelectRunes = (updatedRuneOptions) => {
    setSelectedRuneOptions(
      updatedRuneOptions.map((option) => ({
        ...option,
        value: uuidv4(), // This is a hack to allow selecting duplicate options
      })),
    );
  };

  return (
    <Frame alignTitle="center" help={help} title="Runewords">
      <Layout position="relative" p="l" variant="pentagram">
        <CircleLayout radius={16}>
          {allRunes.map((rune) => (
            <Rune
              key={rune.id}
              disabled={!runes.includes(rune.id)}
              rune={rune}
            />
          ))}
        </CircleLayout>
        <Layout
          align="center"
          direction="column"
          justify="center"
          p="xxl"
          spacing="l"
          variant="absolute"
        >
          <RuneSelect
            value={selectedRuneOptions}
            onChange={handleSelectRunes}
          />
          <RunewordSelect isMenuOpen />
          {runeword && <InventoryEquipSlot slot={EquipSlotType.MainHand} />}
        </Layout>
      </Layout>
    </Frame>
  );
};

const help = (
  <Layout>
    <div>help</div>
  </Layout>
);

const allRunes = search([FILTERS.rune]);

export default Runewords;

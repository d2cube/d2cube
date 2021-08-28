import {useState} from 'react';
import {Layout} from 'uinix-ui';

import Interface from '../components/interface.js';
import Inventory from '../components/inventory.js';
import PageLayout from '../components/page-layout.js';
import SetPreview from '../components/set-preview.js';
import SetSelect from '../components/set-select.js';
import Frame from '../components/ui/frame.js';
import {getValidEquipSlot} from '../utils/get-valid-equip-slot.js';
import {rollItem} from '../utils/roll-item.js';

const Page = () => {
  const [selectedSetOption, setSelectedSetOption] = useState(null);
  const set = selectedSetOption?.set;

  const left = (
    <Frame
      flex="auto"
      help="Search and select a Set to preview it in the inventory."
      title="Select Set"
    >
      <Layout alignSelf="stretch" spacing="l">
        <Layout flex="1">
          <SetSelect
            value={selectedSetOption}
            onChange={setSelectedSetOption}
          />
        </Layout>
        {set && (
          <Layout flex="1">
            <SetPreview set={set} />
          </Layout>
        )}
      </Layout>
    </Frame>
  );

  const right = <Inventory help={null} items={getSetItems(set)} />;

  return (
    <PageLayout title="Sets">
      <Layout>
        <Interface left={left} right={right} />
      </Layout>
    </PageLayout>
  );
};

const rollEquippedItem = (reservedSlotsSet) => (id) => {
  const item = rollItem({id});
  const equipSlot = getValidEquipSlot(reservedSlotsSet)(item);
  reservedSlotsSet.add(equipSlot);
  return {...item, equipSlot};
};

const getSetItems = (set) => {
  const reservedSlotsSet = new Set();
  return set ? set.items.map(rollEquippedItem(reservedSlotsSet)) : [];
};

export default Page;

import {useState} from 'react';
import {Layout, Text} from 'uinix-ui';

import {EquipSlotType} from '../enums/index.js';
import InventoryEquipSlot from './inventory-equip-slot.js';

const SwapStateType = {
  One: 'I',
  Two: 'II',
};

const InventoryPaperdoll = ({items}) => {
  const [swapState, setSwapState] = useState(SwapStateType.One);

  const swapToggle = <Swap selectedState={swapState} onSwap={setSwapState} />;

  return (
    <Layout align="flex-end" spacing="m">
      <Layout direction="column" spacing="m">
        <Layout direction="column">
          {swapToggle}
          <InventoryEquipSlot
            slot={EquipSlotType.MainHand}
            item={
              items[
                swapState === SwapStateType.One
                  ? EquipSlotType.MainHand
                  : EquipSlotType.AlternateMainHand
              ]
            }
          />
        </Layout>
        <InventoryEquipSlot
          slot={EquipSlotType.Hands}
          item={items[EquipSlotType.Hands]}
        />
      </Layout>
      <InventoryEquipSlot
        slot={EquipSlotType.RightFinger}
        item={items[EquipSlotType.RightFinger]}
      />
      <Layout direction="column" spacing="m">
        <InventoryEquipSlot
          slot={EquipSlotType.Head}
          item={items[EquipSlotType.Head]}
        />
        <InventoryEquipSlot
          slot={EquipSlotType.Torso}
          item={items[EquipSlotType.Torso]}
        />
        <InventoryEquipSlot
          slot={EquipSlotType.Waist}
          item={items[EquipSlotType.Waist]}
        />
      </Layout>
      <Layout direction="column" h="100%" justify="space-between" spacing="m">
        <div />
        <InventoryEquipSlot
          slot={EquipSlotType.Neck}
          item={items[EquipSlotType.Neck]}
        />
        <InventoryEquipSlot
          slot={EquipSlotType.LeftFinger}
          item={items[EquipSlotType.LeftFinger]}
        />
      </Layout>
      <Layout direction="column" spacing="m">
        <Layout direction="column">
          {swapToggle}
          <InventoryEquipSlot
            slot={EquipSlotType.OffHand}
            item={
              items[
                swapState === SwapStateType.One
                  ? EquipSlotType.OffHand
                  : EquipSlotType.AlternateOffHand
              ]
            }
          />
        </Layout>
        <InventoryEquipSlot
          slot={EquipSlotType.Feet}
          item={items[EquipSlotType.Feet]}
        />
      </Layout>
    </Layout>
  );
};

const Swap = ({selectedState, onSwap}) => (
  <Layout flex="auto">
    {Object.values(SwapStateType).map((state) => (
      <Layout
        key={state}
        bg={selectedState === state ? 'interface.active' : undefined}
        justify="center"
        b="bordered"
        flex="auto"
        onClick={() => onSwap(state)}
      >
        <Text fontFamily="diablo">{state}</Text>
      </Layout>
    ))}
  </Layout>
);

export default InventoryPaperdoll;

import {fillNull, isEmpty} from './fp.js';

/**
 * Given an array of items, autoplace them in a cube grid.
 * The word slot is used interchangeably to denote the index of a 1-D grid.
 *
 * - Items are placed with top-left as the origin and in a right-down fashion.
 * - Items are placed in descending order of net size (w * h).
 **/
export const autoplaceCubeItems = (items) => {
  const sorted = [...items].sort((a, b) =>
    a.size[0] * a.size[1] > b.size[0] * b.size[1] ? -1 : 1,
  );
  const filled = fillNull(grid[0] * grid[1]);
  return sorted.map((item) => {
    item.position = getAvailablePosition({
      filled,
      grid,
      size: item.size,
    });
    return item;
  });
};

/**
 * Recursively finds an available position based on the specified grid and size.
 *
 * A valid position is determined if all slots held by the box is unfilled.
 * Updates and mutates the filled parameter.
 * Returns null if position not found.
 */
const getAvailablePosition = ({filled, grid, size}) => {
  const slot = filled.findIndex(isEmpty) || 0;
  const position = slotToPosition({slot, grid});
  const boxSlots = getBoxSlots({grid, position, size});
  const isBoxSlotsAvailable = testIsBoxSlotsAvailable({boxSlots, filled});
  if (isBoxSlotsAvailable) {
    fill({boxSlots, filled});
    return position;
  }

  return null;
};

const getBoxSlots = ({grid, position, size}) => {
  const [h, w] = size;
  const [row0, col0] = position;
  const row1 = row0 + h - 1;
  const col1 = col0 + w - 1;

  const slots = [];
  for (let col = col0; col <= col1; col++) {
    for (let row = row0; row <= row1; row++) {
      const position = [row, col];
      slots.push(positionToSlot({position, grid}));
    }
  }

  return slots;
};

const fill = ({boxSlots, filled}) => {
  boxSlots.forEach((slot) => {
    filled[slot] = true;
  });
};

const testIsBoxSlotsAvailable = ({boxSlots, filled}) =>
  boxSlots.every((slot) => isEmpty(filled[slot]));

const slotToPosition = ({slot, grid}) => {
  const width = grid[1];
  const row = Math.floor(slot / width);
  const col = slot % width;
  return [row, col];
};

const positionToSlot = ({position, grid}) => {
  const [row, col] = position;
  const gridColumn = grid[1];
  return col + gridColumn * row;
};

const grid = [4, 3];

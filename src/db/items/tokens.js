import {ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  size: [1, 1],
  type: ItemType.Token,
})([
  {
    id: ids.TokenOfAbsolution,
    name: 'Token of Absolution',
    description: [
      {
        text: 'Right-click to reset stat/skill points',
        color: 'crafted',
      },
    ],
  },
]);

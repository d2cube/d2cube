import {ItemType} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  size: [1, 1],
  type: ItemType.Scroll,
})([
  {id: ids.ScrollOfIdentify, name: 'Scroll of Identify'},
  {id: ids.ScrollOfTownPortal, name: 'Scroll of Town Portal'},
]);

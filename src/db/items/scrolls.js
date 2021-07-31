import {ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  size: [1, 1],
  type: ItemType.Scroll,
})([
  {id: ids.ScrollOfIdentify, name: 'Scroll of Identify'},
  {id: ids.ScrollOfTownPortal, name: 'Scroll of Town Portal'},
]);

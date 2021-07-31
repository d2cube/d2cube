import {ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  size: [1, 1],
  type: ItemType.Organ,
})([
  {
    id: ids.BaalsEye,
    name: "Baal's Horn",
  },
  {
    id: ids.DiablosHorn,
    name: "Diablo's Horn",
  },
  {
    id: ids.MephistosBrain,
    name: "Mephisto's Brain",
  },
]);

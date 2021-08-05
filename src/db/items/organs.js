import {ItemType} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
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

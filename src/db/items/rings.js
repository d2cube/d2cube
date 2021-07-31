import {ItemType} from '../../enums/index.js';
import ids from '../ids/index.js';
import {mapItemClvl} from '../utils/map-item-clvl.js';
import {mapItemIlvl} from '../utils/map-item-ilvl.js';
import {mapItemName} from '../utils/map-item-name.js';
import {mapItems} from '../utils/map-items.js';
import {resolveItemStats} from '../utils/resolve-item-stats.js';

const items = {
  [ids.Ring]: {
    id: ids.Ring,
    name: 'Ring',
    variants: 5,
  },
};

export default mapItems({
  size: [1, 1],
  type: ItemType.Ring,
  mapDescription: (item) => {
    const description = [mapItemName(item)];
    if (item.ilvl) {
      description.push(mapItemIlvl(item));
    }

    if (item.clvl) {
      description.push(mapItemClvl(item));
    }

    if (item.stats) {
      description.push({
        text: resolveItemStats(item.stats),
        color: 'item.quality.magic',
      });
    }

    return [description];
  },
})(items);

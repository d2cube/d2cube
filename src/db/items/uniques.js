import {PropertyType, ItemRarityType, ItemType} from '../enums/index.js';
import ids from '../ids/index.js';
import {mapItemClvl} from '../utils/map-item-clvl.js';
import {mapItemIlvl} from '../utils/map-item-ilvl.js';
import {mapItemName} from '../utils/map-item-name.js';
import {mapItems} from '../utils/map-items.js';
import {resolveItemStats} from '../utils/resolve-item-stats.js';

const items = {
  [ids.StoneOfJordan]: {
    id: ids.StoneOfJordan,
    name: 'Stone of Jordan',
    rarity: ItemRarityType.Unique,
    type: ItemType.Ring,
    size: [1, 1],
    clvl: 29,
    ilvl: 66,
    stats: [
      {
        property: PropertyType.AllSkillLevels,
        values: [1],
      },
      {
        property: PropertyType.LightningDamage,
        values: [1, 12],
      },
      {
        property: PropertyType.Mana,
        values: [20],
      },
      {
        property: PropertyType.IncreaseMaximumMana,
        values: [25],
      },
    ],
  },
};

export default mapItems({
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
        color: 'item.rarity.magic',
      });
    }

    return [description];
  },
})(items);

import {
  BasePropertyType,
  ItemQualityType,
  ItemType,
} from '../../enums/index.js';
import ids from '../ids/index.js';
import {mapItemName} from '../utils/map-item-name.js';
import {mapItemProperties} from '../utils/map-item-properties.js';
import {mapItems} from '../utils/map-items.js';

const items = {
  [ids.WirtsLeg]: {
    id: ids.WirtsLeg,
    type: ItemType.Mace,
    name: "Wirt's Leg",
    quality: ItemQualityType.Unique,
    clvl: null,
    size: [3, 1],
    properties: {
      [BasePropertyType.Damage1H]: [1, 8],
      [BasePropertyType.MeleeRange]: 1,
      [BasePropertyType.AttackSpeed]: -10,
      [BasePropertyType.MinimumStrength]: null,
      [BasePropertyType.MinimumDexterity]: null,
      [BasePropertyType.Durability]: 66,
      [BasePropertyType.MaxSockets]: 3,
    },
    mapDescription: (item) => [[mapItemName(item), ...mapItemProperties(item)]],
  },
};

export default mapItems({
  mapDescription: (item) => {
    const text = item.name;
    let color;

    switch (item.type) {
      case ItemType.Essence:
      case ItemType.Key:
        color = 'item.quality.crafted';
        break;
      default:
        color = null;
    }

    return [[{text, color}]];
  },
})(items);

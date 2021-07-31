import {
  ItemPropertyType,
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
    size: [2, 1],
    properties: {
      [ItemPropertyType.Damage1H]: [1, 8],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: null,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 66,
      [ItemPropertyType.MaxSockets]: 3,
    },
    mapDescription: (item) => [[mapItemName(item), ...mapItemProperties(item)]],
  },
};

export default mapItems({
  mapDescription: (item) => {
    const text = item.name;
    let color;

    switch (item.type) {
      case ItemType.Cow:
        color = 'item.quality.unique';
        break;
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

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
  [ids.BurningEssenceOfTerror]: {
    id: ids.BurningEssenceOfTerror,
    type: ItemType.Essence,
    name: 'Burning Essence of Terror',
    size: [1, 1],
  },
  [ids.ChargedEssenceOfHatred]: {
    id: ids.ChargedEssenceOfHatred,
    type: ItemType.Essence,
    name: 'Charged Essence of Hatred',
    size: [1, 1],
  },
  [ids.FesteringEssenceOfDestruction]: {
    id: ids.FesteringEssenceOfDestruction,
    type: ItemType.Essence,
    name: 'Festering Essence of Destruction',
    size: [1, 1],
  },
  [ids.TwistedEssenceOfSuffering]: {
    id: ids.TwistedEssenceOfSuffering,
    type: ItemType.Essence,
    name: 'Twisted Essence of Suffering',
    size: [1, 1],
  },
  [ids.TokenOfAbsolution]: {
    id: ids.TokenOfAbsolution,
    type: ItemType.Token,
    name: 'Token of Absolution',
    size: [1, 1],
  },
  [ids.KeyOfDestruction]: {
    id: ids.KeyOfDestruction,
    type: ItemType.Key,
    name: 'Key of Destruction',
    size: [2, 1],
  },
  [ids.KeyOfHate]: {
    id: ids.KeyOfHate,
    type: ItemType.Key,
    name: 'Key of Hate',
    size: [2, 1],
  },
  [ids.KeyOfTerror]: {
    id: ids.KeyOfTerror,
    type: ItemType.Key,
    name: 'Key of Terror',
    size: [2, 1],
  },
  [ids.BaalsEye]: {
    id: ids.BaalsEye,
    type: ItemType.Organ,
    name: "Baal's Horn",
    size: [1, 1],
  },
  [ids.DiablosHorn]: {
    id: ids.DiablosHorn,
    type: ItemType.Organ,
    name: "Diablo's Horn",
    size: [1, 1],
  },
  [ids.MephistosBrain]: {
    id: ids.MephistosBrain,
    type: ItemType.Organ,
    name: "Mephisto's Brain",
    size: [1, 1],
  },
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

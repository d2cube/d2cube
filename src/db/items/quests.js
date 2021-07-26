import {ItemType} from '../enums/index.js';
import ids from '../ids/index.js';
import {mapItemProps} from '../utils/map-item-props.js';

const items = {
  [ids.BurningEssenceOfTerror]: {
    id: ids.BurningEssenceOfTerror,
    type: ItemType.Essence,
    name: 'Burning Essence of Terror',
  },
  [ids.ChargedEssenceOfHatred]: {
    id: ids.ChargedEssenceOfHatred,
    type: ItemType.Essence,
    name: 'Charged Essence of Hatred',
  },
  [ids.FesteringEssenceOfDestruction]: {
    id: ids.FesteringEssenceOfDestruction,
    type: ItemType.Essence,
    name: 'Festering Essence of Destruction',
  },
  [ids.TwistedEssenceOfSuffering]: {
    id: ids.TwistedEssenceOfSuffering,
    type: ItemType.Essence,
    name: 'Twisted Essence of Suffering',
  },
  [ids.TokenOfAbsolution]: {
    id: ids.TokenOfAbsolution,
    type: ItemType.Token,
    name: 'Token of Absolution',
  },
};

export default mapItemProps({
  size: [1, 1],
  mapDescription: (item) => [[{text: item.name, color: 'item.crafted'}]],
})(items);

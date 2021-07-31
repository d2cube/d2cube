import {ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  size: [1, 1],
  type: ItemType.Essence,
})([
  {
    id: ids.BurningEssenceOfTerror,
    name: 'Burning Essence of Terror',
  },
  {
    id: ids.ChargedEssenceOfHatred,
    name: 'Charged Essence of Hatred',
  },
  {
    id: ids.FesteringEssenceOfDestruction,
    name: 'Festering Essence of Destruction',
  },
  {
    id: ids.TwistedEssenceOfSuffering,
    name: 'Twisted Essence of Suffering',
  },
]);

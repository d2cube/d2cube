import {merge} from 'uinix-fp';

import {and, not} from '../../utils/fp.js';
import {ItemPropertyType, RecipeType} from '../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import {isEthereal, isWeapon} from '../utils/predicates.js';
import ids from '../ids/index.js';

const recipes = [
  {
    name: '1 Ort + Weapon (non-ethereal) → Fully Repaired Weapon',
    sources: [
      {
        item: {
          id: ids.Ort,
        },
      },
      {
        item: {
          id: ids.CrystalSword,
          overrideDescription: [[{text: 'Any non-ethereal weapon'}]],
          properties: {},
        },
        test: and([isWeapon, not(isEthereal)]),
      },
    ],
    target: {
      transform: (sources) => {
        const {item} = sources[1];
        return merge(item)({
          durability: item.properties[ItemPropertyType.Durability],
        });
      },
    },
  },
];

export default mapRecipeProps({
  type: RecipeType.RepairRecharge,
})(recipes);

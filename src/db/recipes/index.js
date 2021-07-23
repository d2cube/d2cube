import {mapAddType} from '../../utils/map-add-type.js';
import {RecipeType} from '../enums/index.js';

import ammunitions from './ammunitions.js';
import gems from './gems.js';
import potions from './potions.js';
import runes from './runes.js';

export default [
  ...mapAddType(RecipeType.Runes)(runes),
  ...mapAddType(RecipeType.Gems)(gems),
  ...mapAddType(RecipeType.Potions)(potions),
  ...mapAddType(RecipeType.Ammunitions)(ammunitions),
];

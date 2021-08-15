import {RunewordType} from '../../enums/index.js';

import ancientsPledge from './ancients-pledge.js';
import enigma from './enigma.js';

export default {
  [RunewordType.JahIthBer]: enigma,
  [RunewordType.RalOrtTal]: ancientsPledge,
};

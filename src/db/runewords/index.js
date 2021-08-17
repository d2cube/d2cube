import {RunewordType} from '../../enums/index.js';

import ancientsPledge from './ancients-pledge.js';
import black from './black.js';
import enigma from './enigma.js';
import spirit from './spirit.js';

export default {
  [RunewordType.JahIthBer]: enigma,
  [RunewordType.RalOrtTal]: ancientsPledge,
  [RunewordType.TalThulOrtAmn]: spirit,
  [RunewordType.ThulIoNef]: black,
};

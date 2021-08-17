import {RunewordType} from '../../enums/index.js';

import ancientsPledge from './ancients-pledge.js';
import black from './black.js';
import enigma from './enigma.js';
import fury from './fury.js';
import holyThunder from './holy-thunder.js';
import honor from './honor.js';
import kingsGrace from './kings-grace.js';
import leaf from './leaf.js';
import lionheart from './lionheart.js';
import lore from './lore.js';
import spirit from './spirit.js';

export default {
  [RunewordType.AmnElIthTirSol]: honor,
  [RunewordType.AmnRalThul]: kingsGrace,
  [RunewordType.EthRalOrtTal]: holyThunder,
  [RunewordType.HelLumFal]: lionheart,
  [RunewordType.JahGulEth]: fury,
  [RunewordType.JahIthBer]: enigma,
  [RunewordType.OrtSol]: lore,
  [RunewordType.RalOrtTal]: ancientsPledge,
  [RunewordType.TalThulOrtAmn]: spirit,
  [RunewordType.ThulIoNef]: black,
  [RunewordType.TirRal]: leaf,
};

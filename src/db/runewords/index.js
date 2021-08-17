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
import malice from './malice.js';
import melody from './melody.js';
import memory from './memory.js';
import nadir from './nadir.js';
import radiance from './radiance.js';
import rhyme from './rhyme.js';
import silence from './silence.js';
import smoke from './smoke.js';
import spirit from './spirit.js';
import stealth from './stealth.js';

export default {
  [RunewordType.AmnElIthTirSol]: honor,
  [RunewordType.AmnRalThul]: kingsGrace,
  [RunewordType.DolEldHelIstTirVex]: silence,
  [RunewordType.EthRalOrtTal]: holyThunder,
  [RunewordType.HelLumFal]: lionheart,
  [RunewordType.IthElEth]: malice,
  [RunewordType.JahGulEth]: fury,
  [RunewordType.JahIthBer]: enigma,
  [RunewordType.LumIoSolEth]: memory,
  [RunewordType.NefLum]: smoke,
  [RunewordType.NefTir]: nadir,
  [RunewordType.NefSolIth]: radiance,
  [RunewordType.OrtSol]: lore,
  [RunewordType.RalOrtTal]: ancientsPledge,
  [RunewordType.ShaelEth]: rhyme,
  [RunewordType.ShaelKoNef]: melody,
  [RunewordType.TalEth]: stealth,
  [RunewordType.TalThulOrtAmn]: spirit,
  [RunewordType.ThulIoNef]: black,
  [RunewordType.TirRal]: leaf,
};

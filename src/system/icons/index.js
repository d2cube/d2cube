import {code} from './code.js';
import {cube} from './cube.js';
import {database} from './database.js';
import {gift} from './gift.js';
import {github} from './github.js';
import {help} from './help.js';
import {info} from './info.js';
import {layers} from './layers.js';
import {pause} from './pause.js';
import {paypal} from './paypal.js';
import {play} from './play.js';
import {runewords} from './runewords.js';
import {transmute} from './transmute.js';
import {up} from './up.js';

export default {
  cube,
  help,
  info,
  pause,
  paypal,
  play,
  nav: {
    about: info,
    develop: code,
    github,
    items: database,
    runewords,
    sets: layers,
    support: gift,
  },
  interface: {
    transmute,
  },
  up,
};

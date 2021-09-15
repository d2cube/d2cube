import {chevronLeft} from './chevron-left.js';
import {chevronRight} from './chevron-right.js';
import {code} from './code.js';
import {cube} from './cube.js';
import {database} from './database.js';
import {discord} from './discord.js';
import {download} from './download.js';
import {gift} from './gift.js';
import {github} from './github.js';
import {githubSponsor} from './github-sponsor.js';
import {help} from './help.js';
import {info} from './info.js';
import {layers} from './layers.js';
import {pause} from './pause.js';
import {paypal} from './paypal.js';
import {play} from './play.js';
import {runewords} from './runewords.js';
import {transmute} from './transmute.js';
import {up} from './up.js';
import {users} from './users.js';
import {x} from './x.js';

export default {
  cube,
  chevronLeft,
  chevronRight,
  discord,
  download,
  help,
  github,
  githubSponsor,
  info,
  pause,
  paypal,
  play,
  up,
  x,
  nav: {
    about: info,
    community: users,
    cube,
    developers: code,
    home: cube,
    items: database,
    runewords,
    sets: layers,
    support: gift,
  },
  interface: {
    transmute,
  },
};

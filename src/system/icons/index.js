import {code} from './code.js';
import {cube} from './cube.js';
import {database} from './database.js';
import {discord} from './discord.js';
import {gift} from './gift.js';
import {github} from './github.js';
import {githubSponsor} from './github-sponsor.js';
import {help} from './help.js';
import {info} from './info.js';
import {layers} from './layers.js';
import {list} from './list.js';
import {pause} from './pause.js';
import {paypal} from './paypal.js';
import {play} from './play.js';
import {runewords} from './runewords.js';
import {transmute} from './transmute.js';
import {up} from './up.js';
import {users} from './users.js';

export default {
  cube,
  discord,
  help,
  github,
  githubSponsor,
  info,
  pause,
  paypal,
  play,
  nav: {
    about: info,
    community: users,
    develop: code,
    items: database,
    roadmap: list,
    runewords,
    sets: layers,
    support: gift,
  },
  interface: {
    transmute,
  },
  up,
};

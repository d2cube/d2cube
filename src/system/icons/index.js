import {add} from './add.js';
import {github} from './github.js';
import {help} from './help.js';
import {home} from './home.js';
import {items} from './items.js';
import {pause} from './pause.js';
import {play} from './play.js';
import {skill} from './skill.js';
import {transmute} from './transmute.js';

export default {
  help,
  pause,
  play,
  nav: {
    home,
    items,
    about: help,
    github,
  },
  interface: {
    add,
    skill,
    transmute,
  },
};

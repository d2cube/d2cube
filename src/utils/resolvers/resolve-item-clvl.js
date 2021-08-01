import {cb} from '../fp.js';

export const resolveItemClvl = (item) =>
  cb((x) => `Required level: ${x}`)(item.clvl);

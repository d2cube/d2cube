import {cb} from '../fp.js';

export const resolveItemQlvl = (item) =>
  cb((x) => `Quality level: ${x}`)(item.qlvl);

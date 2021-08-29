import db from '../db/index.js';

export const getSet = (key) => db.sets[key];

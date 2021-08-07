import db from '../db/index.js';

export const getSetById = (id) => db.sets[id];

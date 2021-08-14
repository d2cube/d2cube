import db from '../db/index.js';

export const getRunewordById = (id) => db.runewords[id];

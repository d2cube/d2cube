import db from '../db/index.js';

export const getRuneword = (key) => db.runewords[key];

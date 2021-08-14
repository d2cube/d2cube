import db from '../db/index.js';

export const getRunewords = () => Object.values(db.runewords);

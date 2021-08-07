import db from '../db/index.js';

export const getSets = () => Object.values(db.sets);

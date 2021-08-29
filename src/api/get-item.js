import db from '../db/index.js';

export const getItem = (key) => db.items[key];

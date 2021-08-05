import db from '../db/index.js';

export const getItemById = (id) => db.items[id];

import db from '../db/index.js';

export const getItems = () => Object.values(db.items);

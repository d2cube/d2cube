import {fillWith} from './fp.js';

export const getTierLabel = (tier) => fillWith(tier - 1)('+').join('');

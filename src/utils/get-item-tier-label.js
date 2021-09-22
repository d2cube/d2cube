import {ItemTierType} from '../enums/index.js';

export const getItemTierLabel = (tier) => LABELS[tier];

const LABELS = {
  [ItemTierType.Normal]: 'Normal',
  [ItemTierType.Exceptional]: 'Exceptional',
  [ItemTierType.Elite]: 'Elite',
  [ItemTierType.ElitePlus]: 'Elite',
};

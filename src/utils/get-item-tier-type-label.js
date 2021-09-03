import {ItemTierType} from '../enums/index.js';

export const getItemTierTypeLabel = (type) => LABELS[type];

const LABELS = {
  [ItemTierType.Normal]: 'Normal',
  [ItemTierType.Exceptional]: 'Exceptional',
  [ItemTierType.Elite]: 'Elite',
};

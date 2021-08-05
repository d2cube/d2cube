import {merge} from 'uinix-fp';

import {getItemById} from '../api/index.js';

export const rollItem = (data) => {
  const item = getItemById(data.id);
  return merge(data)(item);
};

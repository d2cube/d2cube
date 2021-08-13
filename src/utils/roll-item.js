import {merge} from 'uinix-fp';
import {v4 as uuid} from 'uuid';

import {getItemById} from '../api/index.js';

export const rollItem = (data) => {
  const item = getItemById(data.id);
  return merge(item)({...data, uuid: uuid()});
};

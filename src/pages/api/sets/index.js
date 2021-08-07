import {getSets} from '../../../api/index.js';

export default function (_, response) {
  const sets = getSets();
  response.status(200).json(sets);
}

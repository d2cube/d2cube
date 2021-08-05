import {getItems} from '../../../queries/index.js';

export default function (_, response) {
  const items = getItems();

  response.status(200).json(items);
}

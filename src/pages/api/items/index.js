import {getItems} from '../../../api/index.js';
import {rollItem} from '../../../utils/roll-item.js';

export default function (_, response) {
  const items = getItems().map(rollItem);
  response.status(200).json(items);
}

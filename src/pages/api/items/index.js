import {getItems} from '../../../api/index.js';
import {rollItem} from '../../../utils/roll-item.js';

export default function (_, response) {
  response.status(200).json(getItems().map(rollItem));
}

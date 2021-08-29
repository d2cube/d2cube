// eslint-disable-line unicorn/filename-case
import {getItem} from '../../../api/index.js';
import {rollItem} from '../../../utils/roll-item.js';

export default function (request, response) {
  const {ItemId} = request.query;
  const item = rollItem(getItem(ItemId));
  if (item) {
    response.status(200).json(item);
  } else {
    response.status(404).json({message: `Item '${ItemId}' does not exist.`});
  }
}

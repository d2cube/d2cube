import {getItemById} from '../../../api/index.js';
import {rollItem} from '../../../utils/roll-item.js';

export default function (request, response) {
  const {id} = request.query;
  const item = rollItem(getItemById(id));
  if (item) {
    response.status(200).json(item);
  } else {
    response.status(404).json({message: `Item '${id}' does not exist.`});
  }
}

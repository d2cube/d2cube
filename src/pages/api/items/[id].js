import {getItemById} from '../../../api/index.js';

export default function (request, response) {
  const {id} = request.query;
  const item = getItemById(id);
  if (item) {
    response.status(200).json(item);
  } else {
    response.status(404).json({message: `Item '${id}' does not exist.`});
  }
}

import {getSetById} from '../../../api/index.js';

export default function (request, response) {
  const {id} = request.query;
  const item = getSetById(id);
  if (item) {
    response.status(200).json(item);
  } else {
    response.status(404).json({message: `Set '${id}' does not exist.`});
  }
}

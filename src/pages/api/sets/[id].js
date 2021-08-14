import {getSetById} from '../../../api/index.js';

export default function (request, response) {
  const {id} = request.query;
  const set = getSetById(id);
  if (set) {
    response.status(200).json(set);
  } else {
    response.status(404).json({message: `Set '${id}' does not exist.`});
  }
}

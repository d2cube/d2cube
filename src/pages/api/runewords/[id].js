import {getRunewordById} from '../../../api/index.js';

export default function (request, response) {
  const {id} = request.query;
  const runeword = getRunewordById(id);
  if (runeword) {
    response.status(200).json(runeword);
  } else {
    response.status(404).json({message: `Runeword '${id}' does not exist.`});
  }
}

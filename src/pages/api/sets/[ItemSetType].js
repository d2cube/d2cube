// eslint-disable-line unicorn/filename-case
import {getSet} from '../../../api/index.js';

export default function (request, response) {
  const {ItemSetType} = request.query;
  const set = getSet(ItemSetType);
  if (set) {
    response.status(200).json(set);
  } else {
    response
      .status(404)
      .json({message: `Set '${ItemSetType}' does not exist.`});
  }
}

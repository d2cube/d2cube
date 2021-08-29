// eslint-disable-line unicorn/filename-case
import {getRuneword} from '../../../api/index.js';

export default function (request, response) {
  const {RunewordType} = request.query;
  const runeword = getRuneword(RunewordType);
  if (runeword) {
    response.status(200).json(runeword);
  } else {
    response
      .status(404)
      .json({message: `Runeword '${RunewordType}' does not exist.`});
  }
}

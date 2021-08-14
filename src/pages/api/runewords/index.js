import {getRunewords} from '../../../api/index.js';

export default function (_, response) {
  const runewords = getRunewords();
  response.status(200).json(runewords);
}

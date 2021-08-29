import {getEnumTypes} from '../../../api/index.js';

export default function (_, response) {
  response.status(200).json(getEnumTypes());
}

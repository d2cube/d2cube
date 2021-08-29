// eslint-disable-line unicorn/filename-case
import {getEnums} from '../../../api/index.js';

export default function (request, response) {
  const {EnumType} = request.query;
  const enums = getEnums(EnumType);
  if (enums) {
    response.status(200).json(enums);
  } else {
    response
      .status(404)
      .json({message: `No enums found for enum type '${EnumType}'`});
  }
}

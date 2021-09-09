import {search} from '../../../api/index.js';

export default function (request, response) {
  const {filters} = request.body;
  const items = search(filters);
  try {
    response.status(200).json(items);
  } catch {
    response
      .status(404)
      .json({message: 'Bad search.  Please ensure valid filters are provided'});
  }
}

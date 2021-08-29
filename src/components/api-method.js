import {useState} from 'react';
import {Layout, Text} from 'uinix-ui';

import * as api from '../api/index.js';
import Input from '../components/ui/input.js';
import Labelled from '../components/ui/labelled.js';
import {isEmpty} from '../utils/fp.js';

const ApiMethod = ({method}) => {
  const {
    description,
    httpMethod,
    name,
    param: apiParameter = {},
    path,
  } = method;

  const [parameter, setParameter] = useState(apiParameter.example);

  const isParametersDisabled = isEmpty(parameter);

  let error;
  let response;
  try {
    const apiMethod = api[name];
    response = apiMethod(parameter);
  } catch {
    error = 'Invalid request';
  }

  const url = '/api' + path + (parameter || '');

  return (
    <Layout direction="column" spacing="l">
      <h4 id={name}>
        <Text as="code" fontSize="l">
          {name}
        </Text>
      </h4>
      <div>{description}</div>
      <Labelled label="Parameters">
        <Input
          disabled={isParametersDisabled}
          placeholder={
            isParametersDisabled ? 'No parameter' : 'Provide a valid value'
          }
          value={parameter}
          onChange={setParameter}
        />
      </Labelled>
      <Labelled
        label={
          <Layout spacing="m">
            <div>URL</div>
            <a href={url}>(Link)</a>
          </Layout>
        }
      >
        <pre>
          {httpMethod} {url}
        </pre>
      </Labelled>
      <Labelled label="Response">
        {error ? (
          <Text as="pre" variant="error">
            {error}
          </Text>
        ) : (
          json(response)
        )}
      </Labelled>
      <hr />
    </Layout>
  );
};

const json = (x) =>
  isEmpty(x) ? <pre>None</pre> : <pre>{JSON.stringify(x, null, 2)}</pre>;

export default ApiMethod;

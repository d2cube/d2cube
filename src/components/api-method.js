import {useState} from 'react';
import {Layout, Text} from 'uinix-ui';

import * as api from '../api/index.js';
import {isEmpty} from '../utils/fp.js';
import Copyable from './ui/copyable.js';
import ExternalLink from './ui/external-link.js';
import Input from './ui/input.js';
import Labelled from './ui/labelled.js';

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
    if (isEmpty(response)) {
      error = '404: Not Found';
    }
  } catch {
    error = '404: Not Found';
  }

  const url = '/api' + path + (parameter ? '/' + parameter : '');

  const jsonResponse = json(response);

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
            isParametersDisabled ? 'No parameters' : 'Provide a valid value'
          }
          value={parameter}
          onChange={setParameter}
        />
      </Labelled>
      <Labelled label="URL">
        <Copyable label="curl" text={`curl https://d2cu.be${url}`}>
          <pre>
            <ExternalLink href={url}>
              {httpMethod} {url}
            </ExternalLink>
          </pre>
        </Copyable>
      </Labelled>
      <Labelled label="Response">
        {error ? (
          <Text as="pre" variant="error">
            {error}
          </Text>
        ) : (
          <Copyable text={jsonResponse}>
            <pre>{jsonResponse}</pre>
          </Copyable>
        )}
      </Labelled>
    </Layout>
  );
};

const json = (x) => (isEmpty(x) ? null : JSON.stringify(x, null, 2));

export default ApiMethod;

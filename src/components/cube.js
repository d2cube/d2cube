import React from 'react';

import {items} from '../mocks/index.js';
import {Item} from './item.js';
import {Recipes} from './recipes.js';

export const Cube = () => (
  <div>
    {items.map((item) => (
      <Item key={item.id} item={item} />
    ))}
    <hr />
    <Recipes items={items} />
  </div>
);

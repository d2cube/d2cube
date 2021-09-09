import {ApiMethodType} from '../enums/index.js';

export const API_METHODS = [
  {
    name: ApiMethodType.GetApiMethods,
    httpMethod: 'GET',
    description: 'Returns all API methods.',
    path: '/',
  },
  {
    name: ApiMethodType.GetEnumTypes,
    httpMethod: 'GET',
    description: 'Returns all EnumTypes.',
    path: '/enum-types',
  },
  {
    name: ApiMethodType.GetEnums,
    httpMethod: 'GET',
    description: 'Returns all Enums for the specified EnumType.',
    path: '/enums',
    param: {
      type: 'EnumType',
      description: 'A valid EnumType.',
      example: 'RunewordType',
    },
  },
  {
    name: ApiMethodType.GetItemIds,
    httpMethod: 'GET',
    description: 'Returns all ItemIds.',
    path: '/item-ids',
  },
  {
    name: ApiMethodType.GetItems,
    httpMethod: 'GET',
    description: 'Returns all Items.',
    path: '/items',
  },
  {
    name: ApiMethodType.GetItem,
    httpMethod: 'GET',
    description: 'Returns the specified Item.',
    path: '/items',
    param: {
      type: 'ItemId',
      description: 'A valid ItemId.',
      example: 'TyraelsMight',
    },
  },
  {
    name: ApiMethodType.GetRunewords,
    httpMethod: 'GET',
    description: 'Returns all Runewords.',
    path: '/runewords',
  },
  {
    name: ApiMethodType.GetRuneword,
    httpMethod: 'GET',
    description: 'Returns the specified Runeword.',
    path: '/runewords',
    param: {
      type: 'RunewordType',
      description: 'A valid RunewordType enum.',
      example: 'JahIthBer',
    },
  },
  {
    name: ApiMethodType.GetSets,
    httpMethod: 'GET',
    description: 'Returns all Sets.',
    path: '/sets',
  },
  {
    name: ApiMethodType.GetSet,
    httpMethod: 'GET',
    description: 'Returns the specified Set.',
    path: '/sets',
    param: {
      type: 'ItemSetType',
      description: 'A valid ItemSetType enum.',
      example: 'ImmortalKing',
    },
  },
  {
    name: ApiMethodType.Search,
    httpMethod: 'POST',
    description:
      'Searches items based on provided filters.  Please refer to the official API docs for details.',
    path: '/search',
    body: {
      filters: {
        type: 'SearchFilter[]',
        description: 'An array of SearchFilter objects.',
        example: [],
      },
    },
  },
];

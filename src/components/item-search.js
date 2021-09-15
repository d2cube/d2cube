import {
  ArmorClassType,
  ItemQualityType,
  ItemSetType,
  ItemType,
  FieldType,
  GemClassType,
  OperatorType,
  PlayerClassType,
  PotionClassType,
  WeaponClassType,
} from '../enums/index.js';
import Search from './ui/search.js';

const ItemSearch = ({filters, onChange}) => (
  <Search
    placeholder='Simply type ahead to search for items! (e.g. "unique", "immortal", "mana", "barb", "topaz")'
    schema={schema}
    filters={filters}
    onChange={onChange}
  />
);

const enums = {
  ArmorClassType,
  GemClassType,
  ItemQualityType: {
    [ItemQualityType.Normal]: ItemQualityType.Normal,
    [ItemQualityType.Set]: ItemQualityType.Set,
    [ItemQualityType.Unique]: ItemQualityType.Unique,
  },
  ItemSetType,
  ItemType,
  PlayerClassType,
  PotionClassType,
  WeaponClassType,
};

const fields = {
  name: {
    id: 'name',
    label: 'Name',
    type: FieldType.String,
  },
  stats: {
    id: 'stats',
    label: 'Properties',
    type: FieldType.Json,
  },
  type: {
    id: 'type',
    label: 'Type',
    type: FieldType.EnumSet,
    enums: 'ItemType',
  },
  quality: {
    id: 'quality',
    label: 'Quality',
    type: FieldType.EnumSet,
    enums: 'ItemQualityType',
  },
  set: {
    id: 'set',
    label: 'Set',
    type: FieldType.EnumSet,
    enums: 'ItemSetType',
  },
  playerClass: {
    id: 'playerClass',
    label: 'Player Class',
    type: FieldType.EnumSet,
    enums: 'PlayerClassType',
  },
  gemClass: {
    id: 'class',
    label: 'Gem Class',
    type: FieldType.EnumSet,
    enums: 'GemClassType',
  },
  weaponClass: {
    id: 'class',
    label: 'Weapon Class',
    type: FieldType.EnumSet,
    enums: 'WeaponClassType',
  },
  armorClass: {
    id: 'class',
    label: 'Armor Class',
    type: FieldType.EnumSet,
    enums: 'ArmorClassType',
  },
  potionClass: {
    id: 'class',
    label: 'Potion Class',
    type: FieldType.EnumSet,
    enums: 'PotionClassType',
  },
  tier: {
    id: 'tier',
    label: 'Tier',
    type: FieldType.Number,
  },
};

const operators = {
  [OperatorType.Contains]: {
    id: OperatorType.Contains,
    label: 'contains',
    cardinality: Number.POSITIVE_INFINITY,
  },
  [OperatorType.Equals]: {
    id: OperatorType.Equals,
    label: 'equals',
    cardinality: 1,
  },
  [OperatorType.FuzzySearch]: {
    id: OperatorType.FuzzySearch,
    label: 'matches',
    cardinality: 1,
  },
  [OperatorType.GreaterThan]: {
    id: OperatorType.GreaterThan,
    label: 'greater than',
    cardinality: 1,
  },
  [OperatorType.LessThan]: {
    id: OperatorType.LessThan,
    label: 'less than',
    cardinality: 1,
  },
  [OperatorType.Matches]: {
    id: OperatorType.Matches,
    label: 'matches',
    cardinality: 1,
  },
};

const types = {
  [FieldType.Number]: {
    id: FieldType.Number,
    label: 'Number',
    operators: [
      OperatorType.Equals,
      OperatorType.LessThan,
      OperatorType.GreaterThan,
    ],
  },
  [FieldType.EnumSet]: {
    id: FieldType.EnumSet,
    label: 'EnumSet',
    operators: [OperatorType.Contains],
  },
  [FieldType.Json]: {
    id: FieldType.Json,
    label: 'Json',
    operators: [OperatorType.FuzzySearch],
  },
  [FieldType.String]: {
    id: FieldType.String,
    label: 'String',
    operators: [OperatorType.Matches],
  },
};

const schema = {
  enums,
  fields,
  operators,
  types,
};

export default ItemSearch;

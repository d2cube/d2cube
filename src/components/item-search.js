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
    placeholder='Keep typing to narrow your search on matching fields e.g. "unique", "mana", "axe", "barb"'
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
  quality: {
    id: 'quality',
    label: 'Quality',
    type: FieldType.Enum,
    enums: 'ItemQualityType',
  },
  tier: {
    id: 'tier',
    label: 'Tier',
    type: FieldType.Number,
  },
  playerClass: {
    id: 'playerClass',
    label: 'Player Class',
    type: FieldType.Enum,
    enums: 'PlayerClassType',
  },
  weaponClass: {
    id: 'class',
    label: 'Weapon Class',
    type: FieldType.Enum,
    enums: 'WeaponClassType',
  },
  armorClass: {
    id: 'class',
    label: 'Armor Class',
    type: FieldType.Enum,
    enums: 'ArmorClassType',
  },
  gemClass: {
    id: 'class',
    label: 'Gem Class',
    type: FieldType.Enum,
    enums: 'GemClassType',
  },
  potionClass: {
    id: 'class',
    label: 'Potion Class',
    type: FieldType.Enum,
    enums: 'PotionClassType',
  },
  type: {
    id: 'type',
    label: 'Type',
    type: FieldType.Enum,
    enums: 'ItemType',
  },
  set: {
    id: 'set',
    label: 'Set',
    type: FieldType.Enum,
    enums: 'ItemSetType',
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
    label: 'contains',
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
  [FieldType.Enum]: {
    id: FieldType.Enum,
    label: 'Enum',
    operators: [OperatorType.Equals],
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

import {humanize} from '../fp.js';
import {BasePropertyType} from '../../enums/base-property-type.js';
import {resolveItemProperty} from './resolve-item-property.js';

export const resolveRunewordProperties = (runeword) => {
  const {id, name, properties, types} = runeword;
  const {base: baseProperties, magic: magicProperties} = properties;
  const requiredLevel = resolveItemProperty()({
    property: BasePropertyType.RequiredLevel,
    values: baseProperties[BasePropertyType.RequiredLevel],
  });

  const resolved = [
    {text: name, color: 'item.runeword'},
    {text: id, color: 'item.runes'},
    {text: requiredLevel},
    null,
  ];

  Object.entries(magicProperties).forEach(([property, values]) => {
    const text = resolveItemProperty()({
      property,
      values,
    });
    resolved.push({text, color: 'item.magic'});
  });

  resolved.push(null, {
    text: types.map(humanize).join('\n'),
    color: 'item.socketed',
  });

  return resolved;
};

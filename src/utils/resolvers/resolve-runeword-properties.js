import {BasePropertyType} from '../../enums/base-property-type.js';
import {getItemTypeLabel} from '../get-item-type-label.js';
import {resolveItemProperty} from './resolve-item-property.js';

export const resolveRunewordProperties = (runeword, item) => {
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

  types.forEach((type) => {
    const typeLabel = getItemTypeLabel(type);
    const text =
      type === item?.type ? (
        <mark>
          {item.name} ({typeLabel})
        </mark>
      ) : (
        typeLabel
      );
    resolved.push({
      text,
      color: 'item.socketed',
    });
  });

  return resolved;
};

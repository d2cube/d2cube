import {isPlainObject} from 'uinix-fp';

export const formatValues = (values) => {
  let formattedValues = values;
  if (Array.isArray(values)) {
    const [first, second] = values.map(Math.floor);
    const isNegative = first < 0;
    formattedValues =
      first === second
        ? first
        : `${isNegative ? '-' : ''}[${Math.abs(first)}-${Math.abs(second)}]`;
  } else if (isPlainObject(values)) {
    formattedValues = Object.entries(values).reduce((acc, [key, value]) => {
      acc[key] = formatValues(value);
      return acc;
    }, {});
  } else {
    formattedValues = Number.isFinite(values) ? Math.floor(values) : values;
  }

  return formattedValues;
};

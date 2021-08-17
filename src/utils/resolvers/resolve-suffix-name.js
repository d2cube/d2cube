import {SuffixType} from '../../enums/index.js';

export const resolveSuffixName = (suffix) => {
  switch (suffix) {
    case SuffixType.Leech:
      return `the ${suffix}`;
    default:
      return suffix;
  }
};

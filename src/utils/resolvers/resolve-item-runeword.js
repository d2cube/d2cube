import {getRunewordById} from '../../api/index.js';
import {ItemQualityType} from '../../enums/index.js';

export const resolveItemRuneword =
  (runes = []) =>
  (item) => {
    if (testIsValidRunewordQuality(item)) {
      const runeword = getRunewordById(runes);
      if (
        runeword &&
        runeword.runes.length === item.sockets.length &&
        testIsValidRunewordCategory({item, runeword})
      ) {
        return runeword;
      }
    }
  };

const testIsValidRunewordQuality = (item) => {
  switch (item.quality) {
    case ItemQualityType.Crafted:
    case ItemQualityType.Magic:
    case ItemQualityType.Rare:
    case ItemQualityType.Set:
    case ItemQualityType.Unique:
      return false;
    case ItemQualityType.Normal:
    default:
      return true;
  }
};

const testIsValidRunewordCategory = ({item, runeword}) =>
  item.socketCategory in runeword.properties;

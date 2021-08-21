import {
  BasePropertyType,
  ItemQualityType,
  ItemType,
  MagicPropertyType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
  type: ItemType.Unique,
})([
  {
    id: ids.KirasGuardian,
    name: "Kira's Guardian",
    baseId: ids.Tiara,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 77,
      },
      magic: {
        [MagicPropertyType.Defense]: [50, 120],
        [MagicPropertyType.FasterHitRecovery]: 20,
        [MagicPropertyType.CannotBeFrozen]: true,
        [MagicPropertyType.AllResistances]: [50, 70],
      },
    },
  },
  {
    id: ids.GriffonsEye,
    name: "Griffon's Eye",
    baseId: ids.Diadem,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 76,
      },
      magic: {
        [MagicPropertyType.Defense]: [100, 200],
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.FasterCastRate]: 25,
        [MagicPropertyType.LowerLightningResist]: [-15, -20],
        [MagicPropertyType.LightningSkillDamage]: [10, 15],
      },
    },
  },
]);

import {
  BasePropertyType,
  ItemQualityType,
  ItemSetType,
  MagicPropertyType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Set,
  set: ItemSetType.CleglawsBrace,
})([
  {
    id: ids.CleglawsTooth,
    name: "Cleglaw's Tooth",
    baseId: ids.LongSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 4,
      },
      magic: {
        [MagicPropertyType.BonusToAttackRating]: 30,
        [MagicPropertyType.DeadlyStrike]: 50,
      },
      set: [
        null,
        {
          [MagicPropertyType.MaximumDamageByLevel]: 1.25,
        },
        null,
      ],
    },
  },
  {
    id: ids.CleglawsClaw,
    name: "Cleglaw's Claw",
    baseId: ids.SmallShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 4,
      },
      magic: {
        [MagicPropertyType.Defense]: 17,
        [MagicPropertyType.PoisonLengthReduced]: 75,
      },
      set: [
        null,
        {
          [MagicPropertyType.AllResistances]: 15,
        },
        null,
      ],
    },
  },
  {
    id: ids.CleglawsPincers,
    name: "Cleglaw's Pincers",
    baseId: ids.ChainGloves,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 4,
      },
      magic: {
        [MagicPropertyType.SlowsTarget]: 25,
        [MagicPropertyType.Knockback]: true,
      },
      set: [
        null,
        {
          [MagicPropertyType.AttackRatingByLevel]: 10,
        },
        null,
      ],
    },
  },
]);

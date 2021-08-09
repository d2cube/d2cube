import {
  BasePropertyType,
  ItemQualityType,
  ItemSetType,
  ItemType,
  MagicPropertyType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Set,
  set: ItemSetType.NatalyasOdium,
  type: ItemType.Set,
})([
  {
    id: ids.NatalyasMark,
    name: "Natalya's Mark",
    baseId: ids.ScissorsSuwayyah,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 79,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 40,
        [MagicPropertyType.EnhancedDamage]: 200,
        [MagicPropertyType.IgnoreTargetDefense]: true,
        [MagicPropertyType.DamageToDemons]: 200,
        [MagicPropertyType.DamageToUndead]: 200,
        [MagicPropertyType.FireDamage]: {x: 12, y: 17},
        [MagicPropertyType.ColdDamage]: {x: 50, y: 50, z: 4},
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.NatalyasShadow,
    name: "Natalya's Shadow",
    baseId: ids.LoricatedMail,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 73,
      },
      magic: {
        [MagicPropertyType.AssassinShadowDisciplines]: 2,
        [MagicPropertyType.Defense]: [150, 225],
        [MagicPropertyType.LifeByLevel]: 1,
        [MagicPropertyType.PoisonResist]: 25,
        [MagicPropertyType.PoisonLengthReduced]: 75,
        [MagicPropertyType.Socketed]: [1, 3],
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.NatalyasTotem,
    name: "Natalya's Totem",
    baseId: ids.GrimHelm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 59,
      },
      magic: {
        [MagicPropertyType.Defense]: [135, 175],
        [MagicPropertyType.Strength]: [10, 20],
        [MagicPropertyType.Dexterity]: [20, 30],
        [MagicPropertyType.AllResistances]: [10, 20],
        [MagicPropertyType.MagicDamageReduced]: 3,
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.NatalyasSoul,
    name: "Natalya's Soul",
    baseId: ids.MeshBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 25,
      },
      magic: {
        [MagicPropertyType.FasterRunWalk]: 40,
        [MagicPropertyType.Defense]: [75, 125],
        [MagicPropertyType.HealStaminaByLevel]: 0.25,
        [MagicPropertyType.ColdResist]: [15, 25],
        [MagicPropertyType.LightningResist]: [15, 25],
      },
      set: [null, null, null, null],
    },
  },
]);

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
  set: ItemSetType.TheDisciple,
  type: ItemType.Set,
})([
  {
    id: ids.DarkAdherent,
    name: 'Dark Adherent',
    baseId: ids.DuskShroud,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 49,
      },
      magic: {
        [MagicPropertyType.ChanceToCastNovaWhenStruck]: {x: 3, y: 25},
        [MagicPropertyType.PoisonDamage]: {x: 24, y: 34, z: 2},
        [MagicPropertyType.Defense]: [305, 415],
        [MagicPropertyType.FireResist]: 24,
      },
      set: [null, null, null, null, null],
    },
  },
  {
    id: ids.LayingOfHands,
    name: 'Laying of Hands',
    baseId: ids.BrambleMitts,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 63,
      },
      magic: {
        [MagicPropertyType.ChanceToCastHolyBoltOnStriking]: {x: 3, y: 10},
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.DamageToDemons]: 350,
        [MagicPropertyType.Defense]: 25,
        [MagicPropertyType.FireResist]: 50,
      },
      set: [null, null, null, null, null],
    },
  },
  {
    id: ids.Credendum,
    name: 'Credendum',
    baseId: ids.MithrilCoil,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.Defense]: 50,
        [MagicPropertyType.Strength]: 10,
        [MagicPropertyType.Dexterity]: 10,
        [MagicPropertyType.AllResistances]: 15,
      },
      set: [null, null, null, null, null],
    },
  },
  {
    id: ids.RiteOfPassage,
    name: 'Rite of Passage',
    baseId: ids.DemonhideBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.FasterRunWalk]: 30,
        [MagicPropertyType.Defense]: 25,
        [MagicPropertyType.MaximumStamina]: [15, 25],
        [MagicPropertyType.HalfFreezeDuration]: true,
      },
      set: [null, null, null, null, null],
    },
  },
  {
    id: ids.TellingOfBeads,
    name: 'Telling of Beads',
    baseId: ids.Amulet,
    imageId: ids.Amulet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 30,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.ColdResist]: 18,
        [MagicPropertyType.PoisonResist]: [35, 50],
        [MagicPropertyType.AttackerTakesDamage]: [8, 10],
      },
      set: [null, null, null, null, null],
    },
  },
]);

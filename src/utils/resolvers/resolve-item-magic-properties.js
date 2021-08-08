import {props} from 'uinix-fp';

import {MagicPropertyType} from '../../enums/index.js';
import {sortEntriesBy} from '../fp.js';
import {resolveItemProperty} from './resolve-item-property.js';

export const resolveItemMagicProperties = (item) => {
  const magicProperties = props('properties.magic')(item) || {};
  const entries = sortEntriesBy(magicPropertiesOrder)(
    Object.entries(magicProperties),
  );

  return entries.map(([property, values]) => {
    const text = resolveItemProperty(item)({property, values});
    return {text, color: 'magic'};
  });
};

const magicPropertiesOrder = [
  MagicPropertyType.Indestructible,
  MagicPropertyType.ChanceToCastSpellWhenStruck,
  MagicPropertyType.SkillClassLevels,
  MagicPropertyType.FasterRunWalk,
  MagicPropertyType.AttackRating,
  MagicPropertyType.IncreasedAttackSpeed,
  MagicPropertyType.EnhancedDamage,
  MagicPropertyType.EnhancedDefense,
  MagicPropertyType.AddDefense,
  MagicPropertyType.AddStrength,
  MagicPropertyType.AddDexterity,
  MagicPropertyType.AddLife,
  MagicPropertyType.AddMana,
  MagicPropertyType.LightningResist,
  MagicPropertyType.FireResist,
  MagicPropertyType.PoisonResist,
  MagicPropertyType.DamageToDemons,
  MagicPropertyType.DamageToUndead,
  MagicPropertyType.CrushingBlow,
  MagicPropertyType.OpenWounds,
  MagicPropertyType.ExtraGold,
  MagicPropertyType.ExtraGoldByLevel,
  MagicPropertyType.MagicFind,
  MagicPropertyType.MagicFindByLevel,
  MagicPropertyType.LightRadius,
  MagicPropertyType.AddSockets,
];

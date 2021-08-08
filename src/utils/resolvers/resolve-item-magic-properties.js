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
  MagicPropertyType.IncreasedAttackSpeed,
  MagicPropertyType.EnhancedDamage,
  MagicPropertyType.EnhancedDefense,
  MagicPropertyType.AddDefense,
  MagicPropertyType.AddDexterity,
  MagicPropertyType.AddMana,
  MagicPropertyType.PoisonResist,
  MagicPropertyType.DamageToDemons,
  MagicPropertyType.DamageToUndead,
  MagicPropertyType.CrushingBlow,
  MagicPropertyType.OpenWounds,
  MagicPropertyType.ExtraGoldByLevel,
  MagicPropertyType.MagicFindByLevel,
  MagicPropertyType.AddSockets,
];

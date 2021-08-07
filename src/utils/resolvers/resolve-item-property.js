import {isPlainObject, k} from 'uinix-fp';

import {BasePropertyType, MagicPropertyType} from '../../enums/index.js';
import {floor} from '../fp.js';

export const resolveItemProperty =
  (item) =>
  ({property, values}) => {
    const serialize = serializers[property] || k('');
    return serialize(values, item);
  };

const format = (serialize) => (values, item) =>
  serialize(formatValues(values), item);

const formatValues = (values) => {
  let formattedValues = values;
  if (Array.isArray(values)) {
    const [first, second] = values.map(floor);
    formattedValues = first === second ? first : `[${first}-${second}]`;
  } else if (isPlainObject(values)) {
    formattedValues = Object.entries(values).reduce((acc, [key, value]) => {
      acc[key] = formatValues(value);
      return acc;
    }, {});
  } else {
    formattedValues = floor(values);
  }

  return formattedValues;
};

const lvl = (serialize, unit) => (x) =>
  `${serialize([x, x * 99])} (+${x}${unit} Based on Character Level)`;

// TODO: confirm logic
const getAttackSpeedDescription = (value) => {
  let description;
  if (value >= 20) {
    description = 'Very Slow';
  } else if (value >= 10) {
    description = 'Slow';
  } else if (value >= 0) {
    description = 'Normal';
  } else if (value >= -10) {
    description = 'Fast';
  } else {
    description = 'Very Fast';
  }

  return description;
};

const serializers = {
  [BasePropertyType.ArmorDefense]: (x) => `Defense: ${x}`,
  [BasePropertyType.AttackSpeed]: (x, item) =>
    `${item.class} Class - ${getAttackSpeedDescription(x)} Attack Speed`,
  [BasePropertyType.BlockChance]: (x) => `Chance to Block: ${x}%`,
  [BasePropertyType.Damage1H]: ({min, max}) =>
    `One-hand Damage: ${min} to ${max}`,
  [BasePropertyType.Damage2H]: ({min, max}) =>
    `Two-hand Damage: ${min} to ${max}`,
  [BasePropertyType.DamageThrow]: ({min, max}) =>
    `Throw Damage: ${min} to ${max}`,
  [BasePropertyType.Durability]: (x) => `Durability: ${x} of ${x}`,
  [BasePropertyType.RequiredDexterity]: (x) => `Required Dexterity: ${x}`,
  [BasePropertyType.RequiredStrength]: (x) => `Required Strength: ${x}`,
  [MagicPropertyType.AddSockets]: (x) => `Socketed (${x})`,
  [MagicPropertyType.AllSkillLevels]: (x) => `+${x} to All Skills`,
  [MagicPropertyType.AllResistances]: (x) => `All Resistances +${x}`,
  [MagicPropertyType.AttackRating]: (x) => `+${x} to Attack Rating`,
  [MagicPropertyType.AttackRatingAgainstDemons]: (x) =>
    `+${x} to Attack Rating Against Demons`,
  [MagicPropertyType.AttackRatingAgainstUndead]: (x) =>
    `+${x} to Attack Rating Against Undead`,
  [MagicPropertyType.AttackerTakesDamage]: (x) =>
    `Attacker Takes Damage of ${x}`,
  [MagicPropertyType.BonusToAttackRating]: (x) =>
    `+${x}% Bonus to Attack Rating`,
  [MagicPropertyType.CannotBeFrozen]: () => 'Cannot be Frozen',
  [MagicPropertyType.ColdDamage]: ({min, max}) =>
    `Adds ${min}-${max} Cold Damage`,
  [MagicPropertyType.ColdResist]: (x) => `Cold Resist +${x}%`,
  [MagicPropertyType.CrushingBlow]: (x) => `${x}% Chance of Crushing Blow`,
  [MagicPropertyType.DamageReduced]: (x) => `Damage Reduced by ${x}`,
  [MagicPropertyType.DamageReducedPercentage]: (x) => `Damage Reduced by ${x}%`,
  [MagicPropertyType.DamageTakenGoesToMana]: (x) =>
    `${x}% Damage Taken Goes to Mana`,
  [MagicPropertyType.DamageToDemons]: (x) => `+${x}% Damage to Demons`,
  [MagicPropertyType.DamageToUndead]: (x) => `+${x}% Damage to Undead`,
  [MagicPropertyType.DeadlyStrike]: (x) => `${x}% Deadly Strike`,
  [MagicPropertyType.Defense]: (x) => `+${x} Defense`,
  [MagicPropertyType.DefenseVsMissle]: (x) => `+${x} Defense Vs. Missle`,
  [MagicPropertyType.Dexterity]: (x) => `+${x} to Dexterity`,
  [MagicPropertyType.Energy]: (x) => `+${x} to Energy`,
  [MagicPropertyType.EnhancedDamage]: (x) => `${x}% Enhanced Damage`,
  [MagicPropertyType.EnhancedDefense]: (x) => `${x}% Enhanced Defense`,
  [MagicPropertyType.ExtraGold]: (x) => `${x}% Extra Gold From Monsters`,
  [MagicPropertyType.FasterBlockRate]: (x) => `${x}% Faster Block Rate`,
  [MagicPropertyType.FasterHitRecovery]: (x) => `${x}% Faster Hit Recovery`,
  [MagicPropertyType.FireDamage]: ({min, max}) =>
    `Adds ${min}-${max} Fire Damage`,
  [MagicPropertyType.FireResist]: (x) => `Fire Resist +${x}%`,
  [MagicPropertyType.FreezesTarget]: (x) => `Freezes Target +${x}`,
  [MagicPropertyType.HitCausesMonsterToFlee]: (x) =>
    `Hit Causes Monster to Flee ${x}%`,
  [MagicPropertyType.HitBlindsTarget]: () => 'Hit Blinds Target',
  [MagicPropertyType.Indestructible]: () => 'Indestructible',
  [MagicPropertyType.IgnoreTargetDefense]: () => "Ignore Target's Defense",
  [MagicPropertyType.IncreasedAttackSpeed]: (x) =>
    `${x}% Increased Attack Speed`,
  [MagicPropertyType.IncreasedChanceOfBlocking]: (x) =>
    `${x}% Increased Chance of Blocking`,
  [MagicPropertyType.IncreaseMaximumLife]: (x) => `Increase Maximum Life ${x}%`,
  [MagicPropertyType.IncreaseMaximumMana]: (x) => `Increase Maximum Mana ${x}%`,
  [MagicPropertyType.Knockback]: () => 'Knockback',
  [MagicPropertyType.Life]: (x) => `+${x} to Life`,
  [MagicPropertyType.LifeStolenPerHit]: (x) => `${x}% Life Stolen Per Hit`,
  [MagicPropertyType.LightningDamage]: ({min, max}) =>
    `Adds ${min}-${max} Lightning Damage`,
  [MagicPropertyType.LightningResist]: (x) => `Lightning Resist +${x}%`,
  [MagicPropertyType.LightRadius]: (x) => `+${x} to Light Radius`,
  [MagicPropertyType.MagicDamageReduced]: (x) => `Magic Damage Reduced by ${x}`,
  [MagicPropertyType.MagicFind]: (x) =>
    `${x}% Better Chance of Getting Magic Items`,
  [MagicPropertyType.Mana]: (x) => `+${x} to Mana`,
  [MagicPropertyType.ManaAfterKill]: (x) => `+${x} to Mana After Each kill`,
  [MagicPropertyType.ManaStolenPerHit]: (x) => `${x}% Mana Stolen Per Hit`,
  [MagicPropertyType.MaximumColdResist]: (x) => `+${x}% to Maximum Cold Resist`,
  [MagicPropertyType.MaximumDamage]: (x) => `+${x} to Maximum Damage`,
  [MagicPropertyType.MaximumFireResist]: (x) => `+${x}% to Maximum Fire Resist`,
  [MagicPropertyType.MaximumLightningResist]: (x) =>
    `+${x}% to Maximum Lightning Resist`,
  [MagicPropertyType.MaximumPoisonResist]: (x) =>
    `+${x}% to Maximum Poison Resist`,
  [MagicPropertyType.MinimumDamage]: (x) => `+${x} to Minimum Damage`,
  [MagicPropertyType.OpenWounds]: (x) => `${x}% Chance of Open Wounds`,
  [MagicPropertyType.PoisonDamage]: ({min, max}) =>
    `+${min} Poison Damage Over ${max} Seconds`,
  [MagicPropertyType.PoisonResist]: (x) => `Poison Resist +${x}%`,
  [MagicPropertyType.PreventMonsterHeal]: () => 'Prevent Monster Heal',
  [MagicPropertyType.RegenerateMana]: (x) => `Regenerate Mana ${x}%`,
  [MagicPropertyType.ReplenishLife]: (x) => `Replenish Life +${x}`,
  [MagicPropertyType.Requirements]: (x) => `Requirements -${x}%`,
  [MagicPropertyType.SlowerStaminaDrain]: (x) => `${x}% Slower Stamina Drain`,
  [MagicPropertyType.Strength]: (x) => `+${x} to Strength`,
  [MagicPropertyType.TargetDefense]: (x) => `-${x}% Target Defense`,
  [MagicPropertyType.Vitality]: (x) => `+${x} to Vitality`,
};

// Wrap with value formatter
Object.entries(serializers).forEach(([property, serializer]) => {
  serializers[property] = format(serializer);
});

// Derive serializers for *ByLevel properties
serializers[MagicPropertyType.ExtraGoldByLevel] = lvl(
  serializers[MagicPropertyType.ExtraGold],
  '%',
);
serializers[MagicPropertyType.MagicFindByLevel] = lvl(
  serializers[MagicPropertyType.MagicFind],
  '%',
);

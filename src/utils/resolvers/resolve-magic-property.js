import {k} from 'uinix-fp';

import {MagicPropertyType} from '../../enums/index.js';
import {floor} from '../fp.js';

export const resolveMagicProperty =
  (_item) =>
  ([property, values]) => {
    const note = Array.isArray(values[0]) ? ' (varies)' : '';
    const serialize = serializers[property] || k('');
    return serialize(values) + note;
  };

const f = (cb) => (values) =>
  Array.isArray(values[0])
    ? cb(values.map((range) => range.map(floor).join('-')))
    : cb(values.map(floor));

const lvl =
  (serialize, unit) =>
  ([x]) =>
    `${serialize([[x, x * 99]])} (+${x}${unit} Based on Character Level)`;

const serializers = {
  [MagicPropertyType.AddSockets]: f(([x]) => `Socketed (${x})`),
  [MagicPropertyType.AllSkillLevels]: ([x]) => `+${x} to All Skills`,
  [MagicPropertyType.AllResistances]: ([x]) => `All Resistances +${x}`,
  [MagicPropertyType.AttackRating]: ([x]) => `+${x} to Attack Rating`,
  [MagicPropertyType.AttackRatingAgainstDemons]: ([x]) =>
    `+${x} to Attack Rating Against Demons`,
  [MagicPropertyType.AttackRatingAgainstUndead]: ([x]) =>
    `+${x} to Attack Rating Against Undead`,
  [MagicPropertyType.AttackerTakesDamage]: ([x]) =>
    `Attacker Takes Damage of ${x}`,
  [MagicPropertyType.BonusToAttackRating]: ([x]) =>
    `+${x}% Bonus to Attack Rating`,
  [MagicPropertyType.CannotBeFrozen]: () => 'Cannot be Frozen',
  [MagicPropertyType.ColdDamage]: ([x, y]) => `Adds ${x}-${y} Cold Damage`,
  [MagicPropertyType.ColdResist]: ([x]) => `Cold Resist +${x}%`,
  [MagicPropertyType.CrushingBlow]: ([x]) => `${x}% Chance of Crushing Blow`,
  [MagicPropertyType.DamageReduced]: ([x]) => `Damage Reduced by ${x}`,
  [MagicPropertyType.DamageReducedPercentage]: ([x]) =>
    `Damage Reduced by ${x}%`,
  [MagicPropertyType.DamageTakenGoesToMana]: ([x]) =>
    `${x}% Damage Taken Goes to Mana`,
  [MagicPropertyType.DamageToDemons]: ([x]) => `+${x}% Damage to Demons`,
  [MagicPropertyType.DamageToUndead]: ([x]) => `+${x}% Damage to Undead`,
  [MagicPropertyType.DeadlyStrike]: ([x]) => `${x}% Deadly Strike`,
  [MagicPropertyType.Defense]: ([x]) => `+${x} Defense`,
  [MagicPropertyType.DefenseVsMissle]: ([x]) => `+${x} Defense Vs. Missle`,
  [MagicPropertyType.Dexterity]: f(([x]) => `+${x} to Dexterity`),
  [MagicPropertyType.Energy]: ([x]) => `+${x} to Energy`,
  [MagicPropertyType.EnhancedDamage]: f(([x]) => `${x}% Enhanced Damage`),
  [MagicPropertyType.EnhancedDefense]: ([x]) => `${x}% Enhanced Defense`,
  [MagicPropertyType.ExtraGold]: f(([x]) => `${x}% Extra Gold From Monsters`),
  [MagicPropertyType.FasterBlockRate]: ([x]) => `${x}% Faster Block Rate`,
  [MagicPropertyType.FasterHitRecovery]: ([x]) => `${x}% Faster Hit Recovery`,
  [MagicPropertyType.FireDamage]: ([x, y]) => `Adds ${x}-${y} Fire Damage`,
  [MagicPropertyType.FireResist]: ([x]) => `Fire Resist +${x}%`,
  [MagicPropertyType.FreezesTarget]: ([x]) => `Freezes Target +${x}`,
  [MagicPropertyType.HitCausesMonsterToFlee]: ([x]) =>
    `Hit Causes Monster to Flee ${x}%`,
  [MagicPropertyType.HitBlindsTarget]: () => 'Hit Blinds Target',
  [MagicPropertyType.Indestructible]: () => 'Indestructible',
  [MagicPropertyType.IgnoreTargetDefense]: () => "Ignore Target's Defense",
  [MagicPropertyType.IncreasedAttackSpeed]: ([x]) =>
    `${x}% Increased Attack Speed`,
  [MagicPropertyType.IncreasedChanceOfBlocking]: ([x]) =>
    `${x}% Increased Chance of Blocking`,
  [MagicPropertyType.IncreaseMaximumLife]: ([x]) =>
    `Increase Maximum Life ${x}%`,
  [MagicPropertyType.IncreaseMaximumMana]: ([x]) =>
    `Increase Maximum Mana ${x}%`,
  [MagicPropertyType.Knockback]: () => 'Knockback',
  [MagicPropertyType.Life]: ([x]) => `+${x} to Life`,
  [MagicPropertyType.LifeStolenPerHit]: ([x]) => `${x}% Life Stolen Per Hit`,
  [MagicPropertyType.LightningDamage]: ([x, y]) =>
    `Adds ${x}-${y} Lightning Damage`,
  [MagicPropertyType.LightningResist]: ([x]) => `Lightning Resist +${x}%`,
  [MagicPropertyType.LightRadius]: ([x]) => `+${x} to Light Radius`,
  [MagicPropertyType.MagicDamageReduced]: ([x]) =>
    `Magic Damage Reduced by ${x}`,
  [MagicPropertyType.MagicFind]: f(
    ([x]) => `${x}% Better Chance of Getting Magic Items`,
  ),
  [MagicPropertyType.Mana]: ([x]) => `+${x} to Mana`,
  [MagicPropertyType.ManaAfterKill]: ([x]) => `+${x} to Mana After Each kill`,
  [MagicPropertyType.ManaStolenPerHit]: ([x]) => `${x}% Mana Stolen Per Hit`,
  [MagicPropertyType.MaximumColdResist]: ([x]) =>
    `+${x}% to Maximum Cold Resist`,
  [MagicPropertyType.MaximumDamage]: ([x]) => `+${x} to Maximum Damage`,
  [MagicPropertyType.MaximumFireResist]: ([x]) =>
    `+${x}% to Maximum Fire Resist`,
  [MagicPropertyType.MaximumLightningResist]: ([x]) =>
    `+${x}% to Maximum Lightning Resist`,
  [MagicPropertyType.MaximumPoisonResist]: ([x]) =>
    `+${x}% to Maximum Poison Resist`,
  [MagicPropertyType.MinimumDamage]: ([x]) => `+${x} to Minimum Damage`,
  [MagicPropertyType.OpenWounds]: ([x]) => `${x}% Chance of Open Wounds`,
  [MagicPropertyType.PoisonDamage]: ([x, y]) =>
    `+${x} Poison Damage Over ${y} Seconds`,
  [MagicPropertyType.PoisonResist]: ([x]) => `Poison Resist +${x}%`,
  [MagicPropertyType.PreventMonsterHeal]: () => 'Prevent Monster Heal',
  [MagicPropertyType.RegenerateMana]: ([x]) => `Regenerate Mana ${x}%`,
  [MagicPropertyType.ReplenishLife]: ([x]) => `Replenish Life +${x}`,
  [MagicPropertyType.Requirements]: ([x]) => `Requirements -${x}%`,
  [MagicPropertyType.SlowerStaminaDrain]: ([x]) => `${x}% Slower Stamina Drain`,
  [MagicPropertyType.Strength]: ([x]) => `+${x} to Strength`,
  [MagicPropertyType.TargetDefense]: ([x]) => `-${x}% Target Defense`,
  [MagicPropertyType.Vitality]: ([x]) => `+${x} to Vitality`,
};

serializers[MagicPropertyType.ExtraGoldByLevel] = lvl(
  serializers[MagicPropertyType.ExtraGold],
  '%',
);
serializers[MagicPropertyType.MagicFindByLevel] = lvl(
  serializers[MagicPropertyType.MagicFind],
  '%',
);

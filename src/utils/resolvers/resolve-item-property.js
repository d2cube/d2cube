import {k} from 'uinix-fp';

import {humanize} from '../fp.js';
import {BasePropertyType, MagicPropertyType} from '../../enums/index.js';
import {formatValues} from '../format-values.js';
import {resolveSkillSetName} from './resolve-skill-set-name.js';

export const resolveItemProperty =
  (item) =>
  ({property, values}) => {
    const resolver = resolvers[property] || k(null);
    // @ts-ignore fix
    return resolver(values, item);
  };

const format = (resolver) => (values, item) =>
  resolver(formatValues(values), item);

const lvl =
  (resolver, unit = '') =>
  (x) =>
    `${resolver([x, x * 99])} (+${x}${unit} Based on Character Level)`;

// TODO: confirm logic with https://forums.d2jsp.org/topic.php?t=5458178
const getAttackSpeedDescription = (x) => {
  let description;
  if (x >= 20) {
    description = 'Very Slow';
  } else if (x >= 10) {
    description = 'Slow';
  } else if (x >= 0) {
    description = 'Normal';
  } else if (x >= -10) {
    description = 'Fast';
  } else {
    description = 'Very Fast';
  }

  return description;
};

const resolvers = {
  [BasePropertyType.BaseDefense]: (x) => ['Defense: ', x],
  [BasePropertyType.AttackSpeed]: (x, item) => [
    `${item.class} Class - `,
    `${getAttackSpeedDescription(x)} Attack Speed`,
  ],
  [BasePropertyType.BlockChance]: (x) => [
    `Chance to Block: `,
    `${Math.min(x, 75)}%`,
  ],
  [BasePropertyType.Damage1H]: ({x, y}) => [
    'One-hand Damage: ',
    `${x} to ${y}`,
  ],
  [BasePropertyType.Damage2H]: ({x, y}) => [
    'Two-hand Damage: ',
    `${x} to ${y}`,
  ],
  [BasePropertyType.DamageThrow]: ({x, y}) => [
    'Throw Damage: ',
    `${x} to ${y}`,
  ],
  [BasePropertyType.Durability]: (x) =>
    x === Number.POSITIVE_INFINITY ? null : ['Durability: ', `${x} of ${x}`],
  [BasePropertyType.RequiredDexterity]: (x) => ['Required Dexterity: ', x],
  [BasePropertyType.RequiredLevel]: (x) => ['Required Level: ', x],
  [BasePropertyType.RequiredStrength]: (x) => ['Required Strength: ', x],
  [MagicPropertyType.Aura]: (x) =>
    Object.entries(x).map(
      ([skill, {x, y}]) =>
        `Level ${x} ${humanize(skill)} Aura When Equipped${
          y ? ` (${y} only)` : ''
        }`,
    ),
  [MagicPropertyType.Socketed]: (x) => `Socketed (${x})`,
  [MagicPropertyType.AddDamage]: ({x, y}) => `Adds ${x}-${y} Damage`,
  [MagicPropertyType.AllAttributes]: (x) => `+${x} to All Attributes`,
  [MagicPropertyType.AllSkillLevels]: (x) => `+${x} to All Skills`,
  [MagicPropertyType.AllResistances]: (x) => `All Resistances +${x}`,
  [MagicPropertyType.AttackRating]: (x) => `+${x} to Attack Rating`,
  [MagicPropertyType.AttackRatingAgainstDemons]: (x) =>
    `+${x} to Attack Rating Against Demons`,
  [MagicPropertyType.AttackRatingAgainstUndead]: (x) =>
    `+${x} to Attack Rating Against Undead`,
  [MagicPropertyType.AttackerTakesDamage]: (x) =>
    `Attacker Takes Damage of ${x}`,
  [MagicPropertyType.AttackerTakesLightningDamage]: (x) =>
    `Attacker Takes Lightning Damage of ${x}`,
  [MagicPropertyType.BonusToAttackRating]: (x) =>
    `+${x}% Bonus to Attack Rating`,
  [MagicPropertyType.CannotBeFrozen]: () => 'Cannot be Frozen',
  [MagicPropertyType.ChanceToCastSpellOnAttack]: (x) =>
    Object.entries(x).map(
      ([skill, {x, y}]) =>
        `${y}% Chance to Cast Level ${x} ${humanize(skill)} on Attack`,
    ),
  [MagicPropertyType.ChanceToCastSpellOnDeath]: (x) =>
    Object.entries(x).map(
      ([skill, {x}]) =>
        `100% Chance to cast level ${x} ${humanize(skill)} When You Die`,
    ),
  [MagicPropertyType.ChanceToCastSpellOnKill]: (x) =>
    Object.entries(x).map(
      ([skill, {x, y}]) =>
        `${y}% Chance to Cast Level ${x} ${humanize(
          skill,
        )} When You Kill an Enemy`,
    ),
  [MagicPropertyType.ChanceToCastSpellOnLevel]: (x) =>
    Object.entries(x).map(
      ([skill, {x}]) =>
        `100% Chance to Cast Level ${x} ${humanize(skill)} When You Level Up`,
    ),
  [MagicPropertyType.ChanceToCastSpellOnStriking]: (x) =>
    Object.entries(x).map(
      ([skill, {x, y}]) =>
        `${y}% Chance to Cast Level ${x} ${humanize(skill)} on Striking`,
    ),
  [MagicPropertyType.ChanceToCastSpellWhenStruck]: (x) =>
    Object.entries(x).map(
      ([skill, {x, y}]) =>
        `${y}% Chance to Cast Level ${x} ${humanize(skill)} When Struck`,
    ),
  [MagicPropertyType.ColdAbsorb]: (x) => `Cold Absorb ${x}%`,
  [MagicPropertyType.ColdDamage]: ({x, y}) =>
    `Adds ${x === y ? x : `${x}-${y}`} Cold Damage`,
  [MagicPropertyType.ColdResist]: (x) => `Cold Resist +${x}%`,
  [MagicPropertyType.ColdSkillDamage]: (x) => `+${x}% to Cold Skill Damage`,
  [MagicPropertyType.CrushingBlow]: (x) => `${x}% Chance of Crushing Blow`,
  [MagicPropertyType.Damage]: (x) => `Damage ${x}`,
  [MagicPropertyType.DamageReduced]: (x) => `Damage Reduced by ${x}`,
  [MagicPropertyType.DamageReducedPercentage]: (x) => `Damage Reduced by ${x}%`,
  [MagicPropertyType.DamageTakenGoesToMana]: (x) =>
    `${x}% Damage Taken Goes to Mana`,
  [MagicPropertyType.DamageToDemons]: (x) => `+${x}% Damage to Demons`,
  [MagicPropertyType.DamageToUndead]: (x) => `+${x}% Damage to Undead`,
  [MagicPropertyType.DeadlyStrike]: (x) => `${x}% Deadly Strike`,
  [MagicPropertyType.Defense]: (x) => `+${x} Defense`,
  [MagicPropertyType.DefenseVsMelee]: (x) => `+${x} Defense Vs. Melee`,
  [MagicPropertyType.DefenseVsMissle]: (x) => `+${x} Defense Vs. Missle`,
  [MagicPropertyType.Dexterity]: (x) => `+${x} to Dexterity`,
  [MagicPropertyType.DrainLife]: (x) => `Drain Life ${x}`,
  [MagicPropertyType.Energy]: (x) => `+${x} to Energy`,
  [MagicPropertyType.EnhancedDamage]: (x) => `+${x}% Enhanced Damage`,
  [MagicPropertyType.EnhancedDefense]: (x) => `+${x}% Enhanced Defense`,
  [MagicPropertyType.Experience]: (x) => `${x}% to Experience Gained`,
  [MagicPropertyType.ExtraGold]: (x) => `${x}% Extra Gold From Monsters`,
  [MagicPropertyType.FasterBlockRate]: (x) => `${x}% Faster Block Rate`,
  [MagicPropertyType.FasterCastRate]: (x) => `${x}% Faster Cast Rate`,
  [MagicPropertyType.FasterRunWalk]: (x) => `${x}% Faster Run/Walk`,
  [MagicPropertyType.FasterHitRecovery]: (x) => `${x}% Faster Hit Recovery`,
  [MagicPropertyType.FireAbsorb]: (x) => `Fire Absorb ${x}%`,
  [MagicPropertyType.FireDamage]: ({x, y}) =>
    `Adds ${x === y ? x : `${x}-${y}`} Fire Damage`,
  [MagicPropertyType.FireResist]: (x) => `Fire Resist +${x}%`,
  [MagicPropertyType.FireMastery]: (x) => `+${x} to Fire Mastery`,
  [MagicPropertyType.FireSkillDamage]: (x) => `+${x}% to Fire Skill Damage`,
  [MagicPropertyType.FiresExplosiveArrowsOrBolts]: (x) =>
    `Fires Explosive Arrows or Bolts (Level ${x})`,
  [MagicPropertyType.FiresMagicArrows]: (x) =>
    `Fires Magic Arrows (Level ${x})`,
  [MagicPropertyType.FreezesTarget]: (x) =>
    `Freezes Target${x ? ` +${x}` : ''}`,
  [MagicPropertyType.HalfFreezeDuration]: () => 'Half Freeze Duration',
  [MagicPropertyType.HealStamina]: (x) => `Heal Stamina Plus ${x}%`,
  [MagicPropertyType.HitCausesMonsterToFlee]: (x) =>
    `Hit Causes Monster to Flee ${x}%`,
  [MagicPropertyType.HitBlindsTarget]: (x) =>
    `Hit Blinds Target${x ? ` +${x}` : ''}`,
  [MagicPropertyType.Indestructible]: () => 'Indestructible',
  [MagicPropertyType.IgnoreTargetDefense]: () => "Ignore Target's Defense",
  [MagicPropertyType.IncreasedAttackSpeed]: (x) =>
    `${x}% Increased Attack Speed`,
  [MagicPropertyType.IncreasedChanceOfBlocking]: (x) =>
    `${x}% Increased Chance of Blocking`,
  [MagicPropertyType.IncreaseMaximumDurability]: (x) =>
    `Increase Maximum Durability ${x}%`,
  [MagicPropertyType.IncreaseMaximumLife]: (x) => `Increase Maximum Life ${x}%`,
  [MagicPropertyType.IncreaseMaximumMana]: (x) => `Increase Maximum Mana ${x}%`,
  [MagicPropertyType.Knockback]: () => 'Knockback',
  [MagicPropertyType.Life]: (x) => `+${x} to Life`,
  [MagicPropertyType.LifeAfterKill]: (x) => `+${x} to Life After Each Kill`,
  [MagicPropertyType.LifeAfterDemonKill]: (x) =>
    `+${x} to Life After Each Demon Kill`,
  [MagicPropertyType.LifeStolenPerHit]: (x) => `${x}% Life Stolen Per Hit`,
  [MagicPropertyType.LightningAbsorb]: (x) => `Lightning Absorb ${x}%`,
  [MagicPropertyType.LightningDamage]: ({x, y}) =>
    `Adds ${x === y ? x : `${x}-${y}`} Lightning Damage`,
  [MagicPropertyType.LightningResist]: (x) => `Lightning Resist +${x}%`,
  [MagicPropertyType.LightningSkillDamage]: (x) =>
    `+${x}% to Lightning Skill Damage`,
  [MagicPropertyType.LightRadius]: (x) =>
    `${x > 0 ? `+${x}` : x} to Light Radius`,
  [MagicPropertyType.LowerColdResist]: (x) => `${x}% to Enemy Cold Resistance`,
  [MagicPropertyType.LowerFireResist]: (x) => `${x}% to Enemy Fire Resistance`,
  [MagicPropertyType.LowerLightningResist]: (x) =>
    `${x}% to Enemy Lightning Resistance`,
  [MagicPropertyType.LowerPoisonResist]: (x) =>
    `${x}% to Enemy Poison Resistance`,
  [MagicPropertyType.MagicAbsorb]: (x) => `+${x} Magic Absorb`,
  [MagicPropertyType.MagicDamage]: ({x, y}) => `Adds ${x}-${y} Magic Damage`,
  [MagicPropertyType.MagicDamageReduced]: (x) => `Magic Damage Reduced by ${x}`,
  [MagicPropertyType.MagicFind]: (x) =>
    `${x}% Better Chance of Getting Magic Items`,
  [MagicPropertyType.Mana]: (x) => `+${x} to Mana`,
  [MagicPropertyType.ManaAfterKill]: (x) => `+${x} to Mana After Each kill`,
  [MagicPropertyType.ManaStolenPerHit]: (x) => `${x}% Mana Stolen Per Hit`,
  [MagicPropertyType.MaximumColdResist]: (x) => `+${x}% to Maximum Cold Resist`,
  [MagicPropertyType.MaximumDamage]: (x) => `+${x} to Maximum Damage`,
  [MagicPropertyType.MaximumFireDamage]: (x) => `+${x} to Maximum Fire Damage`,
  [MagicPropertyType.MaximumFireResist]: (x) => `+${x}% to Maximum Fire Resist`,
  [MagicPropertyType.MaximumLightningResist]: (x) =>
    `+${x}% to Maximum Lightning Resist`,
  [MagicPropertyType.MaximumPoisonResist]: (x) =>
    `+${x}% to Maximum Poison Resist`,
  [MagicPropertyType.MaximumStamina]: (x) => `+${x} Maximum Stamina`,
  [MagicPropertyType.MinimumDamage]: (x) => `+${x} to Minimum Damage`,
  [MagicPropertyType.MonsterDefensePerHit]: (x) =>
    `${x} to Monster Defense Per Hit`,
  [MagicPropertyType.OpenWounds]: (x) => `${x}% Chance of Open Wounds`,
  [MagicPropertyType.PiercingAttack]: () => 'Piercing Attack',
  [MagicPropertyType.PoisonDamage]: ({x, y, z}) =>
    `+${x === y ? x : `${x}-${y}`} Poison Damage Over ${z} Seconds`,
  [MagicPropertyType.PoisonLengthReduced]: (x) =>
    `Poison Length Reduced by ${x}%`,
  [MagicPropertyType.PoisonResist]: (x) => `Poison Resist +${x}%`,
  [MagicPropertyType.PoisonSkillDamage]: (x) => `+${x}% to Poison Skill Damage`,
  [MagicPropertyType.PreventMonsterHeal]: () => 'Prevent Monster Heal',
  [MagicPropertyType.ReanimateAs]: ({x}) => `${x}% Reanimate As: Returned`,
  [MagicPropertyType.ReduceVendorPrices]: (x) =>
    `Reduce All Vendor Prices ${x}%`,
  [MagicPropertyType.RegenerateMana]: (x) => `Regenerate Mana ${x}%`,
  [MagicPropertyType.RepairsDurability]: (x) =>
    `Repairs 1 Durability In ${x} Seconds`,
  [MagicPropertyType.ReplenishLife]: (x) => `Replenish Life +${x}`,
  [MagicPropertyType.Requirements]: (x) => `Requirements ${x}%`,
  [MagicPropertyType.SlainMonstersRestInPeace]: () =>
    'Slain Monsters Rest in Peace',
  [MagicPropertyType.SlowerStaminaDrain]: (x) => `${x} Slower Stamina Drain`,
  [MagicPropertyType.Spell]: (x) =>
    Object.entries(x).map(
      ([skill, {x, y}]) =>
        `+${x} to ${humanize(skill)}${y ? ` (${y} only)` : ''}`,
    ),
  [MagicPropertyType.SkillSetLevels]: (x) =>
    Object.entries(x).map(
      ([skillSet, level]) => `+${level} to ${resolveSkillSetName(skillSet)}`,
    ),
  [MagicPropertyType.SlowsTarget]: (x) => `Slows Target by ${x}%`,
  [MagicPropertyType.SlowerStaminaDrain]: (x) => `${x}% Slower Stamina Drain`,
  [MagicPropertyType.SpellCharges]: (x) =>
    Object.entries(x).map(
      ([skill, {x, y}]) => `Level ${x} ${humanize(skill)} (${y}/${y} Charges)`,
    ),
  [MagicPropertyType.Strength]: (x) => `+${x} to Strength`,
  [MagicPropertyType.TargetDefense]: (x) => `${x}% Target Defense`,
  [MagicPropertyType.Vitality]: (x) => `+${x} to Vitality`,
};

// Wrap with value formatter
Object.entries(resolvers).forEach(([property, resolverr]) => {
  resolvers[property] = format(resolverr);
});

// Derive resolvers for *ByLevel properties
resolvers[MagicPropertyType.AttackRatingByLevel] = lvl(
  resolvers[MagicPropertyType.AttackRating],
);
resolvers[MagicPropertyType.ColdAbsorbByLevel] = lvl(
  resolvers[MagicPropertyType.ColdAbsorb],
);
resolvers[MagicPropertyType.DamageToDemonsByLevel] = lvl(
  resolvers[MagicPropertyType.DamageToDemons],
  '%',
);
resolvers[MagicPropertyType.DeadlyStrikeByLevel] = lvl(
  resolvers[MagicPropertyType.DeadlyStrike],
  '%',
);
resolvers[MagicPropertyType.DefenseByLevel] = lvl(
  resolvers[MagicPropertyType.Defense],
);
resolvers[MagicPropertyType.ExtraGoldByLevel] = lvl(
  resolvers[MagicPropertyType.ExtraGold],
  '%',
);
resolvers[MagicPropertyType.HealStaminaByLevel] = lvl(
  resolvers[MagicPropertyType.HealStamina],
  '%',
);
resolvers[MagicPropertyType.LifeByLevel] = lvl(
  resolvers[MagicPropertyType.Life],
);
resolvers[MagicPropertyType.MagicFindByLevel] = lvl(
  resolvers[MagicPropertyType.MagicFind],
  '%',
);
resolvers[MagicPropertyType.ManaByLevel] = lvl(
  resolvers[MagicPropertyType.Mana],
);
resolvers[MagicPropertyType.MaximumDamageByLevel] = lvl(
  resolvers[MagicPropertyType.MaximumDamage],
);
resolvers[MagicPropertyType.StrengthByLevel] = lvl(
  resolvers[MagicPropertyType.Strength],
);
resolvers[MagicPropertyType.VitalityByLevel] = lvl(
  resolvers[MagicPropertyType.Vitality],
);

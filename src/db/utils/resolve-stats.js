import {PropertyType} from '../../enums/index.js';

export const resolveStats = (stats) => {
  const {property, values} = stats;
  const [x, y] = values;

  switch (property) {
    case PropertyType.AllSkillLevels:
      return `+${x} to All Skills`;
    case PropertyType.AllResistances:
      return `All Resistances +${x}`;
    case PropertyType.AttackRating:
      return `+${x} to Attack Rating`;
    case PropertyType.AttackRatingAgainstDemons:
      return `+${x} to Attack Rating Against Demons`;
    case PropertyType.AttackRatingAgainstUndead:
      return `+${x} to Attack Rating Against Undead`;
    case PropertyType.AttackerTakesDamage:
      return `Attacker Takes Damage of ${x}`;
    case PropertyType.BonusToAttackRating:
      return `+${x}% Bonus to Attack Rating`;
    case PropertyType.CannotBeFrozen:
      return 'Cannot be Frozen';
    case PropertyType.ColdDamage:
      return `Adds ${x}-${y} Cold Damage`;
    case PropertyType.ColdResist:
      return `Cold Resist +${x}%`;
    case PropertyType.CrushingBlow:
      return `${x}% Chance of Crushing Blow`;
    case PropertyType.DamageReduced:
      return `Damage Reduced by ${x}`;
    case PropertyType.DamageReducedPercentage:
      return `Damage Reduced by ${x}%`;
    case PropertyType.DamageTakenGoesToMana:
      return `${x}% Damage Taken Goes to Mana`;
    case PropertyType.DamageToDemons:
      return `+${x}% Damage to Demons`;
    case PropertyType.DamageToUndead:
      return `+${x}% Damage to Undead`;
    case PropertyType.DeadlyStrike:
      return `${x}% Deadly Strike`;
    case PropertyType.Defense:
      return `+${x} Defense`;
    case PropertyType.DefenseVsMissle:
      return `+${x} Defense Vs. Missle`;
    case PropertyType.Dexterity:
      return `+${x} to Dexterity`;
    case PropertyType.Energy:
      return `+${x} to Energy`;
    case PropertyType.EnhancedDamage:
      return `${x}% Enhanced Damage`;
    case PropertyType.EnhancedDefense:
      return `${x}% Enhanced Defense`;
    case PropertyType.ExtraGold:
      return `${x}% Extra Gold From Monsters`;
    case PropertyType.FasterBlockRate:
      return `${20}% Faster Block Rate`;
    case PropertyType.FasterHitRecovery:
      return `${20}% Faster Hit Recovery`;
    case PropertyType.FireDamage:
      return `Adds ${x}-${y} Fire Damage`;
    case PropertyType.FireResist:
      return `Fire Resist +${x}%`;
    case PropertyType.FreezesTarget:
      return `Freezes Target +${x}`;
    case PropertyType.HitCausesMonsterToFlee:
      return `Hit Causes Monster to Flee ${x}%`;
    case PropertyType.HitBlindsTarget:
      return 'Hit Blinds Target';
    case PropertyType.Indestructible:
      return 'Indestructible';
    case PropertyType.IgnoreTargetDefense:
      return "Ignore Target's Defense";
    case PropertyType.IncreasedAttackSpeed:
      return `${x}% Increased Attack Speed`;
    case PropertyType.IncreasedChanceOfBlocking:
      return `${x}% Increased Chance of Blocking`;
    case PropertyType.IncreaseMaximumLife:
      return `Increase Maximum Life ${x}%`;
    case PropertyType.IncreaseMaximumMana:
      return `Increase Maximum Mana ${x}%`;
    case PropertyType.Knockback:
      return 'Knockback';
    case PropertyType.Life:
      return `+${x} to Life`;
    case PropertyType.LifeStolenPerHit:
      return `${x}% Life Stolen Per Hit`;
    case PropertyType.LightningDamage:
      return `Adds ${x}-${y} Lightning Damage`;
    case PropertyType.LightningResist:
      return `Lightning Resist +${x}%`;
    case PropertyType.LightRadius:
      return `+${x} to Light Radius`;
    case PropertyType.MagicDamageReduced:
      return `Magic Damage Reduced by ${x}`;
    case PropertyType.MagicFind:
      return `${x}% Better Chance of Getting Magic Items`;
    case PropertyType.Mana:
      return `+${x} to Mana`;
    case PropertyType.ManaAfterKill:
      return `+${x} to Mana After Each kill`;
    case PropertyType.ManaStolenPerHit:
      return `${x}% Mana Stolen Per Hit`;
    case PropertyType.MaximumColdResist:
      return `+${x}% to Maximum Cold Resist`;
    case PropertyType.MaximumDamage:
      return `+${x} to Maximum Damage`;
    case PropertyType.MaximumFireResist:
      return `+${x}% to Maximum Fire Resist`;
    case PropertyType.MaximumLightningResist:
      return `+${x}% to Maximum Lightning Resist`;
    case PropertyType.MaximumPoisonResist:
      return `+${x}% to Maximum Poison Resist`;
    case PropertyType.MinimumDamage:
      return `+${x} to Minimum Damage`;
    case PropertyType.OpenWounds:
      return `${x}% Chance of Open Wounds`;
    case PropertyType.PoisonDamage:
      return `+${x} Poison Damage Over ${y} Seconds`;
    case PropertyType.PoisonResist:
      return `Poison Resist +${x}%`;
    case PropertyType.PreventMonsterHeal:
      return 'Prevent Monster Heal';
    case PropertyType.RegenerateMana:
      return `Regenerate Mana ${x}%`;
    case PropertyType.ReplenishLife:
      return `Replenish Life +${x}`;
    case PropertyType.Requirements:
      return `Requirements -${x}%`;
    case PropertyType.SlowerStaminaDrain:
      return `${x}% Slower Stamina Drain`;
    case PropertyType.Strength:
      return `+${x} to Strength`;
    case PropertyType.TargetDefense:
      return `-${x}% Target Defense`;
    case PropertyType.Vitality:
      return `+${x} to Vitality`;
    default:
      return '';
  }
};

import {MagicPropertyType} from '../../enums/index.js';

export const resolveStats = (stats) => {
  const {property, values} = stats;
  const [x, y] = values;

  switch (property) {
    case MagicPropertyType.AllSkillLevels:
      return `+${x} to All Skills`;
    case MagicPropertyType.AllResistances:
      return `All Resistances +${x}`;
    case MagicPropertyType.AttackRating:
      return `+${x} to Attack Rating`;
    case MagicPropertyType.AttackRatingAgainstDemons:
      return `+${x} to Attack Rating Against Demons`;
    case MagicPropertyType.AttackRatingAgainstUndead:
      return `+${x} to Attack Rating Against Undead`;
    case MagicPropertyType.AttackerTakesDamage:
      return `Attacker Takes Damage of ${x}`;
    case MagicPropertyType.BonusToAttackRating:
      return `+${x}% Bonus to Attack Rating`;
    case MagicPropertyType.CannotBeFrozen:
      return 'Cannot be Frozen';
    case MagicPropertyType.ColdDamage:
      return `Adds ${x}-${y} Cold Damage`;
    case MagicPropertyType.ColdResist:
      return `Cold Resist +${x}%`;
    case MagicPropertyType.CrushingBlow:
      return `${x}% Chance of Crushing Blow`;
    case MagicPropertyType.DamageReduced:
      return `Damage Reduced by ${x}`;
    case MagicPropertyType.DamageReducedPercentage:
      return `Damage Reduced by ${x}%`;
    case MagicPropertyType.DamageTakenGoesToMana:
      return `${x}% Damage Taken Goes to Mana`;
    case MagicPropertyType.DamageToDemons:
      return `+${x}% Damage to Demons`;
    case MagicPropertyType.DamageToUndead:
      return `+${x}% Damage to Undead`;
    case MagicPropertyType.DeadlyStrike:
      return `${x}% Deadly Strike`;
    case MagicPropertyType.Defense:
      return `+${x} Defense`;
    case MagicPropertyType.DefenseVsMissle:
      return `+${x} Defense Vs. Missle`;
    case MagicPropertyType.Dexterity:
      return `+${x} to Dexterity`;
    case MagicPropertyType.Energy:
      return `+${x} to Energy`;
    case MagicPropertyType.EnhancedDamage:
      return `${x}% Enhanced Damage`;
    case MagicPropertyType.EnhancedDefense:
      return `${x}% Enhanced Defense`;
    case MagicPropertyType.ExtraGold:
      return `${x}% Extra Gold From Monsters`;
    case MagicPropertyType.FasterBlockRate:
      return `${20}% Faster Block Rate`;
    case MagicPropertyType.FasterHitRecovery:
      return `${20}% Faster Hit Recovery`;
    case MagicPropertyType.FireDamage:
      return `Adds ${x}-${y} Fire Damage`;
    case MagicPropertyType.FireResist:
      return `Fire Resist +${x}%`;
    case MagicPropertyType.FreezesTarget:
      return `Freezes Target +${x}`;
    case MagicPropertyType.HitCausesMonsterToFlee:
      return `Hit Causes Monster to Flee ${x}%`;
    case MagicPropertyType.HitBlindsTarget:
      return 'Hit Blinds Target';
    case MagicPropertyType.Indestructible:
      return 'Indestructible';
    case MagicPropertyType.IgnoreTargetDefense:
      return "Ignore Target's Defense";
    case MagicPropertyType.IncreasedAttackSpeed:
      return `${x}% Increased Attack Speed`;
    case MagicPropertyType.IncreasedChanceOfBlocking:
      return `${x}% Increased Chance of Blocking`;
    case MagicPropertyType.IncreaseMaximumLife:
      return `Increase Maximum Life ${x}%`;
    case MagicPropertyType.IncreaseMaximumMana:
      return `Increase Maximum Mana ${x}%`;
    case MagicPropertyType.Knockback:
      return 'Knockback';
    case MagicPropertyType.Life:
      return `+${x} to Life`;
    case MagicPropertyType.LifeStolenPerHit:
      return `${x}% Life Stolen Per Hit`;
    case MagicPropertyType.LightningDamage:
      return `Adds ${x}-${y} Lightning Damage`;
    case MagicPropertyType.LightningResist:
      return `Lightning Resist +${x}%`;
    case MagicPropertyType.LightRadius:
      return `+${x} to Light Radius`;
    case MagicPropertyType.MagicDamageReduced:
      return `Magic Damage Reduced by ${x}`;
    case MagicPropertyType.MagicFind:
      return `${x}% Better Chance of Getting Magic Items`;
    case MagicPropertyType.Mana:
      return `+${x} to Mana`;
    case MagicPropertyType.ManaAfterKill:
      return `+${x} to Mana After Each kill`;
    case MagicPropertyType.ManaStolenPerHit:
      return `${x}% Mana Stolen Per Hit`;
    case MagicPropertyType.MaximumColdResist:
      return `+${x}% to Maximum Cold Resist`;
    case MagicPropertyType.MaximumDamage:
      return `+${x} to Maximum Damage`;
    case MagicPropertyType.MaximumFireResist:
      return `+${x}% to Maximum Fire Resist`;
    case MagicPropertyType.MaximumLightningResist:
      return `+${x}% to Maximum Lightning Resist`;
    case MagicPropertyType.MaximumPoisonResist:
      return `+${x}% to Maximum Poison Resist`;
    case MagicPropertyType.MinimumDamage:
      return `+${x} to Minimum Damage`;
    case MagicPropertyType.OpenWounds:
      return `${x}% Chance of Open Wounds`;
    case MagicPropertyType.PoisonDamage:
      return `+${x} Poison Damage Over ${y} Seconds`;
    case MagicPropertyType.PoisonResist:
      return `Poison Resist +${x}%`;
    case MagicPropertyType.PreventMonsterHeal:
      return 'Prevent Monster Heal';
    case MagicPropertyType.RegenerateMana:
      return `Regenerate Mana ${x}%`;
    case MagicPropertyType.ReplenishLife:
      return `Replenish Life +${x}`;
    case MagicPropertyType.Requirements:
      return `Requirements -${x}%`;
    case MagicPropertyType.SlowerStaminaDrain:
      return `${x}% Slower Stamina Drain`;
    case MagicPropertyType.Strength:
      return `+${x} to Strength`;
    case MagicPropertyType.TargetDefense:
      return `-${x}% Target Defense`;
    case MagicPropertyType.Vitality:
      return `+${x} to Vitality`;
    default:
      return '';
  }
};

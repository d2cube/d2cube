import {isPlainObject, props} from 'uinix-fp';
import {getItem} from '../api/index.js';
import {MagicPropertyType} from '../enums/magic-property-type.js';
import {WeaponClassType} from '../enums/weapon-class-type.js';

import {add, sortEntriesBy, sum} from './fp.js';
import {resolveItemRunes} from './resolvers/resolve-item-runes.js';
import {resolveItemRuneword} from './resolvers/resolve-item-runeword.js';

// Track all magic properties from magic/set/socket bonuses
export const calcItemStats = (item) => {
  const stats = {};

  // Weapon class modifiers
  switch (item.class) {
    case WeaponClassType.Mace:
    case WeaponClassType.Scepter:
    case WeaponClassType.Staff:
      if (props(`properties.magic.${MagicPropertyType.DamageToUndead}`)) {
        stats[MagicPropertyType.DamageToUndead] = [50];
      }

      break;
    default:
      break;
  }

  // Calc magic properties
  const magicProperties = props('properties.magic')(item) || {};
  Object.entries(magicProperties).forEach(pushEntry(stats));

  // Calc socket properties
  const {sockets, socketCategory} = item;
  if (sockets) {
    const runes = resolveItemRunes(item);
    const runeword = resolveItemRuneword(runes)(item);
    if (runeword) {
      const runewordProperties = props('properties.magic')(runeword);
      Object.entries(runewordProperties).forEach(pushEntry(stats));
      // TODO: centralize where this is initialized
      stats[MagicPropertyType.Socketed] = [runeword.runes.length];
    }

    item.sockets.forEach((socket) => {
      const socketItem = getItem(socket);
      const socketProperties =
        props(`properties.socket.${socketCategory}`)(socketItem) || {};
      Object.entries(socketProperties).forEach(pushEntry(stats));
    });
  }

  // Reduce effective value
  const statsEntries = sortEntriesBy(magicPropertiesOrder)(
    Object.entries(stats),
  );

  return Object.fromEntries(
    statsEntries.map(([property, values]) => {
      // TODO: figure out general logic
      let effective = [];
      if (values.length === 1) {
        effective = values[0];
      } else if (values.every(Number.isFinite)) {
        effective = sum(values);
      } else if (values.every(isPlainObject)) {
        effective = sum(values);
      } else {
        effective = values.reduce((acc2, value) => {
          if (Array.isArray(value)) {
            return value;
          }

          return acc2.map(add(value));
        }, []);
      }

      return [property, effective];
    }),
  );
};

const pushEntry = (x) => (entry) => {
  const [key, value] = entry;
  if (!(key in x)) {
    x[key] = [];
  }

  x[key].push(value);
};

// TODO: confirm order and centralize this in enums/magic-property-types.js
const magicPropertiesOrder = [
  MagicPropertyType.Indestructible,
  MagicPropertyType.ChanceToCastSpellOnLevel,
  MagicPropertyType.ChanceToCastSpellWhenStruck,
  MagicPropertyType.ChanceToCastSpellOnStriking,
  MagicPropertyType.ChanceToCastSpellOnDeath,
  MagicPropertyType.ChanceToCastSpellOnAttack,
  MagicPropertyType.ChanceToCastSpellOnKill,
  MagicPropertyType.Aura,
  MagicPropertyType.AllSkillLevels,
  MagicPropertyType.SkillSetLevels,
  MagicPropertyType.FasterRunWalk,
  MagicPropertyType.IncreasedAttackSpeed,
  MagicPropertyType.FasterCastRate,
  MagicPropertyType.FasterHitRecovery,
  MagicPropertyType.FasterBlockRate,
  MagicPropertyType.IncreasedChanceOfBlocking,
  MagicPropertyType.FiresExplosiveArrowsOrBolts,
  MagicPropertyType.FiresMagicArrows,
  MagicPropertyType.PiercingAttack,
  MagicPropertyType.EnhancedDamage,
  MagicPropertyType.AddDamage,
  MagicPropertyType.Damage,
  MagicPropertyType.MinimumDamage,
  MagicPropertyType.MaximumDamage,
  MagicPropertyType.MaximumDamageByLevel,
  MagicPropertyType.EnhancedMaximumDamageByLevel,
  MagicPropertyType.IgnoreTargetDefense,
  MagicPropertyType.TargetDefense,
  MagicPropertyType.BonusToAttackRating,
  MagicPropertyType.AttackRating,
  MagicPropertyType.AttackRatingByLevel,
  MagicPropertyType.DamageToDemons,
  MagicPropertyType.DamageToDemonsByLevel,
  MagicPropertyType.AttackRatingAgainstDemons,
  MagicPropertyType.AttackRatingAgainstDemonsByLevel,
  MagicPropertyType.DamageToUndead,
  MagicPropertyType.DamageToUndeadByLevel,
  MagicPropertyType.AttackRatingAgainstUndead,
  MagicPropertyType.AttackRatingAgainstUndeadByLevel,
  MagicPropertyType.MagicDamage,
  MagicPropertyType.FireDamage,
  MagicPropertyType.MaximumFireDamage,
  MagicPropertyType.LightningDamage,
  MagicPropertyType.ColdDamage,
  MagicPropertyType.PoisonDamage,
  MagicPropertyType.ManaStolenPerHit,
  MagicPropertyType.LifeStolenPerHit,
  MagicPropertyType.LowerColdResist,
  MagicPropertyType.LowerFireResist,
  MagicPropertyType.LowerLightningResist,
  MagicPropertyType.LowerPoisonResist,
  MagicPropertyType.ColdSkillDamage,
  MagicPropertyType.LightningSkillDamage,
  MagicPropertyType.FireSkillDamage,
  MagicPropertyType.PoisonSkillDamage,
  MagicPropertyType.SlainMonstersRestInPeace,
  MagicPropertyType.CrushingBlow,
  MagicPropertyType.DeadlyStrikeByLevel,
  MagicPropertyType.DeadlyStrike,
  MagicPropertyType.OpenWounds,
  MagicPropertyType.Spell,
  MagicPropertyType.PreventMonsterHeal,
  MagicPropertyType.DrainLife,
  MagicPropertyType.HitCausesMonsterToFlee,
  MagicPropertyType.HitBlindsTarget,
  MagicPropertyType.Knockback,
  MagicPropertyType.FreezesTarget,
  MagicPropertyType.SlowsTarget,
  MagicPropertyType.MonsterDefensePerHit,
  MagicPropertyType.EnhancedDefense,
  MagicPropertyType.DefenseByLevel,
  MagicPropertyType.Defense,
  MagicPropertyType.DefenseVsMelee,
  MagicPropertyType.DefenseVsMissle,
  MagicPropertyType.AllAttributes,
  MagicPropertyType.Strength,
  MagicPropertyType.StrengthByLevel,
  MagicPropertyType.Dexterity,
  MagicPropertyType.DexterityByLevel,
  MagicPropertyType.Vitality,
  MagicPropertyType.VitalityByLevel,
  MagicPropertyType.Energy,
  MagicPropertyType.Life,
  MagicPropertyType.LifeByLevel,
  MagicPropertyType.ReplenishLife,
  MagicPropertyType.IncreaseMaximumLife,
  MagicPropertyType.IncreaseMaximumMana,
  MagicPropertyType.ManaByLevel,
  MagicPropertyType.Mana,
  MagicPropertyType.RegenerateMana,
  MagicPropertyType.MaximumStaminaByLevel,
  MagicPropertyType.MaximumStamina,
  MagicPropertyType.SlowerStaminaDrain,
  MagicPropertyType.HealStamina,
  MagicPropertyType.HealStaminaByLevel,
  MagicPropertyType.MaximumPoisonResist,
  MagicPropertyType.MaximumColdResist,
  MagicPropertyType.MaximumLightningResist,
  MagicPropertyType.MaximumFireResist,
  MagicPropertyType.ColdResist,
  MagicPropertyType.LightningResist,
  MagicPropertyType.LightningResistByLevel,
  MagicPropertyType.FireResist,
  MagicPropertyType.PoisonResist,
  MagicPropertyType.AllResistances,
  MagicPropertyType.ColdAbsorb,
  MagicPropertyType.ColdAbsorbByLevel,
  MagicPropertyType.LightningAbsorb,
  MagicPropertyType.FireAbsorb,
  MagicPropertyType.FireAbsorbByLevel,
  MagicPropertyType.ColdAbsorbPercentage,
  MagicPropertyType.LightningAbsorbPercentage,
  MagicPropertyType.FireAbsorbPercentage,
  MagicPropertyType.MagicAbsorb,
  MagicPropertyType.HalfFreezeDuration,
  MagicPropertyType.IncreaseMaximumDurability,
  MagicPropertyType.DamageReducedPercentage,
  MagicPropertyType.DamageReduced,
  MagicPropertyType.MagicDamageReduced,
  MagicPropertyType.CannotBeFrozen,
  MagicPropertyType.PoisonLengthReduced,
  MagicPropertyType.ReanimateAs,
  MagicPropertyType.ManaAfterKill,
  MagicPropertyType.LifeAfterKill,
  MagicPropertyType.LifeAfterDemonKill,
  MagicPropertyType.AttackerTakesDamage,
  MagicPropertyType.AttackerTakesLightningDamage,
  MagicPropertyType.DamageTakenGoesToMana,
  MagicPropertyType.ExtraGold,
  MagicPropertyType.ExtraGoldByLevel,
  MagicPropertyType.MagicFind,
  MagicPropertyType.MagicFindByLevel,
  MagicPropertyType.LightRadius,
  MagicPropertyType.AddDurability,
  MagicPropertyType.SpellCharges,
  MagicPropertyType.RepairsDurability,
  MagicPropertyType.ReduceVendorPrices,
  MagicPropertyType.Experience,
  MagicPropertyType.Requirements,
  MagicPropertyType.IncreasedStackSize,
  MagicPropertyType.ReplenishesQuantity,
  MagicPropertyType.Ethereal,
  MagicPropertyType.Socketed,
];

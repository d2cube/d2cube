/**
 * @readonly
 * @enum {string}
 */
export const MagicPropertyType = {
  Defense: 'Defense',
  Dexterity: 'Dexterity',
  Energy: 'Energy',
  Life: 'Life',
  Mana: 'Mana',
  Strength: 'Strength',
  Vitality: 'Vitality',
  EnhancedDefense: 'EnhancedDefense',
  EnhancedDamage: 'EnhancedDamage',
  AttackRating: 'AttackRating',
  DrainLife: 'DrainLife',
  IncreasedChanceOfBlocking: 'IncreasedChanceOfBlocking',
  MinimumDamage: 'MinimumDamage',
  MaximumDamage: 'MaximumDamage',
  RegenerateMana: 'RegenerateMana',
  DefenseVsMissle: 'DefenseVsMissle',
  DefenseVsMelee: 'DefenseVsMelee',
  DamageReduced: 'DamageReduced',
  DamageReducedPercentage: 'DamageReducedPercentage',
  MagicDamage: 'MagicDamage',
  MagicDamageReduced: 'MagicDamageReduced',
  MagicDamageReducedPercentage: 'MagicDamageReducedPercentage',
  AllAttributes: 'AllAttributes',
  AllResistances: 'AllResistances',
  FireResist: 'FireResist',
  MaximumFireResist: 'MaximumFireResist',
  LightningResist: 'LightningResist',
  MaximumLightningResist: 'MaximumLightningResist',
  ColdResist: 'ColdResist',
  MaximumColdResist: 'MaximumColdResist',
  PoisonResist: 'PoisonResist',
  MaximumPoisonResist: 'MaximumPoisonResist',
  FireDamage: 'FireDamage',
  MaximumFireDamage: 'MaximumFireDamage',
  LightningDamage: 'LightningDamage',
  ColdDamage: 'ColdDamage',
  PoisonDamage: 'PoisonDamage',
  LifeStolenPerHit: 'LifeStolenPerHit',
  ManaStolenPerHit: 'ManaStolenPerHit',
  MaximumDurability: 'MaximumDurability',
  ReplenishLife: 'ReplenishLife',
  IncreaseMaximumDurability: 'IncreaseMaximumDurability',
  IncreaseMaximumLife: 'IncreaseMaximumLife',
  IncreaseMaximumMana: 'IncreaseMaximumMana',
  AttackerTakesDamage: 'AttackerTakesDamage',
  ExtraGold: 'ExtraGold',
  MagicFind: 'MagicFind',
  Knockback: 'Knockback',
  AllSkillLevels: 'AllSkillLevels',
  SkillSetLevels: 'SkillSetLevels',
  LowerColdResist: 'LowerColdResist',
  LowerFireResist: 'LowerFireResist',
  LowerLightningResist: 'LowerLightningResist',
  LowerPoisonResist: 'LowerPoisonResist',
  ColdSkillDamage: 'ColdSkillDamage',
  FireSkillDamage: 'FireSkillDamage',
  LightningSkillDamage: 'LightningSkillDamage',
  PoisonSkillDamage: 'PoisonSkillDamage',
  FireMastery: 'FireMastery',
  LightRadius: 'LightRadius',
  Requirements: 'Requirements',
  IncreasedAttackSpeed: 'IncreasedAttackSpeed',
  FasterRunWalk: 'FasterRunWalk',
  HealStamina: 'HealStamina',
  MaximumStamina: 'MaximumStamina',
  FasterHitRecovery: 'FasterHitRecovery',
  FasterBlockRate: 'FasterBlockRate',
  FasterCastRate: 'FasterCastRate',
  SpellLevel: 'SpellLevel',
  PoisonLengthReduced: 'PoisonLengthReduced',
  AddDamage: 'AddDamage',
  Damage: 'Damage',
  HitCausesMonsterToFlee: 'HitCausesMonsterToFlee',
  HitBlindsTarget: 'HitBlindsTarget',
  DamageTakenGoesToMana: 'DamageTakenGoesToMana',
  IgnoreTargetDefense: 'IgnoreTargetDefense',
  TargetDefense: 'TargetDefense',
  SlainMonstersRestInPeace: 'SlainMonstersRestInPeace',
  PreventMonsterHeal: 'PreventMonsterHeal',
  HalfFreezeDuration: 'HalfFreezeDuration',
  BonusToAttackRating: 'BonusToAttackRating',
  MonsterDefensePerHit: 'MonsterDefensePerHit',
  DamageToDemons: 'DamageToDemons',
  DamageToUndead: 'DamageToUndead',
  AttackRatingAgainstDemons: 'AttackRatingAgainstDemons',
  AttackRatingAgainstUndead: 'AttackRatingAgainstUndead',
  AttackerTakesLightningDamage: 'AttackerTakesLightningDamage',
  FreezesTarget: 'FreezesTarget',
  OpenWounds: 'OpenWounds',
  CrushingBlow: 'CrushingBlow',
  KickDamage: 'KickDamage',
  ManaAfterKill: 'ManaAfterKill',
  LifeAfterKill: 'LifeAfterKill',
  LifeAfterDemonKill: 'LifeAfterDemonKill',
  DeadlyStrike: 'DeadlyStrike',
  FireAbsorbPercentage: 'FireAbsorbPercentage',
  FireAbsorb: 'FireAbsorb',
  LightningAbsorbPercentage: 'LightningAbsorbPercentage',
  LightningAbsorb: 'LightningAbsorb',
  MagicAbsorbPercentage: 'MagicAbsorbPercentage',
  MagicAbsorb: 'MagicAbsorb',
  ColdAbsorbPercentage: 'ColdAbsorbPercentage',
  ColdAbsorb: 'ColdAbsorb',
  SlowsTarget: 'SlowsTarget',
  BlessedAim: 'BlessedAim',
  Defiance: 'Defiance',
  CannotBeFrozen: 'CannotBeFrozen',
  SlowerStaminaDrain: 'SlowerStaminaDrain',
  ChanceToReanimateTarget: 'ChanceToReanimateTarget',
  PiercingAttack: 'PiercingAttack',
  FiresMagicArrows: 'FiresMagicArrows',
  FiresExplosiveArrowsOrBolts: 'FiresExplosiveArrowsOrBolts',
  Socketed: 'Socketed',
  ChanceToCastSpellOnAttack: 'ChanceToCastSpellOnAttack',
  ChanceToCastSpellOnDeath: 'ChanceToCastSpellOnDeath',
  ChanceToCastSpellOnKill: 'ChanceToCastSpellOnKill',
  ChanceToCastSpellOnLevel: 'ChanceToCastSpellOnLevel',
  ChanceToCastSpellOnStriking: 'ChanceToCastSpellOnStriking',
  ChanceToCastSpellWhenStruck: 'ChanceToCastSpellWhenStruck',
  DefenseByLevel: 'DefenseByLevel',
  EnhancedDefenseByLevel: 'EnhancedDefenseByLevel',
  ManaByLevel: 'ManaByLevel',
  LifeByLevel: 'LifeByLevel',
  MaximumDamageByLevel: 'MaximumDamageByLevel',
  StrengthByLevel: 'StrengthByLevel',
  DexterityByLevel: 'DexterityByLevel',
  EnergyByLevel: 'EnergyByLevel',
  VitalityByLevel: 'VitalityByLevel',
  AttackRatingByLevel: 'AttackRatingByLevel',
  AttackingRatingPercentageByLevel: 'AttackingRatingPercentageByLevel',
  ColdDamageByLevel: 'ColdDamageByLevel',
  FireDamageByLevel: 'FireDamageByLevel',
  LightningDamageByLevel: 'LightningDamageByLevel',
  ColdResistByLevel: 'ColdResistByLevel',
  FireResistByLevel: 'FireResistByLevel',
  LightningResistByLevel: 'LightningResistByLevel',
  PoisonResistByLevel: 'PoisonResistByLevel',
  ColdAbsorbByLevel: 'ColdAbsorbByLevel',
  FireAbsorbByLevel: 'FireAbsorbByLevel',
  LightningAbsorbByLevel: 'LightningAbsorbByLevel',
  PoisonAbsorbByLevel: 'PoisonAbsorbByLevel',
  AttackerTakesDamageByLevel: 'AttackerTakesDamageByLevel',
  ExtraGoldByLevel: 'ExtraGoldByLevel',
  MagicFindByLevel: 'MagicFindByLevel',
  HealStaminaByLevel: 'HealStaminaByLevel',
  DamageToDemonsByLevel: 'DamageToDemonsByLevel',
  DamageToUndeadByLevel: 'DamageToUndeadByLevel',
  AttackRatingAgainstDemonsByLevel: 'AttackRatingAgainstDemonsByLevel',
  AttackRatingAgainstUndeadByLevel: 'AttackRatingAgainstUndeadByLevel',
  CrusingBlowByLevel: 'CrusingBlowByLevel',
  OpenWoundsByLevel: 'OpenWoundsByLevel',
  KickDamageByLevel: 'KickDamageByLevel',
  DeadlyStrikeByLevel: 'DeadlyStrikeByLevel',
  RepairsDurability: 'RepairsDurability',
  ReplenishesQuantity: 'ReplenishesQuantity',
  IncreasedStackSize: 'IncreasedStackSize',
  Indestructible: 'Indestructible',
  Aura: 'Aura',
  Spell: 'Spell',
  SpellCharges: 'SpellCharges',
  ReanimateAs: 'ReanimateAs',
  ReduceVendorPrices: 'ReduceVendorPrices',
  Experience: 'Experience',
};

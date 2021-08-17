import {SkillType} from '../../enums/index.js';

const names = {
  [SkillType.ChainLightning]: 'Chain Lightning',
  [SkillType.ChargedBolt]: 'Charged Bolt',
  [SkillType.ColdMastery]: 'Cold Mastery',
  [SkillType.CorpseExplosion]: 'Corpse Explosion',
  [SkillType.Enchant]: 'Enchant',
  [SkillType.FireBall]: 'Fire Ball',
  [SkillType.FireMastery]: 'Fire Mastery',
  [SkillType.FireWall]: 'Fire Wall',
  [SkillType.Frenzy]: 'Frenzy',
  [SkillType.FrostNova]: 'Frost Nova',
  [SkillType.GlacialSpike]: 'Glacial Spike',
  [SkillType.HolyBolt]: 'Holy Bolt',
  [SkillType.IceBlast]: 'Ice Blast',
  [SkillType.LightningMastery]: 'Lightning Mastery',
  [SkillType.Meteor]: 'Meteor',
  [SkillType.Nova]: 'Nova',
  [SkillType.StaticField]: 'Static Field',
  [SkillType.Teleport]: 'Teleport',
  [SkillType.Weaken]: 'Weaken',
};

export const resolveSkillName = (skill) => names[skill];

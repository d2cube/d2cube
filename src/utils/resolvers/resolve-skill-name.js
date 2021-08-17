import {SkillType} from '../../enums/index.js';

const names = {
  [SkillType.ChainLightning]: 'Chain Lightning',
  [SkillType.ChargedBolt]: 'Charged Bolt',
  [SkillType.CorpseExplosion]: 'Corpse Explosion',
  [SkillType.Enchant]: 'Enchant',
  [SkillType.FireBall]: 'Fire Ball',
  [SkillType.FireWall]: 'Fire Wall',
  [SkillType.FrostNova]: 'Frost Nova',
  [SkillType.GlacialSpike]: 'Glacial Spike',
  [SkillType.HolyBolt]: 'Holy Bolt',
  [SkillType.IceBlast]: 'Ice Blast',
  [SkillType.Meteor]: 'Meteor',
  [SkillType.Nova]: 'Nova',
  [SkillType.StaticField]: 'Static Field',
  [SkillType.Teleport]: 'Teleport',
  [SkillType.Weaken]: 'Weaken',
};

export const resolveSkillName = (skill) => names[skill];

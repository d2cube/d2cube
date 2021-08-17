import {SkillSetType} from '../../enums/index.js';

const names = {
  [SkillSetType.AmazonSkills]: 'Amazon Skill Levels',
  [SkillSetType.AmazonBowAndCrossbowSkills]:
    'Bow and Crossbow Skills (Amazon Only)',
  [SkillSetType.AmazonJavelinAndSpearSkills]:
    'Javelin and Spear Skills (Amazon Only)',
  [SkillSetType.AmazonPassiveAndMagicSkills]:
    'Passive and Magic Skills (Amazon Only)',
  [SkillSetType.AssassinSkills]: 'Assassin Skill Levels',
  [SkillSetType.AssassinShadowDisciplines]:
    'Shadow Disciplines (Assassin Only)',
  [SkillSetType.AssassinMartialArts]: 'Martial Arts (Assassin Only)',
  [SkillSetType.AssassinTraps]: 'Traps(Assassin Only)',
  [SkillSetType.BarbarianSkills]: 'Barbarian Skill Levels',
  [SkillSetType.BarbarianCombatSkills]: 'Combat Skills (Barbarian Only)',
  [SkillSetType.BarbarianMasteries]: 'Masteries (Barbarian Only)',
  [SkillSetType.BarbarianWarcries]: 'Warcries (Barbarian Only)',
  [SkillSetType.DruidSkills]: 'Druid Skill Levels',
  [SkillSetType.DruidElementalSkills]: 'Elemenetal Skills (Druid Only)',
  [SkillSetType.DruidShapeShiftingSkills]: 'Shape Shifting Skills (Druid Only)',
  [SkillSetType.DruidSummoningSkills]: 'Druid Summoning Skills (Druid Only)',
  [SkillSetType.NecromancerSkills]: 'Necromancer Skill Levels',
  [SkillSetType.NecromancerCurses]: 'Curses (Necromancer Only)',
  [SkillSetType.NecromancerPoisonAndBoneSkills]:
    'Poison and Bone Skills (Necromancer Only)',
  [SkillSetType.NecromancerSummoningSkills]:
    'Summoning Skills (Necromancer Only)',
  [SkillSetType.PaladinSkills]: 'Paladin Skill Levels',
  [SkillSetType.PaladinCombatSkills]: 'Combat Skills (Paladin Only)',
  [SkillSetType.PaladinDefensiveAuras]: 'Defensive Auras (Paladin Only)',
  [SkillSetType.PaladinOffensiveAuras]: 'Offensive Auras (Paladin Only)',
  [SkillSetType.SorceressSkills]: 'Sorceress Skill Levels',
  [SkillSetType.SorceressFireSpells]: 'Fire Spells (Sorceress Only)',
  [SkillSetType.SorceressLightningSpells]: 'Lightning Spells (Sorceress Only)',
  [SkillSetType.SorceressColdSpells]: 'Cold Spells (Sorceress Only)',
  [SkillSetType.FireSkills]: 'Fire Skills',
};

export const resolveSkillSetName = (skill) => names[skill];

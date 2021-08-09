import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.TrangOulsAvatar,
  name: "Trang Oul's Avatar",
  bonus: [
    null,
    {
      [MagicPropertyType.SkillFireBall]: 18,
      [MagicPropertyType.RegenerateMana]: 15,
    },
    {
      [MagicPropertyType.SkillFireWall]: 13,
      [MagicPropertyType.RegenerateMana]: 30,
    },
    {
      [MagicPropertyType.SkillMeteor]: 10,
      [MagicPropertyType.RegenerateMana]: 45,
    },
    {
      [MagicPropertyType.NecromancerSkillLevels]: 3,
      [MagicPropertyType.LifeStolenPerHit]: 20,
      [MagicPropertyType.FireMastery]: 3,
      [MagicPropertyType.SkillMeteor]: 10,
      [MagicPropertyType.SkillFireWall]: 13,
      [MagicPropertyType.SkillFireBall]: 18,
      [MagicPropertyType.Defense]: 200,
      [MagicPropertyType.Mana]: 100,
      [MagicPropertyType.RegenerateMana]: 60,
      [MagicPropertyType.AllResistances]: 50,
      [MagicPropertyType.ReplenishLife]: 5,
    },
  ],
  items: [
    ids.TrangOulsGirth,
    ids.TrangOulsClaws,
    ids.TrangOulsWing,
    ids.TrangOulsScales,
    ids.TrangOulsGuise,
  ],
};

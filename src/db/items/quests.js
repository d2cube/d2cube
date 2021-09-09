import {
  BasePropertyType,
  ItemQualityType,
  ItemType,
  MagicPropertyType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

// Order matters (chronological appearance in game)
export default normalizeItems({
  quality: ItemQualityType.Quest,
  type: ItemType.Quest,
})([
  {
    id: ids.ScrollOfInifuss,
    name: 'Scroll of Inifuss',
    size: [2, 2],
  },
  {
    id: ids.WirtsLeg,
    name: "Wirt's Leg",
    class: WeaponClassType.Mace,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 1, y: 8},
        [BasePropertyType.Durability]: 66,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.HoradricMalus,
    name: 'Horadric Malus',
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 6, y: 15},
        [BasePropertyType.RequiredStrength]: 15,
        [BasePropertyType.RequiredDexterity]: 15,
        [BasePropertyType.Durability]: 55,
      },
      magic: {
        [MagicPropertyType.DamageToUndead]: 150,
      },
    },
  },
  {
    id: ids.BookOfSkill,
    name: 'Book of Skill',
    size: [2, 2],
  },
  {
    id: ids.HoradricScroll,
    name: 'Horadric Scroll',
    size: [2, 2],
  },
  {
    id: ids.HoradricCube,
    name: 'Horadric Cube',
    size: [2, 2],
  },
  {
    id: ids.StaffOfKings,
    name: 'Staff of Kings',
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 10, y: 15},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.Durability]: 45,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 50,
        [MagicPropertyType.AllResistances]: 10,
      },
    },
  },
  {
    id: ids.AmuletOfTheViper,
    name: 'Amulet of the Viper',
    baseId: ids.Ring,
    properties: {
      magic: {
        [MagicPropertyType.PoisonResist]: 25,
        [MagicPropertyType.Mana]: 10,
        [MagicPropertyType.Life]: 10,
      },
    },
  },
  {
    id: ids.HoradricStaff,
    name: 'Horadric Staff',
    size: [4, 1],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 12, y: 20},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 30,
        [BasePropertyType.Durability]: 50,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 50,
        [MagicPropertyType.Mana]: 10,
        [MagicPropertyType.Life]: 10,
        [MagicPropertyType.ColdResist]: 10,
        [MagicPropertyType.LightningResist]: 10,
        [MagicPropertyType.FireResist]: 10,
        [MagicPropertyType.PoisonResist]: 35,
        [MagicPropertyType.DamageToUndead]: 50,
      },
    },
  },
  {
    id: ids.AJadeFigurine,
    name: 'A Jade Figurine',
    size: [2, 1],
  },
  {
    id: ids.TheGoldenBird,
    name: 'The Golden Bird',
    size: [2, 1],
  },
  {
    id: ids.PotionOfLife,
    name: 'Potion of Life',
    size: [1, 1],
  },
  {
    id: ids.TheGidbinn,
    name: 'The Gidbinn',
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 3, y: 7},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.RequiredStrength]: 15,
        [BasePropertyType.RequiredDexterity]: 25,
        [BasePropertyType.Durability]: 30,
      },
    },
  },
  {
    id: ids.LamEsensTome,
    name: "Lam Esen's Tome",
    size: [2, 2],
  },
  {
    id: ids.KhalimsEye,
    name: "Khalim's Eye",
    size: [1, 1],
  },
  {
    id: ids.KhalimsBrain,
    name: "Khalim's Brain",
    size: [1, 1],
  },
  {
    id: ids.KhalimsHeart,
    name: "Khalim's Heart",
    size: [1, 1],
  },
  {
    id: ids.KhalimsFlail,
    name: "Khalim's Flail",
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 1, y: 15},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 41,
        [BasePropertyType.RequiredDexterity]: 35,
        [BasePropertyType.Durability]: 30,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 50,
        [MagicPropertyType.LightningDamage]: {x: 1, y: 20},
        [MagicPropertyType.AttackRating]: 40,
      },
    },
  },
  {
    id: ids.KhalimsWill,
    name: "Khalim's Will",
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 1, y: 15},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.Durability]: 30,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 50,
        [MagicPropertyType.LightningDamage]: {x: 1, y: 40},
        [MagicPropertyType.AttackRating]: 40,
        [MagicPropertyType.LifeStolenPerHit]: 6,
        [MagicPropertyType.ManaStolenPerHit]: 6,
      },
    },
  },
  {
    id: ids.MephistosSoulstone,
    name: "Mephisto's Soulstone",
    size: [1, 1],
  },
  {
    id: ids.HellforgeHammer,
    name: 'Hellforge Hammer',
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 6, y: 15},
        [BasePropertyType.MeleeRange]: 1,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.Durability]: 55,
      },
      magic: {
        [MagicPropertyType.FireDamage]: {x: 5, y: 20},
        [MagicPropertyType.Defense]: 35,
        [MagicPropertyType.FireResist]: 40,
        [MagicPropertyType.DamageToUndead]: 50,
      },
    },
  },
  {
    id: ids.MalahsPotion,
    name: "Malah's Potion",
    size: [1, 1],
  },
  {
    id: ids.ScrollOfResistance,
    name: 'Scroll of Resistance',
    size: [2, 2],
  },
]);

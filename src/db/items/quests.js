import {
  BasePropertyType,
  ItemQualityType,
  ItemType,
  MagicPropertyType,
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
    description: [
      {
        text: 'Key to the Cairn Stones',
        color: 'item.quest',
      },
    ],
  },
  {
    id: ids.WirtsLeg,
    name: "Wirt's Leg",
    quality: ItemQualityType.Normal,
    baseId: ids.Club,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 1, y: 8},
        [BasePropertyType.Durability]: 66,
      },
    },
  },
  {
    id: ids.HoradricMalus,
    name: 'Horadric Malus',
    baseId: ids.WarHammer, // Not really, but assigning to an item for now
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 6, y: 15},
        [BasePropertyType.RequiredStrength]: 15,
        [BasePropertyType.RequiredDexterity]: 15,
        [BasePropertyType.Durability]: 55,
      },
    },
  },
  {
    id: ids.BookOfSkill,
    name: 'Book of Skill',
    size: [2, 2],
    description: [
      {
        text: 'Right Click to Learn Skill of Your Choice',
        color: 'item.quest',
      },
    ],
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
    description: [
      {
        text: 'Right Click to Open',
        color: 'item.quest',
      },
    ],
  },
  {
    id: ids.StaffOfKings,
    name: 'Staff of Kings',
    baseId: ids.ShortStaff,
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
    baseId: ids.Amulet,
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
    baseId: ids.LongStaff,
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
    description: [
      {
        text: 'Right Click to Permanently Add 20 to Life',
        color: 'item.quest',
      },
    ],
  },
  {
    id: ids.TheGidbinn,
    name: 'The Gidbinn',
    baseId: ids.Dagger,
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
    baseId: ids.Flail,
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
    baseId: ids.Flail,
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
    baseId: ids.WarHammer,
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
      },
    },
  },
  {
    id: ids.MalahsPotion,
    name: "Malah's Potion",
    size: [1, 1],
    description: [
      {
        text: 'Keep it to Thaw Anya',
        color: 'item.quest',
      },
    ],
  },
  {
    id: ids.ScrollOfResistance,
    name: 'Scroll of Resistance',
    size: [2, 2],
    description: [
      {
        text: 'Right Click to Cast',
        color: 'item.quest',
      },
    ],
  },
]);

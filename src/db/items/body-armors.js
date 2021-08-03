import {
  ArmorClassType,
  BasePropertyType,
  ItemTierType,
  ItemType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  type: ItemType.BodyArmor,
  size: [3, 2],
})([
  {
    id: ids.QuiltedArmor,
    name: 'Quilted Armor',
    tier: ItemTierType.Normal,
    armorType: ArmorClassType.Light,
    clvl: 5,
    qlvl: 1,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [8, 11],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [12],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.LeatherArmor,
    name: 'Leather Armor',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Normal,
    qlvl: 3,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [14, 17],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [15],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.HardLeatherArmor,
    name: 'Hard Leather Armor',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Normal,
    qlvl: 5,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [21, 24],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [20],
        },
        [BasePropertyType.Durability]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.StuddedLeather,
    name: 'Studded Leather',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Normal,
    qlvl: 8,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [32, 35],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [27],
        },
        [BasePropertyType.Durability]: {
          values: [32],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.RingMail,
    name: 'Ring Mail',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Normal,
    qlvl: 11,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [45, 48],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [36],
        },
        [BasePropertyType.Durability]: {
          values: [26],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.ScaleMail,
    name: 'Scale Mail',
    armorType: ArmorClassType.Heavy,
    tier: ItemTierType.Normal,
    qlvl: 13,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [57, 60],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [44],
        },
        [BasePropertyType.Durability]: {
          values: [36],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.ChainMail,
    name: 'Chain Mail',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Normal,
    qlvl: 15,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [72, 75],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [48],
        },
        [BasePropertyType.Durability]: {
          values: [45],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.BreastPlate,
    name: 'Breast Plate',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Normal,
    qlvl: 18,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [65, 68],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [30],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.SplintMail,
    name: 'Splint Mail',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Normal,
    qlvl: 20,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [90, 95],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [51],
        },
        [BasePropertyType.Durability]: {
          values: [30],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.PlateMail,
    name: 'Plate Mail',
    armorType: ArmorClassType.Heavy,
    tier: ItemTierType.Normal,
    qlvl: 24,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [108, 116],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [65],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.FieldPlate,
    name: 'Field Plate',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Normal,
    qlvl: 28,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [101, 105],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [55],
        },
        [BasePropertyType.Durability]: {
          values: [48],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.GothicPlate,
    name: 'Gothic Plate',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Normal,
    qlvl: 32,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [128, 135],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [70],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.LightPlate,
    name: 'Light Plate',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Normal,
    qlvl: 35,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [90, 107],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [41],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.FullPlateMail,
    name: 'Full Plate Mail',
    armorType: ArmorClassType.Heavy,
    tier: ItemTierType.Normal,
    qlvl: 37,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [150, 161],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [80],
        },
        [BasePropertyType.Durability]: {
          values: [70],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.AncientArmor,
    name: 'Ancient Armor',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Normal,
    qlvl: 40,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [218, 233],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [100],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.GhostArmor,
    name: 'Ghost Armor',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 22,
    qlvl: 34,
    baseId: ids.QuiltedArmor,
    imageId: ids.QuiltedArmor,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [102, 117],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [38],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.SerpentskinArmor,
    name: 'Serpentskin Armor',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 24,
    qlvl: 36,
    baseId: ids.LeatherArmor,
    imageId: ids.LeatherArmor,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [111, 126],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [43],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.DemonhideArmor,
    name: 'Demonhide Armor',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 37,
    baseId: ids.HardLeatherArmor,
    imageId: ids.HardLeatherArmor,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [122, 136],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [50],
        },
        [BasePropertyType.Durability]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.TrellisedArmor,
    name: 'Trellised Armor',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 40,
    baseId: ids.StuddedLeather,
    imageId: ids.StuddedLeather,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [138, 153],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [61],
        },
        [BasePropertyType.Durability]: {
          values: [32],
        },
        [BasePropertyType.MaxSockets]: {
          values: [2],
        },
      },
    },
  },
  {
    id: ids.LinkedMail,
    name: 'Linked Mail',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 42,
    baseId: ids.ChainMail,
    imageId: ids.ChainMail,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [158, 172],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [74],
        },
        [BasePropertyType.Durability]: {
          values: [26],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.TigulatedMail,
    name: 'Tigulated Mail',
    armorType: ArmorClassType.Heavy,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 43,
    baseId: ids.ScaleMail,
    imageId: ids.ScaleMail,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [176, 190],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [86],
        },
        [BasePropertyType.Durability]: {
          values: [36],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.MeshArmor,
    name: 'Mesh Armor',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 45,
    baseId: ids.RingMail,
    imageId: ids.RingMail,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [198, 213],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [92],
        },
        [BasePropertyType.Durability]: {
          values: [45],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.Cuirass,
    name: 'Cuirass',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 47,
    baseId: ids.BreastPlate,
    imageId: ids.BreastPlate,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [188, 202],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [65],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.RussetArmor,
    name: 'Russet Armor',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 49,
    baseId: ids.SplintMail,
    imageId: ids.SplintMail,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [225, 243],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [97],
        },
        [BasePropertyType.Durability]: {
          values: [30],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.TemplarCoat,
    name: 'Templar Coat',
    armorType: ArmorClassType.Heavy,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 52,
    baseId: ids.PlateMail,
    imageId: ids.PlateMail,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [252, 274],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [118],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.SharktoothArmor,
    name: 'Sharktooth Armor',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 55,
    baseId: ids.FieldPlate,
    imageId: ids.FieldPlate,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [242, 258],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [103],
        },
        [BasePropertyType.Durability]: {
          values: [48],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.EmbossedPlate,
    name: 'Embossed Plate',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 58,
    baseId: ids.GothicPlate,
    imageId: ids.GothicPlate,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [282, 303],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [125],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.MagePlate,
    name: 'Mage Plate',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 60,
    baseId: ids.LightPlate,
    imageId: ids.LightPlate,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [225, 261],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [55],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.ChaosArmor,
    name: 'Chaos Armor',
    armorType: ArmorClassType.Heavy,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 64,
    baseId: ids.FullPlateMail,
    imageId: ids.FullPlateMail,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [315, 342],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [140],
        },
        [BasePropertyType.Durability]: {
          values: [70],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.OrnatePlate,
    name: 'Ornate Plate',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 64,
    baseId: ids.AncientArmor,
    imageId: ids.AncientArmor,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [417, 450],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [170],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.DuskShroud,
    name: 'Dusk Shroud',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Elite,
    clvl: 49,
    qlvl: 65,
    baseId: ids.QuiltedArmor,
    imageId: ids.QuiltedArmor,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [361, 467],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [77],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.Wyrmhide,
    name: 'Wyrmhide',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Elite,
    clvl: 50,
    qlvl: 67,
    baseId: ids.LeatherArmor,
    imageId: ids.LeatherArmor,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [364, 470],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [84],
        },
        [BasePropertyType.Durability]: {
          values: [24],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.ScarabHusk,
    name: 'Scarab Husk',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Elite,
    clvl: 51,
    qlvl: 68,
    baseId: ids.HardLeatherArmor,
    imageId: ids.HardLeatherArmor,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [369, 474],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [95],
        },
        [BasePropertyType.Durability]: {
          values: [28],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.WireFleece,
    name: 'Wire Fleece',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Elite,
    clvl: 53,
    qlvl: 70,
    baseId: ids.StuddedLeather,
    imageId: ids.StuddedLeather,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [375, 481],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [111],
        },
        [BasePropertyType.Durability]: {
          values: [70],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.DiamondMail,
    name: 'Diamond Mail',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Elite,
    clvl: 54,
    qlvl: 72,
    baseId: ids.ChainMail,
    imageId: ids.ChainMail,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [383, 489],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [131],
        },
        [BasePropertyType.Durability]: {
          values: [26],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.LoricatedMail,
    name: 'Loricated Mail',
    armorType: ArmorClassType.Heavy,
    tier: ItemTierType.Elite,
    clvl: 55,
    qlvl: 73,
    baseId: ids.ScaleMail,
    imageId: ids.ScaleMail,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [390, 496],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [149],
        },
        [BasePropertyType.Durability]: {
          values: [36],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.Boneweave,
    name: 'Boneweave',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Elite,
    clvl: 47,
    qlvl: 62,
    baseId: ids.RingMail,
    imageId: ids.RingMail,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [399, 505],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [158],
        },
        [BasePropertyType.Durability]: {
          values: [45],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.GreatHauberk,
    name: 'Great Hauberk',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Elite,
    clvl: 56,
    qlvl: 75,
    baseId: ids.BreastPlate,
    imageId: ids.BreastPlate,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [395, 501],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [118],
        },
        [BasePropertyType.Durability]: {
          values: [50],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.BalrogSkin,
    name: 'Balrog Skin',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Elite,
    clvl: 57,
    qlvl: 76,
    baseId: ids.SplintMail,
    imageId: ids.SplintMail,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [410, 517],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [165],
        },
        [BasePropertyType.Durability]: {
          values: [30],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.HellforgePlate,
    name: 'Hellforge Plate',
    armorType: ArmorClassType.Heavy,
    tier: ItemTierType.Elite,
    clvl: 59,
    qlvl: 78,
    baseId: ids.PlateMail,
    imageId: ids.PlateMail,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [421, 530],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [196],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.KrakenShell,
    name: 'Kraken Shell',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Elite,
    clvl: 61,
    qlvl: 81,
    baseId: ids.FieldPlate,
    imageId: ids.FieldPlate,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [417, 523],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [174],
        },
        [BasePropertyType.Durability]: {
          values: [48],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.LacqueredPlate,
    name: 'Lacquered Plate',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Elite,
    clvl: 62,
    qlvl: 82,
    baseId: ids.GothicPlate,
    imageId: ids.GothicPlate,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [433, 541],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [208],
        },
        [BasePropertyType.Durability]: {
          values: [55],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.ArchonPlate,
    name: 'Archon Plate',
    armorType: ArmorClassType.Light,
    tier: ItemTierType.Elite,
    clvl: 63,
    qlvl: 84,
    baseId: ids.LightPlate,
    imageId: ids.LightPlate,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [410, 524],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [103],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.ShadowPlate,
    name: 'Shadow Plate',
    armorType: ArmorClassType.Heavy,
    tier: ItemTierType.Elite,
    clvl: 64,
    qlvl: 83,
    baseId: ids.FullPlateMail,
    imageId: ids.FullPlateMail,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [446, 557],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [230],
        },
        [BasePropertyType.Durability]: {
          values: [70],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.SacredArmor,
    name: 'Sacred Armor',
    armorType: ArmorClassType.Medium,
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    baseId: ids.AncientArmor,
    imageId: ids.AncientArmor,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [487, 600],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [232],
        },
        [BasePropertyType.Durability]: {
          values: [60],
        },
        [BasePropertyType.MaxSockets]: {
          values: [4],
        },
      },
    },
  },
]);

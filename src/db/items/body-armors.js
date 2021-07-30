import {
  ArmorType,
  ItemPropertyType,
  ItemTierType,
  ItemType,
} from '../enums/index.js';
import ids from '../ids/index.js';
import {mapItemName} from '../utils/map-item-name.js';
import {mapItemProperties} from '../utils/map-item-properties.js';
import {mapItems} from '../utils/map-items.js';

const items = {
  [ids.QuiltedArmor]: {
    id: ids.QuiltedArmor,
    name: 'Quilted Armor',
    tier: ItemTierType.Normal,
    armorType: ArmorType.Light,
    clvl: 5,
    ilvl: 1,
    properties: {
      [ItemPropertyType.Defense]: [8, 11],
      [ItemPropertyType.MinimumStrength]: 12,
      [ItemPropertyType.Durability]: 20,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.LeatherArmor]: {
    id: ids.LeatherArmor,
    name: 'Leather Armor',
    armorType: ArmorType.Light,
    tier: ItemTierType.Normal,
    ilvl: 3,
    properties: {
      [ItemPropertyType.Defense]: [14, 17],
      [ItemPropertyType.MinimumStrength]: 15,
      [ItemPropertyType.Durability]: 24,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.HardLeatherArmor]: {
    id: ids.HardLeatherArmor,
    name: 'Hard Leather Armor',
    armorType: ArmorType.Light,
    tier: ItemTierType.Normal,
    ilvl: 5,
    properties: {
      [ItemPropertyType.Defense]: [21, 24],
      [ItemPropertyType.MinimumStrength]: 20,
      [ItemPropertyType.Durability]: 28,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.StuddedLeather]: {
    id: ids.StuddedLeather,
    name: 'Studded Leather',
    armorType: ArmorType.Light,
    tier: ItemTierType.Normal,
    ilvl: 8,
    properties: {
      [ItemPropertyType.Defense]: [32, 35],
      [ItemPropertyType.MinimumStrength]: 27,
      [ItemPropertyType.Durability]: 32,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.RingMail]: {
    id: ids.RingMail,
    name: 'Ring Mail',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Normal,
    ilvl: 11,
    properties: {
      [ItemPropertyType.Defense]: [45, 48],
      [ItemPropertyType.MinimumStrength]: 36,
      [ItemPropertyType.Durability]: 26,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.ScaleMail]: {
    id: ids.ScaleMail,
    name: 'Scale Mail',
    armorType: ArmorType.Heavy,
    tier: ItemTierType.Normal,
    ilvl: 13,
    properties: {
      [ItemPropertyType.Defense]: [57, 60],
      [ItemPropertyType.MinimumStrength]: 44,
      [ItemPropertyType.Durability]: 36,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.ChainMail]: {
    id: ids.ChainMail,
    name: 'Chain Mail',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Normal,
    ilvl: 15,
    properties: {
      [ItemPropertyType.Defense]: [72, 75],
      [ItemPropertyType.MinimumStrength]: 48,
      [ItemPropertyType.Durability]: 45,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.BreastPlate]: {
    id: ids.BreastPlate,
    name: 'Breast Plate',
    armorType: ArmorType.Light,
    tier: ItemTierType.Normal,
    ilvl: 18,
    properties: {
      [ItemPropertyType.Defense]: [65, 68],
      [ItemPropertyType.MinimumStrength]: 30,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.SplintMail]: {
    id: ids.SplintMail,
    name: 'Splint Mail',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Normal,
    ilvl: 20,
    properties: {
      [ItemPropertyType.Defense]: [90, 95],
      [ItemPropertyType.MinimumStrength]: 51,
      [ItemPropertyType.Durability]: 30,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.PlateMail]: {
    id: ids.PlateMail,
    name: 'Plate Mail',
    armorType: ArmorType.Heavy,
    tier: ItemTierType.Normal,
    ilvl: 24,
    properties: {
      [ItemPropertyType.Defense]: [108, 116],
      [ItemPropertyType.MinimumStrength]: 65,
      [ItemPropertyType.Durability]: 60,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.FieldPlate]: {
    id: ids.FieldPlate,
    name: 'Field Plate',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Normal,
    ilvl: 28,
    properties: {
      [ItemPropertyType.Defense]: [101, 105],
      [ItemPropertyType.MinimumStrength]: 55,
      [ItemPropertyType.Durability]: 48,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.GothicPlate]: {
    id: ids.GothicPlate,
    name: 'Gothic Plate',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Normal,
    ilvl: 32,
    properties: {
      [ItemPropertyType.Defense]: [128, 135],
      [ItemPropertyType.MinimumStrength]: 70,
      [ItemPropertyType.Durability]: 55,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.LightPlate]: {
    id: ids.LightPlate,
    name: 'Light Plate',
    armorType: ArmorType.Light,
    tier: ItemTierType.Normal,
    ilvl: 35,
    properties: {
      [ItemPropertyType.Defense]: [90, 107],
      [ItemPropertyType.MinimumStrength]: 41,
      [ItemPropertyType.Durability]: 60,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.FullPlateMail]: {
    id: ids.FullPlateMail,
    name: 'Full Plate Mail',
    armorType: ArmorType.Heavy,
    tier: ItemTierType.Normal,
    ilvl: 37,
    properties: {
      [ItemPropertyType.Defense]: [150, 161],
      [ItemPropertyType.MinimumStrength]: 80,
      [ItemPropertyType.Durability]: 70,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.AncientArmor]: {
    id: ids.AncientArmor,
    name: 'Ancient Armor',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Normal,
    ilvl: 40,
    properties: {
      [ItemPropertyType.Defense]: [218, 233],
      [ItemPropertyType.MinimumStrength]: 100,
      [ItemPropertyType.Durability]: 60,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.GhostArmor]: {
    id: ids.GhostArmor,
    name: 'Ghost Armor',
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 22,
    ilvl: 34,
    baseId: ids.QuiltedArmor,
    imageId: ids.QuiltedArmor,
    properties: {
      [ItemPropertyType.Defense]: [102, 117],
      [ItemPropertyType.MinimumStrength]: 38,
      [ItemPropertyType.Durability]: 20,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.SerpentskinArmor]: {
    id: ids.SerpentskinArmor,
    name: 'Serpentskin Armor',
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 24,
    ilvl: 36,
    baseId: ids.LeatherArmor,
    imageId: ids.LeatherArmor,
    properties: {
      [ItemPropertyType.Defense]: [111, 126],
      [ItemPropertyType.MinimumStrength]: 43,
      [ItemPropertyType.Durability]: 24,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.DemonhideArmor]: {
    id: ids.DemonhideArmor,
    name: 'Demonhide Armor',
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 37,
    baseId: ids.HardLeatherArmor,
    imageId: ids.HardLeatherArmor,
    properties: {
      [ItemPropertyType.Defense]: [122, 136],
      [ItemPropertyType.MinimumStrength]: 50,
      [ItemPropertyType.Durability]: 28,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.TrellisedArmor]: {
    id: ids.TrellisedArmor,
    name: 'Trellised Armor',
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 40,
    baseId: ids.StuddedLeather,
    imageId: ids.StuddedLeather,
    properties: {
      [ItemPropertyType.Defense]: [138, 153],
      [ItemPropertyType.MinimumStrength]: 61,
      [ItemPropertyType.Durability]: 32,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.LinkedMail]: {
    id: ids.LinkedMail,
    name: 'Linked Mail',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 42,
    baseId: ids.ChainMail,
    imageId: ids.ChainMail,
    properties: {
      [ItemPropertyType.Defense]: [158, 172],
      [ItemPropertyType.MinimumStrength]: 74,
      [ItemPropertyType.Durability]: 26,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.TigulatedMail]: {
    id: ids.TigulatedMail,
    name: 'Tigulated Mail',
    armorType: ArmorType.Heavy,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 43,
    baseId: ids.ScaleMail,
    imageId: ids.ScaleMail,
    properties: {
      [ItemPropertyType.Defense]: [176, 190],
      [ItemPropertyType.MinimumStrength]: 86,
      [ItemPropertyType.Durability]: 36,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.MeshArmor]: {
    id: ids.MeshArmor,
    name: 'Mesh Armor',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 45,
    baseId: ids.RingMail,
    imageId: ids.RingMail,
    properties: {
      [ItemPropertyType.Defense]: [198, 213],
      [ItemPropertyType.MinimumStrength]: 92,
      [ItemPropertyType.Durability]: 45,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.Cuirass]: {
    id: ids.Cuirass,
    name: 'Cuirass',
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 47,
    baseId: ids.BreastPlate,
    imageId: ids.BreastPlate,
    properties: {
      [ItemPropertyType.Defense]: [188, 202],
      [ItemPropertyType.MinimumStrength]: 65,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.RussetArmor]: {
    id: ids.RussetArmor,
    name: 'Russet Armor',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 49,
    baseId: ids.SplintMail,
    imageId: ids.SplintMail,
    properties: {
      [ItemPropertyType.Defense]: [225, 243],
      [ItemPropertyType.MinimumStrength]: 97,
      [ItemPropertyType.Durability]: 30,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.TemplarCoat]: {
    id: ids.TemplarCoat,
    name: 'Templar Coat',
    armorType: ArmorType.Heavy,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 52,
    baseId: ids.PlateMail,
    imageId: ids.PlateMail,
    properties: {
      [ItemPropertyType.Defense]: [252, 274],
      [ItemPropertyType.MinimumStrength]: 118,
      [ItemPropertyType.Durability]: 60,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.SharktoothArmor]: {
    id: ids.SharktoothArmor,
    name: 'Sharktooth Armor',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 55,
    baseId: ids.FieldPlate,
    imageId: ids.FieldPlate,
    properties: {
      [ItemPropertyType.Defense]: [242, 258],
      [ItemPropertyType.MinimumStrength]: 103,
      [ItemPropertyType.Durability]: 48,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.EmbossedPlate]: {
    id: ids.EmbossedPlate,
    name: 'Embossed Plate',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 58,
    baseId: ids.GothicPlate,
    imageId: ids.GothicPlate,
    properties: {
      [ItemPropertyType.Defense]: [282, 303],
      [ItemPropertyType.MinimumStrength]: 125,
      [ItemPropertyType.Durability]: 55,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.MagePlate]: {
    id: ids.MagePlate,
    name: 'Mage Plate',
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 60,
    baseId: ids.LightPlate,
    imageId: ids.LightPlate,
    properties: {
      [ItemPropertyType.Defense]: [225, 261],
      [ItemPropertyType.MinimumStrength]: 55,
      [ItemPropertyType.Durability]: 60,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.ChaosArmor]: {
    id: ids.ChaosArmor,
    name: 'Chaos Armor',
    armorType: ArmorType.Heavy,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 64,
    baseId: ids.FullPlateMail,
    imageId: ids.FullPlateMail,
    properties: {
      [ItemPropertyType.Defense]: [315, 342],
      [ItemPropertyType.MinimumStrength]: 140,
      [ItemPropertyType.Durability]: 70,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.OrnatePlate]: {
    id: ids.OrnatePlate,
    name: 'Ornate Plate',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 64,
    baseId: ids.AncientArmor,
    imageId: ids.AncientArmor,
    properties: {
      [ItemPropertyType.Defense]: [417, 450],
      [ItemPropertyType.MinimumStrength]: 170,
      [ItemPropertyType.Durability]: 60,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.DuskShroud]: {
    id: ids.DuskShroud,
    name: 'Dusk Shroud',
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 49,
    ilvl: 65,
    baseId: ids.QuiltedArmor,
    imageId: ids.QuiltedArmor,
    properties: {
      [ItemPropertyType.Defense]: [361, 467],
      [ItemPropertyType.MinimumStrength]: 77,
      [ItemPropertyType.Durability]: 20,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.Wyrmhide]: {
    id: ids.Wyrmhide,
    name: 'Wyrmhide',
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 50,
    ilvl: 67,
    baseId: ids.LeatherArmor,
    imageId: ids.LeatherArmor,
    properties: {
      [ItemPropertyType.Defense]: [364, 470],
      [ItemPropertyType.MinimumStrength]: 84,
      [ItemPropertyType.Durability]: 24,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.ScarabHusk]: {
    id: ids.ScarabHusk,
    name: 'Scarab Husk',
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 51,
    ilvl: 68,
    baseId: ids.HardLeatherArmor,
    imageId: ids.HardLeatherArmor,
    properties: {
      [ItemPropertyType.Defense]: [369, 474],
      [ItemPropertyType.MinimumStrength]: 95,
      [ItemPropertyType.Durability]: 28,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.WireFleece]: {
    id: ids.WireFleece,
    name: 'Wire Fleece',
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 53,
    ilvl: 70,
    baseId: ids.StuddedLeather,
    imageId: ids.StuddedLeather,
    properties: {
      [ItemPropertyType.Defense]: [375, 481],
      [ItemPropertyType.MinimumStrength]: 111,
      [ItemPropertyType.Durability]: 70,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.DiamondMail]: {
    id: ids.DiamondMail,
    name: 'Diamond Mail',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Elite,
    clvl: 54,
    ilvl: 72,
    baseId: ids.ChainMail,
    imageId: ids.ChainMail,
    properties: {
      [ItemPropertyType.Defense]: [383, 489],
      [ItemPropertyType.MinimumStrength]: 131,
      [ItemPropertyType.Durability]: 26,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.LoricatedMail]: {
    id: ids.LoricatedMail,
    name: 'Loricated Mail',
    armorType: ArmorType.Heavy,
    tier: ItemTierType.Elite,
    clvl: 55,
    ilvl: 73,
    baseId: ids.ScaleMail,
    imageId: ids.ScaleMail,
    properties: {
      [ItemPropertyType.Defense]: [390, 496],
      [ItemPropertyType.MinimumStrength]: 149,
      [ItemPropertyType.Durability]: 36,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.Boneweave]: {
    id: ids.Boneweave,
    name: 'Boneweave',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Elite,
    clvl: 47,
    ilvl: 62,
    baseId: ids.RingMail,
    imageId: ids.RingMail,
    properties: {
      [ItemPropertyType.Defense]: [399, 505],
      [ItemPropertyType.MinimumStrength]: 158,
      [ItemPropertyType.Durability]: 45,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.GreatHauberk]: {
    id: ids.GreatHauberk,
    name: 'Great Hauberk',
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 56,
    ilvl: 75,
    baseId: ids.BreastPlate,
    imageId: ids.BreastPlate,
    properties: {
      [ItemPropertyType.Defense]: [395, 501],
      [ItemPropertyType.MinimumStrength]: 118,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.BalrogSkin]: {
    id: ids.BalrogSkin,
    name: 'Balrog Skin',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Elite,
    clvl: 57,
    ilvl: 76,
    baseId: ids.SplintMail,
    imageId: ids.SplintMail,
    properties: {
      [ItemPropertyType.Defense]: [410, 517],
      [ItemPropertyType.MinimumStrength]: 165,
      [ItemPropertyType.Durability]: 30,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.HellforgePlate]: {
    id: ids.HellforgePlate,
    name: 'Hellforge Plate',
    armorType: ArmorType.Heavy,
    tier: ItemTierType.Elite,
    clvl: 59,
    ilvl: 78,
    baseId: ids.PlateMail,
    imageId: ids.PlateMail,
    properties: {
      [ItemPropertyType.Defense]: [421, 530],
      [ItemPropertyType.MinimumStrength]: 196,
      [ItemPropertyType.Durability]: 60,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.KrakenShell]: {
    id: ids.KrakenShell,
    name: 'Kraken Shell',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Elite,
    clvl: 61,
    ilvl: 81,
    baseId: ids.FieldPlate,
    imageId: ids.FieldPlate,
    properties: {
      [ItemPropertyType.Defense]: [417, 523],
      [ItemPropertyType.MinimumStrength]: 174,
      [ItemPropertyType.Durability]: 48,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.LacqueredPlate]: {
    id: ids.LacqueredPlate,
    name: 'Lacquered Plate',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Elite,
    clvl: 62,
    ilvl: 82,
    baseId: ids.GothicPlate,
    imageId: ids.GothicPlate,
    properties: {
      [ItemPropertyType.Defense]: [433, 541],
      [ItemPropertyType.MinimumStrength]: 208,
      [ItemPropertyType.Durability]: 55,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.ArchonPlate]: {
    id: ids.ArchonPlate,
    name: 'Archon Plate',
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 63,
    ilvl: 84,
    baseId: ids.LightPlate,
    imageId: ids.LightPlate,
    properties: {
      [ItemPropertyType.Defense]: [410, 524],
      [ItemPropertyType.MinimumStrength]: 103,
      [ItemPropertyType.Durability]: 60,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.ShadowPlate]: {
    id: ids.ShadowPlate,
    name: 'Shadow Plate',
    armorType: ArmorType.Heavy,
    tier: ItemTierType.Elite,
    clvl: 64,
    ilvl: 83,
    baseId: ids.FullPlateMail,
    imageId: ids.FullPlateMail,
    properties: {
      [ItemPropertyType.Defense]: [446, 557],
      [ItemPropertyType.MinimumStrength]: 230,
      [ItemPropertyType.Durability]: 70,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.SacredArmor]: {
    id: ids.SacredArmor,
    name: 'Sacred Armor',
    armorType: ArmorType.Medium,
    tier: ItemTierType.Elite,
    clvl: 66,
    ilvl: 85,
    baseId: ids.AncientArmor,
    imageId: ids.AncientArmor,
    properties: {
      [ItemPropertyType.Defense]: [487, 600],
      [ItemPropertyType.MinimumStrength]: 232,
      [ItemPropertyType.Durability]: 60,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
};

export default mapItems({
  type: ItemType.BodyArmor,
  size: [3, 2],
  mapDescription: (item) => [[mapItemName(item), ...mapItemProperties(item)]],
})(items);

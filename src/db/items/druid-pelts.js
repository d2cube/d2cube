import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  PlayerClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  playerClass: PlayerClassType.Druid,
  size: [2, 2],
  type: ItemType.DruidPelt,
})([
  {
    id: ids.WolfHead,
    name: 'Wolf Head',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [8, 11],
        [BasePropertyType.RequiredStrength]: 16,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 3,
      },
    },
  },
  {
    id: ids.HawkHelm,
    name: 'Hawk Helm',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [4, 15],
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 6,
      },
    },
  },
  {
    id: ids.Antlers,
    name: 'Antlers',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [18, 24],
        [BasePropertyType.RequiredStrength]: 24,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 12,
      },
    },
  },
  {
    id: ids.FalconMask,
    name: 'Falcon Mask',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [12, 28],
        [BasePropertyType.RequiredStrength]: 28,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 15,
      },
    },
  },
  {
    id: ids.SpiritMask,
    name: 'Spirit Mask',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Defense]: [22, 35],
        [BasePropertyType.RequiredStrength]: 30,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 18,
      },
    },
  },
  {
    id: ids.AlphaHelm,
    name: 'Alpha Helm',
    tier: ItemTierType.Exceptional,
    baseId: ids.WolfHead,
    imageId: ids.WolfHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: [52, 62],
        [BasePropertyType.RequiredStrength]: 44,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 26,
      },
    },
  },
  {
    id: ids.GriffonHeaddress,
    name: 'Griffon Headdress',
    tier: ItemTierType.Exceptional,
    baseId: ids.HawkHelm,
    imageId: ids.HawkHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: [46, 68],
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 30,
      },
    },
  },
  {
    id: ids.HuntersGuise,
    name: "Hunter's Guise",
    tier: ItemTierType.Exceptional,
    baseId: ids.Antlers,
    imageId: ids.Antlers,
    properties: {
      base: {
        [BasePropertyType.Defense]: [67, 81],
        [BasePropertyType.RequiredStrength]: 56,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 29,
      },
    },
  },
  {
    id: ids.SacredFeathers,
    name: 'Sacred Feathers',
    tier: ItemTierType.Exceptional,
    baseId: ids.FalconMask,
    imageId: ids.FalconMask,
    properties: {
      base: {
        [BasePropertyType.Defense]: [58, 87],
        [BasePropertyType.RequiredStrength]: 62,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 32,
      },
    },
  },
  {
    id: ids.TotemicMask,
    name: 'Totemic Mask',
    tier: ItemTierType.Exceptional,
    baseId: ids.SpiritMask,
    imageId: ids.SpiritMask,
    properties: {
      base: {
        [BasePropertyType.Defense]: [73, 98],
        [BasePropertyType.RequiredStrength]: 65,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 41,
      },
    },
  },
  {
    id: ids.BloodSpirit,
    name: 'Blood Spirit',
    tier: ItemTierType.Elite,
    baseId: ids.WolfHead,
    imageId: ids.WolfHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: [101, 145],
        [BasePropertyType.RequiredStrength]: 86,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 46,
      },
    },
  },
  {
    id: ids.SunSpirit,
    name: 'Sun Spirit',
    tier: ItemTierType.Elite,
    baseId: ids.HawkHelm,
    imageId: ids.HawkHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: [98, 147],
        [BasePropertyType.RequiredStrength]: 95,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 51,
      },
    },
  },
  {
    id: ids.EarthSpirit,
    name: 'Earth Spirit',
    tier: ItemTierType.Elite,
    baseId: ids.Antlers,
    imageId: ids.Antlers,
    properties: {
      base: {
        [BasePropertyType.Defense]: [107, 152],
        [BasePropertyType.RequiredStrength]: 104,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 57,
      },
    },
  },
  {
    id: ids.SkySpirit,
    name: 'Sky Spirit',
    tier: ItemTierType.Elite,
    baseId: ids.FalconMask,
    imageId: ids.FalconMask,
    properties: {
      base: {
        [BasePropertyType.Defense]: [103, 155],
        [BasePropertyType.RequiredStrength]: 113,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 62,
      },
    },
  },
  {
    id: ids.DreamSpirit,
    name: 'Dream Spirit',
    tier: ItemTierType.Elite,
    baseId: ids.SpiritMask,
    imageId: ids.SpiritMask,
    properties: {
      base: {
        [BasePropertyType.Defense]: [109, 159],
        [BasePropertyType.RequiredStrength]: 118,
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.RequiredLevel]: 66,
      },
    },
  },
]);

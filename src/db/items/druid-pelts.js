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
        [BasePropertyType.BaseDefense]: [8, 11],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 16,
        [BasePropertyType.RequiredLevel]: 3,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.HawkHelm,
    name: 'Hawk Helm',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [4, 15],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.RequiredLevel]: 6,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.Antlers,
    name: 'Antlers',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [18, 24],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 24,
        [BasePropertyType.RequiredLevel]: 12,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.FalconMask,
    name: 'Falcon Mask',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [12, 28],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 28,
        [BasePropertyType.RequiredLevel]: 15,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.SpiritMask,
    name: 'Spirit Mask',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.BaseDefense]: [22, 35],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 30,
        [BasePropertyType.RequiredLevel]: 18,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.BaseDefense]: [52, 62],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 44,
        [BasePropertyType.RequiredLevel]: 26,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.BaseDefense]: [46, 68],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.RequiredLevel]: 30,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.BaseDefense]: [67, 81],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 56,
        [BasePropertyType.RequiredLevel]: 29,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.BaseDefense]: [58, 87],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 62,
        [BasePropertyType.RequiredLevel]: 32,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.BaseDefense]: [73, 98],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 65,
        [BasePropertyType.RequiredLevel]: 41,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.BaseDefense]: [101, 145],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 86,
        [BasePropertyType.RequiredLevel]: 46,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.BaseDefense]: [98, 147],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 95,
        [BasePropertyType.RequiredLevel]: 51,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.BaseDefense]: [107, 152],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 104,
        [BasePropertyType.RequiredLevel]: 57,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.BaseDefense]: [103, 155],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 113,
        [BasePropertyType.RequiredLevel]: 62,
        [BasePropertyType.MaxSockets]: 3,
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
        [BasePropertyType.BaseDefense]: [109, 159],
        [BasePropertyType.Durability]: 20,
        [BasePropertyType.RequiredStrength]: 118,
        [BasePropertyType.RequiredLevel]: 66,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
]);

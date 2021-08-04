import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  PlayerClassType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  playerClass: PlayerClassType.Druid,
  size: [2, 2],
  type: ItemType.DruidPelt,
})([
  {
    id: ids.WolfHead,
    name: 'Wolf Head',
    tier: ItemTierType.Normal,
    clvl: 3,
    qlvl: 4,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [8, 11],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [16],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.HawkHelm,
    name: 'Hawk Helm',
    tier: ItemTierType.Normal,
    clvl: 6,
    qlvl: 8,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [4, 15],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [20],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.Antlers,
    name: 'Antlers',
    tier: ItemTierType.Normal,
    clvl: 12,
    qlvl: 16,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [18, 24],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [24],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.FalconMask,
    name: 'Falcon Mask',
    tier: ItemTierType.Normal,
    clvl: 15,
    qlvl: 20,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [12, 28],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [28],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.SpiritMask,
    name: 'Spirit Mask',
    tier: ItemTierType.Normal,
    clvl: 18,
    qlvl: 24,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [22, 35],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [30],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.AlphaHelm,
    name: 'Alpha Helm',
    tier: ItemTierType.Exceptional,
    clvl: 26,
    qlvl: 35,
    baseId: ids.WolfHead,
    imageId: ids.WolfHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [52, 62],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [44],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.GriffonHeaddress,
    name: 'Griffon Headdress',
    tier: ItemTierType.Exceptional,
    clvl: 30,
    qlvl: 40,
    baseId: ids.HawkHelm,
    imageId: ids.HawkHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [46, 68],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [50],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.HuntersGuise,
    name: "Hunter's Guise",
    tier: ItemTierType.Exceptional,
    clvl: 29,
    qlvl: 46,
    baseId: ids.Antlers,
    imageId: ids.Antlers,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [67, 81],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [56],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.SacredFeathers,
    name: 'Sacred Feathers',
    tier: ItemTierType.Exceptional,
    clvl: 32,
    qlvl: 50,
    baseId: ids.FalconMask,
    imageId: ids.FalconMask,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [58, 87],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [62],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.TotemicMask,
    name: 'Totemic Mask',
    tier: ItemTierType.Exceptional,
    clvl: 41,
    qlvl: 55,
    baseId: ids.SpiritMask,
    imageId: ids.SpiritMask,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [73, 98],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [65],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.BloodSpirit,
    name: 'Blood Spirit',
    tier: ItemTierType.Elite,
    clvl: 46,
    qlvl: 62,
    baseId: ids.WolfHead,
    imageId: ids.WolfHead,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [101, 145],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [86],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.SunSpirit,
    name: 'Sun Spirit',
    tier: ItemTierType.Elite,
    clvl: 51,
    qlvl: 69,
    baseId: ids.HawkHelm,
    imageId: ids.HawkHelm,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [98, 147],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [95],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.EarthSpirit,
    name: 'Earth Spirit',
    tier: ItemTierType.Elite,
    clvl: 57,
    qlvl: 76,
    baseId: ids.Antlers,
    imageId: ids.Antlers,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [107, 152],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [104],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.SkySpirit,
    name: 'Sky Spirit',
    tier: ItemTierType.Elite,
    clvl: 62,
    qlvl: 83,
    baseId: ids.FalconMask,
    imageId: ids.FalconMask,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [103, 155],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [113],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
  {
    id: ids.DreamSpirit,
    name: 'Dream Spirit',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    baseId: ids.SpiritMask,
    imageId: ids.SpiritMask,
    properties: {
      base: {
        [BasePropertyType.Defense]: {
          values: [109, 159],
        },
        [BasePropertyType.MinimumStrength]: {
          values: [118],
        },
        [BasePropertyType.Durability]: {
          values: [20],
        },
        [BasePropertyType.MaxSockets]: {
          values: [3],
        },
      },
    },
  },
]);

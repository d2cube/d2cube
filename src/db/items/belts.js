import {ItemPropertyType, ItemTierType, ItemType} from '../enums/index.js';
import ids from '../ids/index.js';
import {mapItemName} from '../utils/map-item-name.js';
import {mapItemProperties} from '../utils/map-item-properties.js';
import {mapItems} from '../utils/map-items.js';

const items = {
  [ids.Sash]: {
    id: ids.Sash,
    name: 'Sash',
    tier: ItemTierType.Normal,
    ilvl: 3,
    properties: {
      [ItemPropertyType.Defense]: [2, 2],
      [ItemPropertyType.PotionSlots]: 8,
      [ItemPropertyType.MinimumStrength]: null,
      [ItemPropertyType.Durability]: 12,
    },
  },
  [ids.LightBelt]: {
    id: ids.LightBelt,
    name: 'Light Belt',
    tier: ItemTierType.Normal,
    ilvl: 7,
    properties: {
      [ItemPropertyType.Defense]: [3, 3],
      [ItemPropertyType.PotionSlots]: 8,
      [ItemPropertyType.MinimumStrength]: null,
      [ItemPropertyType.Durability]: 14,
    },
  },
  [ids.Belt]: {
    id: ids.Belt,
    name: 'Belt',
    tier: ItemTierType.Normal,
    ilvl: 12,
    properties: {
      [ItemPropertyType.Defense]: [5, 5],
      [ItemPropertyType.PotionSlots]: 12,
      [ItemPropertyType.MinimumStrength]: 25,
      [ItemPropertyType.Durability]: 16,
    },
  },
  [ids.HeavyBelt]: {
    id: ids.HeavyBelt,
    name: 'Heavy Belt',
    tier: ItemTierType.Normal,
    ilvl: 18,
    properties: {
      [ItemPropertyType.Defense]: [6, 6],
      [ItemPropertyType.PotionSlots]: 12,
      [ItemPropertyType.MinimumStrength]: 45,
      [ItemPropertyType.Durability]: 20,
    },
  },
  [ids.PlatedBelt]: {
    id: ids.PlatedBelt,
    name: 'Plated Belt',
    tier: ItemTierType.Normal,
    ilvl: 27,
    properties: {
      [ItemPropertyType.Defense]: [8, 11],
      [ItemPropertyType.PotionSlots]: 16,
      [ItemPropertyType.MinimumStrength]: 60,
      [ItemPropertyType.Durability]: 24,
    },
  },
  [ids.DemonhideSash]: {
    id: ids.DemonhideSash,
    name: 'Demonhide Sash',
    tier: ItemTierType.Exceptional,
    clvl: 24,
    ilvl: 36,
    baseId: ids.Sash,
    imageId: ids.Sash,
    properties: {
      [ItemPropertyType.Defense]: [29, 34],
      [ItemPropertyType.PotionSlots]: 16,
      [ItemPropertyType.MinimumStrength]: 20,
      [ItemPropertyType.Durability]: 12,
    },
  },
  [ids.SharksinBelt]: {
    id: ids.SharksinBelt,
    name: 'Sharkskin Belt',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 39,
    baseId: ids.LightBelt,
    imageId: ids.LightBelt,
    properties: {
      [ItemPropertyType.Defense]: [31, 36],
      [ItemPropertyType.PotionSlots]: 16,
      [ItemPropertyType.MinimumStrength]: 20,
      [ItemPropertyType.Durability]: 14,
    },
  },
  [ids.MeshBelt]: {
    id: ids.MeshBelt,
    name: 'Mesh Belt',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 43,
    baseId: ids.Belt,
    imageId: ids.Belt,
    properties: {
      [ItemPropertyType.Defense]: [35, 40],
      [ItemPropertyType.PotionSlots]: 16,
      [ItemPropertyType.MinimumStrength]: 58,
      [ItemPropertyType.Durability]: 16,
    },
  },
  [ids.BattleBelt]: {
    id: ids.BattleBelt,
    name: 'Battle Belt',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 49,
    baseId: ids.HeavyBelt,
    imageId: ids.HeavyBelt,
    properties: {
      [ItemPropertyType.Defense]: [37, 42],
      [ItemPropertyType.PotionSlots]: 16,
      [ItemPropertyType.MinimumStrength]: 88,
      [ItemPropertyType.Durability]: 18,
    },
  },
  [ids.WarBelt]: {
    id: ids.WarBelt,
    name: 'War Belt',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 54,
    baseId: ids.PlatedBelt,
    imageId: ids.PlatedBelt,
    properties: {
      [ItemPropertyType.Defense]: [41, 52],
      [ItemPropertyType.PotionSlots]: 16,
      [ItemPropertyType.MinimumStrength]: 110,
      [ItemPropertyType.Durability]: 24,
    },
  },
  [ids.SpiderwebSash]: {
    id: ids.SpiderwebSash,
    name: 'Spiderweb Sash',
    tier: ItemTierType.Elite,
    clvl: 46,
    ilvl: 61,
    baseId: ids.Sash,
    imageId: ids.Sash,
    properties: {
      [ItemPropertyType.Defense]: [55, 62],
      [ItemPropertyType.PotionSlots]: 16,
      [ItemPropertyType.MinimumStrength]: 50,
      [ItemPropertyType.Durability]: 12,
    },
  },
  [ids.VampirefangBelt]: {
    id: ids.VampirefangBelt,
    name: 'Vampirefang Belt',
    tier: ItemTierType.Elite,
    clvl: 51,
    ilvl: 68,
    baseId: ids.LightBelt,
    imageId: ids.LightBelt,
    properties: {
      [ItemPropertyType.Defense]: [56, 63],
      [ItemPropertyType.PotionSlots]: 16,
      [ItemPropertyType.MinimumStrength]: 50,
      [ItemPropertyType.Durability]: 14,
    },
  },
  [ids.MithrilCoil]: {
    id: ids.MithrilCoil,
    name: 'Mithril Coil',
    tier: ItemTierType.Elite,
    clvl: 56,
    ilvl: 75,
    baseId: ids.Belt,
    imageId: ids.Belt,
    properties: {
      [ItemPropertyType.Defense]: [58, 65],
      [ItemPropertyType.PotionSlots]: 16,
      [ItemPropertyType.MinimumStrength]: 106,
      [ItemPropertyType.Durability]: 16,
    },
  },
  [ids.TrollBelt]: {
    id: ids.TrollBelt,
    name: 'Troll Belt',
    tier: ItemTierType.Elite,
    clvl: 62,
    ilvl: 82,
    baseId: ids.HeavyBelt,
    imageId: ids.HeavyBelt,
    properties: {
      [ItemPropertyType.Defense]: [59, 66],
      [ItemPropertyType.PotionSlots]: 16,
      [ItemPropertyType.MinimumStrength]: 151,
      [ItemPropertyType.Durability]: 18,
    },
  },
  [ids.ColossusGirdle]: {
    id: ids.ColossusGirdle,
    name: 'Colossus Girdle',
    tier: ItemTierType.Elite,
    clvl: 67,
    ilvl: 85,
    baseId: ids.PlatedBelt,
    imageId: ids.PlatedBelt,
    properties: {
      [ItemPropertyType.Defense]: [61, 71],
      [ItemPropertyType.PotionSlots]: 16,
      [ItemPropertyType.MinimumStrength]: 185,
      [ItemPropertyType.Durability]: 24,
    },
  },
};

export default mapItems({
  type: ItemType.Belt,
  size: [1, 2],
  mapDescription: (item) => [[mapItemName(item), ...mapItemProperties(item)]],
})(items);

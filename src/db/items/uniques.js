import {getItemById} from '../../queries/get-item-by-id.js';
import {PropertyType, ItemRarityType, ItemType} from '../enums/index.js';
import ids from '../ids/index.js';
import {mapItemName} from '../utils/map-item-name.js';
import {mapItemProperties} from '../utils/map-item-properties.js';
import {mapItems} from '../utils/map-items.js';
import {resolveStats} from '../utils/resolve-stats.js';

const items = {
  [ids.BladeOfAliBaba]: {
    id: ids.BladeOfAliBaba,
    name: 'Blade of Ali Baba',
    type: ItemType.Sword,
    size: [3, 1],
    clvl: 35,
    baseId: ids.Tulwar,
    sockets: [null, null],
    stats: {
      [PropertyType.EnhancedDamage]: [60, 120],
      [PropertyType.ExtraGoldByLevel]: [2, 247, 2.5],
      [PropertyType.MagicFind]: [1, 99, 1],
      [PropertyType.Mana]: [15],
      [PropertyType.Dexterity]: [5, 15],
    },
  },
  [ids.BloodCrescent]: {
    id: ids.BloodCrescent,
    name: 'Blood Crescent',
    type: ItemType.Sword,
    size: [3, 1],
    clvl: 7,
    ilvl: 87,
    baseId: ids.Scimitar,
    stats: {
      [PropertyType.EnhancedDamage]: [60, 80],
      [PropertyType.OpenWounds]: [33],
      [PropertyType.IncreasedAttackSpeed]: [15],
      [PropertyType.LifeStolenPerHit]: [15],
      [PropertyType.AllResistances]: [15],
      [PropertyType.Life]: [15],
      [PropertyType.LightRadius]: [4],
    },
  },
  [ids.LidlessWall]: {
    id: ids.LidlessWall,
    name: 'Lidless Wall',
    type: ItemType.Shield,
    size: [3, 2],
    clvl: 35,
    baseId: ids.GrimShield,
    sockets: [null, null],
    stats: {
      [PropertyType.EnhancedDefense]: [80, 130],
      [PropertyType.AllSkillLevels]: [1],
      [PropertyType.IncreaseMaximumMana]: [10],
      [PropertyType.FasterCastRate]: [20],
      [PropertyType.ManaAfterKill]: [3, 5],
      [PropertyType.Energy]: [10],
      [PropertyType.LightRadius]: [1],
    },
  },
  [ids.StoneOfJordan]: {
    id: ids.StoneOfJordan,
    name: 'Stone of Jordan',
    type: ItemType.Ring,
    size: [1, 1],
    clvl: 29,
    ilvl: 66,
    stats: {
      [PropertyType.AllSkillLevels]: [1],
      [PropertyType.LightningDamage]: [1, 12],
      [PropertyType.Mana]: [20],
      [PropertyType.IncreaseMaximumMana]: [25],
    },
  },
  [ids.WallOfTheEyeless]: {
    id: ids.WallOfTheEyeless,
    name: 'Wall of the Eyeless',
    type: ItemType.Shield,
    size: [3, 2],
    clvl: 35,
    baseId: ids.BoneShield,
    sockets: [null, null],
    stats: {
      [PropertyType.EnhancedDefense]: [30, 40],
      [PropertyType.Defense]: [10],
      [PropertyType.ManaAfterKill]: [5],
      [PropertyType.FasterCastRate]: [20],
      [PropertyType.ManaStolenPerHit]: [3],
      [PropertyType.PoisonResist]: [20],
    },
  },
};

export default mapItems({
  rarity: ItemRarityType.Unique,
  mapDescription: (item) => {
    let description = [{text: item.name, color: 'item.rarity.unique'}];

    if (item.baseId) {
      const baseItem = getItemById(item.baseId);
      if (baseItem) {
        item.properties = baseItem.properties;
        description.push({
          ...mapItemName(baseItem),
          color: 'item.rarity.unique',
        });
        description = description.concat(mapItemProperties(item));
      }
    }

    if (item.stats) {
      Object.entries(item.stats).forEach(([property, values]) => {
        description.push({
          text: resolveStats({property, values}),
          color: 'item.rarity.magic',
        });
      });
    }

    return [description];
  },
})(items);

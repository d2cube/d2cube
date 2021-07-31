import {getItemById} from '../../queries/get-item-by-id.js';
import {
  ItemQualityType,
  ItemType,
  MagicPropertyType,
} from '../../enums/index.js';
import ids from '../ids/index.js';
import {mapItemName} from '../utils/map-item-name.js';
import {mapItemProperties} from '../utils/map-item-properties.js';
import {mapItems} from '../utils/map-items.js';
import {resolveMagicProperties} from '../utils/resolve-magic-properties.js';

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
      [MagicPropertyType.EnhancedDamage]: [60, 120],
      [MagicPropertyType.ExtraGoldByLevel]: [2, 247, 2.5],
      [MagicPropertyType.MagicFind]: [1, 99, 1],
      [MagicPropertyType.Mana]: [15],
      [MagicPropertyType.Dexterity]: [5, 15],
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
      [MagicPropertyType.EnhancedDamage]: [60, 80],
      [MagicPropertyType.OpenWounds]: [33],
      [MagicPropertyType.IncreasedAttackSpeed]: [15],
      [MagicPropertyType.LifeStolenPerHit]: [15],
      [MagicPropertyType.AllResistances]: [15],
      [MagicPropertyType.Life]: [15],
      [MagicPropertyType.LightRadius]: [4],
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
      [MagicPropertyType.EnhancedDefense]: [80, 130],
      [MagicPropertyType.AllSkillLevels]: [1],
      [MagicPropertyType.IncreaseMaximumMana]: [10],
      [MagicPropertyType.FasterCastRate]: [20],
      [MagicPropertyType.ManaAfterKill]: [3, 5],
      [MagicPropertyType.Energy]: [10],
      [MagicPropertyType.LightRadius]: [1],
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
      [MagicPropertyType.AllSkillLevels]: [1],
      [MagicPropertyType.LightningDamage]: [1, 12],
      [MagicPropertyType.Mana]: [20],
      [MagicPropertyType.IncreaseMaximumMana]: [25],
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
      [MagicPropertyType.EnhancedDefense]: [30, 40],
      [MagicPropertyType.Defense]: [10],
      [MagicPropertyType.ManaAfterKill]: [5],
      [MagicPropertyType.FasterCastRate]: [20],
      [MagicPropertyType.ManaStolenPerHit]: [3],
      [MagicPropertyType.PoisonResist]: [20],
    },
  },
};

export default mapItems({
  quality: ItemQualityType.Unique,
  mapDescription: (item) => {
    let description = [{text: item.name, color: 'item.quality.unique'}];

    if (item.baseId) {
      const baseItem = getItemById(item.baseId);
      if (baseItem) {
        item.properties = baseItem.properties;
        description.push({
          ...mapItemName(baseItem),
          color: 'item.quality.unique',
        });
        description = description.concat(mapItemProperties(item));
      }
    }

    if (item.stats) {
      Object.entries(item.stats).forEach(([property, values]) => {
        description.push({
          text: resolveMagicProperties({property, values}),
          color: 'item.quality.magic',
        });
      });
    }

    return [description];
  },
})(items);

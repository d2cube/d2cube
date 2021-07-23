import {ItemType, GemQualityType, PotionCategoryType} from '../enums/index.js';
import ids from '../ids/index.js';

export default [
  {
    name: '3 El Runes → 1 Eld Rune',
    sources: [ids.El, ids.El, ids.El],
    target: ids.Eld,
  },
  {
    name: '3 Eld Runes → 1 Tir Rune',
    sources: [ids.Eld, ids.Eld, ids.Eld],
    target: ids.Tir,
  },
  {
    name: '3 Tir Runes → 1 Nef Rune',
    sources: [ids.Tir, ids.Tir, ids.Tir],
    target: ids.Nef,
  },
  {
    name: '3 Nef Runes → 1 Eth Rune',
    sources: [ids.Nef, ids.Nef, ids.Nef],
    target: ids.Eth,
  },
  {
    name: '3 Eth Runes → 1 Ith Rune',
    sources: [ids.Eth, ids.Eth, ids.Eth],
    target: ids.Ith,
  },
  {
    name: '3 Ith Runes → 1 Tal Rune',
    sources: [ids.Ith, ids.Ith, ids.Ith],
    target: ids.Tal,
  },
  {
    name: '3 Tal Runes → 1 Ral Rune',
    sources: [ids.Tal, ids.Tal, ids.Tal],
    target: ids.Ral,
  },
  {
    name: '3 Ral Runes → 1 Ort Rune',
    sources: [ids.Ral, ids.Ral, ids.Ral],
    target: ids.Ort,
  },
  {
    name: '3 Ort Runes → 1 Thul Rune',
    sources: [ids.Ort, ids.Ort, ids.Ort],
    target: ids.Thul,
  },
  {
    name: '3 Thul Runes + 1 Chipped Topaz → 1 Amn Rune',
    sources: [ids.Thul, ids.Thul, ids.Thul, ids.ChippedTopaz],
    target: ids.Amn,
  },
  {
    name: '3 Amn Runes + 1 Chipped Amethyst → 1 Sol Rune',
    sources: [ids.Amn, ids.Amn, ids.Amn, ids.ChippedAmethyst],
    target: ids.Sol,
  },
  {
    name: '3 Sol Runes + 1 Chipped Sapphire → 1 Shael Rune',
    sources: [ids.Sol, ids.Sol, ids.Sol, ids.ChippedSapphire],
    target: ids.Shael,
  },
  {
    name: '3 Shael Runes + 1 Chipped Ruby → 1 Dol Rune',
    sources: [ids.Shael, ids.Shael, ids.Shael, ids.ChippedRuby],
    target: ids.Dol,
  },
  {
    name: '3 Dol Runes + 1 Chipped Emerald → 1 Hel Rune',
    sources: [ids.Dol, ids.Dol, ids.Dol, ids.ChippedEmerald],
    target: ids.Hel,
  },
  {
    name: '3 Hel Runes + 1 Chipped Diamond → 1 Io Rune',
    sources: [ids.Hel, ids.Hel, ids.Hel, ids.ChippedDiamond],
    target: ids.Io,
  },
  {
    name: '3 Io Runes + 1 Flawed Topaz → 1 Lum Rune',
    sources: [ids.Io, ids.Io, ids.Io, ids.FlawedTopaz],
    target: ids.Lum,
  },
  {
    name: '3 Lum Runes + 1 Flawed Amethyst → 1 Ko Rune',
    sources: [ids.Lum, ids.Lum, ids.Lum, ids.FlawedAmethyst],
    target: ids.Ko,
  },
  {
    name: '3 Ko Runes + 1 Flawed Sapphire → 1 Fal Rune',
    sources: [ids.Ko, ids.Ko, ids.Ko, ids.FlawedSapphire],
    target: ids.Fal,
  },
  {
    name: '3 Fal Runes + 1 Flawed Ruby → 1 Lem Rune',
    sources: [ids.Fal, ids.Fal, ids.Fal, ids.FlawedRuby],
    target: ids.Lem,
  },
  {
    name: '3 Lem Runes + 1 Flawed Emerald → 1 Pul Rune',
    sources: [ids.Lem, ids.Lem, ids.Lem, ids.FlawedEmerald],
    target: ids.Pul,
  },
  {
    name: '2 Pul Runes + 1 Flawed Diamond → 1 Um Rune',
    sources: [ids.Pul, ids.Pul, ids.FlawedDiamond],
    target: ids.Um,
  },
  {
    name: '2 Um Runes + 1 Topaz → 1 Mal Rune',
    sources: [ids.Um, ids.Um, ids.Topaz],
    target: ids.Mal,
  },
  {
    name: '2 Mal Runes + 1 Amethyst → 1 Ist Rune',
    sources: [ids.Mal, ids.Mal, ids.Amethyst],
    target: ids.Ist,
  },
  {
    name: '2 Ist Runes + 1 Sapphire → 1 Gul Rune',
    sources: [ids.Ist, ids.Ist, ids.Sapphire],
    target: ids.Gul,
  },
  {
    name: '2 Gul Runes + 1 Ruby → 1 Vex Rune',
    sources: [ids.Gul, ids.Gul, ids.Ruby],
    target: ids.Vex,
  },
  {
    name: '2 Vex Runes + 1 Emerald → 1 Ohm Rune',
    sources: [ids.Vex, ids.Vex, ids.Emerald],
    target: ids.Ohm,
  },
  {
    name: '2 Ohm Runes + 1 Diamond → 1 Lo Rune',
    sources: [ids.Ohm, ids.Ohm, ids.Emerald],
    target: ids.Lo,
  },
  {
    name: '2 Lo Runes + 1 Flawless Topaz → 1 Sur Rune',
    sources: [ids.Lo, ids.Lo, ids.FlawlessTopaz],
    target: ids.Sur,
  },
  {
    name: '2 Sur Runes + 1 Flawless Amethyst → 1 Ber Rune',
    sources: [ids.Sur, ids.Sur, ids.FlawlessAmethyst],
    target: ids.Ber,
  },
  {
    name: '2 Ber Runes + 1 Flawless Sapphire → 1 Jah Rune',
    sources: [ids.Ber, ids.Ber, ids.FlawlessSapphire],
    target: ids.Jah,
  },
  {
    name: '2 Jah Runes + 1 Flawless Ruby → 1 Cham Rune',
    sources: [ids.Jah, ids.Jah, ids.FlawlessRuby],
    target: ids.Cham,
  },
  {
    name: '2 Cham Runes + 1 Flawless Emerald → 1 Zod Rune',
    sources: [ids.Cham, ids.Cham, ids.FlawlessEmerald],
    target: ids.Zod,
  },
  {
    name: '3 Rejuvenation Potions → 1 Full Rejuvenation Potion',
    sources: [
      ids.RejuvenationPotion,
      ids.RejuvenationPotion,
      ids.RejuvenationPotion,
    ],
    target: ids.FullRejuvenationPotion,
  },
  {
    name: '3 Chipped Ruby → 1 Flawed Ruby',
    sources: [ids.ChippedRuby, ids.ChippedRuby, ids.ChippedRuby],
    target: ids.FlawedRuby,
  },
  {
    name: '3 Chipped Sapphire → 1 Flawed Sapphire',
    sources: [ids.ChippedSapphire, ids.ChippedSapphire, ids.ChippedSapphire],
    target: ids.FlawedSapphire,
  },
  {
    name: '3 Chipped Topaz → 1 Flawed Topaz',
    sources: [ids.ChippedTopaz, ids.ChippedTopaz, ids.ChippedTopaz],
    target: ids.FlawedTopaz,
  },
  {
    name: '3 Chipped Emerald → 1 Flawed Emerald',
    sources: [ids.ChippedEmerald, ids.ChippedEmerald, ids.ChippedEmerald],
    target: ids.FlawedEmerald,
  },
  {
    name: '3 Chipped Diamond → 1 Flawed Diamond',
    sources: [ids.ChippedDiamond, ids.ChippedDiamond, ids.ChippedDiamond],
    target: ids.FlawedDiamond,
  },
  {
    name: '3 Chipped Amethyst → 1 Flawed Amethyst',
    sources: [ids.ChippedAmethyst, ids.ChippedAmethyst, ids.ChippedAmethyst],
    target: ids.FlawedAmethyst,
  },
  {
    name: '3 Chipped Skull → 1 Flawed Skull',
    sources: [ids.ChippedSkull, ids.ChippedSkull, ids.ChippedSkull],
    target: ids.FlawedSkull,
  },
  {
    name: '3 Flawed Ruby → 1 Ruby',
    sources: [ids.FlawedRuby, ids.FlawedRuby, ids.FlawedRuby],
    target: ids.Ruby,
  },
  {
    name: '3 Flawed Sapphire → 1 Sapphire',
    sources: [ids.FlawedSapphire, ids.FlawedSapphire, ids.FlawedSapphire],
    target: ids.Sapphire,
  },
  {
    name: '3 Flawed Topaz → 1 Topaz',
    sources: [ids.FlawedTopaz, ids.FlawedTopaz, ids.FlawedTopaz],
    target: ids.Topaz,
  },
  {
    name: '3 Flawed Emerald → 1 Emerald',
    sources: [ids.FlawedEmerald, ids.FlawedEmerald, ids.FlawedEmerald],
    target: ids.Emerald,
  },
  {
    name: '3 Flawed Diamond → 1 Diamond',
    sources: [ids.FlawedDiamond, ids.FlawedDiamond, ids.FlawedDiamond],
    target: ids.Diamond,
  },
  {
    name: '3 Flawed Amethyst → 1 Amethyst',
    sources: [ids.FlawedAmethyst, ids.FlawedAmethyst, ids.FlawedAmethyst],
    target: ids.Amethyst,
  },
  {
    name: '3 Flawed Skull → 1 Skull',
    sources: [ids.FlawedSkull, ids.FlawedSkull, ids.FlawedSkull],
    target: ids.Skull,
  },
  {
    name: '3 Ruby → 1 FlawlessRuby',
    sources: [ids.Ruby, ids.Ruby, ids.Ruby],
    target: ids.FlawedRuby,
  },
  {
    name: '3 Sapphire → 1 FlawlessSapphire',
    sources: [ids.Sapphire, ids.Sapphire, ids.Sapphire],
    target: ids.FlawedSapphire,
  },
  {
    name: '3 Topaz → 1 FlawlessTopaz',
    sources: [ids.Topaz, ids.Topaz, ids.Topaz],
    target: ids.FlawedTopaz,
  },
  {
    name: '3 Emerald → 1 FlawlessEmerald',
    sources: [ids.Emerald, ids.Emerald, ids.Emerald],
    target: ids.FlawedEmerald,
  },
  {
    name: '3 Diamond → 1 FlawlessDiamond',
    sources: [ids.Diamond, ids.Diamond, ids.Diamond],
    target: ids.FlawedDiamond,
  },
  {
    name: '3 Amethyst → 1 FlawlessAmethyst',
    sources: [ids.Amethyst, ids.Amethyst, ids.Amethyst],
    target: ids.FlawedAmethyst,
  },
  {
    name: '3 Skull → 1 FlawlessSkull',
    sources: [ids.Skull, ids.Skull, ids.Skull],
    target: ids.FlawedSkull,
  },
  {
    name: '3 Flawless Ruby → 1  Perfect Ruby',
    sources: [ids.FlawlessRuby, ids.FlawlessRuby, ids.FlawlessRuby],
    target: ids.PerfectRuby,
  },
  {
    name: '3 Flawless Sapphire → 1  Perfect Sapphire',
    sources: [ids.FlawlessSapphire, ids.FlawlessSapphire, ids.FlawlessSapphire],
    target: ids.PerfectSapphire,
  },
  {
    name: '3 Flawless Topaz → 1  Perfect Topaz',
    sources: [ids.FlawlessTopaz, ids.FlawlessTopaz, ids.FlawlessTopaz],
    target: ids.PerfectTopaz,
  },
  {
    name: '3 Flawless Emerald → 1  Perfect Emerald',
    sources: [ids.FlawlessEmerald, ids.FlawlessEmerald, ids.FlawlessEmerald],
    target: ids.PerfectEmerald,
  },
  {
    name: '3 Flawless Diamond → 1  Perfect Diamond',
    sources: [ids.FlawlessDiamond, ids.FlawlessDiamond, ids.FlawlessDiamond],
    target: ids.PerfectDiamond,
  },
  {
    name: '3 Flawless Amethyst → 1  Perfect Amethyst',
    sources: [ids.FlawlessAmethyst, ids.FlawlessAmethyst, ids.FlawlessAmethyst],
    target: ids.PerfectAmethyst,
  },
  {
    name: '3 Flawless Skull → 1  Perfect Skull',
    sources: [ids.FlawlessSkull, ids.FlawlessSkull, ids.FlawlessSkull],
    target: ids.PerfectSkull,
  },
  {
    name: '2 Bolts → 1 Arrows',
    sources: [ids.Bolts, ids.Bolts],
    target: ids.Arrows,
  },
  {
    name: '2 Arrows → 1 Bolts',
    sources: [ids.Arrows, ids.Arrows],
    target: ids.Bolts,
  },
  {
    name: '3 Health Potions + 3 Mana Potions + 1 Chipped Gem = 1 Rejuvenation Potion',
    sources: [
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        placeholderId: ids.SuperHealingPotion,
        placeholderDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        placeholderId: ids.SuperHealingPotion,
        placeholderDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        placeholderId: ids.SuperHealingPotion,
        placeholderDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        placeholderId: ids.SuperManaPotion,
        placeholderDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        placeholderId: ids.SuperManaPotion,
        placeholderDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        placeholderId: ids.SuperManaPotion,
        placeholderDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Gem,
        quality: GemQualityType.Chipped,
        placeholderId: ids.ChippedDiamond,
        placeholderDescription: [[{text: 'Chipped Gem (any type)'}]],
      },
    ],
    target: ids.RejuvenationPotion,
  },
  {
    name: '3 Health Potions + 3 Mana Potions + 1 Regular Gem = 1 Full Rejuvenation Potion',
    sources: [
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        placeholderId: ids.SuperHealingPotion,
        placeholderDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        placeholderId: ids.SuperHealingPotion,
        placeholderDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        placeholderId: ids.SuperHealingPotion,
        placeholderDescription: [[{text: 'Health Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        placeholderId: ids.SuperManaPotion,
        placeholderDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        placeholderId: ids.SuperManaPotion,
        placeholderDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Mana,
        placeholderId: ids.SuperManaPotion,
        placeholderDescription: [[{text: 'Mana Potion (any type)'}]],
      },
      {
        type: ItemType.Gem,
        quality: GemQualityType.Regular,
        placeholderId: ids.Diamond,
        placeholderDescription: [[{text: 'Regular Gem (any type)'}]],
      },
    ],
    target: ids.FullRejuvenationPotion,
  },
  {
    name: '1 Strangling Gas Potion + 1 Health Potion = 1 Antidote Potion',
    sources: [
      ids.StranglingGasPotion,
      {
        type: ItemType.Potion,
        category: PotionCategoryType.Health,
        placeholderId: ids.SuperHealingPotion,
        placeholderDescription: [[{text: 'Health Potion (any type)'}]],
      },
    ],
    target: ids.AntidotePotion,
  },
];

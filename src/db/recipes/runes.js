import {RecipeType} from '../enums/index.js';
import {mapRecipeProps} from '../utils/map-recipe-props.js';
import ids from '../ids/index.js';

const recipes = [
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
];

export default mapRecipeProps({
  type: RecipeType.Rune,
})(recipes);

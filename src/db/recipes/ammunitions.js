import ids from '../ids/index.js';

export default [
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
];

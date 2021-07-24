import {resolveStats, resolveTemplate} from '../utils/index.js';

const Stats = ({stats, template}) =>
  resolveTemplate(template, resolveStats(stats));

export default Stats;

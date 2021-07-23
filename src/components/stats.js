import {resolveStats, resolveTemplate} from '../utils/index.js';

export const Stats = ({stats, template}) =>
  resolveTemplate(template, resolveStats(stats));

import {mark} from '../utils/mark.js';
import BrandText from './ui/brand-text.js';

const RunesName = ({query = '', runes = []}) => (
  <BrandText
    color="item.rune"
    text={mark(runes.join(''), query, {isCaseSensitive: true})}
  />
);

export default RunesName;

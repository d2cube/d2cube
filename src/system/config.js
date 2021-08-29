import styles from './styles/index.js';

const responsiveCssProperties = ['display', 'height', 'width'];

const elementShorthandPropsMapping = {
  // Visual
  backgroundColor: ['bg'],
  border: ['b'],
  color: ['color'],
  display: ['display'],
  opacity: ['opacity'],
  overflow: ['overflow'],
  // Margin
  margin: ['m'],
  marginBottom: ['mb', 'my', 'm'],
  marginLeft: ['ml', 'mx', 'm'],
  marginRight: ['mr', 'mx', 'm'],
  marginTop: ['mt', 'my', 'm'],
  // Padding
  padding: ['p'],
  paddingBottom: ['pb', 'py', 'p'],
  paddingLeft: ['pl', 'px', 'p'],
  paddingRight: ['pr', 'px', 'p'],
  paddingTop: ['pt', 'py', 'p'],
  // Position
  position: ['position'],
  bottom: ['bottom'],
  left: ['left'],
  right: ['right'],
  top: ['top'],
  // Dimension
  height: ['h'],
  maxHeight: ['maxH'],
  minHeight: ['minH'],
  width: ['w'],
  zIndex: ['z'],
};

const elementStyles = [({onClick}) => (onClick ? styles.interactive : null)];

export default {
  elementShorthandPropsMapping,
  elementStyles,
  responsiveCssProperties,
};

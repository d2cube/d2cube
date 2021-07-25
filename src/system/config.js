const elementShorthandPropsMapping = {
  // Visual
  backgroundColor: ['bg'],
  border: ['b'],
  color: ['color'],
  opacity: ['opacity'],
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
  width: ['w'],
  zIndex: ['z'],
};

const elementStyles = [
  ({onClick}) =>
    onClick
      ? {
          cursor: 'pointer',
          ':hover': {
            opacity: 'hover',
          },
        }
      : null,
];

export default {
  elementShorthandPropsMapping,
  elementStyles,
};

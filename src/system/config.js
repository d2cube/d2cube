const elementShorthandPropsMapping = {
  backgroundColor: ['bg'],
  color: ['color'],
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

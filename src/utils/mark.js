export const mark = (text, query, options = {}) => {
  const {isCaseSensitive = false} = options;
  const snippets = text.split(
    new RegExp(`(${query})`, `g${isCaseSensitive ? '' : 'i'}`),
  );

  return snippets.map((snippet, i) =>
    i % 2 === 0 ? snippet : <mark key={i}>{snippet}</mark>,
  );
};

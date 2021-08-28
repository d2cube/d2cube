export const mark = (text, query) => {
  const snippets = text.split(new RegExp(`(${query})`, 'gi'));
  return snippets.map((snippet, i) =>
    i % 2 === 0 ? snippet : <mark key={i}>{snippet}</mark>,
  );
};

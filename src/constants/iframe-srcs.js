const createIframeSrc = (id) =>
  `https://www.loom.com/embed/${id}?hideEmbedTopBar=true&autoplay=1`;

export const IFRAME_SRCS = {
  previews: {
    cube: createIframeSrc('2b88b1667ec643919fe0aeb2c4f353c2'),
    items: createIframeSrc('e2880ce20d864acb92ea5553562a4ace'),
    sets: createIframeSrc('2b88b1667ec643919fe0aeb2c4f353c2'),
    runewords: createIframeSrc('eeaa4cfabe0a4cfebbe2f48625c0e783'),
    developers: createIframeSrc('34348c39d6ed4465900bfeaa31f3d59a'),
  },
};

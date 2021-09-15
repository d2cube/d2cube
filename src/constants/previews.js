const createIframeSrc = (id) =>
  `https://www.loom.com/embed/${id}?hideEmbedTopBar=true&autoplay=1`;

export const PREVIEWS = {
  cube: {
    id: 'cube',
    href: '/cube',
    icon: 'nav.cube',
    title: 'Cube',
    description: 'Explore recipes with the Horadric Cube.',
    src: createIframeSrc('2b88b1667ec643919fe0aeb2c4f353c2'),
  },
  items: {
    id: 'items',
    href: '/items',
    icon: 'nav.items',
    title: 'Items',
    description: 'Query items with a powerful search interface.',
    src: createIframeSrc('e2880ce20d864acb92ea5553562a4ace'),
  },
  sets: {
    id: 'sets',
    href: '/sets',
    icon: 'nav.sets',
    title: 'Sets',
    description: 'View item sets and bonuses with the Inventory.',
    src: createIframeSrc('2b88b1667ec643919fe0aeb2c4f353c2'),
  },
  runewords: {
    id: 'runewords',
    href: '/runewords',
    icon: 'nav.runewords',
    title: 'Runewords',
    description: 'Explore Runewords with the Runegram.',
    src: createIframeSrc('eeaa4cfabe0a4cfebbe2f48625c0e783'),
  },
  developers: {
    id: 'developers',
    href: '/developers',
    icon: 'nav.developers',
    title: 'Developers',
    description: 'Reference the REST/Node API.',
    src: createIframeSrc('34348c39d6ed4465900bfeaa31f3d59a'),
  },
};

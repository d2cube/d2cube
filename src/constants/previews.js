const createIframeSrc = (id) =>
  `https://www.loom.com/embed/${id}?hideEmbedTopBar=true&autoplay=1`;

export const PREVIEWS = {
  cube: {
    id: 'cube',
    href: '/cube',
    icon: 'nav.cube',
    title: 'Cube',
    description: 'Explore recipes with the Horadric Cube.',
    src: createIframeSrc('ddeb1e7ccd2744f0a4dd89b7b5c34c5d'),
  },
  items: {
    id: 'items',
    href: '/items',
    icon: 'nav.items',
    title: 'Items',
    description: 'Query items with a powerful search interface.',
    src: createIframeSrc('9ecbdaac890042d0a2063c2c351f7c13'),
  },
  sets: {
    id: 'sets',
    href: '/sets',
    icon: 'nav.sets',
    title: 'Sets',
    description: 'View item sets and bonuses with the Inventory.',
    src: createIframeSrc('f21f3f2e3ca34dcc93103c3d8857ad3d'),
  },
  runewords: {
    id: 'runewords',
    href: '/runewords',
    icon: 'nav.runewords',
    title: 'Runewords',
    description: 'Explore Runewords with the Runegram.',
    src: createIframeSrc('aad7f6eec99b44bda45efae0323c6866'),
  },
  developers: {
    id: 'developers',
    href: '/developers',
    icon: 'nav.developers',
    title: 'Developers',
    description: 'Reference the REST/Node API.',
    src: createIframeSrc('7ec6d624313b4a5bb6af892c96019f47'),
  },
};

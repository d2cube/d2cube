export const resolveItemStats = (item) =>
  Object.entries(item.stats).map(([property, stat]) => ({
    text: `${property}: ${JSON.stringify(stat)}`,
  }));

export const MAX_COMPARE_PRODUCTS = 3;

export const canAddToComparison = (currentIds: string[], nextId: string) =>
  currentIds.includes(nextId) || currentIds.length < MAX_COMPARE_PRODUCTS;

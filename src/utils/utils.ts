// utils.ts
export function calculatePotentialSavings(monthlyRent: number, marketRate: number) {
    return (marketRate - monthlyRent).toFixed(2);
  }
export function coinChangeGreedy(coins: number[], amount: number): number {
  if (amount === 0) return 0;
  if (coins.length === 0) return -1;
  let count = 0;
  let remaining = amount;
  for (const coin of coins) {
    if (coin <= remaining) {
      count += Math.floor(remaining / coin);
      remaining %= coin;
    }
  }
  return remaining === 0 ? count : -1;
}

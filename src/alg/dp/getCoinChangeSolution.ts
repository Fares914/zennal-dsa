export function getCoinChangeSolution(
  coins: number[],
  amount: number,
): number[] {
  if (amount <= 0) return amount === 0 ? [] : [];
  const dp: number[] = Array(amount + 1).fill(Infinity);
  const parent: number[] = Array(amount + 1).fill(-1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i && dp[i - coin] !== Infinity) {
        if (dp[i - coin] + 1 < dp[i]) {
          dp[i] = dp[i - coin] + 1;
          parent[i] = coin;
        }
      }
    }
  }
  if (dp[amount] === Infinity) return [];

  const result: number[] = [];
  let curr = amount;
  while (curr > 0) {
    const coin = parent[curr];
    result.push(coin);
    curr -= coin;
  }
  return result;
}

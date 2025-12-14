export function getKnapsack01Items(
  weights: number[],
  values: number[],
  capacity: number,
): number[] {
  if (!weights.length || !values.length || capacity <= 0) {
    return [];
  }
  const n = weights.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    Array(capacity + 1).fill(0),
  );

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      dp[i][w] = dp[i - 1][w];
      if (weights[i - 1] <= w) {
        const valueWithItem = values[i - 1] + dp[i - 1][w - weights[i - 1]];
        dp[i][w] = Math.max(dp[i][w], valueWithItem);
      }
    }
  }

  const items: number[] = [];
  let w = capacity;
  for (let i = n; i > 0 && w > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      items.push(i - 1);
      w -= weights[i - 1];
    }
  }
  return items.reverse();
}

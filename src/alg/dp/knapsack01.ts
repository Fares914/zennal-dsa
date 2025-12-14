export function knapsack01(
  weights: number[],
  values: number[],
  capacity: number,
): number {
  if (!weights.length || !values.length || capacity <= 0) {
    return 0;
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
  return dp[n][capacity];
}

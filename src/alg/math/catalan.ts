export function catalan(n: number): number {
  if (n <= 1) return 1;
  const dp = Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - 1 - j];
    }
  }
  return dp[n];
}

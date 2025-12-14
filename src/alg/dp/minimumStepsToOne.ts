export function minimumStepsToOne(n: number): number {
  if (n <= 1) return 0;
  const dp: number[] = Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }
  return dp[n];
}

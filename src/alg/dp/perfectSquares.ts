export function perfectSquares(n: number): number {
  if (n <= 0) return 0;

  const dp: number[] = Array(n + 1).fill(Infinity);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
}

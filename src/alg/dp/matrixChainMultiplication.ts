export function matrixChainMultiplication(dims: number[]): number {
  if (dims.length < 2) return 0;
  const n = dims.length - 1;

  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let l = 2; l <= n; l++) {
    for (let i = 0; i <= n - l; i++) {
      const j = i + l - 1;
      dp[i][j] = Infinity;

      for (let k = i; k < j; k++) {
        const cost =
          dp[i][k] + dp[k + 1][j] + dims[i] * dims[k + 1] * dims[j + 1];
        dp[i][j] = Math.min(dp[i][j], cost);
      }
    }
  }
  return dp[0][n - 1];
}

export function getMatrixChainMultOrder(dims: number[]): string {
  if (dims.length < 2) return "";
  const n = dims.length - 1;
  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  const split: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let l = 2; l <= n; l++) {
    for (let i = 0; i <= n - l; i++) {
      const j = i + l - 1;
      dp[i][j] = Infinity;
      for (let k = i; k < j; k++) {
        const cost =
          dp[i][k] + dp[k + 1][j] + dims[i] * dims[k + 1] * dims[j + 1];
        if (cost < dp[i][j]) {
          dp[i][j] = cost;
          split[i][j] = k;
        }
      }
    }
  }

  function getOrder(i: number, j: number): string {
    if (i === j) {
      return `A${i + 1}`;
    }
    const k = split[i][j];
    return `(${getOrder(i, k)} × ${getOrder(k + 1, j)})`;
  }
  return getOrder(0, n - 1);
}

export function getMinCostPath(grid: number[][]): number[] {
  if (grid.length === 0 || grid[0].length === 0) return [];
  const m = grid.length;
  const n = grid[0].length;
  const dp: number[][] = Array.from({ length: m }, () =>
    Array(n).fill(Infinity),
  );
  dp[0][0] = grid[0][0];
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  const path: number[] = [];
  let i = m - 1;
  let j = n - 1;
  while (i > 0 || j > 0) {
    path.unshift(grid[i][j]);
    if (i === 0) {
      j--;
    } else if (j === 0) {
      i--;
    } else {
      if (dp[i - 1][j] < dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  }
  path.unshift(grid[0][0]);
  return path;
}

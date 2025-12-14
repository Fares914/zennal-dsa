export function bell(n: number): number {
  const bell: number[][] = Array(n + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));
  bell[0][0] = 1;
  for (let i = 1; i <= n; i++) {
    bell[i][0] = bell[i - 1][i - 1];
    for (let j = 1; j <= i; j++) {
      bell[i][j] = bell[i][j - 1] + bell[i - 1][j - 1];
    }
  }
  return bell[n][0];
}

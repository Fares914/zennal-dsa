export function weightedJobScheduling(
  jobs: Array<[number, number, number]>,
): number {
  if (jobs.length === 0) return 0;

  const sorted = [...jobs].sort((a, b) => a[1] - b[1]);
  const n = sorted.length;
  const dp = Array(n);
  dp[0] = sorted[0][2];
  for (let i = 1; i < n; i++) {
    const profit = sorted[i][2];

    let latestNonOverlapping = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (sorted[j][1] <= sorted[i][0]) {
        latestNonOverlapping = j;
        break;
      }
    }
    let includedProfit = profit;
    if (latestNonOverlapping !== -1) {
      includedProfit += dp[latestNonOverlapping];
    }
    dp[i] = Math.max(dp[i - 1], includedProfit);
  }
  return dp[n - 1];
}

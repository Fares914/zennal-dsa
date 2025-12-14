export function rodCutting(prices: number[]): number {
  const n = prices.length;

  const dp: number[] = Array(n + 1).fill(0);
  for (let length = 1; length <= n; length++) {
    for (let piece = 1; piece <= length; piece++) {
      dp[length] = Math.max(dp[length], prices[piece - 1] + dp[length - piece]);
    }
  }
  return dp[n];
}

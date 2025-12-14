export function getRodCuttingPieces(prices: number[]): number[] {
  const n = prices.length;
  const dp: number[] = Array(n + 1).fill(0);
  const cuts: number[] = Array(n + 1).fill(0);
  for (let length = 1; length <= n; length++) {
    for (let piece = 1; piece <= length; piece++) {
      if (prices[piece - 1] + dp[length - piece] > dp[length]) {
        dp[length] = prices[piece - 1] + dp[length - piece];
        cuts[length] = piece;
      }
    }
  }

  const pieces: number[] = [];
  let remaining = n;
  while (remaining > 0) {
    const piece = cuts[remaining];
    pieces.push(piece);
    remaining -= piece;
  }
  return pieces;
}

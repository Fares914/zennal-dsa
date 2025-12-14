export function getHousesToRob(amounts: number[]): number[] {
  if (amounts.length === 0) return [];
  if (amounts.length === 1) return [0];
  const dp: number[] = Array(amounts.length).fill(0);
  const parent: number[] = Array(amounts.length).fill(-1);
  dp[0] = amounts[0];
  dp[1] = Math.max(amounts[0], amounts[1]);
  for (let i = 2; i < amounts.length; i++) {
    if (amounts[i] + dp[i - 2] > dp[i - 1]) {
      dp[i] = amounts[i] + dp[i - 2];
      parent[i] = i - 2;
    } else {
      dp[i] = dp[i - 1];
      parent[i] = i - 1;
    }
  }

  const robbed: number[] = [];
  let idx = amounts.length - 1;
  while (idx >= 0) {
    if (parent[idx] === -1) {
      robbed.unshift(idx);
      break;
    } else if (parent[idx] === idx - 1) {
      idx = parent[idx];
    } else {
      robbed.unshift(idx);
      idx = parent[idx];
    }
  }
  return robbed;
}

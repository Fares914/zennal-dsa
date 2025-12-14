export function houseRobber(amounts: number[]): number {
  if (amounts.length === 0) return 0;
  if (amounts.length === 1) return amounts[0];
  let prev2 = amounts[0];
  let prev1 = Math.max(amounts[0], amounts[1]);
  for (let i = 2; i < amounts.length; i++) {
    const curr = Math.max(amounts[i] + prev2, prev1);
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

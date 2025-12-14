export function combinationSum(
  candidates: number[],
  target: number,
): number[][] {
  const result: number[][] = [];
  candidates.sort((a, b) => a - b);
  function backtrack(start: number, current: number[], sum: number): void {
    if (sum === target) {
      result.push([...current]);
      return;
    }
    if (sum > target) {
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      backtrack(i + 1, current, sum + candidates[i]);
      current.pop();
    }
  }
  backtrack(0, [], 0);
  return result;
}

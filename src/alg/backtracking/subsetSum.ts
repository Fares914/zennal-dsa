export function subsetSum(arr: number[], target: number): number[][] {
  const result: number[][] = [];
  function findSubsets(
    index: number,
    current: number[],
    currentSum: number,
  ): void {
    if (currentSum === target) {
      result.push([...current]);
      return;
    }
    if (index === arr.length || currentSum > target) {
      return;
    }

    current.push(arr[index]);
    findSubsets(index + 1, current, currentSum + arr[index]);
    current.pop();

    findSubsets(index + 1, current, currentSum);
  }
  findSubsets(0, [], 0);
  return result;
}

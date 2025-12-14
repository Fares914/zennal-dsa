export function subsets<T>(arr: T[]): T[][] {
  const result: T[][] = [[]];
  function generateSubsets(index: number, current: T[]): void {
    if (index === arr.length) {
      return;
    }
    for (let i = index; i < arr.length; i++) {
      current.push(arr[i]);
      result.push([...current]);
      generateSubsets(i + 1, current);
      current.pop();
    }
  }
  generateSubsets(0, []);
  return result;
}

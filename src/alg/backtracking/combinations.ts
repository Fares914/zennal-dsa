export function combinations<T>(arr: T[], k: number): T[][] {
  if (k > arr.length || k <= 0) return [];
  if (k === arr.length) return [arr];
  const result: T[][] = [];
  function combine(start: number, current: T[]): void {
    if (current.length === k) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      combine(i + 1, current);
      current.pop();
    }
  }
  combine(0, []);
  return result;
}

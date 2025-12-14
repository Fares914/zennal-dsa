export function findInsertPosition<T>(
  array: T[],
  target: T,
  compareFn: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0),
): number {
  let left = 0;
  let right = array.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const comparison = compareFn(array[mid], target);
    if (comparison < 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

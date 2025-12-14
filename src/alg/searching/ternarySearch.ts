export function ternarySearch<T>(
  array: T[],
  target: T,
  compareFn: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0),
): number {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const mid1 = left + Math.floor((right - left) / 3);
    const mid2 = right - Math.floor((right - left) / 3);
    const cmp1 = compareFn(array[mid1], target);
    const cmp2 = compareFn(array[mid2], target);
    if (cmp1 === 0) {
      return mid1;
    }
    if (cmp2 === 0) {
      return mid2;
    }
    if (cmp1 < 0) {
      left = mid1 + 1;
    } else if (cmp2 > 0) {
      right = mid2 - 1;
    } else {
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }
  return -1;
}

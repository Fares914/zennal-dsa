export function binarySearchRecursive<T>(
  array: T[],
  target: T,
  compareFn: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0),
): number {
  return binarySearchHelper(array, target, 0, array.length - 1, compareFn);
}

function binarySearchHelper<T>(
  array: T[],
  target: T,
  left: number,
  right: number,
  compareFn: (a: T, b: T) => number,
): number {
  if (left > right) {
    return -1;
  }
  const mid = Math.floor((left + right) / 2);
  const comparison = compareFn(array[mid], target);
  if (comparison === 0) {
    return mid;
  } else if (comparison < 0) {
    return binarySearchHelper(array, target, mid + 1, right, compareFn);
  } else {
    return binarySearchHelper(array, target, left, mid - 1, compareFn);
  }
}

import { binarySearch } from "./binarySearch";

export function exponentialSearch<T>(
  array: T[],
  target: T,
  compareFn: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0),
): number {
  if (array.length === 0) {
    return -1;
  }
  if (compareFn(array[0], target) === 0) {
    return 0;
  }
  let i = 1;

  while (i < array.length && compareFn(array[i], target) < 0) {
    i *= 2;
  }

  const sliced = array.slice(Math.floor(i / 2), Math.min(i + 1, array.length));
  const result = binarySearch(sliced, target, compareFn);
  if (result === -1) {
    return -1;
  }
  return Math.floor(i / 2) + result;
}

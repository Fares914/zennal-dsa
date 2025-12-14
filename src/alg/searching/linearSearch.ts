export function linearSearch<T>(
  array: T[],
  target: T,
  compareFn: (a: T, b: T) => boolean = (a, b) => a === b,
): number {
  for (let i = 0; i < array.length; i++) {
    if (compareFn(array[i], target)) {
      return i;
    }
  }
  return -1;
}

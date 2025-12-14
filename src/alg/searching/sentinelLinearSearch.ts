export function sentinelLinearSearch<T>(
  array: T[],
  target: T,
  compareFn: (a: T, b: T) => boolean = (a, b) => a === b,
): number {
  const n = array.length;
  if (n === 0) {
    return -1;
  }
  const last = array[n - 1];
  array[n - 1] = target;
  let i = 0;
  while (!compareFn(array[i], target)) {
    i++;
  }
  array[n - 1] = last;
  if (i < n - 1 || compareFn(array[n - 1], target)) {
    return i;
  }
  return -1;
}

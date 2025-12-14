export function jumpSearch<T>(
  array: T[],
  target: T,
  compareFn: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0),
): number {
  const n = array.length;
  if (n === 0) {
    return -1;
  }
  const jumpStep = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (
    prev + jumpStep < n &&
    compareFn(array[prev + jumpStep], target) <= 0
  ) {
    prev += jumpStep;
  }

  while (prev < n && compareFn(array[prev], target) < 0) {
    prev++;
  }

  if (prev < n && compareFn(array[prev], target) === 0) {
    return prev;
  }
  return -1;
}

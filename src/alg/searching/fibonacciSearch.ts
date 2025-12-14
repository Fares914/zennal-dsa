export function fibonacciSearch<T>(
  array: T[],
  target: T,
  compareFn: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0),
): number {
  const n = array.length;

  let fibM2 = 0;
  let fibM1 = 1;
  let fibM = fibM2 + fibM1;
  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
  }

  let offset = -1;

  while (fibM > 1) {
    const i = Math.min(offset + fibM2, n - 1);
    if (compareFn(array[i], target) < 0) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = i;
    } else if (compareFn(array[i], target) > 0) {
      fibM = fibM2;
      fibM1 = fibM1 - fibM2;
      fibM2 = fibM - fibM1;
    } else {
      return i;
    }
  }
  if (
    fibM1 === 1 &&
    offset + 1 < n &&
    compareFn(array[offset + 1], target) === 0
  ) {
    return offset + 1;
  }
  return -1;
}

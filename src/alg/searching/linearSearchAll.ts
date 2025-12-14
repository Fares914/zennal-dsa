export function linearSearchAll<T>(
  array: T[],
  target: T,
  compareFn: (a: T, b: T) => boolean = (a, b) => a === b,
): number[] {
  const indices: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (compareFn(array[i], target)) {
      indices.push(i);
    }
  }
  return indices;
}
